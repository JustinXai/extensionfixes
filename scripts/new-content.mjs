#!/usr/bin/env node
/**
 * new-content.mjs
 * Generates a content draft file for a new ExtensionFixes page.
 *
 * Usage:
 *   npm run new:content -- --type alternative --slug example-extension
 *   npm run new:content -- --type fix --slug example-error
 *   npm run new:content -- --type comparison --slug a-vs-b
 *   npm run new:content -- --type collection --slug best-example-tools
 *   npm run new:content -- --type guide --slug example-guide
 *
 * Output: drafts/<slug>.draft.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DRAFTS_DIR = path.join(ROOT, 'drafts');

// ── Parse args ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
let type = null;
let slug = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--type' && args[i + 1]) type = args[i + 1];
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
}

if (!type || !slug) {
  console.error('Usage: npm run new:content -- --type <alternative|fix|comparison|collection|guide> --slug <slug>');
  process.exit(1);
}

const VALID_TYPES = ['alternative', 'fix', 'comparison', 'collection', 'guide'];
if (!VALID_TYPES.includes(type)) {
  console.error(`Invalid type "${type}". Must be one of: ${VALID_TYPES.join(', ')}`);
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid slug "${slug}". Must be kebab-case (e.g., "my-example-slug").`);
  process.exit(1);
}

// ── Ensure drafts directory exists ────────────────────────────────────────────

if (!fs.existsSync(DRAFTS_DIR)) {
  fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  console.log(`Created directory: drafts/`);
}

// Ensure drafts/.gitkeep
const gitkeepPath = path.join(DRAFTS_DIR, '.gitkeep');
if (!fs.existsSync(gitkeepPath)) {
  fs.writeFileSync(gitkeepPath, '');
}

// ── Draft templates ────────────────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

const TODO = 'TODO: fill this in';

function faqs(n = 5) {
  return Array.from({ length: n }, (_, i) => `      {
        question: '${TODO} Question ${i + 1}?',
        answer: '${TODO} Answer ${i + 1}. Write at least 2-3 sentences explaining the answer.',
      }`).join(',\n');
}

function sources(n = 2) {
  return Array.from({ length: n }, (_, i) => `      {
        title: '${TODO} Source ${i + 1}',
        url: 'https://example.com/source-${i + 1}',
        publisher: '${TODO} Publisher name',
        reliability: 'primary',
        supports: '${TODO} What this source supports',
      }`).join(',\n');
}

function relatedPages(n = 2) {
  return Array.from({ length: n }, (_, i) => `      {
        title: '${TODO} Related Page ${i + 1}',
        href: '/${type === 'fix' ? 'fix' : 'alternatives'}/existing-slug',
        description: '${TODO} Brief description of how this relates.',
      }`).join(',\n');
}

function decisionGuideItems(n = 3) {
  return Array.from({ length: n }, (_, i) => `      {
        choose: '${TODO} Option ${i + 1}',
        when: '${TODO} When to choose this option. Be specific about use case.',
        href: '/${type === 'fix' ? 'fix' : 'alternatives'}/slug',
      }`).join(',\n');
}

function commonFailedFixesItems(n = 3) {
  return Array.from({ length: n }, (_, i) => `      {
        tried: '${TODO} Common failed fix ${i + 1}',
        whyItFails: '${TODO} Explain why this approach does not work.',
        saferAlternative: '${TODO} Describe the safer approach.',
      }`).join(',\n');
}

function keyTakeawaysItems(n = 3) {
  return Array.from({ length: n }, (_, i) => `      '${TODO} Key takeaway ${i + 1}. Be specific and actionable.'`).join(',\n');
}

function statusItems(n = 3) {
  return Array.from({ length: n }, (_, i) => `      {
        label: '${TODO} Label ${i + 1}',
        value: '${TODO} Value ${i + 1}',
        tone: 'neutral',
      }`).join(',\n');
}

// ── Type-specific draft generators ────────────────────────────────────────────

function generateAlternativeDraft(slug) {
  return `import type { AlternativeTemplateData } from '@/lib/contentTypes';

// Alternative page draft — copy into src/data/extensions.ts
// Template type: alternative
// Route: /alternatives/${slug}/
const draft: AlternativeTemplateData = {
  templateType: 'alternative',
  slug: '${slug}',
  title: '${TODO} Extension Name',
  metaTitle: '${TODO} Extension Name Alternatives for Chrome',
  metaDescription: '${TODO} Meta description (80-170 chars). Describe the extension and its alternatives.',
  shortAnswer: '${TODO} Short answer (at least 80 words). Explain what happened, what the migration path is, and what the best alternatives are. Be specific about Chrome versions and Manifest V2/V3 changes.',
  keyTakeaways: [
${keyTakeawaysItems(3)}
  ],
  currentStatus: [
${statusItems(3)}
  ],
  comparisonTable: [
    {
      option: '${TODO} Option 1',
      bestFor: '${TODO} Best for X users',
      mv3Support: '${TODO} Yes / No / Built-in / etc.',
      cost: '${TODO} Free / Freemium / Paid',
      openSource: '${TODO} Yes / Partial / No',
      setupDifficulty: '${TODO} Easy / Medium / Hard',
      mainTradeoff: '${TODO} Main tradeoff or limitation',
    },
    {
      option: '${TODO} Option 2',
      bestFor: '${TODO} Best for Y users',
      mv3Support: '${TODO} Yes / No / Built-in / etc.',
      cost: '${TODO} Free / Freemium / Paid',
      openSource: '${TODO} Yes / Partial / No',
      setupDifficulty: '${TODO} Easy / Medium / Hard',
      mainTradeoff: '${TODO} Main tradeoff or limitation',
    },
  ],
  decisionGuide: [
${decisionGuideItems(3)}
  ],
  commonFailedFixes: [
${commonFailedFixesItems(3)}
  ],
  migrationSteps: [
    {
      title: '${TODO} Step 1: ${TODO}',
      description: '${TODO} Detailed description of this step.',
    },
    {
      title: '${TODO} Step 2: ${TODO}',
      description: '${TODO} Detailed description of this step.',
    },
  ],
  faqs: [
${faqs(5)}
  ],
  sources: [
${sources(2)}
  ],
  relatedPages: [
${relatedPages(2)}
  ],
  lastUpdated: '${today}',
};

export default draft;
`;
}

function generateFixDraft(slug) {
  return `import type { FixTemplateData } from '@/lib/contentTypes';

// Fix page draft — copy into src/data/errors.ts
// Template type: fix
// Route: /fix/${slug}/
const draft: FixTemplateData = {
  templateType: 'fix',
  slug: '${slug}',
  title: '${TODO} Error Title',
  metaTitle: '${TODO} How to Fix: Error Message',
  metaDescription: '${TODO} Meta description (80-170 chars). Describe the error and the fix.',
  quickAnswer: '${TODO} Quick answer (at least 80 words). Explain what the error means, why it happens, and what the reader should do. Be specific about Chrome versions and Manifest V2/V3 changes.',
  whyItHappens: [
    '${TODO} Reason 1. Be specific about the cause.',
    '${TODO} Reason 2.',
    '${TODO} Reason 3.',
  ],
  keyTakeaways: [
${keyTakeawaysItems(3)}
  ],
  currentStatus: [
${statusItems(3)}
  ],
  commonFailedFixes: [
${commonFailedFixesItems(3)}
  ],
  stepByStepFix: [
    {
      title: '${TODO} Step 1: ${TODO}',
      description: '${TODO} Detailed description of this step.',
    },
    {
      title: '${TODO} Step 2: ${TODO}',
      description: '${TODO} Detailed description of this step.',
    },
  ],
  faqs: [
${faqs(5)}
  ],
  sources: [
${sources(2)}
  ],
  relatedPages: [
${relatedPages(2)}
  ],
  lastUpdated: '${today}',
};

export default draft;
`;
}

function generateComparisonDraft(slug) {
  return `import type { ComparisonTemplateData } from '@/lib/contentTypes';

// Comparison page draft — copy into src/data/comparisons.ts
// Template type: comparison
// Route: /comparisons/${slug}/
const draft: ComparisonTemplateData = {
  templateType: 'comparison',
  slug: '${slug}',
  title: '${TODO} A vs B: Which Is Better?',
  metaTitle: '${TODO} A vs B: Which [Category] Should You Use?',
  metaDescription: '${TODO} Meta description (80-170 chars). Describe the comparison and the verdict.',
  quickAnswer: '${TODO} Quick answer (at least 80 words). Explain what both options are, how they differ, and what the practical verdict is. Be specific about use cases and Chrome compatibility.',
  comparedItems: ['${TODO} Item A', '${TODO} Item B'],
  verdict: '${TODO} Practical verdict. Describe who should choose which option and why. Avoid "winner" language. Focus on trade-offs.',
  keyDifferences: [
    '${TODO} Difference 1: specific comparison of a feature or behavior.',
    '${TODO} Difference 2: specific comparison of a feature or behavior.',
    '${TODO} Difference 3: specific comparison of a feature or behavior.',
  ],
  comparisonTable: [
    {
      option: '${TODO} Option A',
      bestFor: '${TODO} Best for X users',
      mv3Support: '${TODO} Yes / No / Built-in / etc.',
      cost: '${TODO} Free / Freemium / Paid',
      openSource: '${TODO} Yes / Partial / No',
      setupDifficulty: '${TODO} Easy / Medium / Hard',
      mainTradeoff: '${TODO} Main tradeoff or limitation',
    },
    {
      option: '${TODO} Option B',
      bestFor: '${TODO} Best for Y users',
      mv3Support: '${TODO} Yes / No / Built-in / etc.',
      cost: '${TODO} Free / Freemium / Paid',
      openSource: '${TODO} Yes / Partial / No',
      setupDifficulty: '${TODO} Easy / Medium / Hard',
      mainTradeoff: '${TODO} Main tradeoff or limitation',
    },
    {
      option: '${TODO} Option C (optional)',
      bestFor: '${TODO} Best for Z users',
      mv3Support: '${TODO} Yes / No / Built-in / etc.',
      cost: '${TODO} Free / Freemium / Paid',
      openSource: '${TODO} Yes / Partial / No',
      setupDifficulty: '${TODO} Easy / Medium / Hard',
      mainTradeoff: '${TODO} Main tradeoff or limitation',
    },
  ],
  decisionGuide: [
${decisionGuideItems(3)}
  ],
  commonFailedFixes: [
${commonFailedFixesItems(3)}
  ],
  faqs: [
${faqs(5)}
  ],
  sources: [
${sources(2)}
  ],
  relatedPages: [
${relatedPages(2)}
  ],
  lastUpdated: '${today}',
};

export default draft;
`;
}

function generateCollectionDraft(slug) {
  return `import type { CollectionTemplateData } from '@/lib/contentTypes';

// Collection page draft — copy into src/data/landingPages.ts with templateType: 'collection'
// Template type: collection
// Route: /guides/${slug}/
const draft: CollectionTemplateData = {
  templateType: 'collection',
  slug: '${slug}',
  title: '${TODO} Best [Category] Tools for Chrome',
  metaTitle: '${TODO} Best [Category] Tools for Chrome: A Practical Guide',
  metaDescription: '${TODO} Meta description (80-170 chars). Describe the collection and why these tools were chosen.',
  shortAnswer: '${TODO} Short answer (at least 80 words). Introduce the collection, explain the selection criteria, and give a top recommendation. Be specific about Chrome compatibility.',
  selectionCriteria: [
    '${TODO} Criterion 1: why this was used as a selection factor.',
    '${TODO} Criterion 2: why this was used as a selection factor.',
    '${TODO} Criterion 3: why this was used as a selection factor.',
  ],
  options: [
    {
      name: '${TODO} Tool 1',
      bestFor: '${TODO} Best for X use case',
      status: 'Active / Deprecated / etc.',
      pros: [
        '${TODO} Pro 1',
        '${TODO} Pro 2',
      ],
      cons: [
        '${TODO} Con 1',
        '${TODO} Con 2',
      ],
    },
    {
      name: '${TODO} Tool 2',
      bestFor: '${TODO} Best for Y use case',
      status: 'Active / Deprecated / etc.',
      pros: [
        '${TODO} Pro 1',
        '${TODO} Pro 2',
      ],
      cons: [
        '${TODO} Con 1',
        '${TODO} Con 2',
      ],
    },
    {
      name: '${TODO} Tool 3',
      bestFor: '${TODO} Best for Z use case',
      status: 'Active / Deprecated / etc.',
      pros: [
        '${TODO} Pro 1',
        '${TODO} Pro 2',
      ],
      cons: [
        '${TODO} Con 1',
        '${TODO} Con 2',
      ],
    },
  ],
  comparisonTable: [
    {
      option: '${TODO} Tool 1',
      bestFor: '${TODO} Best for X users',
      status: 'Active / MV3',
      strength: '${TODO} Main strength',
      tradeOff: '${TODO} Main tradeoff',
    },
    {
      option: '${TODO} Tool 2',
      bestFor: '${TODO} Best for Y users',
      status: 'Active / MV3',
      strength: '${TODO} Main strength',
      tradeOff: '${TODO} Main tradeoff',
    },
    {
      option: '${TODO} Tool 3',
      bestFor: '${TODO} Best for Z users',
      status: 'Active / MV3',
      strength: '${TODO} Main strength',
      tradeOff: '${TODO} Main tradeoff',
    },
  ],
  decisionGuide: [
${decisionGuideItems(3)}
  ],
  safetyChecklist: [
    {
      label: '${TODO} Checklist item 1',
      description: '${TODO} Why this matters for safety.',
    },
    {
      label: '${TODO} Checklist item 2',
      description: '${TODO} Why this matters for safety.',
    },
  ],
  faqs: [
${faqs(5)}
  ],
  sources: [
${sources(2)}
  ],
  relatedPages: [
${relatedPages(2)}
  ],
  lastUpdated: '${today}',
};

export default draft;
`;
}

function generateGuideDraft(slug) {
  return `import type { GuideTemplateData } from '@/lib/contentTypes';

// Guide page draft — copy into src/data/landingPages.ts
// Template type: guide
// Route: /guides/${slug}/
const draft: GuideTemplateData = {
  templateType: 'guide',
  slug: '${slug}',
  title: '${TODO} Guide Title',
  metaTitle: '${TODO} Guide Title: A Practical Guide',
  metaDescription: '${TODO} Meta description (80-170 chars). Describe what this guide covers.',
  quickAnswer: '${TODO} Quick answer (at least 80 words). Introduce the topic, explain what the reader will learn, and give a key takeaway. Be specific about Chrome compatibility and practical steps.',
  keyTakeaways: [
${keyTakeawaysItems(3)}
  ],
  currentStatus: [
${statusItems(3)}
  ],
  comparisonTable: [
    {
      option: '${TODO} Option 1',
      bestFor: '${TODO} Best for X',
      status: 'Active / Deprecated',
      strength: '${TODO} Strength',
      tradeOff: '${TODO} Tradeoff',
    },
    {
      option: '${TODO} Option 2',
      bestFor: '${TODO} Best for Y',
      status: 'Active / Deprecated',
      strength: '${TODO} Strength',
      tradeOff: '${TODO} Tradeoff',
    },
  ],
  decisionGuide: [
${decisionGuideItems(3)}
  ],
  safetyChecklist: [
    {
      label: '${TODO} Safety check 1',
      description: '${TODO} Why this is important.',
    },
  ],
  commonFailedFixes: [
${commonFailedFixesItems(3)}
  ],
  faqs: [
${faqs(5)}
  ],
  sources: [
${sources(2)}
  ],
  relatedPages: [
${relatedPages(2)}
  ],
  lastUpdated: '${today}',
};

export default draft;
`;
}

// ── Generate draft ────────────────────────────────────────────────────────────

const generators = {
  alternative: generateAlternativeDraft,
  fix: generateFixDraft,
  comparison: generateComparisonDraft,
  collection: generateCollectionDraft,
  guide: generateGuideDraft,
};

const content = generators[type](slug);

const draftFileName = `${slug}.draft.ts`;
const draftPath = path.join(DRAFTS_DIR, draftFileName);

fs.writeFileSync(draftPath, content);

console.log(`Draft created: drafts/${draftFileName}`);
console.log('');
console.log('Next steps:');
console.log('1. Fill all TODO fields in the draft');
console.log('2. Copy the completed record into the correct data file:');
const dataFileMap = {
  alternative: 'src/data/extensions.ts',
  fix: 'src/data/errors.ts',
  comparison: 'src/data/comparisons.ts',
  collection: 'src/data/landingPages.ts',
  guide: 'src/data/landingPages.ts',
};
console.log(`   ${type} → ${dataFileMap[type]}`);
console.log('3. Run: npm run validate:content');
console.log('4. Run: npm run lint && npm run build && npm run review && npm run check:local:text');
console.log('5. Create PR and let CI validate your content');
