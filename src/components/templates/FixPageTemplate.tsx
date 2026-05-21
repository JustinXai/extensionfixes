// FixPageTemplate
// Used by /fix/[slug] pages.
// Produces identical HTML output to the original page.tsx.
import Link from 'next/link';
import type { ErrorRecord, ExtensionRecord } from '@/lib/types';
import type { FixTemplateData } from '@/lib/contentTypes';
import { ExtensionCard } from '@/components/ExtensionCard';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { KeyTakeaways } from '@/components/KeyTakeaways';
import { CurrentStatusCard } from '@/components/CurrentStatusCard';
import { CommonFailedFixes } from '@/components/CommonFailedFixes';
import { createFAQSchema, createBreadcrumbSchema, createTechArticleSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { QuickAnswer } from './QuickAnswer';
import { Section } from './Section';
import { MigrationSteps } from './MigrationSteps';
import { RelatedPages } from './RelatedPages';
import { IndependentNotice } from './IndependentNotice';

interface FixPageTemplateProps {
  error: ErrorRecord;
  /** Extensions shown in the "Related Extensions" section */
  relatedExtensions?: ExtensionRecord[];
  meta?: { title: string; description: string; quickAnswer: string };
  relatedPages?: FixTemplateData['relatedPages'];
}

export function FixPageTemplate({ error, relatedExtensions = [], meta, relatedPages }: FixPageTemplateProps) {
  const canonical = `https://extensionfixes.com/fix/${error.slug}`;
  const qa = meta?.quickAnswer ?? error.shortAnswer;

  const schemas = {
    breadcrumb: createBreadcrumbSchema([
      { name: 'Home', url: 'https://extensionfixes.com' },
      { name: 'Error Messages', url: 'https://extensionfixes.com/chrome-extension-error-messages' },
      { name: error.title, url: canonical },
    ]),
    techArticle: createTechArticleSchema({
      title: meta?.title ?? error.title,
      description: error.shortAnswer,
      url: canonical,
      lastUpdated: error.lastUpdated,
    }),
    faq: error.faqs.length > 0 ? createFAQSchema(error.faqs) : null,
  };

  return (
    <>
      <JsonLd data={schemas.breadcrumb} />
      <JsonLd data={schemas.techArticle} />
      {schemas.faq && <JsonLd data={schemas.faq} />}

      <Container>
        {/* Breadcrumb */}
        <nav className="py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-slate-500">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/chrome-extension-error-messages" className="hover:text-slate-900">Error Messages</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900" aria-current="page">{error.title}</li>
          </ol>
        </nav>

        <article className="pb-16">
          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">
              {meta?.title ?? error.title}
            </h1>
            <QuickAnswer answer={qa} />
          </header>

          {/* 1. Key Takeaways */}
          {error.keyTakeaways && error.keyTakeaways.length > 0 && (
            <Section id="key-takeaways-heading" heading="Key Takeaways">
              <KeyTakeaways items={error.keyTakeaways} />
            </Section>
          )}

          {/* 2. Current Status */}
          {error.currentStatus && error.currentStatus.length > 0 && (
            <Section id="current-status-heading" heading="Current Status">
              <CurrentStatusCard entries={error.currentStatus} />
            </Section>
          )}

          {/* 3. Why It Happens */}
          {error.whyItHappens && error.whyItHappens.length > 0 && (
            <Section id="why-it-happens-heading" heading="Why This Happens">
              <ul className="space-y-3">
                {error.whyItHappens.map((item, index) => (
                  <li key={index} className="flex gap-3 text-slate-600">
                    <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* 4. Common Failed Fixes */}
          {error.commonFailedFixes && error.commonFailedFixes.length > 0 && (
            <Section id="common-failed-fixes-heading" heading="Common Failed Fixes">
              <CommonFailedFixes items={error.commonFailedFixes} />
            </Section>
          )}

          {/* 5. Step-by-step Fix */}
          {error.whatYouCanDo && error.whatYouCanDo.length > 0 && (
            <Section id="what-you-can-do-heading" heading="What You Can Do">
              <MigrationSteps steps={error.whatYouCanDo.map((s) => ({ title: s }))} />
            </Section>
          )}

          {/* 6. Related Extensions */}
          {relatedExtensions.length > 0 && (
            <Section id="related-extensions-heading" heading="Related Extensions">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedExtensions.map((ext) => (
                  <ExtensionCard key={ext.slug} extension={ext} />
                ))}
              </div>
            </Section>
          )}

          {/* 7. Related Pages */}
          {relatedPages && relatedPages.length > 0 && (
            <Section id="related-resources-heading" heading="Related Resources">
              <RelatedPages pages={relatedPages} />
            </Section>
          )}

          {/* 8. What Not To Do */}
          {error.whatNotToDo && error.whatNotToDo.length > 0 && (
            <Section id="what-not-to-do-heading" heading="What Not to Do">
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
            </Section>
          )}

          {/* 9. Frequently Asked Questions */}
          {error.faqs.length > 0 && (
            <Section id="faq-heading" heading="Frequently Asked Questions">
              <FAQ faqs={error.faqs} skipHeading />
            </Section>
          )}

          {/* 10. Sources */}
          <Section id="sources-heading" heading="Sources">
            <SourceList sources={error.sources} />
          </Section>

          {/* 11. Independent Notice + Last Updated */}
          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: {formatDate(error.lastUpdated)}</p>
            <IndependentNotice />
          </footer>
        </article>
      </Container>
    </>
  );
}
