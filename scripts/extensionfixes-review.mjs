#!/usr/bin/env node
/**
 * ExtensionFixes Review Script
 * Scans the codebase for rule violations.
 * Exit 1 if errors found. Exit 0 if warnings only.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const errors = [];
const warnings = [];

const EXCLUDE_DIRS = new Set(['node_modules', '.next', '.git', '.vercel', 'out', 'coverage', 'scripts']);

function scanDir(dir, extensions, predicate) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...scanDir(full, extensions, predicate));
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      try {
        const content = fs.readFileSync(full, 'utf8');
        const matches = predicate(full, content);
        if (matches && matches.length > 0) results.push({ file: full, matches });
      } catch {
        // skip unreadable files
      }
    }
  }
  return results;
}

function rel(file) {
  return path.relative(ROOT, file);
}

// ── 1. No API routes ─────────────────────────────────────────────────────────
const apiDir = path.join(ROOT, 'src', 'app', 'api');
if (fs.existsSync(apiDir)) {
  try {
    const files = fs.readdirSync(apiDir, { recursive: true });
    if (files.length > 0) {
      errors.push(`API route directory src/app/api contains files — forbidden`);
    }
  } catch {
    errors.push(`API route directory found at src/app/api — forbidden`);
  }
}

// ── 2. No dark mode (scan src/ only) ─────────────────────────────────────────
const darkFindings = scanDir(path.join(ROOT, 'src'), ['.ts', '.tsx', '.css'], (file, content) => {
  const lines = [];
  if (/dark\s*[:)]/.test(content)) lines.push('contains "dark:"');
  if (/prefers-color-scheme\s*:\s*['"]?dark['"]?/.test(content)) lines.push('contains "prefers-color-scheme: dark"');
  return lines;
});
for (const { file, matches } of darkFindings) {
  errors.push(`Dark mode in ${rel(file)}: ${matches.join(', ')}`);
}

// ── 3. Risky wording (FAIL phrases = errors; WARN phrases = warnings) ───────────
/*
 * FAIL phrases: flagged as errors everywhere they appear.
 * WARN phrases: flagged as warnings everywhere they appear.
 *
 * The one exception: docs/05-risk-words-and-claims.md contains these phrases
 * as table entries in a "Forbidden Phrases" reference table — these are
 * intentionally listed as documentation, not as usage. We skip that file.
 */
const FAIL_PHRASES = [
  'official successor',
  '100% safe',
  'guaranteed safe',
  'guaranteed fix',
  'The Great Suspender is malware',
  'all MV2 extensions are malware',
  'download old CRX',
  'download unknown CRX',
  'feature parity',
  'full feature parity',
  'fully equivalent',
  'equivalent replacement',
];
const WARN_PHRASES = [
  'safest',
  'official replacement',
  'the only safe choice',
];

// Negation exceptions: pattern => regex that matches allowed negated forms
// e.g. "is not an official successor" is fine; "is an official successor" is not
const NEGATION_EXCEPTIONS = {
  'official successor': /is not an official successor/i,
  'download old crx': /do not download old crx/i,
  'download unknown crx': /do not download unknown crx/i,
  'download random crx': /do not download random crx/i,
};

function checkWording(dir) {
  return scanDir(dir, ['.ts', '.tsx', '.md', '.mdx'], (file, content) => {
    const found = [];
    const isRiskDoc = file.includes('05-risk-words-and-claims.md');
    // content-templates.md lists these phrases as documentation — skip
    const isContentTemplatesDoc = file.includes('content-templates.md');

    for (const phrase of FAIL_PHRASES) {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        if (isRiskDoc || isContentTemplatesDoc) {
          found.push(`doc-reference: "${phrase}" (in documentation — intentional, not flagged)`);
        } else {
          // Check negation exceptions
          const negPattern = NEGATION_EXCEPTIONS[phrase.toLowerCase()];
          if (negPattern && negPattern.test(content)) {
            // allowed: negative form found — skip silently
          } else {
            found.push(`FAIL: "${phrase}"`);
          }
        }
      }
    }
    for (const phrase of WARN_PHRASES) {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        if (!isRiskDoc && !isContentTemplatesDoc) found.push(`WARN: "${phrase}"`);
      }
    }
    return found;
  });
}

for (const { file, matches } of [...checkWording(path.join(ROOT, 'src')), ...checkWording(path.join(ROOT, 'docs'))]) {
  for (const msg of matches) {
    if (msg.startsWith('FAIL')) {
      errors.push(`Risky wording in ${rel(file)}: ${msg}`);
    } else if (msg.startsWith('WARN')) {
      warnings.push(`Risky wording in ${rel(file)}: ${msg}`);
    }
    // doc-reference messages are intentional — skip silently
  }
}

// ── 4. Required governance docs ───────────────────────────────────────────────
const requiredDocs = [
  'docs/00-product-constitution.md',
  'docs/01-information-architecture.md',
  'docs/02-content-playbook.md',
  'docs/03-seo-ai-readable-checklist.md',
  'docs/04-cursor-workflow.md',
  'docs/05-risk-words-and-claims.md',
  'docs/06-current-state.md',
];
for (const doc of requiredDocs) {
  if (!fs.existsSync(path.join(ROOT, doc))) {
    errors.push(`Required governance doc missing: ${doc}`);
  }
}

// ── 5. Required source files ─────────────────────────────────────────────────
const requiredFiles = [
  'src/app/sitemap.ts',
  'src/lib/search.ts',
  'src/data/extensions.ts',
  'src/data/errors.ts',
  'src/data/landingPages.ts',
  'src/data/comparisons.ts',
  'src/data/site.ts',
];
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(ROOT, file))) {
    errors.push(`Required source file missing: ${file}`);
  }
}

// ── 6. Canonical localhost risk (scan src/ only) ─────────────────────────────
const localhostFindings = scanDir(path.join(ROOT, 'src'), ['.ts', '.tsx'], (file, content) => {
  const lines = [];
  const contentLines = content.split('\n');
  contentLines.forEach((line, i) => {
    if (/localhost/.test(line)) lines.push(`line ${i + 1}: ${line.trim().substring(0, 100)}`);
  });
  return lines;
});
for (const { file, matches } of localhostFindings) {
  warnings.push(`localhost reference in ${rel(file)}: ${matches.join(' | ')}`);
}

// ── 7. undefined literal risk (scan src/ only) ────────────────────────────────
// Skips:
//   - Type annotations: `T | undefined` or `?: undefined`
//   - Return statements from .find() which legitimately return T | undefined
//   - Function parameters that include undefined in union types
const undefinedFindings = scanDir(path.join(ROOT, 'src'), ['.ts', '.tsx'], (file, content) => {
  const lines = [];
  const contentLines = content.split('\n');
  contentLines.forEach((line, i) => {
    if (/(?<![a-zA-Z_$])undefined(?![a-zA-Z_$])/.test(line)) {
      const trimmed = line.trim();
      // Skip type annotation unions: `| undefined`
      if (/\| *undefined/.test(trimmed)) return;
      // Skip function parameters with undefined in union: `?: ... | undefined`
      if (/^\s*\w[^=]*=\s*[^|]*\|\s*undefined/.test(trimmed)) return;
      // Skip parameter type unions: `(string | undefined)`
      if (/^\s*\w[^=]*\([^)]*\|\s*undefined/.test(trimmed)) return;
      // Skip return statements from .find() which naturally return T | undefined
      if (/return\s+\w+\.find\([^)]+\)/.test(trimmed)) return;
      // Skip type guard filter predicates: .filter(..., e !== null && e !== undefined)
      if (/\.filter\(/.test(trimmed) && /!==\s*null/.test(trimmed) && /!==\s*undefined/.test(trimmed)) return;
      lines.push(`line ${i + 1}: contains undefined literal`);
    }
  });
  return lines;
});
for (const { file, matches } of undefinedFindings) {
  warnings.push(`Potential undefined literal in ${rel(file)}: ${matches[0]}`);
}

// ── 8. Top-5 enhanced content checks (lightweight text scan) ─────────────────
// Route layer page.tsx files delegate rendering to template components.
// Quick Answer and Sources headings live in imported components that templates use,
// so we scan both the template TSX files and any component files they directly import.
const templateDir = path.join(ROOT, 'src', 'components', 'templates');
const reviewedTemplateFiles = ['AlternativePageTemplate.tsx', 'FixPageTemplate.tsx'];
const allFilesToCheck = [
  ...reviewedTemplateFiles.map(f => path.join(templateDir, f)),
  // QuickAnswer.tsx exists in both src/components/ and src/components/templates/
  // Both must be checked since templates import from ../QuickAnswer (not ../templates/QuickAnswer)
  path.join(ROOT, 'src', 'components', 'QuickAnswer.tsx'),
  path.join(templateDir, 'QuickAnswer.tsx'),
  path.join(ROOT, 'src', 'components', 'SourceList.tsx'),
];
const allContent = allFilesToCheck
  .filter(f => fs.existsSync(f))
  .map(f => fs.readFileSync(f, 'utf8'))
  .join('\n');

const essentialChecks = [
  { label: 'Quick Answer', pattern: /Quick Answer|quick-answer-heading/i },
  { label: 'Sources', pattern: /Sources|sources-heading/i },
];
const missingEssential = essentialChecks.filter(c => !c.pattern.test(allContent));
if (missingEssential.length > 0) {
  warnings.push(`Content components may be missing: ${missingEssential.map(m => m.label).join(', ')}`);
}

// ── 9. Source Quality Layer v1 checks (Top 10 pages) ─────────────────────────
const TOP10_ALT_SLUGS = [
  'ublock-origin', 'proxy-switchyomega', 'tampermonkey', 'foxyproxy',
  'dark-reader', 'bitwarden', 'lastpass', 'video-downloadhelper',
];
const TOP10_FIX_SLUGS = ['manifest-v2-disabled', 'chrome-disabled-extension'];

function parseSourceBlocks(sourcesRaw) {
  const sources = [];
  const blocks = sourcesRaw.split(/\{[\s]*title:/);
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const titleM = block.match(/^\s*['"](.+?)['"]/);
    const urlM = block.match(/url:\s*['"](.+?)['"]/);
    const relM = block.match(/reliability:\s*['"](.+?)['"]/);
    if (titleM && urlM) {
      sources.push({
        title: titleM[1],
        url: urlM[1],
        reliability: relM ? relM[1] : null,
      });
    }
  }
  return sources;
}

function extractSourcesFromFile(filePath, targetSlugs) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const results = {};
  for (const slug of targetSlugs) {
    const slugIdx = content.indexOf(`slug: '${slug}',`);
    if (slugIdx === -1) {
      results[slug] = [];
      continue;
    }
    // Search for sources array between this slug and the next object in the array
    // Prefer lastUpdated: as boundary (when sources is the last field)
    // Fall back to } (next top-level object) when sources has trailing comma
    const matchWithLastUpdated = content.slice(slugIdx).match(/sources:\s*\[([\s\S]*?)\],\s*\n\s*lastUpdated:/);
    if (matchWithLastUpdated) {
      results[slug] = parseSourceBlocks(matchWithLastUpdated[1]);
      continue;
    }
    const matchWithBrace = content.slice(slugIdx).match(/sources:\s*\[([\s\S]*?)\],\s*\n\s+\}/);
    if (matchWithBrace) {
      results[slug] = parseSourceBlocks(matchWithBrace[1]);
      continue;
    }
    results[slug] = [];
  }
  return results;
}

const extSources = extractSourcesFromFile(path.join(ROOT, 'src', 'data', 'extensions.ts'), TOP10_ALT_SLUGS);
const errSources = extractSourcesFromFile(path.join(ROOT, 'src', 'data', 'errors.ts'), TOP10_FIX_SLUGS);

const allTop10 = [
  ...TOP10_ALT_SLUGS.map(s => ({ slug: s, url: `/alternatives/${s}/`, sources: extSources[s] || [] })),
  ...TOP10_FIX_SLUGS.map(s => ({ slug: s, url: `/fix/${s}/`, sources: errSources[s] || [] })),
];

for (const page of allTop10) {
  const { url, sources } = page;
  if (sources.length === 0) {
    warnings.push(`Source quality [${url}]: NO sources — needs at least 3 sources`);
  } else {
    if (sources.length < 3) {
      warnings.push(`Source quality [${url}]: only ${sources.length} source(s) — needs at least 3`);
    }
    const primaryCount = sources.filter(s => s.reliability === 'primary').length;
    if (primaryCount === 0) {
      warnings.push(`Source quality [${url}]: no primary source — needs at least 1 primary source`);
    }
    const discoveryCount = sources.filter(s => s.reliability === 'discovery').length;
    if (discoveryCount > 0 && primaryCount === 0) {
      warnings.push(`Source quality [${url}]: discovery sources present without primary — discovery sources should not be used as safety proof`);
    }
  }
}

// ── 10. Global slug uniqueness across ALL data files ───────────────────────────
function checkSlugUniqueness(filePath, label) {
  if (!fs.existsSync(filePath)) {
    errors.push(`Slug check [${label}]: file not found`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const slugPositions = {};
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const stripped = line.replace(/\r$/, '');
    // Exactly 4 spaces of indentation = top-level object in the array
    if (/^    slug:\s*['"]([^'"]+)['"]/.test(stripped)) {
      const m = stripped.match(/^    slug:\s*['"]([^'"]+)['"]/);
      const slug = m[1];
      if (!slugPositions[slug]) slugPositions[slug] = [];
      slugPositions[slug].push({ line: i + 1, value: slug });
    }
  }

  const duplicates = Object.entries(slugPositions).filter(([, positions]) => positions.length > 1);
  if (duplicates.length > 0) {
    for (const [slug, positions] of duplicates) {
      const linesList = positions.map(p => `line ${p.line}`).join(', ');
      errors.push(`Duplicate slug [${label}] '${slug}' found at ${linesList} — each top-level slug must be unique`);
    }
  } else {
    console.log(`  Slug uniqueness [${label}]: ${Object.keys(slugPositions).length} slugs, all unique`);
  }
}

// Collect all slugs globally so we can detect cross-file collisions
function collectAllSlugs(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const slugs = {};
  for (let i = 0; i < lines.length; i++) {
    const stripped = lines[i].replace(/\r$/, '');
    if (/^    slug:\s*['"]([^'"]+)['"]/.test(stripped)) {
      const m = stripped.match(/^    slug:\s*['"]([^'"]+)['"]/);
      slugs[m[1]] = { file: rel(filePath), line: i + 1 };
    }
  }
  return slugs;
}

const allFileSlugs = {};
const dataFiles = [
  { path: path.join(ROOT, 'src', 'data', 'extensions.ts'), label: 'extensions' },
  { path: path.join(ROOT, 'src', 'data', 'errors.ts'), label: 'errors' },
  { path: path.join(ROOT, 'src', 'data', 'landingPages.ts'), label: 'landingPages' },
  { path: path.join(ROOT, 'src', 'data', 'comparisons.ts'), label: 'comparisons' },
];
for (const { path: fp, label } of dataFiles) {
  checkSlugUniqueness(fp, label);
  const slugs = collectAllSlugs(fp);
  for (const [slug, info] of Object.entries(slugs)) {
    if (!allFileSlugs[slug]) allFileSlugs[slug] = [];
    allFileSlugs[slug].push(info);
  }
}

// Cross-file slug collision check
const crossDuplicates = Object.entries(allFileSlugs).filter(([, entries]) => entries.length > 1);
for (const [slug, entries] of crossDuplicates) {
  const locations = entries.map(e => `${e.file}:${e.line}`).join(', ');
  errors.push(`Cross-file slug collision: '${slug}' appears in ${locations} — URL paths must be globally unique`);
}

// ── 11. Script Manager cluster: verify tampermonkey/violentmonkey slugs are clean ────
// Check that extensions.ts has exactly one entry per script-manager slug
function checkClusterDataIntegrity() {
  const extFile = path.join(ROOT, 'src', 'data', 'extensions.ts');
  const content = fs.readFileSync(extFile, 'utf8');

  // Count top-level slug occurrences for script manager slugs
  const clusterSlugs = ['tampermonkey', 'violentmonkey'];
  const lines = content.split('\n');
  for (const slug of clusterSlugs) {
    const pattern = /^    slug:\s*['"]([^'"]+)['"]/;
    const matches = [];
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(pattern);
      if (m && m[1] === slug) matches.push(i + 1);
    }
    if (matches.length > 1) {
      errors.push(
        `Cluster integrity [${slug}]: found ${matches.length} top-level entries at lines ${matches.join(', ')}`
      );
    } else if (matches.length === 1) {
      console.log(`  Cluster integrity [${slug}]: 1 entry confirmed`);
    }
  }
}
checkClusterDataIntegrity();

// ── 12. Forbidden old section titles ──────────────────────────────────────────
// These titles are from the legacy template and must not appear in new pages.
const FORBIDDEN_TITLES = [
  'At a Glance',
  'Common Mistakes to Avoid',
  'Which Option Should You Choose',
  'AI Summary',
  'Summary for AI Assistants',
];
const forbiddenTitleFindings = scanDir(path.join(ROOT, 'src'), ['.ts', '.tsx'], (file, content) => {
  const found = [];
  for (const title of FORBIDDEN_TITLES) {
    // Match <h2 ...>Old Title</h2> or id="old-title-heading"
    const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`<h2[^>]*>[^<]*${escaped}[^<]*</h2>`, 'i').test(content)) {
      found.push(title);
    }
    if (new RegExp(`id="[a-z-]*${escaped.replace(/\s+/g, '-').toLowerCase()}[-"]`, 'i').test(content)) {
      found.push(title);
    }
  }
  return found;
});
for (const { file, matches } of forbiddenTitleFindings) {
  warnings.push(`Old section title in ${rel(file)}: ${matches.join(', ')}`);
}

// ── 13. Forbidden claims (additions to existing list) ───────────────────────────
// These are checked alongside existing FAIL_PHRASES and WARN_PHRASES.
const ADDITIONAL_FAIL_CLAIMS = [
  'privacy-conscious',
  'full open-source transparency',
];
// Note: Skip scripts/ — ADDITIONAL_FAIL_CLAIMS strings appear as literal array entries here
const additionalClaimFindings = scanDir(path.join(ROOT, 'src'), ['.ts', '.tsx'], (file, content) => {
  const found = [];
  for (const phrase of ADDITIONAL_FAIL_CLAIMS) {
    if (content.toLowerCase().includes(phrase.toLowerCase())) {
      found.push(phrase);
    }
  }
  return found;
});
for (const { file, matches } of additionalClaimFindings) {
  errors.push(`Forbidden claim in ${rel(file)}: "${matches.join(', ')}"`);
}

// ── 14. Source deduplication: title AND url uniqueness per page ─────────────────
function checkSourceDeduplication(filePath, targetSlugs, pageLabel) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const slug of targetSlugs) {
    const slugIdx = content.indexOf(`slug: '${slug}',`);
    if (slugIdx === -1) continue;
    const afterSlug = content.slice(slugIdx);
    const match = afterSlug.match(/sources:\s*\[([\s\S]*?)\],\s*\n\s*(?:lastUpdated|relatedExtensionSlugs)/);
    if (!match) continue;
    const sourceBlock = match[1];
    const titleMatches = [...sourceBlock.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    const urlMatches = [...sourceBlock.matchAll(/url:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

    const dupTitles = titleMatches.filter((t, i) => titleMatches.indexOf(t) !== i);
    const dupUrls = urlMatches.filter((u, i) => urlMatches.indexOf(u) !== i);

    if (dupTitles.length > 0) {
      errors.push(`Source duplicate title(s) in ${pageLabel}[${slug}]: "${dupTitles.join(', ')}"`);
    }
    if (dupUrls.length > 0) {
      errors.push(`Source duplicate URL(s) in ${pageLabel}[${slug}]: "${dupUrls.join(', ')}"`);
    }
  }
}
checkSourceDeduplication(
  path.join(ROOT, 'src', 'data', 'extensions.ts'),
  ['tampermonkey', 'violentmonkey', 'ublock-origin', 'foxyproxy', 'great-suspender'],
  'extensions'
);
checkSourceDeduplication(
  path.join(ROOT, 'src', 'data', 'errors.ts'),
  ['this-extension-was-turned-off-because-it-is-no-longer-supported', 'cannot-install-extension-unsupported-manifest', 'manifest-v2-disabled'],
  'errors'
);

// ── 15. Required data fields by templateType ─────────────────────────────────────
// Rules derived from content-templates.md checklist requirements.
function countFieldInBlock(block, field) {
  // Match top-level field declarations (4 spaces of indentation in the record block)
  // Must be a standalone property key, not inside a nested string like aliases or urls.
  // Strategy: look for the field at start-of-line with 4+ spaces, then a colon.
  const lines = block.split('\n');
  let count = 0;
  for (const line of lines) {
    // 4 spaces = top-level field within record
    if (/^    \w/.test(line)) {
      const fieldName = line.replace(/^    (\w+).*/, '$1');
      if (fieldName === field) count++;
    }
  }
  return count;
}

function countArrayItems(sourceBlock, field) {
  return countFieldInBlock(sourceBlock, field);
}

function extractRecordBlock(content, slug) {
  const slugIdx = content.indexOf(`slug: '${slug}',`);
  if (slugIdx === -1) return null;

  // The slug line is preceded by "  {". Back up to find the opening brace of this record.
  const beforeSlug = content.slice(Math.max(0, slugIdx - 5), slugIdx);
  const openBrace = beforeSlug.indexOf('{');
  if (openBrace === -1) return null;
  const recordStart = slugIdx - 5 + openBrace; // absolute position of '{'

  const afterOpen = content.slice(recordStart);
  let depth = 0;
  let end = 0;
  for (let i = 0; i < afterOpen.length; i++) {
    const ch = afterOpen[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { end = i + 1; break; }
    }
  }
  return afterOpen.slice(0, end);
}

function checkRequiredDataByType(filePath, targetSlugs, pageLabel, type) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const rules = {
    alternative: [
      { field: 'shortAnswer', min: 1, note: 'quickAnswer or shortAnswer required' },
      { field: 'keyTakeaways', min: 3 },
      { field: 'currentStatus', min: 3 },
      { field: 'commonFailedFixes', min: 3 },
      { field: 'faqs', min: 5 },
      { field: 'sources', min: 2 },
      { field: 'lastUpdated', min: 1 },
    ],
    fix: [
      { field: 'quickAnswer', min: 1, note: 'quickAnswer required' },
      { field: 'keyTakeaways', min: 3 },
      { field: 'currentStatus', min: 3 },
      { field: 'commonFailedFixes', min: 3 },
      { field: 'faqs', min: 5 },
      { field: 'sources', min: 2 },
      { field: 'lastUpdated', min: 1 },
    ],
    guide: [
      { field: 'quickAnswer', min: 1 },
      { field: 'keyTakeaways', min: 3 },
      { field: 'currentStatus', min: 3 },
      { field: 'faqs', min: 5 },
      { field: 'sources', min: 2 },
      { field: 'lastUpdated', min: 1 },
    ],
    comparison: [
      { field: 'verdict', min: 1 },
      { field: 'keyDifferences', min: 3 },
      { field: 'comparisonTable', min: 3 },
      { field: 'decisionGuide', min: 3 },
      { field: 'faqs', min: 5 },
      { field: 'sources', min: 2 },
      { field: 'lastUpdated', min: 1 },
    ],
    collection: [
      { field: 'selectionCriteria', min: 3 },
      { field: 'options', min: 3 },
      { field: 'comparisonTable', min: 3 },
      { field: 'faqs', min: 5 },
      { field: 'sources', min: 2 },
      { field: 'lastUpdated', min: 1 },
    ],
  };

  const fieldRules = rules[type];
  if (!fieldRules) return;

  for (const slug of targetSlugs) {
    const block = extractRecordBlock(content, slug);
    if (!block) continue;
    for (const rule of fieldRules) {
      const count = countArrayItems(block, rule.field);
      if (count < rule.min) {
        const note = rule.note || `needs at least ${rule.min}`;
        errors.push(`Required data [${pageLabel}/${slug}] ${rule.field}: ${count} found (${note})`);
      }
    }
  }
}

checkRequiredDataByType(
  path.join(ROOT, 'src', 'data', 'extensions.ts'),
  ['tampermonkey', 'violentmonkey', 'foxyproxy', 'ublock-origin', 'great-suspender'],
  'extensions', 'alternative'
);
checkRequiredDataByType(
  path.join(ROOT, 'src', 'data', 'errors.ts'),
  ['this-extension-was-turned-off-because-it-is-no-longer-supported', 'cannot-install-extension-unsupported-manifest', 'manifest-v2-disabled'],
  'errors', 'fix'
);

// ── 16. Duplicate h2 heading risk ─────────────────────────────────────────────
// Warn if the same heading text appears twice in a page.tsx
function checkDuplicateH2(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const h2Matches = [...content.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)].map(m => m[1].trim());
  const seen = {};
  for (const h of h2Matches) {
    if (!seen[h]) seen[h] = 0;
    seen[h]++;
  }
  const duplicates = Object.entries(seen).filter(([, count]) => count > 1);
  if (duplicates.length > 0) {
    warnings.push(`Duplicate h2 in ${rel(filePath)}: ${duplicates.map(([h]) => `"${h}" (${seen[h]}x)`).join(', ')}`);
  }
}
checkDuplicateH2(path.join(ROOT, 'src', 'app', 'alternatives', '[slug]', 'page.tsx'));
checkDuplicateH2(path.join(ROOT, 'src', 'app', 'fix', '[slug]', 'page.tsx'));
checkDuplicateH2(path.join(ROOT, 'src', 'app', 'guides', '[slug]', 'page.tsx'));

// ── 17. Dynamic route wiring: generateStaticParams must cover all data slugs ─────
// Ensures every slug in data files has a corresponding static route.
// Rule: comparison / fix / alternative dynamic routes must generate params from the
// corresponding data array, not from a hardcoded whitelist.
function checkDynamicRouteWiring() {
  const checks = [
    {
      routeFile: path.join(ROOT, 'src', 'app', 'comparisons', '[slug]', 'page.tsx'),
      dataFile: path.join(ROOT, 'src', 'data', 'comparisons.ts'),
      dataLabel: 'comparisons',
      routeLabel: '/comparisons/[slug]',
    },
    {
      routeFile: path.join(ROOT, 'src', 'app', 'fix', '[slug]', 'page.tsx'),
      dataFile: path.join(ROOT, 'src', 'data', 'errors.ts'),
      dataLabel: 'errors',
      routeLabel: '/fix/[slug]',
    },
    {
      routeFile: path.join(ROOT, 'src', 'app', 'alternatives', '[slug]', 'page.tsx'),
      dataFile: path.join(ROOT, 'src', 'data', 'extensions.ts'),
      dataLabel: 'extensions',
      routeLabel: '/alternatives/[slug]',
    },
  ];

  for (const check of checks) {
    if (!fs.existsSync(check.routeFile)) {
      errors.push(`Dynamic route [${check.routeLabel}]: page.tsx not found`);
      continue;
    }
    if (!fs.existsSync(check.dataFile)) {
      errors.push(`Dynamic route [${check.routeLabel}]: data file not found at ${check.dataLabel}`);
      continue;
    }

    const routeContent = fs.readFileSync(check.routeFile, 'utf8');
    const dataContent = fs.readFileSync(check.dataFile, 'utf8');

    // Extract all slugs from data file
    const dataSlugPattern = /^    slug:\s*['"]([^'"]+)['"]/gm;
    const dataSlugs = [];
    let m;
    while ((m = dataSlugPattern.exec(dataContent)) !== null) {
      dataSlugs.push(m[1]);
    }

    // Check: generateStaticParams must exist and use .map() over the data array
    if (!/generateStaticParams\s*[=(]/.test(routeContent)) {
      errors.push(`Dynamic route [${check.routeLabel}]: missing generateStaticParams`);
      continue;
    }
    // Match: variable = array.map() OR return array.map() — use [\s\S] to cross newlines
    if (!/\b(?:const\s+\w+\s*=\s*)?\w+[\s\S]*?\.map\s*\(/.test(routeContent)) {
      errors.push(`Dynamic route [${check.routeLabel}]: generateStaticParams does not use data array .map() — possible hardcoded whitelist`);
    }

    // Check for hardcoded whitelist patterns (literal slug strings inside generateStaticParams)
    let hardcodedSlugCount = 0;
    const staticParamsBlock = routeContent.match(/generateStaticParams[^{]*\{[\s\S]*?return\s*\[[\s\S]*?\]\s*\}/);
    if (staticParamsBlock) {
      const block = staticParamsBlock[0];
      hardcodedSlugCount = (block.match(/['"`]slug['"`]\s*:/g) || []).length;
      if (hardcodedSlugCount > 0 && block.includes('.map')) {
        // This is fine — .map over data array with explicit slug field is OK
      } else if (hardcodedSlugCount > 10) {
        errors.push(`Dynamic route [${check.routeLabel}]: generateStaticParams appears to use a hardcoded whitelist (${hardcodedSlugCount} explicit slug entries) — should use .map() over data array`);
      }
    }

    // Check that every data slug would have a route
    if (dataSlugs.length === 0) {
      warnings.push(`Dynamic route [${check.routeLabel}]: no slugs found in ${check.dataLabel} data file`);
    } else {
      console.log(`  Dynamic route [${check.routeLabel}]: ${dataSlugs.length} slugs in data, ${hardcodedSlugCount > 0 ? 'hardcoded' : 'dynamically wired'}`);
    }
  }
}
checkDynamicRouteWiring();

// ── 18. Sitemap coverage: every data slug must appear in sitemap.ts output ─────────
function checkSitemapCoverage() {
  const sitemapFile = path.join(ROOT, 'src', 'app', 'sitemap.ts');
  if (!fs.existsSync(sitemapFile)) {
    warnings.push('sitemap.ts not found — skipping sitemap coverage check');
    return;
  }
  const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');

  const dataSources = [
    { file: path.join(ROOT, 'src', 'data', 'comparisons.ts'), label: 'comparisons', mapFn: '.map' },
    { file: path.join(ROOT, 'src', 'data', 'errors.ts'), label: 'errors', mapFn: '.map' },
    { file: path.join(ROOT, 'src', 'data', 'extensions.ts'), label: 'extensions', mapFn: '.map' },
  ];

  for (const src of dataSources) {
    if (!fs.existsSync(src.file)) {
      warnings.push(`Sitemap coverage [${src.label}]: data file not found`);
      continue;
    }
    const dataContent = fs.readFileSync(src.file, 'utf8');
    const slugPattern = /^    slug:\s*['"]([^'"]+)['"]/gm;
    const slugs = [];
    let m;
    while ((m = slugPattern.exec(dataContent)) !== null) {
      slugs.push(m[1]);
    }
    const dataVar = src.label; // 'comparisons', 'errors', 'extensions'
    if (sitemapContent.includes(`${dataVar}.map`)) {
      console.log(`  Sitemap coverage [${src.label}]: ${slugs.length} slugs — covered by .map() in sitemap.ts`);
    } else if (slugs.length > 0) {
      warnings.push(`Sitemap coverage [${src.label}]: ${slugs.length} slugs found but sitemap.ts does not use ${dataVar}.map()`);
    }
  }
}
checkSitemapCoverage();

// ── Output ───────────────────────────────────────────────────────────────────
console.log('\nExtensionFixes Review');
console.log('====================');
console.log(`Errors  : ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);

if (errors.length > 0) {
  console.log('\nErrors:');
  for (const e of errors) console.log(`  - ${e}`);
}
if (warnings.length > 0) {
  console.log('\nWarnings:');
  for (const w of warnings.slice(0, 20)) console.log(`  - ${w}`);
  if (warnings.length > 20) {
    console.log(`  ... and ${warnings.length - 20} more warnings`);
  }
}

const status = errors.length === 0 ? 'PASS' : 'FAIL';
console.log(`\nStatus: ${status}`);

process.exit(errors.length > 0 ? 1 : 0);
