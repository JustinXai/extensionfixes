import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getExtensionBySlug } from '@/data/extensions';
import { AlternativeTable } from '@/components/AlternativeTable';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { StatusBadge } from '@/components/StatusBadge';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { createFAQSchema, createBreadcrumbSchema, createTechArticleSchema, createHowToSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: 'ublock-origin' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);
  if (!extension) return { title: 'Not Found' };

  const canonical = `https://extensionfixes.com/alternatives/${slug}`;
  return {
    title: 'uBlock Origin Alternatives for Chrome Manifest V3',
    description:
      'Compare MV3-compatible uBlock Origin alternatives for Chrome, including uBlock Origin Lite, AdGuard, and other practical options, with migration steps.',
    alternates: { canonical },
    openGraph: {
      title: 'uBlock Origin Alternatives for Chrome Manifest V3',
      description:
        'Compare MV3-compatible uBlock Origin alternatives for Chrome, including uBlock Origin Lite, AdGuard, and other practical options.',
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'uBlock Origin Alternatives for Chrome Manifest V3',
      description:
        'Compare MV3-compatible uBlock Origin alternatives for Chrome, including uBlock Origin Lite, AdGuard, and other practical options.',
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

export default async function UblockOriginPage({ params }: PageProps) {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);
  if (!extension) notFound();

  const canonical = `https://extensionfixes.com/alternatives/${slug}`;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://extensionfixes.com' },
    { name: 'Alternatives', url: 'https://extensionfixes.com/alternatives' },
    { name: extension.name, url: canonical },
  ]);

  const techArticleSchema = createTechArticleSchema({
    title: `Best ${extension.name} Alternatives for Chrome MV3`,
    description: extension.shortAnswer,
    url: canonical,
    lastUpdated: extension.lastUpdated,
  });

  const howToSchema = createHowToSchema({
    title: `How to migrate from ${extension.name}`,
    steps: extension.migrationSteps,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={techArticleSchema} />
      {extension.faqs.length > 0 && <JsonLd data={createFAQSchema(extension.faqs)} />}
      {extension.migrationSteps.length > 0 && <JsonLd data={howToSchema} />}

      <Container>
        <nav className="py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-slate-500">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/alternatives" className="hover:text-slate-900">Alternatives</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900" aria-current="page">{extension.name}</li>
          </ol>
        </nav>

        <article className="pb-16">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <StatusBadge status={extension.status} />
              <span className="text-sm text-slate-500">{extension.category}</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">
              {extension.name} Alternatives for Chrome Manifest V3
            </h1>
            <QuickAnswer answer={extension.shortAnswer} />
          </header>

          <section className="mb-10" aria-labelledby="what-happened-heading">
            <h2 id="what-happened-heading" className="text-xl font-semibold text-slate-900 mb-4">What Happened</h2>
            <ul className="space-y-3">
              {extension.whatHappened.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {extension.alternatives.length > 0 && (
            <section className="mb-10" aria-labelledby="alternatives-heading">
              <h2 id="alternatives-heading" className="text-xl font-semibold text-slate-900 mb-4">
                Best Alternatives to {extension.name}
              </h2>
              <div className="overflow-x-auto">
                <AlternativeTable alternatives={extension.alternatives} />
              </div>
            </section>
          )}

          <section className="mb-10 rounded-xl border border-blue-100 bg-blue-50 p-5" aria-labelledby="lite-heading">
            <h2 id="lite-heading" className="text-lg font-semibold text-slate-900 mb-3">About uBlock Origin Lite</h2>
            <p className="text-slate-700 leading-relaxed">
              uBlock Origin Lite is the MV3-compatible version of uBlock Origin, developed by the same author (Raymond Hill, gorhill). It is available in the Chrome Web Store and provides core ad blocking functionality within Manifest V3 constraints. As an MV3-compatible option from the original developer, it offers a trusted path forward for Chrome users who relied on uBlock Origin. Static filter lists (EasyList, EasyPrivacy, etc.) work the same as in the classic version. Some dynamic filtering features are limited due to MV3 API restrictions.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="migration-heading">
            <h2 id="migration-heading" className="text-xl font-semibold text-slate-900 mb-4">Migration Steps</h2>
            <ol className="space-y-4">
              {extension.migrationSteps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="text-slate-600 pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {extension.safetyNotes.length > 0 && (
            <section className="mb-10" aria-labelledby="safety-heading">
              <h2 id="safety-heading" className="text-xl font-semibold text-slate-900 mb-4">Safety Notes</h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <ul className="space-y-2">
                  {extension.safetyNotes.map((note, index) => (
                    <li key={index} className="flex gap-2 text-amber-800 text-sm">
                      <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="mb-10" aria-labelledby="search-heading">
            <h2 id="search-heading" className="text-xl font-semibold text-slate-900 mb-4">Search Another Extension</h2>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-slate-700 mb-4">
                Looking for a different extension? Search by name or paste a warning message.
              </p>
              <Link
                href="/tools/extension-search"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Go to extension search
              </Link>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="related-resources-heading">
            <h2 id="related-resources-heading" className="text-xl font-semibold text-slate-900 mb-4">Related Chrome Extension Fixes</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/fix/manifest-v2-disabled"
                className="rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <span className="font-medium text-blue-600 hover:text-blue-800">
                  Manifest V2 Disabled Guide
                </span>
                <p className="mt-1 text-sm text-slate-500">Learn why MV2 extensions stopped working and what to do</p>
              </Link>
              <Link
                href="/ublock-origin-no-longer-supported"
                className="rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <span className="font-medium text-blue-600 hover:text-blue-800">
                  uBlock Origin No Longer Supported Guide
                </span>
                <p className="mt-1 text-sm text-slate-500">Specific steps for the uBlock Origin migration</p>
              </Link>
            </div>
          </section>

          {extension.faqs.length > 0 && (
            <section className="mb-10" aria-labelledby="faq-heading">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <FAQ faqs={extension.faqs} />
            </section>
          )}

          <section className="mb-10" aria-labelledby="sources-heading">
            <SourceList sources={extension.sources} />
          </section>

          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: {formatDate(extension.lastUpdated)}</p>
            <p className="mt-2 text-xs">
              Independent guide. Not affiliated with Google, Chrome, Chrome Web Store, or listed extension developers.
            </p>
          </footer>
        </article>
      </Container>
    </>
  );
}
