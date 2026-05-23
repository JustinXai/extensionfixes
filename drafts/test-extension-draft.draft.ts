import type { AlternativeTemplateData } from '@/lib/contentTypes';

// Alternative page draft — copy into src/data/extensions.ts
// Template type: alternative
// Route: /alternatives/test-extension-draft/
const draft: AlternativeTemplateData = {
  templateType: 'alternative',
  slug: 'test-extension-draft',
  title: 'TODO: fill this in Extension Name',
  metaTitle: 'TODO: fill this in Extension Name Alternatives for Chrome',
  metaDescription: 'TODO: fill this in Meta description (80-170 chars). Describe the extension and its alternatives.',
  shortAnswer: 'TODO: fill this in Short answer (at least 80 words). Explain what happened, what the migration path is, and what the best alternatives are. Be specific about Chrome versions and Manifest V2/V3 changes.',
  keyTakeaways: [
      'TODO: fill this in Key takeaway 1. Be specific and actionable.',
      'TODO: fill this in Key takeaway 2. Be specific and actionable.',
      'TODO: fill this in Key takeaway 3. Be specific and actionable.'
  ],
  currentStatus: [
      {
        label: 'TODO: fill this in Label 1',
        value: 'TODO: fill this in Value 1',
        tone: 'neutral',
      },
      {
        label: 'TODO: fill this in Label 2',
        value: 'TODO: fill this in Value 2',
        tone: 'neutral',
      },
      {
        label: 'TODO: fill this in Label 3',
        value: 'TODO: fill this in Value 3',
        tone: 'neutral',
      }
  ],
  comparisonTable: [
    {
      option: 'TODO: fill this in Option 1',
      bestFor: 'TODO: fill this in Best for X users',
      mv3Support: 'Active MV3 / Deprecated / etc.',
      cost: 'Free / Paid',
      openSource: 'Yes / Partial / No',
      setupDifficulty: 'Easy / Medium / Hard',
      mainTradeoff: 'TODO: fill this in Main tradeoff',
    },
    {
      option: 'TODO: fill this in Option 2',
      bestFor: 'TODO: fill this in Best for Y users',
      mv3Support: 'Active MV3 / Deprecated / etc.',
      cost: 'Free / Paid',
      openSource: 'Yes / Partial / No',
      setupDifficulty: 'Easy / Medium / Hard',
      mainTradeoff: 'TODO: fill this in Main tradeoff',
    },
  ],
  decisionGuide: [
      {
        choose: 'TODO: fill this in Option 1',
        when: 'TODO: fill this in When to choose this option. Be specific about use case.',
        href: '/alternatives/slug',
      },
      {
        choose: 'TODO: fill this in Option 2',
        when: 'TODO: fill this in When to choose this option. Be specific about use case.',
        href: '/alternatives/slug',
      },
      {
        choose: 'TODO: fill this in Option 3',
        when: 'TODO: fill this in When to choose this option. Be specific about use case.',
        href: '/alternatives/slug',
      }
  ],
  commonFailedFixes: [
      {
        tried: 'TODO: fill this in Common failed fix 1',
        whyItFails: 'TODO: fill this in Explain why this approach does not work.',
        saferAlternative: 'TODO: fill this in Describe the safer approach.',
      },
      {
        tried: 'TODO: fill this in Common failed fix 2',
        whyItFails: 'TODO: fill this in Explain why this approach does not work.',
        saferAlternative: 'TODO: fill this in Describe the safer approach.',
      },
      {
        tried: 'TODO: fill this in Common failed fix 3',
        whyItFails: 'TODO: fill this in Explain why this approach does not work.',
        saferAlternative: 'TODO: fill this in Describe the safer approach.',
      }
  ],
  migrationSteps: [
    {
      title: 'TODO: fill this in Step 1: TODO: fill this in',
      description: 'TODO: fill this in Detailed description of this step.',
    },
    {
      title: 'TODO: fill this in Step 2: TODO: fill this in',
      description: 'TODO: fill this in Detailed description of this step.',
    },
  ],
  faqs: [
      {
        question: 'TODO: fill this in Question 1?',
        answer: 'TODO: fill this in Answer 1. Write at least 2-3 sentences explaining the answer.',
      },
      {
        question: 'TODO: fill this in Question 2?',
        answer: 'TODO: fill this in Answer 2. Write at least 2-3 sentences explaining the answer.',
      },
      {
        question: 'TODO: fill this in Question 3?',
        answer: 'TODO: fill this in Answer 3. Write at least 2-3 sentences explaining the answer.',
      },
      {
        question: 'TODO: fill this in Question 4?',
        answer: 'TODO: fill this in Answer 4. Write at least 2-3 sentences explaining the answer.',
      },
      {
        question: 'TODO: fill this in Question 5?',
        answer: 'TODO: fill this in Answer 5. Write at least 2-3 sentences explaining the answer.',
      }
  ],
  sources: [
      {
        title: 'TODO: fill this in Source 1',
        url: 'https://example.com/source-1',
        publisher: 'TODO: fill this in Publisher name',
        reliability: 'primary',
        supports: 'TODO: fill this in What this source supports',
      },
      {
        title: 'TODO: fill this in Source 2',
        url: 'https://example.com/source-2',
        publisher: 'TODO: fill this in Publisher name',
        reliability: 'primary',
        supports: 'TODO: fill this in What this source supports',
      }
  ],
  relatedPages: [
      {
        title: 'TODO: fill this in Related Page 1',
        href: '/alternatives/existing-slug',
        description: 'TODO: fill this in Brief description of how this relates.',
      },
      {
        title: 'TODO: fill this in Related Page 2',
        href: '/alternatives/existing-slug',
        description: 'TODO: fill this in Brief description of how this relates.',
      }
  ],
  lastUpdated: '2026-05-23',
};

export default draft;
