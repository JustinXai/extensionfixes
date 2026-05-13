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
};

export default function AlternativesPage() {
  const categories = [...new Set(extensions.map((ext) => ext.category))];

  return (
    <Container>
      <section className="py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Chrome Extension Alternatives
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Browse replacement options for unsupported, removed, or outdated browser extensions.
          </p>
          <div className="mt-6">
            <Link
              href="/tools/extension-search"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Search Extensions
            </Link>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-6 text-xl font-semibold text-slate-900">{category}</h2>
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
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {extension.name}
                          </h3>
                          <p className="mt-1 text-sm text-slate-500">{extension.category}</p>
                        </div>
                        <StatusBadge status={extension.status} />
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
    </Container>
  );
}
