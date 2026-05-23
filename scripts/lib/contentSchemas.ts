/**
 * Content Data Schemas
 *
 * Provides:
 * - Zod schemas for each content templateType
 * - countWords(text) utility
 * - forbiddenClaims list
 * - validateField helper
 *
 * These schemas are used by scripts/validate-content-data.mjs to
 * validate all content data files.
 *
 * Note: This file is infrastructure for the content validation pipeline.
 * It is NOT used by page components or route files.
 */

import { z } from 'zod';

// ── Utilities ────────────────────────────────────────────────────────────────

export function countWords(text: string | null | undefined): number {
  if (!text || typeof text !== 'string') return 0;
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

// ── Forbidden Claims ──────────────────────────────────────────────────────────

export const FORBIDDEN_CLAIMS = [
  'official successor',
  'safest',
  'guaranteed fix',
  'feature parity',
  'full feature parity',
  'fully equivalent',
  'equivalent replacement',
  'privacy-conscious',
  'full open-source transparency',
  'random CRX as a recommended step',
  'AI Summary',
  'Summary for AI Assistants',
] as const;

/** Returns an array of forbidden phrases found in the given text. */
export function findForbiddenClaims(text: string | null | undefined): string[] {
  if (!text || typeof text !== 'string') return [];
  const lower = text.toLowerCase();
  return FORBIDDEN_CLAIMS.filter(p => lower.includes(p));
}

// ── Shared Field Schemas ──────────────────────────────────────────────────────

export const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.string().min(1).optional(),
  publisher: z.string().optional(),
  dateAccessed: z.string().optional(),
  sourceType: z.string().optional(),
  reliability: z.string().optional(),
  supports: z.string().optional(),
});

export const relatedPageSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  href: z.string().optional(),
  label: z.string().optional(),
});

export const failedFixEntrySchema = z.union([
  z.object({
    tried: z.string().min(1),
    whyItFails: z.string().optional(),
    saferAlternative: z.string().optional(),
  }),
  z.object({
    doesNotWork: z.string().min(1),
  }),
]);

// ── Per-Template Schemas ─────────────────────────────────────────────────────

/** Alternative (from extensions.ts) */
export const alternativeSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  shortAnswer: z.string(),
  faqs: z.array(faqSchema).min(5),
  sources: z.array(sourceSchema).min(2),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD'),
  keyTakeaways: z.array(z.string()).optional(),
  currentStatus: z.array(z.object({
    label: z.string(),
    value: z.string(),
    variant: z.enum(['good', 'bad', 'neutral']).optional(),
  })).optional(),
  commonFailedFixes: z.array(failedFixEntrySchema).optional(),
  relatedPages: z.array(relatedPageSchema).optional(),
});

/** Fix (from errors.ts) */
export const fixSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortAnswer: z.string(),
  faqs: z.array(faqSchema).min(5),
  sources: z.array(sourceSchema).min(2),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD'),
  keyTakeaways: z.array(z.string()).optional(),
  currentStatus: z.array(z.object({
    label: z.string(),
    value: z.string(),
    variant: z.enum(['good', 'bad', 'neutral']).optional(),
  })).optional(),
  commonFailedFixes: z.array(failedFixEntrySchema).optional(),
  relatedPages: z.array(relatedPageSchema).optional(),
});

/** Guide (from landingPages.ts with templateType=guide) */
export const guideSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortAnswer: z.string(),
  faqs: z.array(faqSchema).min(5),
  sources: z.array(sourceSchema).min(2),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD'),
  keyTakeaways: z.array(z.string()).optional(),
  currentStatus: z.array(z.object({
    label: z.string(),
    value: z.string(),
    variant: z.enum(['good', 'bad', 'neutral']).optional(),
  })).optional(),
  relatedPages: z.array(relatedPageSchema).min(2).optional(),
});

/** Collection (from landingPages.ts with templateType=collection) */
export const collectionSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortAnswer: z.string(),
  faqs: z.array(faqSchema).min(5),
  sources: z.array(sourceSchema).min(2),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD'),
  selectionCriteria: z.array(z.string()).optional(),
  options: z.array(z.any()).optional(),
  comparisonTable: z.array(z.any()).optional(),
  relatedPages: z.array(relatedPageSchema).min(2).optional(),
});

/** Comparison (from comparisons.ts) */
export const comparisonSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  quickAnswer: z.string(),
  verdict: z.string().optional(),
  comparedItems: z.array(z.string()).optional(),
  keyDifferences: z.array(z.string()).optional(),
  comparisonTable: z.array(z.any()).optional(),
  decisionGuide: z.array(z.any()).optional(),
  faqs: z.array(faqSchema).min(5),
  sources: z.array(sourceSchema).min(2),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD'),
  commonFailedFixes: z.array(failedFixEntrySchema).optional(),
  relatedPages: z.array(relatedPageSchema).min(2).optional(),
});

// ── Schema Registry ─────────────────────────────────────────────────────────

export const schemasByType = {
  alternative: alternativeSchema,
  fix: fixSchema,
  guide: guideSchema,
  collection: collectionSchema,
  comparison: comparisonSchema,
} as const;

export type TemplateType = keyof typeof schemasByType;

// ── Minimum counts by template type ──────────────────────────────────────────

export interface TemplateMinFields {
  keyTakeaways?: number;
  currentStatus?: number;
  commonFailedFixes?: number;
  relatedPages?: number;
  selectionCriteria?: number;
  options?: number;
  comparisonTable?: number;
  verdict?: number;
  comparedItems?: number;
  keyDifferences?: number;
  decisionGuide?: number;
}

export const TEMPLATE_MIN_FIELDS: Record<TemplateType, TemplateMinFields> = {
  alternative: {
    keyTakeaways: 3,
    currentStatus: 3,
    commonFailedFixes: 3,
  },
  fix: {
    keyTakeaways: 3,
    currentStatus: 3,
    commonFailedFixes: 3,
  },
  guide: {
    keyTakeaways: 3,
    currentStatus: 3,
    relatedPages: 2,
  },
  comparison: {
    verdict: 1,
    comparedItems: 2,
    keyDifferences: 3,
    comparisonTable: 3,
    decisionGuide: 3,
    relatedPages: 2,
  },
  collection: {
    selectionCriteria: 3,
    options: 3,
    comparisonTable: 3,
    relatedPages: 2,
  },
};
