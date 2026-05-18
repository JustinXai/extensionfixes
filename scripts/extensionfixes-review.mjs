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

const EXCLUDE_DIRS = new Set(['node_modules', '.next', '.git', '.vercel', 'out', 'coverage']);

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
  'The Great Suspender is malware',
  'all MV2 extensions are malware',
  'download old CRX',
  'download unknown CRX',
];
const WARN_PHRASES = [
  'safest',
  'official replacement',
  'the only safe choice',
];

function checkWording(dir) {
  return scanDir(dir, ['.ts', '.tsx', '.md', '.mdx'], (file, content) => {
    const found = [];
    const isRiskDoc = file.includes('05-risk-words-and-claims.md');

    for (const phrase of FAIL_PHRASES) {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        // Skip docs/05 if phrase appears inside a table row (phrases listed as documentation)
        if (isRiskDoc) {
          const lines = content.split('\n');
          for (const line of lines) {
            // table rows start with | and contain the phrase
            if (line.trim().startsWith('|') && line.toLowerCase().includes(phrase.toLowerCase())) {
              found.push(`doc-reference: "${phrase}" (in forbidden-phrase table — intentional, not flagged)`);
              break;
            }
          }
        } else {
          found.push(`FAIL: "${phrase}"`);
        }
      }
    }
    for (const phrase of WARN_PHRASES) {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        if (!isRiskDoc) found.push(`WARN: "${phrase}"`);
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
      lines.push(`line ${i + 1}: contains undefined literal`);
    }
  });
  return lines;
});
for (const { file, matches } of undefinedFindings) {
  warnings.push(`Potential undefined literal in ${rel(file)}: ${matches[0]}`);
}

// ── 8. Top-5 enhanced content checks (lightweight text scan) ─────────────────
const altPagePath = path.join(ROOT, 'src', 'app', 'alternatives', '[slug]', 'page.tsx');
const fixPagePath = path.join(ROOT, 'src', 'app', 'fix', '[slug]', 'page.tsx');

for (const p of [altPagePath, fixPagePath]) {
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  const checks = [
    { label: 'Quick Answer', pattern: /Quick Answer/i },
    { label: 'At a Glance', pattern: /At a Glance|at-a-glance-heading/i },
    { label: 'Comparison Table', pattern: /Comparison Table|comparison-heading/i },
    { label: 'Decision Guide', pattern: /Which Option Should You Choose|decision-guide-heading/i },
    { label: 'Sources', pattern: /Sources|sources-heading/i },
  ];
  const missing = checks.filter((c) => !c.pattern.test(content));
  if (missing.length > 0) {
    warnings.push(`Template ${rel(p)} may be missing: ${missing.map((m) => m.label).join(', ')}`);
  }
}

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
