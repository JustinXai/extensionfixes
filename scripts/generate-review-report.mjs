#!/usr/bin/env node
/**
 * ExtensionFixes Review Report Generator
 * Generates reports/latest-review.md with current state snapshot.
 * No external network calls.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REPORT_PATH = path.join(ROOT, 'reports', 'latest-review.md');

function git(cmd, fallback = '') {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    return fallback;
  }
}

const branch = git('git rev-parse --abbrev-ref HEAD', 'unknown');
const commitHash = git('git log -1 --format=%H', 'unknown');
const commitMsg = git('git log -1 --format=%s', 'unknown');
const gitStatus = git('git status --short', '(no changes)');

const now = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

const requiredDocs = [
  'docs/00-product-constitution.md',
  'docs/01-information-architecture.md',
  'docs/02-content-playbook.md',
  'docs/03-seo-ai-readable-checklist.md',
  'docs/04-cursor-workflow.md',
  'docs/05-risk-words-and-claims.md',
  'docs/06-current-state.md',
];
const docsStatus = requiredDocs.map(doc => ({
  doc,
  exists: fs.existsSync(path.join(ROOT, doc)),
}));

const apiExists = fs.existsSync(path.join(ROOT, 'src', 'app', 'api'));
const rulesDir = fs.existsSync(path.join(ROOT, '.cursor', 'rules'));
const ciExists = fs.existsSync(path.join(ROOT, '.github', 'workflows', 'ci.yml'));

const report = [
  '# ExtensionFixes Review Report',
  '',
  `Generated: ${now}`,
  '',
  '## Git Info',
  '',
  '| Field | Value |',
  '|-------|-------|',
  `| Branch | ${branch} |`,
  `| Commit | ${commitHash} |`,
  `| Message | ${commitMsg} |`,
  '',
  '## Git Status',
  '',
  '```',
  gitStatus,
  '```',
  '',
  '## Governance Docs',
  '',
  '| Doc | Status |',
  '|-----|--------|',
  ...docsStatus.map(d => `| ${d.doc} | ${d.exists ? 'exists' : 'MISSING'} |`),
  '',
  '## Architecture Checks',
  '',
  '| Item | Status |',
  '|------|--------|',
  `| src/app/api/ | ${apiExists ? 'EXISTS (forbidden)' : 'absent'} |`,
  `| .cursor/rules/ | ${rulesDir ? 'exists' : 'missing'} |`,
  `| .github/workflows/ci.yml | ${ciExists ? 'exists' : 'missing'} |`,
  '',
  '## Pre-Deploy Checklist',
  '',
  '- [ ] sitemap.xml updated with new pages',
  '- [ ] searchAll updated with new pages',
  '- [ ] internal links added from new pages',
  '- [ ] risky wording checked (no "official successor", "100% safe", etc.)',
  '- [ ] npm run lint passed',
  '- [ ] npm run build passed',
  '- [ ] npm run review passed',
  '- [ ] deploy needed? (only if page content changed)',
  '',
  '## Notes',
  '',
  'Engineering governance files do not require deployment. Deploy only if page content or data files changed.',
].join('\n');

fs.mkdirSync(path.join(ROOT, 'reports'), { recursive: true });
fs.writeFileSync(REPORT_PATH, report, 'utf8');
console.log(`Report written to ${REPORT_PATH}`);
