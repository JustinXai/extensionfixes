import type { Metadata } from 'next';
import Link from 'next/link';
import { errors } from '@/data/errors';
import { extensions } from '@/data/extensions';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Chrome Extension Fix Guides | Extension Fixes',
  description:
    'Guides for fixing unsupported Chrome extensions, Manifest V2 issues, disabled extensions, and removed extensions.',
  alternates: {
    canonical: 'https://extensionfixes.com/guides',
  },
};

function getRelatedExtensions(slugs: string[]) {
  return extensions.filter((ext) => slugs.includes(ext.slug));
}

export default function GuidesPage() {
  return (
    <Container>
      <section className="py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Chrome Extension Fix Guides
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Understand why Chrome extensions stop working and what you can safely do next.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {errors.map((error) => {
            const relatedExtensions = getRelatedExtensions(error.relatedExtensionSlugs);
            return (
              <div
                key={error.slug}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <Link href={`/fix/${error.slug}`}>
                      <h2 className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                        {error.title}
                      </h2>
                    </Link>
                    <p className="mt-2 text-sm text-slate-600">{error.shortAnswer}</p>

                    {relatedExtensions.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                          Related Extensions
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {relatedExtensions.map((ext) => (
                            <Link
                              key={ext.slug}
                              href={`/alternatives/${ext.slug}`}
                              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-gray-200 transition-colors"
                            >
                              {ext.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <Link
                      href={`/fix/${error.slug}`}
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Read guide
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
