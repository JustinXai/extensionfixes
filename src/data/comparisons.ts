// comparisons.ts
// Data source for /comparisons/[slug] pages.
// templateType is always 'comparison'.
// Add new comparison pages here — do NOT add routes manually.
import type { ComparisonTemplateData } from '@/lib/contentTypes';

// Declare the unified type for use in route files.
export type ComparisonRecord = ComparisonTemplateData;

export const comparisons: ComparisonRecord[] = [
  {
    templateType: 'comparison',
    slug: 'tampermonkey-vs-violentmonkey',
    title: 'Tampermonkey vs Violentmonkey',
    metaTitle: 'Tampermonkey vs Violentmonkey: Which Userscript Manager Should You Use?',
    metaDescription:
      'Compare Tampermonkey and Violentmonkey for Chrome users. Learn the differences, trade-offs, migration notes, and safer script testing tips.',
    quickAnswer:
      'Tampermonkey is the more widely known userscript manager with a large ecosystem and familiar workflow, while Violentmonkey is a common choice for users who prefer open-source tooling and more transparent script management. For most users, the better choice depends on script compatibility, sync needs, permissions, and whether important scripts run correctly after migration. Neither option makes untrusted scripts safe by default, so users should review script sources, check @match and @grant rules, and test scripts on non-sensitive pages before using them on important accounts.',
    comparedItems: ['Tampermonkey', 'Violentmonkey'],
    verdict:
      'Tampermonkey is the practical choice for users who need the widest script library and familiar workflow. Violentmonkey is the practical choice for users who prioritize open-source transparency and lower resource usage. Neither is a universally better option — the right choice depends on your existing scripts, sync setup, and permission requirements.',
    keyDifferences: [
      'Tampermonkey has a larger user base and script library; Violentmonkey supports the same userscript format with a smaller community.',
      'Tampermonkey has a more feature-rich interface with built-in script editor features; Violentmonkey has a more minimal interface.',
      'Tampermonkey stores scripts locally by default and supports cloud sync; Violentmonkey syncs directly with GitHub Gist.',
      'Tampermonkey requires additional permissions for some script features; Violentmonkey requests fewer permissions by default.',
      'Both are available as MV3 extensions in the Chrome Web Store and support userscripts written for the Tampermonkey API.',
    ],
    comparisonTable: [
      { option: 'Tampermonkey', bestFor: 'Users with large script libraries who need a familiar workflow', mv3Support: 'Available (MV3)', cost: 'Free / Donationware', openSource: 'Partial (core is open source)', setupDifficulty: 'Easy', mainTradeoff: 'Larger resource usage but more features' },
      { option: 'Violentmonkey', bestFor: 'Users who prefer open-source tooling and direct GitHub sync', mv3Support: 'Available (MV3)', cost: 'Free / Open source', openSource: 'Fully open source', setupDifficulty: 'Easy', mainTradeoff: 'Minimal interface and fewer built-in features' },
      { option: 'Browser bookmarks', bestFor: 'Very simple scripts that do not require external libraries', mv3Support: 'N/A', cost: 'Free', openSource: 'N/A', setupDifficulty: 'Easy', mainTradeoff: 'Very limited — no GM_* APIs, no persistent config' },
    ],
    decisionGuide: [
      {
        choose: 'Tampermonkey',
        when: 'You already use scripts from GreaseMonkey or the Tampermonkey script library and want the widest compatibility.',
        href: '/alternatives/tampermonkey',
      },
      {
        choose: 'Violentmonkey',
        when: 'You prefer open-source software and want to sync scripts directly through your own GitHub account.',
        href: '/alternatives/violentmonkey',
      },
      {
        choose: 'Browser bookmarks',
        when: 'You only need very simple automation that does not require external libraries, cross-origin requests, or advanced script features.',
      },
    ],
    commonFailedFixes: [
      {
        tried: 'Switching from Tampermonkey to Violentmonkey without checking @grant rules',
        whyItFails:
          'Some scripts use GM_xmlhttpRequest or other GM_* APIs that require specific permissions. Violentmonkey supports these but may need additional configuration.',
        saferAlternative: 'Test scripts in Violentmonkey one at a time before migrating your full library.',
      },
      {
        tried: 'Copying script files directly between extensions',
        whyItFails:
          'Importing individual .user.js files through Violentmonkey may not preserve all settings and @match rules.',
        saferAlternative: 'Use the built-in script import/export feature in both extensions to transfer full scripts with metadata.',
      },
      {
        tried: 'Installing scripts from random CRX mirrors',
        whyItFails:
          'Unofficial downloads of Tampermonkey or Violentmonkey can be modified to include tracking or unwanted behavior.',
        saferAlternative: 'Install both extensions only from the official Chrome Web Store.',
      },
    ],
    relatedPages: [
      { title: 'Tampermonkey Alternatives', href: '/alternatives/tampermonkey', description: 'Current status, migration options, and alternatives for Tampermonkey users.' },
      { title: 'Violentmonkey Alternatives', href: '/alternatives/violentmonkey', description: 'Current status, migration options, and alternatives for Violentmonkey users.' },
      { title: 'Best Userscript Managers for Chrome', href: '/guides/best-userscript-managers-for-chrome', description: 'A practical guide to choosing and setting up a userscript manager in Chrome.' },
      { title: 'Chrome Userscript Manager Alternatives', href: '/guides/chrome-userscript-manager-alternatives', description: 'Overview of userscript manager options available for Chrome.' },
    ],
    faqs: [
      {
        question: 'Can I use scripts written for Greasemonkey in Tampermonkey or Violentmonkey?',
        answer:
          'Most Greasemonkey scripts are compatible with both Tampermonkey and Violentmonkey because they use similar APIs. Some scripts that rely on specific Greasemonkey features may need minor adjustments.',
      },
      {
        question: 'Will my existing Tampermonkey scripts work in Violentmonkey?',
        answer:
          'Scripts written for the Tampermonkey API generally work in Violentmonkey. Scripts that use GM_xmlhttpRequest or GM_setValue work with some configuration. Test scripts individually before migrating a large library.',
      },
      {
        question: 'Do I need to grant dangerous permissions to run scripts in Violentmonkey?',
        answer:
          'Violentmonkey requests permissions based on the @match and @grant rules in each script. Review what permissions a script requests before installing it, regardless of which manager you use.',
      },
      {
        question: 'Are Tampermonkey and Violentmonkey available as MV3 extensions in the Chrome Web Store?',
        answer:
          'Both Tampermonkey and Violentmonkey have MV3 versions available in the Chrome Web Store. They continue to work in Chrome 138 and later as long as they are the official Web Store versions.',
      },
      {
        question: 'Which extension uses less memory in Chrome?',
        answer:
          'Violentmonkey generally uses fewer resources because it has a more minimal feature set. Tampermonkey uses more memory but provides a richer built-in editor and dashboard.',
      },
      {
        question: 'Is Violentmonkey fully open source?',
        answer:
          'Yes. Violentmonkey is fully open source under an MIT license, and its source code is available on GitHub. Tampermonkey has a partially open-source model where the core is open source but some components are not.',
      },
    ],
    sources: [
      { title: 'Tampermonkey GitHub Repository', url: 'https://github.com/Tampermonkey/tampermonkey', publisher: 'Tampermonkey', reliability: 'primary', supports: 'Official source for Tampermonkey development' },
      { title: 'Violentmonkey GitHub Repository', url: 'https://github.com/violentmonkey/violentmonkey', publisher: 'Violentmonkey', reliability: 'primary', supports: 'Official source for Violentmonkey development' },
      { title: 'Tampermonkey — Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for Tampermonkey' },
      { title: 'Violentmonkey — Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnfnfdma', publisher: 'Chrome Web Store', reliability: 'primary', supports: 'Official Chrome Web Store listing for Violentmonkey' },
    ],
    lastUpdated: '2026-05-23',
  },
];

export function getComparisonBySlug(slug: string): ComparisonRecord | undefined {
  return comparisons.find((c) => c.slug === slug);
}
