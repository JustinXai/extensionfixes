// CollectionPageTemplate
// Used by /guides/[slug] pages with templateType: 'collection'.
// Defines the structure for best-N / collection list pages.
import Link from 'next/link';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { Container } from '@/components/Container';
import { formatDate } from '@/lib/utils';
import { QuickAnswer } from './QuickAnswer';
import { Section } from './Section';
import { ComparisonTable } from './ComparisonTable';
import { DecisionGuide } from './DecisionGuide';
import { SafetyChecklist } from './SafetyNotes';
import { RelatedPages } from './RelatedPages';
import { IndependentNotice } from './IndependentNotice';
import type { ChecklistItem, ComparisonRow, ContentSource, DecisionItem, FAQItem, RelatedPage } from '@/lib/contentTypes';

interface CollectionOption {
  name: string;
  bestFor: string;
  status?: string;
  pros: string[];
  cons: string[];
  url?: string;
  note?: string;
}

interface CollectionPageTemplateProps {
  title: string;
  breadcrumb?: { home: string; parent: string };
  quickAnswer: string;
  selectionCriteria: string[];
  options: CollectionOption[];
  comparisonTable?: ComparisonRow[];
  decisionGuide?: DecisionItem[];
  whatToAvoid?: string[];
  safetyChecklist?: ChecklistItem[];
  relatedPages?: RelatedPage[];
  faqs?: FAQItem[];
  sources?: ContentSource[];
  lastUpdated: string;
}

export function CollectionPageTemplate(props: CollectionPageTemplateProps) {
  const {
    title,
    breadcrumb = { home: 'Home', parent: 'Guides' },
    quickAnswer,
    selectionCriteria,
    options,
    comparisonTable,
    decisionGuide,
    whatToAvoid,
    safetyChecklist,
    relatedPages,
    faqs,
    sources,
    lastUpdated,
  } = props;

  return (
    <Container>
      <nav className="py-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-slate-500">
          <li><Link href="/" className="hover:text-slate-900">{breadcrumb.home}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guides" className="hover:text-slate-900">{breadcrumb.parent}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-900" aria-current="page">{title}</li>
        </ol>
      </nav>

      <article className="pb-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">{title}</h1>
          <QuickAnswer answer={quickAnswer} />
        </header>

        {options.length > 0 && (
          <Section id="options-heading" heading="Best Options at a Glance">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {options.map((opt, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">{opt.name}</h3>
                    {opt.status && (
                      <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700">
                        {opt.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{opt.bestFor}</p>
                  {opt.pros.length > 0 && (
                    <ul className="space-y-1 mb-3">
                      {opt.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="flex gap-1.5 text-xs text-slate-500">
                          <span className="text-green-500 flex-shrink-0">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {opt.note && <p className="text-xs text-slate-400 italic">{opt.note}</p>}
                </div>
              ))}
            </div>
          </Section>
        )}

        {selectionCriteria.length > 0 && (
          <Section id="criteria-heading" heading="How We Chose">
            <ul className="space-y-2">
              {selectionCriteria.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600 text-sm">
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {comparisonTable && comparisonTable.length > 0 && (
          <Section id="comparison-heading" heading="Comparison Table">
            <ComparisonTable rows={comparisonTable} />
          </Section>
        )}

        {decisionGuide && decisionGuide.length > 0 && (
          <Section id="decision-guide-heading" heading="Who Should Choose Which Option">
            <DecisionGuide items={decisionGuide} />
          </Section>
        )}

        {whatToAvoid && whatToAvoid.length > 0 && (
          <Section id="avoid-heading" heading="What to Avoid">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <ul className="space-y-2">
                {whatToAvoid.map((item, index) => (
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

        {safetyChecklist && safetyChecklist.length > 0 && (
          <Section id="safety-heading" heading="Safety Checklist">
            <SafetyChecklist items={safetyChecklist.map((i) => i.label)} />
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
  );
}
