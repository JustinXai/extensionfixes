// Extension Status Types
export type ExtensionStatus =
  | 'active_mv3'
  | 'affected_by_mv2'
  | 'removed'
  | 'legacy'
  | 'unknown';

// Risk Level Types
export type RiskLevel = 'low' | 'medium' | 'high' | 'unknown';

// FAQ Item
export interface FAQItem {
  question: string;
  answer: string;
}

// Source type for categorizing sources by authority level
export type SourceType =
  | 'chrome-web-store'
  | 'chrome-developers'
  | 'official-website'
  | 'github'
  | 'documentation'
  | 'alternative-directory'
  | 'community-discussion'
  | 'news'
  | 'other';

// Reliability tier — used to check if a source is being used as safety proof inappropriately
export type SourceReliability = 'primary' | 'secondary' | 'discovery';

// Source Item — describes a citation used in a page
export interface SourceItem {
  title: string;
  url: string;
  publisher?: string;
  dateAccessed?: string;
  // Source Quality Layer v1 fields (optional for backward compatibility)
  sourceType?: SourceType;
  reliability?: SourceReliability;
  /** What claim or section this source supports — displayed to readers */
  supports?: string;
}

// Alternative Record
export interface AlternativeRecord {
  name: string;
  slug: string;
  bestFor: string;
  status: ExtensionStatus;
  url?: string;
  chromeStoreUrl?: string;
  githubUrl?: string;
  pros: string[];
  cons: string[];
  note: string;
}

// At a Glance — summary fields for Top 5 pages
export interface AtAGlance {
  originalExtension: string;
  currentStatus: string;
  bestPracticalOption: string;
  bestForAdvancedUsers?: string;
  mainCaution: string;
}

// Decision Guide entry
export interface DecisionGuideItem {
  choose: string;
  when: string;
}

// Comparison Table Row
export interface ComparisonRow {
  option: string;
  bestFor: string;
  mv3Support: string;
  cost: string;
  openSource: string;
  setupDifficulty: string;
  mainTradeoff: string;
}

// Common Mistake
export interface CommonMistake {
  doNot: string;
  instead: string;
}

// Failed Fix entry — discriminated union
export type FailedFixEntry =
  | { tried: string; whyItFails?: string; saferAlternative?: string; doesNotWork?: never }
  | { doesNotWork: string; tried?: never; whyItFails?: never; saferAlternative?: never };

// Extension Record
export interface ExtensionRecord {
  slug: string;
  name: string;
  aliases: string[];
  category: string;
  summary: string;
  status: ExtensionStatus;
  riskLevel: RiskLevel;
  oldExtensionIds?: string[];
  currentExtensionIds?: string[];
  chromeStoreUrl?: string;
  officialUrl?: string;
  githubUrl?: string;
  issueSummary: string;
  metaDescription?: string;
  shortAnswer: string;
  whatHappened: string[];
  migrationSteps: string[];
  safetyNotes: string[];
  whatNotToDo?: string[];
  alternatives: AlternativeRecord[];
  faqs: FAQItem[];
  sources: SourceItem[];
  lastUpdated: string;
  // Top-5 enhanced fields (optional)
  atAGlance?: AtAGlance;
  decisionGuide?: DecisionGuideItem[];
  comparisonTable?: ComparisonRow[];
  commonMistakes?: CommonMistake[];
  // New enhanced sections
  keyTakeaways?: string[];
  currentStatus?: { label: string; value: string; variant?: 'good' | 'bad' | 'neutral' }[];
  commonFailedFixes?: FailedFixEntry[];
  relatedPages?: string[];
}

// Error Record
export interface ErrorRecord {
  slug: string;
  title: string;
  aliases: string[];
  shortAnswer: string;
  whyItHappens: string[];
  whatYouCanDo: string[];
  whatNotToDo: string[];
  relatedExtensionSlugs: string[];
  faqs: FAQItem[];
  sources: SourceItem[];
  lastUpdated: string;
  // Top-5 enhanced fields (optional)
  atAGlance?: AtAGlance;
  decisionGuide?: DecisionGuideItem[];
  comparisonTable?: ComparisonRow[];
  commonMistakes?: CommonMistake[];
  // New enhanced sections
  keyTakeaways?: string[];
  currentStatus?: { label: string; value: string; variant?: 'good' | 'bad' | 'neutral' }[];
  commonFailedFixes?: FailedFixEntry[];
  relatedPages?: string[];
}

// Search Result Types
export interface SearchResultItem {
  type: 'extension' | 'error' | 'landing';
  slug: string;
  title: string;
  subtitle: string;
  shortAnswer: string;
  status?: ExtensionStatus;
  score: number;
  url: string;
}

export interface SearchResults {
  exactMatches: SearchResultItem[];
  fuzzyMatches: SearchResultItem[];
  errorMatches: SearchResultItem[];
  suggestions: string[];
}

// Site Config
export interface SiteConfig {
  name: string;
  domain: string;
  description: string;
  h1: string;
  tagline: string;
  searchPlaceholder: string;
  ctas: {
    label: string;
    href: string;
  }[];
  trustPoints: string[];
  disclaimer: string;
}

// Landing Page Types
export interface LandingPageSection {
  type: 'text' | 'list' | 'table' | 'callout' | 'comparison';
  title?: string;
  content?: string;
  items?: string[];
  columns?: string[];
  rows?: string[][];
  variant?: 'info' | 'warning' | 'success';
}

export interface LandingPageRecord {
  slug: string;
  title: string;
  description: string;
  h1: string;
  shortAnswer: string;
  aliases: string[];
  sections: LandingPageSection[];
  faqs: FAQItem[];
  sources: SourceItem[];
  lastUpdated: string;
  relatedLinks: { label: string; href: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bestOptions?: { label: string; description: string }[];
  // Allows landing page records to be categorized as guide/collection for route wiring
  templateType?: 'guide' | 'collection';
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
