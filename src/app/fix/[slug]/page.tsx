import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getErrorBySlug, errors } from '@/data/errors';
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

export async function generateStaticParams() {
  return errors.map((err) => ({
    slug: err.slug,
  }));
}

// SEO metadata for each fix page
const fixMetadata: Record<string, { title: string; description: string; quickAnswer: string }> = {
  'this-extension-is-no-longer-supported': {
    title: 'Fix "This Extension Is No Longer Supported" in Chrome',
    description:
      'Chrome says an extension is no longer supported? Learn why it happens, what you can safely do, and how to find maintained alternatives.',
    quickAnswer:
      'Chrome shows this message when an extension uses Manifest V2 APIs that Chrome has deprecated. You cannot re-enable the old extension, but you can export settings, check for MV3 updates, and find alternatives. Most popular extensions have MV3-compatible replacements available.',
  },
  'manifest-v2-disabled': {
    title: 'Manifest V2 Disabled in Chrome: What You Can Do',
    description:
      'Chrome has disabled Manifest V2 extensions. Learn what this means, why old extensions stopped working, and how to find MV3-compatible replacements.',
    quickAnswer:
      'Chrome has disabled Manifest V2 extensions by default. This affects extensions built on MV2 that have not been updated to MV3. Recommended path: find MV3-compatible replacements, check for official updates from developers, or consider Firefox which still supports MV2 extensions.',
  },
  'chrome-disabled-extension': {
    title: 'Chrome Disabled My Extension: Causes and Safe Fixes',
    description:
      'Chrome can disable extensions for various reasons. Learn common causes, safe fixes, and how to find maintained alternatives.',
    quickAnswer:
      'Chrome disables extensions for several reasons: deprecated APIs, Web Store removal, security concerns, or administrator policies. The fix depends on the cause. Check the specific error message, verify the extension status in the Chrome Web Store, and look for maintained replacements.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const error = getErrorBySlug(slug);

  if (!error) {
    return {
      title: 'Fix Guide Not Found',
      description: 'The requested fix guide could not be found.',
    };
  }

  const customMeta = fixMetadata[slug] || {
    title: error.title,
    description: error.shortAnswer,
    quickAnswer: error.shortAnswer,
  };

  const canonical = `https://extensionfixes.com/fix/${slug}`;

  return {
    title: customMeta.title,
    description: customMeta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: customMeta.title,
      description: customMeta.description,
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: customMeta.title,
      description: customMeta.description,
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

export default async function FixPage({ params }: PageProps) {
  const { slug } = await params;
  const error = getErrorBySlug(slug);

  if (!error) {
    notFound();
    return null;
  }

  const customMeta = fixMetadata[slug] || { quickAnswer: error.shortAnswer };
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
            <li>
              <Link href="/" className="hover:text-slate-900">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/guides" className="hover:text-slate-900">Guides</Link>
            </li>
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
            <QuickAnswer answer={customMeta.quickAnswer} />
          </header>

          <section className="mb-10" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-xl font-semibold text-slate-900 mb-4">Why This Happens</h2>
            <ul className="space-y-3">
              {error.whyItHappens.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
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
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
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
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Top 5 Enhanced Sections ─────────────────────────────── */}
          {error.atAGlance && (
            <section className="mb-10" aria-labelledby="at-a-glance-heading">
              <h2 id="at-a-glance-heading" className="text-xl font-semibold text-slate-900 mb-4">At a Glance</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Original issue', value: error.atAGlance.originalExtension },
                  { label: 'Current Chrome status', value: error.atAGlance.currentStatus },
                  { label: 'Best practical option', value: error.atAGlance.bestPracticalOption },
                  ...(error.atAGlance.bestForAdvancedUsers
                    ? [{ label: 'Best for advanced users', value: error.atAGlance.bestForAdvancedUsers }]
                    : []),
                  { label: 'Main caution', value: error.atAGlance.mainCaution },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.label}</span>
                    <span className="text-sm text-slate-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {error.comparisonTable && error.comparisonTable.length > 0 && (
            <section className="mb-10" aria-labelledby="comparison-heading">
              <h2 id="comparison-heading" className="text-xl font-semibold text-slate-900 mb-4">Comparison Table</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Option', 'Best For', 'MV3', 'Cost', 'Open Source', 'Setup', 'Main Trade-off'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {error.comparisonTable.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">{row.option}</td>
                        <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.bestFor}</td>
                        <td className="px-4 py-4 text-sm sm:px-6">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                            row.mv3Support === 'Yes (official)' || row.mv3Support === 'Yes'
                              ? 'bg-green-50 text-green-700'
                              : row.mv3Support.includes('MV2')
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-gray-50 text-gray-600'
                          }`}>{row.mv3Support}</span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.cost}</td>
                        <td className="px-4 py-4 text-sm sm:px-6">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${row.openSource === 'Yes' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'}`}>{row.openSource}</span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.setupDifficulty}</td>
                        <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.mainTradeoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {error.decisionGuide && error.decisionGuide.length > 0 && (
            <section className="mb-10" aria-labelledby="decision-guide-heading">
              <h2 id="decision-guide-heading" className="text-xl font-semibold text-slate-900 mb-4">Which Option Should You Choose?</h2>
              <div className="space-y-4">
                {error.decisionGuide.map((item, i) => (
                  <div key={i} className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.choose}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.when}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {error.commonMistakes && error.commonMistakes.length > 0 && (
            <section className="mb-10" aria-labelledby="common-mistakes-heading">
              <h2 id="common-mistakes-heading" className="text-xl font-semibold text-slate-900 mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-3">
                {error.commonMistakes.map((item, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
                    <svg className="h-5 w-5 flex-shrink-0 text-red-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-red-800">Do not: {item.doNot}</p>
                      {item.instead && (
                        <p className="mt-1 text-sm text-green-700">
                          <span className="font-medium">Instead:</span> {item.instead}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {slug === 'manifest-v2-disabled' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-guides-heading">
              <h2 id="related-guides-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/fix/this-extension-is-no-longer-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Extension No Longer Supported Fix
                </Link>
                <Link href="/alternatives/ublock-origin" className="text-blue-600 hover:text-blue-800 hover:underline">
                  uBlock Origin Alternatives
                </Link>
                <Link href="/alternatives/proxy-switchyomega" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Proxy SwitchyOmega Alternatives
                </Link>
              </div>
            </section>
          )}

          {slug === 'chrome-disabled-extension' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-guides-heading">
              <h2 id="related-guides-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/fix/this-extension-is-no-longer-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Extension No Longer Supported Fix
                </Link>
                <Link href="/fix/extension-removed-from-chrome-web-store" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Extension Removed from Web Store
                </Link>
                <Link href="/alternatives/great-suspender" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Great Suspender Alternatives
                </Link>
              </div>
            </section>
          )}

          {slug === 'this-extension-is-no-longer-supported' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-guides-heading">
              <h2 id="related-guides-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/this-extension-may-soon-no-longer-be-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                  This Extension May Soon No Longer Be Supported
                </Link>
                <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Manifest V2 Disabled Guide
                </Link>
                <Link href="/fix/chrome-disabled-extension" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Chrome Disabled Extension Guide
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'extension-removed-from-chrome-web-store' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-guides-heading">
              <h2 id="related-guides-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/fix/chrome-disabled-extension" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Chrome Disabled My Extension
                </Link>
                <Link href="/fix/this-extension-is-no-longer-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Extension No Longer Supported
                </Link>
                <Link href="/alternatives/great-suspender" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Great Suspender Alternatives
                </Link>
              </div>
            </section>
          )}

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
