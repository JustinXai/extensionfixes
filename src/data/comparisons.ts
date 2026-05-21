// comparisons.ts
// Data source for /comparisons/[slug] pages.
// templateType is always 'comparison'.
// Add new comparison pages here — do NOT add routes manually.
import type { ComparisonTemplateData } from '@/lib/contentTypes';

// Declare the unified type for use in route files.
export type ComparisonRecord = ComparisonTemplateData;

export const comparisons: ComparisonRecord[] = [
  // Example entry — uncomment and fill when ready to add a comparison page.
  // {
  //   templateType: 'comparison',
  //   slug: 'tampermonkey-vs-violentmonkey',
  //   title: 'Tampermonkey vs Violentmonkey',
  //   metaTitle: 'Tampermonkey vs Violentmonkey: Which Userscript Manager is Better for Chrome?',
  //   metaDescription: 'Compare Tampermonkey and Violentmonkey userscript managers for Chrome. Learn the key differences, trade-offs, and which one is the practical choice for your workflow.',
  //   quickAnswer: 'Tampermonkey and Violentmonkey both support userscripts in Chrome. Tampermonkey has a larger script ecosystem and more built-in features. Violentmonkey is fully open source with a lighter interface. Neither is objectively better — the practical choice depends on whether you prioritize script library size or open-source transparency.',
  //   comparedItems: ['Tampermonkey', 'Violentmonkey'],
  //   verdict: 'Tampermonkey is the practical choice for most users due to its larger script ecosystem. Violentmonkey is the practical choice for users who prefer open-source tooling and minimal resource usage.',
  //   keyDifferences: [
  //     'Tampermonkey has more built-in features; Violentmonkey has a more minimal interface.',
  //     'Tampermonkey has a larger community and script library; Violentmonkey supports the same script format.',
  //     'Tampermonkey has closed-source components; Violentmonkey is fully open source.',
  //     'Both work as MV3 extensions in Chrome 138+.',
  //   ],
  //   comparisonTable: [...],
  //   decisionGuide: [...],
  //   commonFailedFixes: [...],
  //   relatedPages: [...],
  //   faqs: [...],
  //   sources: [...],
  //   lastUpdated: '2026-05-22',
  // },
];

export function getComparisonBySlug(slug: string): ComparisonRecord | undefined {
  return comparisons.find((c) => c.slug === slug);
}
