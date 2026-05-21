// Unified content block types shared by all 5 page templates.
// Do NOT invent new field names per-page. Add them here first.

// Re-export ComparisonRow from types.ts so templates import a single unified type.
export type { ComparisonRow } from '@/lib/types';

// Template type discriminator values.
export type TemplateType = 'alternative' | 'fix' | 'guide' | 'comparison' | 'collection';

// ── Base / Shared ─────────────────────────────────────────────────────────────

export type ContentSource = {
  title: string;
  url: string;
  publisher?: string;
  sourceType?: string;
  reliability?: 'primary' | 'secondary' | 'discovery';
  supports?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type RelatedPage = {
  title: string;
  href: string;
  description?: string;
};

// ── Status ───────────────────────────────────────────────────────────────────

export type StatusItem = {
  label: string;
  value: string;
  tone?: 'good' | 'neutral' | 'warning' | 'bad';
};

// ── Decision ───────────────────────────────────────────────────────────────

export type DecisionItem = {
  choose: string;
  when: string;
  href?: string;
};

// ── Failed Fixes ─────────────────────────────────────────────────────────────

export type FailedFixEntry =
  | { tried: string; whyItFails?: string; saferAlternative?: string }
  | { doesNotWork: string };

// ── Migration Steps ─────────────────────────────────────────────────────────

export type MigrationStep = {
  title: string;
  description?: string;
};

// ── Safety / Checklist ───────────────────────────────────────────────────────

export type ChecklistItem = {
  label: string;
  description?: string;
};

// ── Template-specific required fields ──────────────────────────────────────

export type AlternativeTemplateData = {
  templateType: 'alternative';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortAnswer?: string;
  quickAnswer?: string;
  whatHappened?: string[];
  alternatives?: import('@/lib/types').AlternativeRecord[];
  migrationSteps?: MigrationStep[];
  safetyNotes?: string[];
  whatNotToDo?: string[];
  keyTakeaways?: string[];
  currentStatus?: StatusItem[];
  comparisonTable?: import('@/lib/types').ComparisonRow[];
  decisionGuide?: DecisionItem[];
  commonFailedFixes?: FailedFixEntry[];
  relatedPages?: RelatedPage[];
  faqs?: FAQItem[];
  sources?: ContentSource[];
  lastUpdated: string;
};

export type FixTemplateData = {
  templateType: 'fix';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  whyItHappens?: string[];
  keyTakeaways?: string[];
  currentStatus?: StatusItem[];
  commonFailedFixes?: FailedFixEntry[];
  migrationSteps?: MigrationStep[];
  relatedExtensionSlugs?: string[];
  relatedPages?: RelatedPage[];
  faqs?: FAQItem[];
  sources?: ContentSource[];
  lastUpdated: string;
};

export type GuideTemplateData = {
  templateType: 'guide';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  keyTakeaways?: string[];
  currentStatus?: StatusItem[];
  comparisonTable?: import('@/lib/types').ComparisonRow[];
  decisionGuide?: DecisionItem[];
  safetyChecklist?: ChecklistItem[];
  commonFailedFixes?: FailedFixEntry[];
  migrationSteps?: MigrationStep[];
  relatedPages?: RelatedPage[];
  faqs?: FAQItem[];
  sources?: ContentSource[];
  lastUpdated: string;
};

export type ComparisonTemplateData = {
  templateType: 'comparison';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  comparedItems: string[];
  verdict: string;
  keyDifferences: string[];
  comparisonTable: import('@/lib/types').ComparisonRow[];
  decisionGuide: DecisionItem[];
  commonFailedFixes?: FailedFixEntry[];
  relatedPages?: RelatedPage[];
  faqs?: FAQItem[];
  sources?: ContentSource[];
  lastUpdated: string;
};

export type CollectionTemplateData = {
  templateType: 'collection';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  selectionCriteria: string[];
  options: {
    name: string;
    bestFor: string;
    status?: string;
    pros: string[];
    cons: string[];
    url?: string;
    note?: string;
  }[];
  comparisonTable?: import('@/lib/types').ComparisonRow[];
  decisionGuide?: DecisionItem[];
  safetyChecklist?: ChecklistItem[];
  whatToAvoid?: string[];
  relatedPages?: RelatedPage[];
  faqs?: FAQItem[];
  sources?: ContentSource[];
  lastUpdated: string;
};

export type AnyTemplateData =
  | AlternativeTemplateData
  | FixTemplateData
  | GuideTemplateData
  | ComparisonTemplateData
  | CollectionTemplateData;
