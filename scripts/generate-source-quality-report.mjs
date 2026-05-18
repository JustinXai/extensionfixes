#!/usr/bin/env node
/**
 * Generate Source Quality Report
 * Checks Top 10 pages for source coverage, type, reliability, and risky wording.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'reports');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'source-quality-report.md');

// Top 10 slugs to check
const TOP10_ALT_SLUGS = [
  'ublock-origin',
  'proxy-switchyomega',
  'tampermonkey',
  'foxyproxy',
  'dark-reader',
  'bitwarden',
  'lastpass',
  'video-downloadhelper',
];
const TOP10_FIX_SLUGS = [
  'manifest-v2-disabled',
  'chrome-disabled-extension',
];

// Risky wording to scan for
const RISKY_PHRASES = [
  'safest',
  'guaranteed safe',
  '100% safe',
  'official successor',
  'official replacement',
  'the only safe choice',
];

function rel(file) {
  return path.relative(ROOT, file);
}

function loadExtensions() {
  const file = path.join(ROOT, 'src', 'data', 'extensions.ts');
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf8');
  const results = {};
  for (const slug of TOP10_ALT_SLUGS) {
    const slugIdx = content.indexOf(`slug: '${slug}',`);
    if (slugIdx === -1) continue;
    const afterSlug = content.slice(slugIdx);
    const m1 = afterSlug.match(/sources:\s*\[([\s\S]*?)\],\r?\n\s*lastUpdated:/);
    if (m1) { results[slug] = m1[1]; continue; }
    const m2 = afterSlug.match(/sources:\s*\[([\s\S]*?)\],\r?\n\s+\}/);
    if (m2) { results[slug] = m2[1]; continue; }
  }
  return results;
}

function loadErrors() {
  const file = path.join(ROOT, 'src', 'data', 'errors.ts');
  if (!fs.existsSync(file)) return {};
  const content = fs.readFileSync(file, 'utf8');
  const results = {};
  for (const slug of TOP10_FIX_SLUGS) {
    const slugIdx = content.indexOf(`slug: '${slug}',`);
    if (slugIdx === -1) continue;
    const afterSlug = content.slice(slugIdx);
    const m1 = afterSlug.match(/sources:\s*\[([\s\S]*?)\],\r?\n\s*lastUpdated:/);
    if (m1) { results[slug] = m1[1]; continue; }
    const m2 = afterSlug.match(/sources:\s*\[([\s\S]*?)\],\r?\n\s+\}/);
    if (m2) { results[slug] = m2[1]; continue; }
  }
  return results;
}

function parseSources(raw) {
  const sources = [];
  // Match each source block: { title: '...', url: '...', sourceType: '...', reliability: '...', supports: '...' }
  const blocks = raw.split(/\{\r?\n\s*title:/);
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const titleMatch = block.match(/^\s*['"](.+?)['"]/);
    const urlMatch = block.match(/url:\s*['"](.+?)['"]/);
    const typeMatch = block.match(/sourceType:\s*['"](.+?)['"]/);
    const relMatch = block.match(/reliability:\s*['"](.+?)['"]/);
    const supMatch = block.match(/supports:\s*['"](.+?)['"]/);
    if (titleMatch && urlMatch) {
      sources.push({
        title: titleMatch[1],
        url: urlMatch[1],
        sourceType: typeMatch ? typeMatch[1] : null,
        reliability: relMatch ? relMatch[1] : null,
        supports: supMatch ? supMatch[1] : null,
      });
    }
  }
  return sources;
}

function scanForRiskyWording(slugs) {
  const findings = [];
  for (const slug of slugs) {
    // Check both extensions.ts and errors.ts
    for (const file of ['src/data/extensions.ts', 'src/data/errors.ts']) {
      const fullPath = path.join(ROOT, file);
      if (!fs.existsSync(fullPath)) continue;
      const content = fs.readFileSync(fullPath, 'utf8');
      // Find the section for this slug
      const slugIdx = content.indexOf(`'${slug}'`);
      if (slugIdx === -1) continue;
      const sectionEnd = content.indexOf("\n  },\n  {", slugIdx);
      const section = content.slice(slugIdx, sectionEnd > 0 ? sectionEnd : undefined);
      for (const phrase of RISKY_PHRASES) {
        const regex = new RegExp(phrase.replace(/\s+/g, '\\s+'), 'gi');
        const matches = section.match(regex);
        if (matches) {
          findings.push({ slug, file: rel(file), phrase, count: matches.length });
        }
      }
    }
  }
  return findings;
}

function run() {
  console.log('Generating Source Quality Report...\n');

  // Parse sources from data files
  const extData = loadExtensions();
  const errData = loadErrors();

  const extSources = {};
  for (const [slug, raw] of Object.entries(extData)) {
    extSources[slug] = parseSources(raw);
  }
  const errSources = {};
  for (const [slug, raw] of Object.entries(errData)) {
    errSources[slug] = parseSources(raw);
  }

  // Build report
  let report = '# ExtensionFixes Source Quality Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;

  report += '## Top 10 Pages — Source Coverage\n\n';

  const allSlugs = [...TOP10_ALT_SLUGS.map(s => ({ slug: s, type: 'extension' })),
                     ...TOP10_FIX_SLUGS.map(s => ({ slug: s, type: 'error' }))];

  const issues = [];

  for (const { slug, type } of allSlugs) {
    const sources = type === 'extension' ? (extSources[slug] || []) : (errSources[slug] || []);
    const count = sources.length;
    const primary = sources.filter(s => s.reliability === 'primary').length;
    const secondary = sources.filter(s => s.reliability === 'secondary').length;
    const discovery = sources.filter(s => s.reliability === 'discovery').length;
    const withType = sources.filter(s => s.sourceType).length;
    const withSupports = sources.filter(s => s.supports).length;

    const url = type === 'extension'
      ? `/alternatives/${slug}/`
      : `/fix/${slug}/`;

    report += `### ${url}\n\n`;
    report += `| Metric | Value |\n`;
    report += `|--------|-------|\n`;
    report += `| Total sources | ${count} |\n`;
    report += `| Primary | ${primary} |\n`;
    report += `| Secondary | ${secondary} |\n`;
    report += `| Discovery | ${discovery} |\n`;
    report += `| With type field | ${withType} |\n`;
    report += `| With supports field | ${withSupports} |\n\n`;

    if (count === 0) {
      issues.push({ slug, url, issue: 'NO SOURCES — page has no sources array' });
    } else if (count < 3) {
      issues.push({ slug, url, issue: `Low source count (${count} < 3)` });
    }
    if (primary === 0) {
      issues.push({ slug, url, issue: 'No primary source' });
    }
    if (discovery > 0 && primary === 0) {
      issues.push({ slug, url, issue: 'Discovery sources used without primary — may be misused as safety proof' });
    }

    // Show sources table
    if (sources.length > 0) {
      report += `**Sources:**\n\n`;
      report += `| # | Title | Type | Reliability | Supports |\n`;
      report += `|---|-------|------|------------|----------|\n`;
      sources.forEach((s, i) => {
        report += `| ${i + 1} | ${s.title.substring(0, 50)}${s.title.length > 50 ? '...' : ''} | ${s.sourceType || 'N/A'} | ${s.reliability || 'N/A'} | ${(s.supports || '').substring(0, 60)}${(s.supports || '').length > 60 ? '...' : ''} |\n`;
      });
      report += '\n';
    }
  }

  // Risky wording scan
  report += '## Risky Wording Scan (Top 10 Pages)\n\n';
  const riskyFindings = scanForRiskyWording(TOP10_ALT_SLUGS);
  if (riskyFindings.length === 0) {
    report += 'No risky wording found in Top 10 extension pages.\n\n';
  } else {
    for (const f of riskyFindings) {
      report += `- **${f.slug}** (${f.file}): "${f.phrase}" found ${f.count} time(s)\n`;
      issues.push({ slug: f.slug, issue: `Risky wording: "${f.phrase}"` });
    }
    report += '\n';
  }

  // Summary
  report += '## Summary\n\n';
  report += `| Check | Result |\n`;
  report += `|-------|--------|\n`;
  report += `| Pages checked | ${allSlugs.length} |\n`;
  report += `| Pages with sources | ${allSlugs.length - issues.filter(i => i.issue.includes('NO SOURCES')).length} |\n`;
  report += `| Pages with 3+ sources | ${allSlugs.length - issues.filter(i => i.issue.includes('Low source count')).length} |\n`;
  report += `| Pages with primary source | ${allSlugs.length - issues.filter(i => i.issue.includes('No primary source')).length} |\n`;
  report += `| Risky wording findings | ${riskyFindings.length} |\n`;
  report += `| Total issues | ${issues.length} |\n\n`;

  if (issues.length > 0) {
    report += '## Issues Found\n\n';
    const seen = new Set();
    for (const i of issues) {
      const key = `${i.slug}|${i.issue}`;
      if (!seen.has(key)) {
        seen.add(key);
        report += `- **${i.url}**: ${i.issue}\n`;
      }
    }
  } else {
    report += 'All checks passed.\n';
  }

  // Write report
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_FILE, report, 'utf8');
  console.log(`Report written to: ${rel(OUTPUT_FILE)}`);
  console.log(`Total issues: ${issues.length}`);
  if (issues.length > 0) {
    issues.slice(0, 10).forEach(i => console.log(`  - [${i.url}] ${i.issue}`));
    if (issues.length > 10) console.log(`  ... and ${issues.length - 10} more`);
  }
}

run();
