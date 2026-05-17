'use client';

import { useState, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { StatusBadge } from '@/components/StatusBadge';
import { searchAll } from '@/lib/search';
import type { SearchResults } from '@/lib/types';

const popularWarnings = [
  { label: 'This extension was turned off because it is no longer supported', href: '/this-extension-was-turned-off-because-it-is-no-longer-supported' },
  { label: 'This extension may soon no longer be supported', href: '/this-extension-may-soon-no-longer-be-supported' },
  { label: 'Manifest V2 disabled', href: '/fix/manifest-v2-disabled' },
  { label: 'Chrome disabled my extension', href: '/fix/chrome-disabled-extension' },
  { label: 'Cannot install extension unsupported manifest', href: '/fix/manifest-v2-disabled' },
  { label: 'FoxyProxy alternative for Chrome', href: '/foxyproxy-alternative-for-chrome' },
  { label: 'The Great Suspender malware', href: '/the-great-suspender-malware' },
  { label: 'uBlock Origin Lite', href: '/ublock-origin-no-longer-supported' },
];

function SearchResults({ query }: { query: string }) {
  const results = useMemo(() => searchAll(query), [query]);

  const hasResults = results.exactMatches.length > 0 || results.fuzzyMatches.length > 0;

  if (!hasResults) {
    return (
      <div className="mt-12">
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No exact match yet</h3>
          <p className="mt-2 text-gray-600">
            Try searching by extension name, Chrome Web Store URL, extension ID, or the warning message shown in Chrome.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/chrome-extension-error-messages"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Browse error messages
            </Link>
            <Link
              href="/alternatives"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Browse alternatives
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 space-y-8">
      {results.exactMatches.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Exact Matches</h2>
          <div className="space-y-4">
            {results.exactMatches.map((result, index) => (
              <Link
                key={`${result.type}-${result.slug}-${index}`}
                href={result.url}
                className="block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        {result.type === 'extension' ? 'Extension' : result.type === 'landing' ? 'Guide' : 'Fix Guide'}
                      </span>
                      {result.status && <StatusBadge status={result.status} />}
                    </div>
                    <h3 className="mt-2 font-semibold text-gray-900">{result.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{result.subtitle}</p>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{result.shortAnswer}</p>
                  </div>
                  <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {results.fuzzyMatches.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Related Results</h2>
          <div className="space-y-4">
            {results.fuzzyMatches.map((result, index) => (
              <Link
                key={`${result.type}-${result.slug}-fuzzy-${index}`}
                href={result.url}
                className="block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                        {result.type === 'extension' ? 'Extension' : result.type === 'landing' ? 'Guide' : 'Fix Guide'}
                      </span>
                      {result.status && <StatusBadge status={result.status} />}
                    </div>
                    <h3 className="mt-2 font-semibold text-gray-900">{result.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{result.subtitle}</p>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{result.shortAnswer}</p>
                  </div>
                  <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PopularWarnings({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="mt-12">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Popular Warning Messages</h2>
      <div className="flex flex-wrap gap-2">
        {popularWarnings.map((warning) => (
          <button
            key={warning.href}
            onClick={() => onSearch(warning.label)}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {warning.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Or{' '}
        <Link href="/chrome-extension-error-messages" className="text-blue-600 hover:text-blue-800">
          browse all warning messages
        </Link>
      </p>
    </div>
  );
}

function PopularExtensions() {
  return (
    <div className="mt-12">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Popular Extensions</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/alternatives/switchyomega"
          className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">Proxy SwitchyOmega</h3>
          <p className="mt-1 text-sm text-gray-600">
            Affected by MV2 deprecation. Find ZeroOmega and FoxyProxy alternatives.
          </p>
        </Link>
        <Link
          href="/alternatives/ublock-origin"
          className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">uBlock Origin</h3>
          <p className="mt-1 text-sm text-gray-600">
            MV2 affected. Try uBlock Origin Lite or other MV3-compatible ad blockers.
          </p>
        </Link>
        <Link
          href="/alternatives/great-suspender"
          className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">The Great Suspender</h3>
          <p className="mt-1 text-sm text-gray-600">
            Removed from Chrome Web Store. Use Chrome Memory Saver or Auto Tab Discard.
          </p>
        </Link>
        <Link
          href="/alternatives/modheader"
          className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
        >
          <h3 className="font-semibold text-gray-900">ModHeader</h3>
          <p className="mt-1 text-sm text-gray-600">
            Active MV3 extension. Explore Requestly or Header Editor alternatives.
          </p>
        </Link>
      </div>
    </div>
  );
}

function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/tools/extension-search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  const handleWarningClick = (warningLabel: string) => {
    setInputValue(warningLabel);
    router.push(`/tools/extension-search?q=${encodeURIComponent(warningLabel)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Chrome Extension Search and Warning Lookup</h1>
          <p className="mt-3 text-gray-600">
            Search an extension name, Chrome Web Store URL, extension ID, or warning message.
          </p>
        </div>

        <div className="mt-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Paste a Chrome warning message, extension name, Web Store URL, or extension ID"
                className="block w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {query ? (
          <SearchResults query={query} />
        ) : (
          <>
            <PopularWarnings onSearch={handleWarningClick} />
            <PopularExtensions />
          </>
        )}
      </div>
    </div>
  );
}

export default function ExtensionSearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </div>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
