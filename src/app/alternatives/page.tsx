import type { Metadata } from 'next';
import Link from 'next/link';
import { extensions } from '@/data/extensions';
import { StatusBadge } from '@/components/StatusBadge';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Chrome Extension Alternatives for MV3 | Extension Fixes',
  description:
    'Browse maintained alternatives for Chrome extensions affected by Manifest V2, store removals, or discontinued development.',
  alternates: {
    canonical: 'https://extensionfixes.com/alternatives',
  },
  openGraph: {
    title: 'Chrome Extension Alternatives | Extension Fixes',
    description:
      'Browse MV3-compatible and actively maintained alternatives for Chrome extensions affected by Manifest V2, store removals, or discontinued development.',
    url: 'https://extensionfixes.com/alternatives',
    siteName: 'Extension Fixes',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Chrome Extension Alternatives | Extension Fixes',
    description: 'Browse MV3-compatible alternatives for affected Chrome extensions.',
  },
};

export default function AlternativesPage() {
  const categories = [...new Set(extensions.map((ext) => ext.category))];

  return (
    <Container>
      {/* Quick Answer */}
      <section className="py-8 border-b border-gray-200">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
            Quick Answer
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Browse maintained alternatives for Chrome extensions that have been disabled, removed, or affected by the Manifest V2 phaseout. Each page covers why the original stopped working, practical replacement options, migration steps, and safety notes. Use the search tool if you know the extension name.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/extension-search"
              className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Search an extension
            </Link>
            <Link
              href="/fix/manifest-v2-disabled"
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors"
            >
              MV2/MV3 context
            </Link>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 border-b border-gray-200">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Chrome Extension Alternatives
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Compare MV3-compatible, maintained, and community-maintained alternatives for extensions affected by Chrome changes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/extension-search"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Search Extensions
            </Link>
            <Link
              href="/sitemap"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50"
            >
              Browse all pages
            </Link>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section className="py-16">
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-6 text-xl font-semibold text-slate-900 border-l-4 border-blue-500 pl-4">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {extensions
                  .filter((ext) => ext.category === category)
                  .map((extension) => (
                    <Link
                      key={extension.slug}
                      href={`/alternatives/${extension.slug}`}
                      className="group block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {extension.name}
                            </h3>
                            <StatusBadge status={extension.status} />
                          </div>
                          <p className="mt-1 text-xs text-slate-400">Last reviewed: {extension.lastUpdated}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                        {extension.shortAnswer}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                        View alternatives
                        <svg
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="py-12 border-t border-gray-200">
        <div className="rounded-xl border border-gray-200 bg-slate-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-slate-600 mb-6">Search by extension name, Chrome Web Store URL, or extension ID.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/extension-search"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Search Extensions
            </Link>
            <Link
              href="/chrome-extension-error-messages"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50"
            >
              Browse error messages
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
