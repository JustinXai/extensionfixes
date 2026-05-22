import type { Metadata } from 'next';
import Link from 'next/link';
import { extensions } from '@/data/extensions';
import { errors } from '@/data/errors';
import { landingPages } from '@/data/landingPages';
import { comparisons } from '@/data/comparisons';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Sitemap | Extension Fixes',
  description:
    'Browse all fix guides, extension alternatives, tools, and reference pages on Extension Fixes.',
  alternates: {
    canonical: 'https://extensionfixes.com/sitemap',
  },
  openGraph: {
    title: 'Sitemap | Extension Fixes',
    description: 'Browse all pages on Extension Fixes.',
    url: 'https://extensionfixes.com/sitemap',
    siteName: 'Extension Fixes',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sitemap | Extension Fixes',
    description: 'Browse all pages on Extension Fixes.',
  },
};

const pageCategories = [
  { label: 'Fix Guides', href: '/guides' },
  { label: 'Extension Alternatives', href: '/alternatives' },
  { label: 'Tools', href: '/tools/extension-search' },
  { label: 'Error Messages', href: '/chrome-extension-error-messages' },
];

export default function SitemapPage() {
  return (
    <Container>
      {/* Quick Answer */}
      <section className="py-8 border-b border-gray-200">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
            Quick Answer
          </h2>
          <p className="text-slate-700 leading-relaxed">
            This page lists the main Chrome extension fix guides, alternatives, tools, and reference pages available on Extension Fixes. Use the links below to navigate directly to the section you need.
          </p>
        </div>
      </section>

      <section className="py-12">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-8">
          Extension Fixes Sitemap
        </h1>

        {/* Category nav */}
        <nav className="flex flex-wrap gap-3 mb-12" aria-label="Page categories">
          {pageCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Extension Fix Guides */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">1</span>
              Extension Fix Guides
            </h2>
            <div className="space-y-4">
              {errors.map((error) => (
                <Link
                  key={error.slug}
                  href={`/fix/${error.slug}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        {error.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 line-clamp-2">{error.shortAnswer}</p>
                      <p className="mt-2 text-xs text-slate-400">Last reviewed: {error.lastUpdated}</p>
                    </div>
                    <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Extension Alternatives */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-medium">2</span>
              Extension Alternatives
            </h2>
            <div className="space-y-4">
              {extensions.map((ext) => (
                <Link
                  key={ext.slug}
                  href={`/alternatives/${ext.slug}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        {ext.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{ext.category}</p>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">{ext.shortAnswer}</p>
                      <p className="mt-2 text-xs text-slate-400">Last reviewed: {ext.lastUpdated}</p>
                    </div>
                    <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm font-medium">3</span>
              Tools
            </h2>
            <div className="space-y-4">
              <Link
                href="/tools/extension-search"
                className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      Extension Search Tool
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Tool</p>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      Search by extension name, Chrome Web Store URL, or extension ID to find current Chrome status, related fix guides, and alternatives.
                    </p>
                  </div>
                  <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Comparisons */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">4</span>
              Comparisons
            </h2>
            <div className="space-y-4">
              <Link
                href="/comparisons"
                className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      All Comparisons
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Hub</p>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      Side-by-side comparisons of Chrome extension alternatives.
                    </p>
                  </div>
                  <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
              {comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/comparisons/${comp.slug}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        {comp.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">{comp.metaDescription}</p>
                      <p className="mt-2 text-xs text-slate-400">Last reviewed: {comp.lastUpdated}</p>
                    </div>
                    <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Guides & Hubs */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm font-medium">5</span>
              Guides &amp; Hubs
            </h2>
            <div className="space-y-4">
              <Link
                href="/chrome-extension-error-messages"
                className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      Chrome Extension Error Messages
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Hub</p>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      Reference list of common Chrome extension warnings and errors, with explanations and next steps.
                    </p>
                  </div>
                  <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/alternatives"
                className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      All Extension Alternatives
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Hub</p>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      Browse all extension alternatives organized by category. Find MV3-compatible replacements for affected extensions.
                    </p>
                  </div>
                  <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/guides"
                className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      All Fix Guides
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Hub</p>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                      Full list of extension fix guides covering MV2 deprecation, Chrome warnings, and store removals.
                    </p>
                  </div>
                  <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
              {landingPages.slice(0, 3).map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        {page.h1}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">{page.shortAnswer}</p>
                      <p className="mt-2 text-xs text-slate-400">Last reviewed: {page.lastUpdated}</p>
                    </div>
                    <svg className="h-4 w-4 flex-shrink-0 text-slate-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
