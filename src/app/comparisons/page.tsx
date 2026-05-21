// /comparisons index page — lists all comparison pages.
import Link from 'next/link';
import type { Metadata } from 'next';
import { comparisons } from '@/data/comparisons';

export const metadata: Metadata = {
  title: 'Comparisons',
  description: 'Side-by-side comparisons of Chrome extensions and userscript managers.',
};

export default function ComparisonsPage() {
  if (comparisons.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Comparisons</h1>
        <p className="text-slate-600">Comparison pages are coming soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Extension Comparisons</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/comparisons/${c.slug}`}
            className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-colors"
          >
            <h2 className="font-semibold text-slate-900 mb-2">{c.title}</h2>
            <p className="text-sm text-slate-500 line-clamp-2">{c.metaDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
