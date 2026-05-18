import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getErrorBySlug } from '@/data/errors';
import { getExtensionBySlug } from '@/data/extensions';
import { ExtensionCard } from '@/components/ExtensionCard';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { createFAQSchema, createBreadcrumbSchema, createTechArticleSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const pageMeta: Record<string, { title: string; description: string; quickAnswer: string }> = {
  'extension-removed-from-chrome-web-store': {
    title: 'Chrome Extension Removed from Web Store: What to Do Next',
    description:
      'Chrome removed an extension from the Web Store? Learn why extensions get removed, whether it is safe to keep using them, and how to find maintained alternatives.',
    quickAnswer:
      'Chrome removes extensions from the Web Store for policy violations, developer request, or malware detection. Do not install unofficial copies of removed extensions. Check for official alternatives, community forks, or browser-native features as your next step.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const error = getErrorBySlug(slug);
  if (!error) return { title: 'Not Found' };

  const meta = pageMeta[slug] || { title: error.title, description: error.shortAnswer, quickAnswer: error.shortAnswer };
  const canonical = `https://extensionfixes.com/fix/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: meta.title,
      description: meta.description,
    },
  };
}

function QuickAnswer({ answer }: { answer: string }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
      <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
        Quick Answer
      </h2>
      <p className="text-slate-700 leading-relaxed">{answer}</p>
    </div>
  );
}

export default async function ExtensionRemovedPage({ params }: PageProps) {
  const { slug } = await params;
  const error = getErrorBySlug(slug);
  if (!error) notFound();

  const meta = pageMeta[slug] || { quickAnswer: error.shortAnswer };
  const relatedExtensions = error.relatedExtensionSlugs
    .map((s) => getExtensionBySlug(s))
    .filter(Boolean);

  const canonical = `https://extensionfixes.com/fix/${slug}`;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://extensionfixes.com' },
    { name: 'Guides', url: 'https://extensionfixes.com/guides' },
    { name: error.title, url: canonical },
  ]);

  const techArticleSchema = createTechArticleSchema({
    title: error.title,
    description: error.shortAnswer,
    url: canonical,
    lastUpdated: error.lastUpdated,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={techArticleSchema} />
      {error.faqs.length > 0 && <JsonLd data={createFAQSchema(error.faqs)} />}

      <Container>
        <nav className="py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-slate-500">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/guides" className="hover:text-slate-900">Guides</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900 truncate max-w-[200px]" aria-current="page">{error.title}</li>
          </ol>
        </nav>

        <article className="pb-16">
          <header className="mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Fix Guide
            </span>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">
              {error.title}
            </h1>
            <QuickAnswer answer={meta.quickAnswer} />
          </header>

          <section className="mb-10" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-xl font-semibold text-slate-900 mb-4">Why Extensions Get Removed</h2>
            <ul className="space-y-3">
              {error.whyItHappens.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="what-to-do-heading">
            <h2 id="what-to-do-heading" className="text-xl font-semibold text-slate-900 mb-4">What You Can Do</h2>
            <ul className="space-y-3">
              {error.whatYouCanDo.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="what-not-to-do-heading">
            <h2 id="what-not-to-do-heading" className="text-xl font-semibold text-slate-900 mb-4">What Not To Do</h2>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <ul className="space-y-2">
                {error.whatNotToDo.map((item, index) => (
                  <li key={index} className="flex gap-2 text-red-700 text-sm">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="find-alt-heading">
            <h2 id="find-alt-heading" className="text-xl font-semibold text-slate-900 mb-4">Find a Maintained Alternative</h2>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700 mb-4">
                Search for your specific extension or browse common alternatives:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/extension-search"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Search extension alternatives
                </Link>
                <Link
                  href="/alternatives"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50"
                >
                  Browse all alternatives
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-guides-heading">
            <h2 id="related-guides-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Extension Problems</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/fix/chrome-disabled-extension" className="text-blue-600 hover:text-blue-800 hover:underline">
                Chrome Disabled My Extension
              </Link>
              <Link href="/fix/this-extension-is-no-longer-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                Extension No Longer Supported
              </Link>
              <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:text-blue-800 hover:underline">
                Manifest V2 Disabled
              </Link>
              <Link href="/alternatives/great-suspender" className="text-blue-600 hover:text-blue-800 hover:underline">
                Great Suspender Alternatives
              </Link>
            </div>
          </section>

          {relatedExtensions.length > 0 && (
            <section className="mb-10" aria-labelledby="related-alternatives-heading">
              <h2 id="related-alternatives-heading" className="text-xl font-semibold text-slate-900 mb-4">Related Alternatives</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedExtensions.map((extension) =>
                  extension ? (
                    <ExtensionCard key={extension.slug} extension={extension} />
                  ) : null
                )}
              </div>
            </section>
          )}

          {error.faqs.length > 0 && (
            <section className="mb-10" aria-labelledby="faq-heading">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <FAQ faqs={error.faqs} />
            </section>
          )}

          <section className="mb-10" aria-labelledby="sources-heading">
            <SourceList sources={error.sources} />
          </section>

          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: {formatDate(error.lastUpdated)}</p>
            <p className="mt-2 text-xs">
              Independent guide. Not affiliated with Google, Chrome, Chrome Web Store, or listed extension developers.
            </p>
          </footer>
        </article>
      </Container>
    </>
  );
}
