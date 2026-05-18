'use client';

import { useState, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { StatusBadge } from '@/components/StatusBadge';
import { searchAll } from '@/lib/search';
import type { SearchResultItem } from '@/lib/types';
import { extensions } from '@/data/extensions';
import { errors } from '@/data/errors';

const HOT_SEARCHES = [
  'uBlock Origin',
  'Proxy SwitchyOmega',
  'Tampermonkey',
  'FoxyProxy',
  'Video DownloadHelper',
  'This extension is no longer supported',
  'Chrome extension disabled',
];

const COMMON_PROBLEMS = [
  { label: 'This extension was turned off', href: '/fix/this-extension-is-no-longer-supported' },
  { label: 'Manifest V2 disabled', href: '/fix/manifest-v2-disabled' },
  { label: 'Extension removed from Web Store', href: '/fix/extension-removed-from-chrome-web-store' },
  { label: 'Chrome disabled my extension', href: '/fix/chrome-disabled-extension' },
];

const RECENTLY_REVIEWED = extensions.slice(0, 6).map((ext) => ({
  name: ext.name,
  slug: ext.slug,
  category: ext.category,
  status: ext.status,
  lastUpdated: ext.lastUpdated,
  shortAnswer: ext.shortAnswer,
  type: 'extension' as const,
}));

const POPULAR_ALTERNATIVES = [
  { name: 'uBlock Origin', slug: 'ublock-origin', category: 'Content Blocker', status: 'affected_by_mv2' as const },
  { name: 'Proxy SwitchyOmega', slug: 'proxy-switchyomega', category: 'Proxy Manager', status: 'affected_by_mv2' as const },
  { name: 'Tampermonkey', slug: 'tampermonkey', category: 'Script Manager', status: 'active_mv3' as const },
  { name: 'FoxyProxy', slug: 'foxyproxy', category: 'Proxy Manager', status: 'active_mv3' as const },
  { name: 'Auto Tab Discard', slug: 'auto-tab-discard', category: 'Tab Management', status: 'active_mv3' as const },
  { name: 'OneTab', slug: 'onetab', category: 'Tab Management', status: 'active_mv3' as const },
];

function getRecommendedAction(item: SearchResultItem): string {
  if (item.type === 'extension') {
    if (item.status === 'removed') return 'Do not install — use alternatives';
    if (item.status === 'affected_by_mv2') return 'Affected by Chrome 138 MV2 disable — check for MV3 update or alternatives';
    if (item.status === 'active_mv3') return 'Active and MV3-compatible — safe to install from Chrome Web Store';
    return 'Review current Chrome status before installing';
  }
  if (item.type === 'error') return 'Follow the guide to identify and resolve the issue';
  return 'Read the guide for practical steps';
}

function getRelatedFixSlug(item: SearchResultItem): { label: string; href: string } | null {
  if (item.type === 'extension') {
    const ext = extensions.find((e) => e.slug === item.slug);
    if (ext?.status === 'affected_by_mv2') return { label: 'Fix Guide', href: '/fix/manifest-v2-disabled' };
    if (ext?.status === 'removed') return { label: 'Why Removed?', href: '/fix/extension-removed-from-chrome-web-store' };
  }
  return null;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function ResultCard({ result, index }: { result: SearchResultItem; index: number }) {
  const recommended = getRecommendedAction(result);
  const relatedFix = getRelatedFixSlug(result);

  return (
    <Link
      key={`${result.type}-${result.slug}-${index}`}
      href={result.url}
      className="block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md hover:shadow-blue-100"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
              result.type === 'extension'
                ? 'bg-blue-50 text-blue-700'
                : result.type === 'error'
                ? 'bg-amber-50 text-amber-700'
                : 'bg-slate-50 text-slate-700'
            }`}>
              {result.type === 'extension' ? 'Extension' : result.type === 'landing' ? 'Guide' : 'Fix Guide'}
            </span>
            {result.status && <StatusBadge status={result.status} />}
            <span className="text-xs text-gray-400">{result.subtitle}</span>
          </div>

          <h3 className="mt-2 font-semibold text-gray-900 text-base">{result.title}</h3>

          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{result.shortAnswer}</p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
              recommended.includes('Do not install')
                ? 'bg-red-50 text-red-700'
                : recommended.includes('Affected')
                ? 'bg-amber-50 text-amber-700'
                : 'bg-green-50 text-green-700'
            }`}>
              {recommended.includes('Do not install') && (
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0a6 6 0 100 12A6 6 0 006 0zM5.25 3.5h1.5v3.75h-1.5V3.5zm0 5h1.5v1.5h-1.5V8.5z"/></svg>
              )}
              {recommended.includes('Affected') && (
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0a6 6 0 100 12A6 6 0 006 0zm.75 9H5.25V5.25h1.5V9zm0-5.5H5.25v-1.5h1.5v1.5z"/></svg>
              )}
              {recommended.includes('Active') && (
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M6 10a4 4 0 100-8 4 4 0 000 8zm.75-5.5H5.25v-1.5h1.5v1.5z"/></svg>
              )}
              {recommended.includes('Review') && (
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M6 0a6 6 0 100 12A6 6 0 006 0zm.75 9H5.25V5.25h1.5V9zm0-5.5H5.25v-1.5h1.5v1.5z"/></svg>
              )}
              {recommended.includes('Follow') && (
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M6 10a4 4 0 100-8 4 4 0 000 8zm.75-5.5H5.25V5.25h1.5v1.5z"/></svg>
              )}
              {recommended.includes('Read') && (
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor"><path d="M6 10a4 4 0 100-8 4 4 0 000 8zm.75-5.5H5.25V5.25h1.5v1.5z"/></svg>
              )}
              {recommended}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          {relatedFix && (
            <span className="text-xs text-blue-600">{relatedFix.label}</span>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
        <span>Last reviewed: {result.url.includes('/alternatives/') || result.url.includes('/fix/') ? formatDate(extensions.find(e => e.slug === result.slug)?.lastUpdated || errors.find(e => e.slug === result.slug)?.lastUpdated || '2026-05-01') : '—'}</span>
        <Link href={result.url} className="ml-auto font-medium text-blue-600 hover:text-blue-800">
          View page →
        </Link>
      </div>
    </Link>
  );
}

// ── Static hero (no hooks — renders in static HTML) ────────────────────────────

function ExtensionSearchHero() {
  return (
    <>
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Find Chrome Extension Fixes and MV3 Alternatives
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Search an extension name, warning message, or Chrome extension problem.
        </p>
      </div>

      {/* Search box — prominent */}
      <div className="mt-8">
        <SearchBox />
      </div>
    </>
  );
}

function SearchBox() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/tools/extension-search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Paste a Chrome warning message, extension name, or problem..."
          className="block w-full rounded-2xl border-2 border-gray-200 bg-white py-5 pl-14 pr-36 text-lg text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
          autoFocus={false}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Search
        </button>
      </div>

      {/* Hot search chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2 px-1">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Popular:</span>
        {HOT_SEARCHES.map((s) => (
          <button
            key={s}
            onClick={() => {
              setInputValue(s);
              router.push(`/tools/extension-search?q=${encodeURIComponent(s)}`);
            }}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {s}
          </button>
        ))}
      </div>
    </form>
  );
}

// ── Dynamic results (uses useSearchParams — must be inside Suspense) ───────────

// ── Dynamic results (uses useSearchParams — must be inside Suspense) ───────────

function SearchResultsSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const queryResults = useMemo(() => {
    if (!query) return null;
    return searchAll(query);
  }, [query]);

  const totalResults = (queryResults?.exactMatches.length ?? 0) + (queryResults?.fuzzyMatches.length ?? 0);

  if (query) {
    return (
      <div className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {totalResults > 0
              ? `${totalResults} result${totalResults !== 1 ? 's' : ''} for "${query}"`
              : `No results for "${query}"`}
          </h2>
          <button
            onClick={() => router.push('/tools/extension-search')}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Clear search
          </button>
        </div>
        {totalResults > 0 ? (
          <div className="space-y-4">
            {[...(queryResults?.exactMatches ?? []), ...(queryResults?.fuzzyMatches ?? [])].map((result, i) => (
              <ResultCard key={`${result.type}-${result.slug}-${i}`} result={result} index={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <p className="text-gray-500">Try searching for an extension name or error message.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <PopularAlternativesSection />
      <CommonProblemsSection />
      <RecentlyReviewedSection />
    </>
  );
}

// ── Static section components ───────────────────────────────────────────────────

function PopularAlternativesSection() {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">Popular Extension Alternatives</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_ALTERNATIVES.map((alt) => (
          <Link
            key={alt.slug}
            href={`/alternatives/${alt.slug}`}
            className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900 text-sm truncate">{alt.name}</h3>
                <StatusBadge status={alt.status} />
              </div>
              <p className="mt-0.5 text-xs text-gray-500">{alt.category}</p>
            </div>
            <svg className="h-4 w-4 flex-shrink-0 text-gray-400 mt-0.5 group-hover:text-blue-600 transition-colors" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CommonProblemsSection() {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Common Chrome Extension Problems</h2>
      <div className="flex flex-wrap gap-2">
        {COMMON_PROBLEMS.map((prob) => (
          <Link
            key={prob.href}
            href={prob.href}
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800 transition-colors hover:border-amber-400 hover:bg-amber-100"
          >
            {prob.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function RecentlyReviewedSection() {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Recently Reviewed</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {RECENTLY_REVIEWED.map((ext) => (
          <Link
            key={ext.slug}
            href={`/alternatives/${ext.slug}`}
            className="group flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm transition-colors hover:border-gray-200 hover:bg-gray-50"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 truncate">{ext.name}</span>
                <StatusBadge status={ext.status} />
              </div>
              <span className="text-xs text-gray-400">{ext.category} · {formatDate(ext.lastUpdated)}</span>
            </div>
            <svg className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ── Root page component ────────────────────────────────────────────────────────

export default function ExtensionSearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Static hero: renders in HTML, h1 always present */}
        <ExtensionSearchHero />
        {/* Quick Answer */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
            Quick Answer
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Search for any Chrome extension name, warning message, or problem description to find relevant guides, alternatives, and practical next steps. No login or extension installation required.
          </p>
        </div>
        {/* Dynamic results: useSearchParams requires Suspense */}
        <Suspense fallback={
          <div className="mt-10 text-center text-gray-400">
            <div className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading...
            </div>
          </div>
        }>
          <SearchResultsSection />
        </Suspense>
      </div>
    </div>
  );
}
