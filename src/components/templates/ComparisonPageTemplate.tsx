// ComparisonPageTemplate
// Used by /comparisons/[slug] pages.
// Defines the structure for A vs B comparison pages.
import Link from 'next/link';
import type { ComparisonTemplateData } from '@/lib/contentTypes';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { CommonFailedFixes } from '@/components/CommonFailedFixes';
import { createFAQSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { Section } from './Section';
import { ComparisonTable } from './ComparisonTable';
import { DecisionGuide } from './DecisionGuide';
import { RelatedPages } from './RelatedPages';
import { IndependentNotice } from './IndependentNotice';
import { QuickAnswer } from './QuickAnswer';

interface ComparisonPageTemplateProps {
  verdict: string;
  keyDifferences: string[];
  comparisonTable: ComparisonTemplateData['comparisonTable'];
  decisionGuide: ComparisonTemplateData['decisionGuide'];
  commonFailedFixes?: ComparisonTemplateData['commonFailedFixes'];
  relatedPages?: ComparisonTemplateData['relatedPages'];
  faqs?: ComparisonTemplateData['faqs'];
  sources?: ComparisonTemplateData['sources'];
  lastUpdated: string;
  faqSchemaData?: ReturnType<typeof createFAQSchema>;
  quickAnswer?: string;
  breadcrumbTitle?: string;
}

export function ComparisonPageTemplate(props: ComparisonPageTemplateProps) {
  const {
    verdict,
    keyDifferences,
    comparisonTable,
    decisionGuide,
    commonFailedFixes,
    relatedPages,
    faqs,
    sources,
    lastUpdated,
    faqSchemaData,
    quickAnswer,
    breadcrumbTitle,
  } = props;

  return (
    <>
      {faqSchemaData && <JsonLd data={faqSchemaData} />}

      <Container>
        <nav className="py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-slate-500">
            <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/comparisons" className="hover:text-slate-900">Comparisons</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900" aria-current="page">{breadcrumbTitle ?? 'Comparison'}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">
          {breadcrumbTitle ?? 'Comparison'}
        </h1>

        <article className="pb-16">
          {quickAnswer && (
            <div className="mb-10">
              <QuickAnswer answer={quickAnswer} />
            </div>
          )}

          <Section id="verdict-heading" heading="Verdict">
            <p className="text-slate-700 leading-relaxed">{verdict}</p>
          </Section>

          <Section id="key-differences-heading" heading="Key Differences">
            <ul className="space-y-3">
              {keyDifferences.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {comparisonTable && comparisonTable.length > 0 && (
            <Section id="comparison-heading" heading="Side-by-side Comparison">
              <ComparisonTable rows={comparisonTable} />
            </Section>
          )}

          {decisionGuide && decisionGuide.length > 0 && (
            <Section id="decision-guide-heading" heading="Which One Should You Choose">
              <DecisionGuide items={decisionGuide} />
            </Section>
          )}

          {commonFailedFixes && commonFailedFixes.length > 0 && (
            <Section id="common-failed-fixes-heading" heading="Common Failed Fixes">
              <CommonFailedFixes items={commonFailedFixes} />
            </Section>
          )}

          {relatedPages && relatedPages.length > 0 && (
            <Section id="related-resources-heading" heading="Related Resources">
              <RelatedPages pages={relatedPages} />
            </Section>
          )}

          {faqs && faqs.length > 0 && (
            <Section id="faq-heading" heading="Frequently Asked Questions">
              <FAQ faqs={faqs} skipHeading />
            </Section>
          )}

          {sources && sources.length > 0 && (
            <Section id="sources-heading" heading="Sources">
              <SourceList sources={sources as import('@/lib/types').SourceItem[]} />
            </Section>
          )}

          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: {formatDate(lastUpdated)}</p>
            <IndependentNotice />
          </footer>
        </article>
      </Container>
    </>
  );
}
