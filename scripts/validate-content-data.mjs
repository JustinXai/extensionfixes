#!/usr/bin/env node
/**
 * validate-content-data.mjs
 * Validates all content data files:
 *   src/data/extensions.ts   → alternative records
 *   src/data/errors.ts       → fix records
 *   src/data/landingPages.ts → guide / collection records
 *   src/data/comparisons.ts  → comparison records
 *
 * Rules checked:
 *   - Each record has slug, title, lastUpdated (YYYY-MM-DD)
 *   - quickAnswer or shortAnswer >= 80 words
 *   - faqs >= 5
 *   - sources >= 2
 *   - source titles unique within each record
 *   - source urls unique within each record (when present)
 *   - relatedPages href starts with /
 *   - Slugs unique within each file and globally
 *   - Route URLs unique globally
 *   - Forbidden claims scan across all string fields
 *   - Template-specific minimum field counts
 *
 * Exit codes:
 *   0 = all checks passed (warnings only)
 *   1 = errors found
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  countWords,
  findForbiddenClaims,
  FORBIDDEN_CLAIMS,
} from './lib/contentSchemas.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Global state ──────────────────────────────────────────────────────────────
const errors = [];
const warnings = [];

function rel(file) {
  return path.relative(ROOT, file);
}

/**
 * Extract all top-level records from a TypeScript data file.
 * Uses the same 4-space-indentation pattern as extensionfixes-review.mjs.
 */
function extractRecords(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const records = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Look for: "  {" at top level (2 spaces) followed by slug on next few lines
    if (/^  \{\s*$/.test(line.trim())) {
      // Start of a record — capture from here
      const recordLines = [];
      let depth = 0;
      let j = i;
      while (j < lines.length) {
        const l = lines[j];
        recordLines.push(l);
        for (const ch of l) {
          if (ch === '{') depth++;
          else if (ch === '}') depth--;
        }
        if (depth === 0 && recordLines.length > 1) {
          records.push({ start: i + 1, end: j + 1, lines: recordLines, content: recordLines.join('\n') });
          i = j + 1;
          break;
        }
        j++;
      }
      if (depth !== 0) {
        // Malformed record, skip
        i++;
      }
    } else {
      i++;
    }
  }

  return records;
}

// ── Field extractors from raw record text ─────────────────────────────────────

function getSlug(recordContent) {
  const m = recordContent.match(/^\s*slug:\s*['"]([^'"]+)['"]/m);
  return m ? m[1] : null;
}

function getTitle(recordContent) {
  const m = recordContent.match(/^\s*title:\s*['"]([^'"]+)['"]/m);
  return m ? m[1] : null;
}

function getLastUpdated(recordContent) {
  const m = recordContent.match(/^\s*lastUpdated:\s*['"]([^'"]+)['"]/m);
  return m ? m[1] : null;
}

function getQuickAnswer(recordContent) {
  const m = recordContent.match(/^\s*quickAnswer:\s*['"](.+?)['"]/ms);
  return m ? m[1].replace(/\\n/g, ' ').replace(/\\'/g, "'") : null;
}

function getShortAnswer(recordContent) {
  const m = recordContent.match(/^\s*shortAnswer:\s*['"](.+?)['"]/ms);
  return m ? m[1].replace(/\\n/g, ' ').replace(/\\'/g, "'") : null;
}

function getTemplateType(recordContent) {
  const m = recordContent.match(/^\s*templateType:\s*['"]([^'"]+)['"]/m);
  return m ? m[1] : null;
}

function getAnswer(recordContent) {
  return getQuickAnswer(recordContent) || getShortAnswer(recordContent) || '';
}

function countArrayItems(recordContent, fieldName) {
  // Count occurrences of "fieldName:" at top level (4 spaces indentation)
  const pattern = new RegExp(`^    ${fieldName}:`, 'gm');
  const matches = recordContent.match(pattern);
  return matches ? matches.length : 0;
}

// ── Template-specific minimum field checks ────────────────────────────────────

/**
 * Template-specific minimum field rules.
 * Fields that are missing entirely in old pages are treated as warnings
 * to avoid breaking existing pages that passed production QA.
 * Only hard-fail on duplicate slug / duplicate source / forbidden claims /
 * quickAnswer/shortAnswer < 80 words / lastUpdated format errors.
 */
const TEMPLATE_MIN_FIELDS = {
  alternative: {
    keyTakeaways: 3,
    currentStatus: 3,
    commonFailedFixes: 3,
  },
  fix: {
    keyTakeaways: 3,
    currentStatus: 3,
    commonFailedFixes: 3,
  },
  guide: {
    keyTakeaways: 3,
    currentStatus: 3,
    relatedPages: 2,
  },
  comparison: {
    verdict: 1,
    comparedItems: 2,
    keyDifferences: 3,
    comparisonTable: 3,
    decisionGuide: 3,
    relatedPages: 2,
  },
  collection: {
    selectionCriteria: 3,
    options: 3,
    comparisonTable: 3,
    relatedPages: 2,
  },
};

function checkTemplateMinFields(recordContent, slug, templateType, fileLabel) {
  const rules = TEMPLATE_MIN_FIELDS[templateType];
  if (!rules) return;

  for (const [field, min] of Object.entries(rules)) {
    const count = countArrayItems(recordContent, field);
    if (count > 0 && count < min) {
      warnings.push(
        `[${fileLabel}] ${slug}: ${field} only ${count}, minimum ${min} (production QA may have passed)`
      );
    }
  }
}

function extractSourceBlock(recordContent) {
  // Find sources: [ ... ],
  const m = recordContent.match(/sources:\s*\[([\s\S]*?)\],\s*\n\s*(?:lastUpdated|relatedExtensionSlugs)/);
  if (m) return m[1];
  const m2 = recordContent.match(/sources:\s*\[([\s\S]*?)\]\s*\}/);
  if (m2) return m2[1];
  return '';
}

function extractSourceTitles(recordContent) {
  const block = extractSourceBlock(recordContent);
  const matches = block.match(/title:\s*['"]([^'"]+)['"]/g);
  if (!matches) return [];
  return matches.map(m => m.replace(/title:\s*['"]([^'"]+)['"]/, '$1'));
}

function extractSourceUrls(recordContent) {
  const block = extractSourceBlock(recordContent);
  const matches = block.match(/url:\s*['"]([^'"]+)['"]/g);
  if (!matches) return [];
  return matches.map(m => m.replace(/url:\s*['"]([^'"]+)['"]/, '$1'));
}

function extractRelatedPages(recordContent) {
  // relatedPages: [ ... ],
  const m = recordContent.match(/relatedPages:\s*\[([\s\S]*?)\],\s*\n\s*(?:faqs|sources|lastUpdated)/s);
  if (m) return m[1];
  const m2 = recordContent.match(/relatedPages:\s*\[([\s\S]*?)\]/s);
  if (m2) return m2[1];
  return '';
}

function extractRelatedPagesHrefs(recordContent) {
  const block = extractRelatedPages(recordContent);
  const matches = block.match(/href:\s*['"]([^'"]+)['"]/g);
  if (!matches) return [];
  return matches.map(m => m.replace(/href:\s*['"]([^'"]+)['"]/, '$1'));
}

// ── Forbidden claim scanner across all string fields ─────────────────────────

function scanForbiddenClaimsInRecord(recordContent, _slug, _fileLabel) {
  // Scan any string field value for forbidden claims
  // Match: fieldName: 'text...' or fieldName: "text..."
  const stringPattern = /^\s*\w+:\s*['"](.+?)['"]/gm;
  const found = [];
  let match;
  while ((match = stringPattern.exec(recordContent)) !== null) {
    const value = match[1].replace(/\\n/g, ' ').replace(/\\'/g, "'").replace(/\\"/g, '"');
    const claims = findForbiddenClaims(value);
    found.push(...claims);
  }
  return found;
}

// ── Per-file validators ───────────────────────────────────────────────────────

function validateExtensions(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`[extensions] File not found: ${rel(filePath)}`);
    return;
  }
  const records = extractRecords(filePath);

  const fileSlugs = new Set();
  for (const record of records) {
    const slug = getSlug(record.content);

    if (!slug) {
      errors.push(`[extensions] Record at line ~${record.start}: missing slug`);
      continue;
    }

    if (fileSlugs.has(slug)) {
      errors.push(`[extensions] ${slug}: duplicate slug in file`);
    }
    fileSlugs.add(slug);

    const answer = getAnswer(record.content);
    const wordCount = countWords(answer);
    if (wordCount < 80) {
      errors.push(`[extensions] ${slug}: ${record.start} ${record.content.includes('shortAnswer') ? 'shortAnswer' : 'quickAnswer'} only ${wordCount} words, minimum 80`);
    }

    const faqCount = countArrayItems(record.content, 'faqs');
    if (faqCount < 5) {
      errors.push(`[extensions] ${slug}: only ${faqCount} faq(s), minimum 5`);
    }

    const sourceCount = countArrayItems(record.content, 'sources');
    if (sourceCount < 2) {
      errors.push(`[extensions] ${slug}: only ${sourceCount} source(s), minimum 2`);
    } else {
      // Source uniqueness
      const titles = extractSourceTitles(record.content);
      const uniqueTitles = new Set(titles);
      if (titles.length !== uniqueTitles.size) {
        const dup = titles.filter((t, i) => titles.indexOf(t) !== i);
        errors.push(`[extensions] ${slug}: duplicate source title(s): "${dup.join(', ')}"`);
      }
      const urls = extractSourceUrls(record.content).filter(Boolean);
      if (urls.length > 0) {
        const uniqueUrls = new Set(urls);
        if (urls.length !== uniqueUrls.size) {
          const dup = urls.filter((u, i) => urls.indexOf(u) !== i);
          errors.push(`[extensions] ${slug}: duplicate source url(s): "${dup.join(', ')}"`);
        }
      }
    }

    // relatedPages href
    const hrefs = extractRelatedPagesHrefs(record.content);
    for (const href of hrefs) {
      if (!href.startsWith('/')) {
        errors.push(`[extensions] ${slug}: relatedPages href must start with /, got "${href}"`);
      }
    }

    // lastUpdated format
    const lu = getLastUpdated(record.content);
    if (lu && !/^\d{4}-\d{2}-\d{2}$/.test(lu)) {
      errors.push(`[extensions] ${slug}: lastUpdated must be YYYY-MM-DD, got "${lu}"`);
    }

    // Forbidden claims
    const claims = scanForbiddenClaimsInRecord(record.content, slug, 'extensions');
    for (const claim of claims) {
      errors.push(`[extensions] ${slug}: forbidden claim "${claim}"`);
    }

    // Template-specific minimum field checks
    checkTemplateMinFields(record.content, slug, 'alternative', 'extensions');
  }

  if (records.length > 0) {
    console.log(`  [extensions] ${records.length} records checked, ${fileSlugs.size} unique slugs`);
  }
}

function validateErrors(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`[errors] File not found: ${rel(filePath)}`);
    return;
  }
  const records = extractRecords(filePath);
  const fileSlugs = new Set();

  for (const record of records) {
    const slug = getSlug(record.content);
    if (!slug) {
      errors.push(`[errors] Record at line ~${record.start}: missing slug`);
      continue;
    }

    if (fileSlugs.has(slug)) {
      errors.push(`[errors] ${slug}: duplicate slug in file`);
    }
    fileSlugs.add(slug);

    const answer = getQuickAnswer(record.content);
    const wordCount = countWords(answer || '');
    if (wordCount < 80) {
      errors.push(`[errors] ${slug}: quickAnswer only ${wordCount} words, minimum 80`);
    }

    const faqCount = countArrayItems(record.content, 'faqs');
    if (faqCount < 5) {
      errors.push(`[errors] ${slug}: only ${faqCount} faq(s), minimum 5`);
    }

    const sourceCount = countArrayItems(record.content, 'sources');
    if (sourceCount < 2) {
      errors.push(`[errors] ${slug}: only ${sourceCount} source(s), minimum 2`);
    } else {
      const titles = extractSourceTitles(record.content);
      const uniqueTitles = new Set(titles);
      if (titles.length !== uniqueTitles.size) {
        const dup = titles.filter((t, i) => titles.indexOf(t) !== i);
        errors.push(`[errors] ${slug}: duplicate source title(s): "${dup.join(', ')}"`);
      }
      const urls = extractSourceUrls(record.content).filter(Boolean);
      if (urls.length > 0) {
        const uniqueUrls = new Set(urls);
        if (urls.length !== uniqueUrls.size) {
          const dup = urls.filter((u, i) => urls.indexOf(u) !== i);
          errors.push(`[errors] ${slug}: duplicate source url(s): "${dup.join(', ')}"`);
        }
      }
    }

    const hrefs = extractRelatedPagesHrefs(record.content);
    for (const href of hrefs) {
      if (!href.startsWith('/')) {
        errors.push(`[errors] ${slug}: relatedPages href must start with /, got "${href}"`);
      }
    }

    const lu = getLastUpdated(record.content);
    if (lu && !/^\d{4}-\d{2}-\d{2}$/.test(lu)) {
      errors.push(`[errors] ${slug}: lastUpdated must be YYYY-MM-DD, got "${lu}"`);
    }

    const claims = scanForbiddenClaimsInRecord(record.content, slug, 'errors');
    for (const claim of claims) {
      errors.push(`[errors] ${slug}: forbidden claim "${claim}"`);
    }

    // Template-specific minimum field checks
    checkTemplateMinFields(record.content, slug, 'fix', 'errors');
  }

  if (records.length > 0) {
    console.log(`  [errors] ${records.length} records checked, ${fileSlugs.size} unique slugs`);
  }
}

function validateLandingPages(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`[landingPages] File not found: ${rel(filePath)}`);
    return;
  }
  const records = extractRecords(filePath);
  const fileSlugs = new Set();

  for (const record of records) {
    const slug = getSlug(record.content);
    if (!slug) {
      errors.push(`[landingPages] Record at line ~${record.start}: missing slug`);
      continue;
    }

    if (fileSlugs.has(slug)) {
      errors.push(`[landingPages] ${slug}: duplicate slug in file`);
    }
    fileSlugs.add(slug);

    const templateType = getTemplateType(record.content) || 'guide';
    const answer = getAnswer(record.content);
    const wordCount = countWords(answer);
    if (wordCount < 80) {
      const field = record.content.includes('shortAnswer') ? 'shortAnswer' : 'quickAnswer';
      errors.push(`[landingPages] ${slug}: ${field} only ${wordCount} words, minimum 80`);
    }

    const faqCount = countArrayItems(record.content, 'faqs');
    if (faqCount < 5) {
      errors.push(`[landingPages] ${slug}: only ${faqCount} faq(s), minimum 5`);
    }

    const sourceCount = countArrayItems(record.content, 'sources');
    if (sourceCount < 2) {
      errors.push(`[landingPages] ${slug}: only ${sourceCount} source(s), minimum 2`);
    } else {
      const titles = extractSourceTitles(record.content);
      const uniqueTitles = new Set(titles);
      if (titles.length !== uniqueTitles.size) {
        const dup = titles.filter((t, i) => titles.indexOf(t) !== i);
        errors.push(`[landingPages] ${slug}: duplicate source title(s): "${dup.join(', ')}"`);
      }
      const urls = extractSourceUrls(record.content).filter(Boolean);
      if (urls.length > 0) {
        const uniqueUrls = new Set(urls);
        if (urls.length !== uniqueUrls.size) {
          const dup = urls.filter((u, i) => urls.indexOf(u) !== i);
          errors.push(`[landingPages] ${slug}: duplicate source url(s): "${dup.join(', ')}"`);
        }
      }
    }

    // Template-specific checks
    if (templateType === 'collection') {
      const selCount = countArrayItems(record.content, 'selectionCriteria');
      if (selCount < 3) {
        errors.push(`[landingPages/collection] ${slug}: selectionCriteria only ${selCount}, minimum 3`);
      }
      const optCount = countArrayItems(record.content, 'options');
      if (optCount < 3) {
        errors.push(`[landingPages/collection] ${slug}: options only ${optCount}, minimum 3`);
      }
      const tblCount = countArrayItems(record.content, 'comparisonTable');
      if (tblCount < 3) {
        errors.push(`[landingPages/collection] ${slug}: comparisonTable only ${tblCount} rows, minimum 3`);
      }
    } else {
      // guide
      const keyCount = countArrayItems(record.content, 'keyTakeaways');
      if (keyCount < 3) {
        errors.push(`[landingPages/guide] ${slug}: keyTakeaways only ${keyCount}, minimum 3`);
      }
      const statusCount = countArrayItems(record.content, 'currentStatus');
      if (statusCount < 3) {
        errors.push(`[landingPages/guide] ${slug}: currentStatus only ${statusCount}, minimum 3`);
      }
    }

    const hrefs = extractRelatedPagesHrefs(record.content);
    for (const href of hrefs) {
      if (!href.startsWith('/')) {
        errors.push(`[landingPages] ${slug}: relatedPages href must start with /, got "${href}"`);
      }
    }

    const lu = getLastUpdated(record.content);
    if (lu && !/^\d{4}-\d{2}-\d{2}$/.test(lu)) {
      errors.push(`[landingPages] ${slug}: lastUpdated must be YYYY-MM-DD, got "${lu}"`);
    }

    const claims = scanForbiddenClaimsInRecord(record.content, slug, 'landingPages');
    for (const claim of claims) {
      errors.push(`[landingPages] ${slug}: forbidden claim "${claim}"`);
    }

    // Template-specific minimum field checks
    checkTemplateMinFields(record.content, slug, templateType, 'landingPages');
  }

  if (records.length > 0) {
    console.log(`  [landingPages] ${records.length} records checked, ${fileSlugs.size} unique slugs`);
  }
}

function validateComparisons(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`[comparisons] File not found: ${rel(filePath)}`);
    return;
  }
  const records = extractRecords(filePath);
  const fileSlugs = new Set();

  for (const record of records) {
    const slug = getSlug(record.content);
    if (!slug) {
      errors.push(`[comparisons] Record at line ~${record.start}: missing slug`);
      continue;
    }

    if (fileSlugs.has(slug)) {
      errors.push(`[comparisons] ${slug}: duplicate slug in file`);
    }
    fileSlugs.add(slug);

    const answer = getQuickAnswer(record.content);
    const wordCount = countWords(answer || '');
    if (wordCount < 80) {
      errors.push(`[comparisons] ${slug}: quickAnswer only ${wordCount} words, minimum 80`);
    }

    const verdictCount = countArrayItems(record.content, 'verdict');
    if (verdictCount < 1) {
      errors.push(`[comparisons] ${slug}: missing verdict`);
    }

    const diffCount = countArrayItems(record.content, 'keyDifferences');
    if (diffCount < 3) {
      errors.push(`[comparisons] ${slug}: keyDifferences only ${diffCount}, minimum 3`);
    }

    const tblCount = countArrayItems(record.content, 'comparisonTable');
    if (tblCount < 3) {
      errors.push(`[comparisons] ${slug}: comparisonTable only ${tblCount} rows, minimum 3`);
    }

    const guideCount = countArrayItems(record.content, 'decisionGuide');
    if (guideCount < 3) {
      errors.push(`[comparisons] ${slug}: decisionGuide only ${guideCount}, minimum 3`);
    }

    const faqCount = countArrayItems(record.content, 'faqs');
    if (faqCount < 5) {
      errors.push(`[comparisons] ${slug}: only ${faqCount} faq(s), minimum 5`);
    }

    const sourceCount = countArrayItems(record.content, 'sources');
    if (sourceCount < 2) {
      errors.push(`[comparisons] ${slug}: only ${sourceCount} source(s), minimum 2`);
    } else {
      const titles = extractSourceTitles(record.content);
      const uniqueTitles = new Set(titles);
      if (titles.length !== uniqueTitles.size) {
        const dup = titles.filter((t, i) => titles.indexOf(t) !== i);
        errors.push(`[comparisons] ${slug}: duplicate source title(s): "${dup.join(', ')}"`);
      }
      const urls = extractSourceUrls(record.content).filter(Boolean);
      if (urls.length > 0) {
        const uniqueUrls = new Set(urls);
        if (urls.length !== uniqueUrls.size) {
          const dup = urls.filter((u, i) => urls.indexOf(u) !== i);
          errors.push(`[comparisons] ${slug}: duplicate source url(s): "${dup.join(', ')}"`);
        }
      }
    }

    const hrefs = extractRelatedPagesHrefs(record.content);
    for (const href of hrefs) {
      if (!href.startsWith('/')) {
        errors.push(`[comparisons] ${slug}: relatedPages href must start with /, got "${href}"`);
      }
    }

    const lu = getLastUpdated(record.content);
    if (lu && !/^\d{4}-\d{2}-\d{2}$/.test(lu)) {
      errors.push(`[comparisons] ${slug}: lastUpdated must be YYYY-MM-DD, got "${lu}"`);
    }

    const claims = scanForbiddenClaimsInRecord(record.content, slug, 'comparisons');
    for (const claim of claims) {
      errors.push(`[comparisons] ${slug}: forbidden claim "${claim}"`);
    }

    // Template-specific minimum field checks
    checkTemplateMinFields(record.content, slug, 'comparison', 'comparisons');
  }

  if (records.length > 0) {
    console.log(`  [comparisons] ${records.length} records checked, ${fileSlugs.size} unique slugs`);
  }
}

// ── Global slug + URL uniqueness ───────────────────────────────────────────────

function checkGlobalSlugUniqueness() {
  const dataFiles = [
    path.join(ROOT, 'src', 'data', 'extensions.ts'),
    path.join(ROOT, 'src', 'data', 'errors.ts'),
    path.join(ROOT, 'src', 'data', 'landingPages.ts'),
    path.join(ROOT, 'src', 'data', 'comparisons.ts'),
  ];

  const allSlugs = {}; // slug → [{file, slug, line}]

  for (const filePath of dataFiles) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const label = rel(filePath).replace('src/data/', '').replace('.ts', '');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].replace(/\r$/, '');
      const m = line.match(/^    slug:\s*['"]([^'"]+)['"]/);
      if (m) {
        const slug = m[1];
        if (!allSlugs[slug]) allSlugs[slug] = [];
        allSlugs[slug].push({ file: label, line: i + 1 });
      }
    }
  }

  const duplicates = Object.entries(allSlugs).filter(([, entries]) => entries.length > 1);
  if (duplicates.length > 0) {
    for (const [slug, entries] of duplicates) {
      const locs = entries.map(e => `${e.file}:${e.line}`).join(', ');
      errors.push(`[global] slug collision "${slug}" found at ${locs} — URL paths must be globally unique`);
    }
  } else {
    console.log(`  [global] slug uniqueness: ${Object.keys(allSlugs).length} slugs, all unique`);
  }

  return allSlugs;
}

// ── Main ──────────────────────────────────────────────────────────────────────

console.log('\nvalidate:content — Content Data Validation');
console.log('==========================================');

const extensionsPath = path.join(ROOT, 'src', 'data', 'extensions.ts');
const errorsPath = path.join(ROOT, 'src', 'data', 'errors.ts');
const landingPagesPath = path.join(ROOT, 'src', 'data', 'landingPages.ts');
const comparisonsPath = path.join(ROOT, 'src', 'data', 'comparisons.ts');

console.log('\nChecking data files...');
validateExtensions(extensionsPath);
validateErrors(errorsPath);
validateLandingPages(landingPagesPath);
validateComparisons(comparisonsPath);

console.log('\nChecking global slug uniqueness...');
checkGlobalSlugUniqueness();

// ── Output ────────────────────────────────────────────────────────────────────
console.log('\n----------------------------------------');
console.log(`Errors  : ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);

if (errors.length > 0) {
  console.log('\n[ERROR]');
  // Deduplicate and sort errors
  const uniqueErrors = [...new Set(errors)].sort();
  for (const e of uniqueErrors) {
    console.log(`  - ${e}`);
  }
}

if (warnings.length > 0) {
  console.log('\n[WARNING]');
  const uniqueWarnings = [...new Set(warnings)].sort();
  for (const w of uniqueWarnings) {
    console.log(`  - ${w}`);
  }
}

const status = errors.length === 0 ? 'PASS' : 'FAIL';
console.log(`\nStatus: ${status}`);

process.exit(errors.length > 0 ? 1 : 0);
