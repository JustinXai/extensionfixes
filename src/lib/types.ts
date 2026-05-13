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

// Source Item
export interface SourceItem {
  title: string;
  url: string;
  publisher?: string;
  dateAccessed?: string;
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
  shortAnswer: string;
  whatHappened: string[];
  migrationSteps: string[];
  safetyNotes: string[];
  alternatives: AlternativeRecord[];
  faqs: FAQItem[];
  sources: SourceItem[];
  lastUpdated: string;
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
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
