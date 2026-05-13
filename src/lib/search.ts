import type { SearchResultItem, SearchResults } from './types';
import { extensions } from '@/data/extensions';
import { errors } from '@/data/errors';
import { landingPages } from '@/data/landingPages';

/**
 * Extract extension ID from Chrome Web Store URL
 * URL format: https://chromewebstore.google.com/detail/extension-name/EXTENSION_ID
 */
function extractExtensionId(input: string): string | null {
  const match = input.match(/\/detail\/[^\/]+\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Normalize search query for comparison
 */
function normalizeQuery(query: string): string {
  return query.toLowerCase().trim();
}

/**
 * Calculate match score for a search term against an extension
 */
function calculateExtensionScore(
  extension: (typeof extensions)[0],
  query: string,
  normalizedQuery: string
): number {
  let score = 0;

  // Slug exact match: 100
  if (extension.slug === normalizedQuery) {
    score = Math.max(score, 100);
  }

  // Name exact match: 90
  if (extension.name.toLowerCase() === normalizedQuery) {
    score = Math.max(score, 90);
  }

  // Alias exact match: 85
  if (extension.aliases.some((alias) => alias.toLowerCase() === normalizedQuery)) {
    score = Math.max(score, 85);
  }

  // Extension ID match: 95
  if (
    extension.oldExtensionIds?.some((id) => id === query) ||
    extension.currentExtensionIds?.some((id) => id === query)
  ) {
    score = Math.max(score, 95);
  }

  // Name includes query: 70
  if (extension.name.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 70);
  }

  // Alias includes query: 60
  if (extension.aliases.some((alias) => alias.toLowerCase().includes(normalizedQuery))) {
    score = Math.max(score, 60);
  }

  // Category includes query: 40
  if (extension.category.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 40);
  }

  // Issue summary includes query: 40
  if (extension.issueSummary.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 40);
  }

  // Short answer includes query: 30
  if (extension.shortAnswer.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 30);
  }

  return score;
}

/**
 * Calculate match score for a search term against an error record
 */
function calculateErrorScore(
  error: (typeof errors)[0],
  query: string,
  normalizedQuery: string
): number {
  let score = 0;

  // Slug exact match: 100
  if (error.slug === normalizedQuery) {
    score = Math.max(score, 100);
  }

  // Title exact match: 90
  if (error.title.toLowerCase() === normalizedQuery) {
    score = Math.max(score, 90);
  }

  // Alias exact match: 80
  if (error.aliases.some((alias) => alias.toLowerCase() === normalizedQuery)) {
    score = Math.max(score, 80);
  }

  // Title includes query: 70
  if (error.title.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 70);
  }

  // Alias includes query: 60
  if (error.aliases.some((alias) => alias.toLowerCase().includes(normalizedQuery))) {
    score = Math.max(score, 60);
  }

  // Short answer includes query: 40
  if (error.shortAnswer.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 40);
  }

  return score;
}

/**
 * Calculate match score for a search term against a landing page
 */
function calculateLandingPageScore(
  page: (typeof landingPages)[0],
  query: string,
  normalizedQuery: string
): number {
  let score = 0;

  // Slug exact match: 100
  if (page.slug === normalizedQuery) {
    score = Math.max(score, 100);
  }

  // Title exact match: 90
  if (page.title.toLowerCase() === normalizedQuery) {
    score = Math.max(score, 90);
  }

  // Alias exact match: 85
  if (page.aliases.some((alias) => alias.toLowerCase() === normalizedQuery)) {
    score = Math.max(score, 85);
  }

  // Title includes query: 70
  if (page.title.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 70);
  }

  // Alias includes query: 60
  if (page.aliases.some((alias) => alias.toLowerCase().includes(normalizedQuery))) {
    score = Math.max(score, 60);
  }

  // Short answer includes query: 40
  if (page.shortAnswer.toLowerCase().includes(normalizedQuery)) {
    score = Math.max(score, 40);
  }

  return score;
}

/**
 * Perform a comprehensive search across extensions, errors, and landing pages
 */
export function searchAll(query: string): SearchResults {
  const normalizedQuery = normalizeQuery(query);

  // Extract extension ID if query is a Chrome Web Store URL
  const extensionIdFromUrl = extractExtensionId(query);

  const extensionResults: SearchResultItem[] = [];
  const errorResults: SearchResultItem[] = [];
  const landingPageResults: SearchResultItem[] = [];
  const suggestions: string[] = [];

  // Search extensions
  for (const extension of extensions) {
    // Check if extension ID from URL matches
    if (
      extensionIdFromUrl &&
      (extension.oldExtensionIds?.includes(extensionIdFromUrl) ||
        extension.currentExtensionIds?.includes(extensionIdFromUrl))
    ) {
      extensionResults.push({
        type: 'extension',
        slug: extension.slug,
        title: extension.name,
        subtitle: extension.category,
        shortAnswer: extension.shortAnswer,
        status: extension.status,
        score: 95,
        url: `/alternatives/${extension.slug}`,
      });
      continue;
    }

    const score = calculateExtensionScore(extension, query, normalizedQuery);

    if (score > 0) {
      extensionResults.push({
        type: 'extension',
        slug: extension.slug,
        title: extension.name,
        subtitle: extension.category,
        shortAnswer: extension.shortAnswer,
        status: extension.status,
        score,
        url: `/alternatives/${extension.slug}`,
      });
    }

    // Collect suggestions from name and aliases
    if (
      extension.name.toLowerCase().includes(normalizedQuery) ||
      extension.aliases.some((alias) => alias.toLowerCase().includes(normalizedQuery))
    ) {
      if (!suggestions.includes(extension.name)) {
        suggestions.push(extension.name);
      }
    }
  }

  // Search errors
  for (const error of errors) {
    const score = calculateErrorScore(error, query, normalizedQuery);

    if (score > 0) {
      errorResults.push({
        type: 'error',
        slug: error.slug,
        title: error.title,
        subtitle: 'Fix Guide',
        shortAnswer: error.shortAnswer,
        score,
        url: `/fix/${error.slug}`,
      });
    }

    // Collect suggestions from title and aliases
    if (
      error.title.toLowerCase().includes(normalizedQuery) ||
      error.aliases.some((alias) => alias.toLowerCase().includes(normalizedQuery))
    ) {
      if (!suggestions.includes(error.title)) {
        suggestions.push(error.title);
      }
    }
  }

  // Search landing pages
  for (const page of landingPages) {
    const score = calculateLandingPageScore(page, query, normalizedQuery);

    if (score > 0) {
      landingPageResults.push({
        type: 'landing',
        slug: page.slug,
        title: page.h1,
        subtitle: 'Guide',
        shortAnswer: page.shortAnswer,
        score,
        url: `/${page.slug}`,
      });
    }

    // Collect suggestions from title and aliases
    if (
      page.title.toLowerCase().includes(normalizedQuery) ||
      page.aliases.some((alias) => alias.toLowerCase().includes(normalizedQuery))
    ) {
      if (!suggestions.includes(page.h1)) {
        suggestions.push(page.h1);
      }
    }
  }

  // Sort by score
  extensionResults.sort((a, b) => b.score - a.score);
  errorResults.sort((a, b) => b.score - a.score);
  landingPageResults.sort((a, b) => b.score - a.score);

  // Separate exact matches (score >= 80) from fuzzy matches
  const exactMatches = [
    ...extensionResults.filter((r) => r.score >= 80),
    ...landingPageResults.filter((r) => r.score >= 80),
    ...errorResults.filter((r) => r.score >= 80),
  ];
  const fuzzyMatches = [
    ...extensionResults.filter((r) => r.score >= 30 && r.score < 80),
    ...landingPageResults.filter((r) => r.score >= 30 && r.score < 80),
    ...errorResults.filter((r) => r.score >= 30 && r.score < 80),
  ];

  // Limit suggestions
  const limitedSuggestions = suggestions.slice(0, 5);

  return {
    exactMatches,
    fuzzyMatches,
    errorMatches: errorResults,
    suggestions: limitedSuggestions,
  };
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(query: string): string[] {
  if (!query || query.length < 2) return [];

  const normalizedQuery = normalizeQuery(query);
  const suggestions: string[] = [];

  // Add matching extension names
  for (const ext of extensions) {
    if (ext.name.toLowerCase().includes(normalizedQuery)) {
      suggestions.push(ext.name);
    }
    for (const alias of ext.aliases) {
      if (alias.toLowerCase().includes(normalizedQuery) && !suggestions.includes(alias)) {
        suggestions.push(alias);
      }
    }
  }

  // Add matching error titles
  for (const err of errors) {
    if (err.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.push(err.title);
    }
  }

  return suggestions.slice(0, 8);
}
