import type { Metadata } from 'next';
import type { FAQItem } from './types';

/**
 * Create base metadata for a page
 */
export function createMetadata(config: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = `https://extensionfixes.com${config.path}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: config.title,
      description: config.description,
    },
  };
}

/**
 * Create JSON-LD FAQ schema
 */
export function createFAQSchema(faqs: FAQItem[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Create JSON-LD WebSite schema for search
 */
export function createWebsiteSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Extension Fixes',
    url: 'https://extensionfixes.com',
    description:
      'Find safe MV3 alternatives for Chrome extensions that are disabled, unsupported, removed, or no longer maintained.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://extensionfixes.com/tools/extension-search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return JSON.stringify(schema);
}

/**
 * Create enhanced JSON-LD TechArticle schema for article pages
 */
export function createTechArticleSchema(config: {
  title: string;
  description: string;
  url: string;
  lastUpdated: string;
  authorName?: string;
}): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: config.title,
    description: config.description,
    url: config.url,
    datePublished: config.lastUpdated,
    dateModified: config.lastUpdated,
    author: {
      '@type': 'Organization',
      name: config.authorName || 'Extension Fixes',
      url: 'https://extensionfixes.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Extension Fixes',
      url: 'https://extensionfixes.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': config.url,
    },
    about: {
      '@type': 'Thing',
      name: 'Chrome Extensions',
    },
    keywords: 'Chrome extension, MV3, Manifest V2, alternative, replacement',
  };

  return JSON.stringify(schema);
}

/**
 * Create JSON-LD Article schema for non-technical articles
 */
export function createArticleSchema(config: {
  title: string;
  description: string;
  url: string;
  lastUpdated: string;
}): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    url: config.url,
    datePublished: config.lastUpdated,
    dateModified: config.lastUpdated,
    author: {
      '@type': 'Organization',
      name: 'Extension Fixes',
      url: 'https://extensionfixes.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Extension Fixes',
      url: 'https://extensionfixes.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': config.url,
    },
  };

  return JSON.stringify(schema);
}

/**
 * Create JSON-LD HowTo schema for migration steps
 */
export function createHowToSchema(config: {
  title: string;
  steps: string[];
}): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.title,
    step: config.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step,
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Create JSON-LD breadcrumb schema
 */
export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Default metadata for the homepage
 */
export function getHomeMetadata(): Metadata {
  return createMetadata({
    title: 'Extension Fixes - Fix Unsupported Chrome Extensions',
    description:
      'Find safe MV3 alternatives for Chrome extensions that are disabled, unsupported, removed, or no longer maintained. No login, no tracking.',
    path: '/',
    keywords: [
      'chrome extension not working',
      'chrome extension disabled',
      'mv3 alternatives',
      'manifest v2 deprecated',
      'chrome extension replacement',
    ],
  });
}

/**
 * Metadata for extension alternative pages
 */
export function getAlternativeMetadata(config: {
  extensionName: string;
  category: string;
  shortAnswer: string;
}): Metadata {
  return createMetadata({
    title: `Best ${config.extensionName} Alternatives for Chrome MV3 | Extension Fixes`,
    description: `${config.shortAnswer} Find MV3-compatible ${config.category} alternatives for Chrome.`,
    path: '/alternatives',
    keywords: [
      `${config.extensionName} alternative`,
      `${config.extensionName} chrome`,
      'mv3 alternative',
      `${config.category.toLowerCase()} chrome extension`,
    ],
  });
}

/**
 * Metadata for fix guide pages
 */
export function getFixMetadata(config: {
  title: string;
  shortAnswer: string;
}): Metadata {
  return createMetadata({
    title: `${config.title} | Extension Fixes`,
    description: config.shortAnswer,
    path: '/fix',
    keywords: [
      'chrome extension fix',
      'chrome extension not supported',
      'extension troubleshooting',
    ],
  });
}
