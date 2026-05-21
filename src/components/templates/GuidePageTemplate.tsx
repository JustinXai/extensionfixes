// GuidePageTemplate
// Used by /guides/[slug] pages.
// Used for cluster hub pages like chrome-userscript-manager-alternatives.
import Link from 'next/link';
import type { GuideTemplateData } from '@/lib/contentTypes';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { KeyTakeaways } from '@/components/KeyTakeaways';
import { CurrentStatusCard } from '@/components/CurrentStatusCard';
import { CommonFailedFixes } from '@/components/CommonFailedFixes';
import { createFAQSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { QuickAnswer } from './QuickAnswer';
import { Section } from './Section';
import { DecisionGuide } from './DecisionGuide';
import { ComparisonTable } from './ComparisonTable';
import { SafetyChecklist } from './SafetyNotes';
import { MigrationSteps } from './MigrationSteps';
import { RelatedPages } from './RelatedPages';
import { IndependentNotice } from './IndependentNotice';

interface GuidePageTemplateProps {
  slug: string;
  /** Page title displayed in h1 */
  title: string;
  /** SEO metadata */
  metaTitle: string;
  metaDescription: string;
  /** Breadcrumb labels */
  breadcrumb?: { home: string; parent: string };
  /** Sections */
  quickAnswer: string;
  keyTakeaways?: string[];
  currentStatus?: { label: string; value: string; tone?: 'good' | 'neutral' | 'warning' | 'bad' }[];
  comparisonTable?: GuideTemplateData['comparisonTable'];
  decisionGuide?: GuideTemplateData['decisionGuide'];
  safetyChecklist?: GuideTemplateData['safetyChecklist'];
  commonFailedFixes?: GuideTemplateData['commonFailedFixes'];
  migrationSteps?: GuideTemplateData['migrationSteps'];
  relatedPages?: GuideTemplateData['relatedPages'];
  faqs?: GuideTemplateData['faqs'];
  sources?: GuideTemplateData['sources'];
  lastUpdated: string;
  /** Schema data for JsonLd */
  faqSchemaData?: ReturnType<typeof createFAQSchema>;
}

export function GuidePageTemplate(props: GuidePageTemplateProps) {
  const {
    title,
    breadcrumb = { home: 'Home', parent: 'Guides' },
    quickAnswer,
    keyTakeaways,
    currentStatus,
    comparisonTable,
    decisionGuide,
    safetyChecklist,
    commonFailedFixes,
    migrationSteps,
    relatedPages,
    faqs,
    sources,
    lastUpdated,
    faqSchemaData,
  } = props;

  return (
    <>
      {faqSchemaData && <JsonLd data={faqSchemaData} />}

      <Container>
        {/* Breadcrumb */}
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
          {/* Page Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">{title}</h1>
            <QuickAnswer answer={quickAnswer} />
          </header>

          {/* 1. Key Takeaways */}
          {keyTakeaways && keyTakeaways.length > 0 && (
            <Section id="key-takeaways-heading" heading="Key Takeaways">
              <KeyTakeaways items={keyTakeaways} />
            </Section>
          )}

          {/* 2. Current Status */}
          {currentStatus && currentStatus.length > 0 && (
            <Section id="current-status-heading" heading="Current Status">
              <CurrentStatusCard entries={currentStatus} />
            </Section>
          )}

          {/* 3. Main Comparison Table */}
          {comparisonTable && comparisonTable.length > 0 && (
            <Section id="comparison-heading" heading="Comparison Table">
              <ComparisonTable rows={comparisonTable} />
            </Section>
          )}

          {/* 4. How to Choose / Decision Guide */}
          {decisionGuide && decisionGuide.length > 0 && (
            <Section id="decision-guide-heading" heading="Who Should Choose Which Option">
              <DecisionGuide items={decisionGuide} />
            </Section>
          )}

          {/* 5. Safety Checklist */}
          {safetyChecklist && safetyChecklist.length > 0 && (
            <Section id="safety-heading" heading="Safety Checklist">
              <SafetyChecklist items={safetyChecklist.map((i) => i.label)} />
            </Section>
          )}

          {/* 6. Common Failed Fixes */}
          {commonFailedFixes && commonFailedFixes.length > 0 && (
            <Section id="common-failed-fixes-heading" heading="Common Failed Fixes">
              <CommonFailedFixes items={commonFailedFixes} />
            </Section>
          )}

          {/* 7. Migration Steps */}
          {migrationSteps && migrationSteps.length > 0 && (
            <Section id="migration-heading" heading="Migration Steps">
              <MigrationSteps steps={migrationSteps} />
            </Section>
          )}

          {/* 8. Related Pages */}
          {relatedPages && relatedPages.length > 0 && (
            <Section id="related-resources-heading" heading="Related Resources">
              <RelatedPages pages={relatedPages} />
            </Section>
          )}

          {/* 9. Frequently Asked Questions */}
          {faqs && faqs.length > 0 && (
            <Section id="faq-heading" heading="Frequently Asked Questions">
              <FAQ faqs={faqs} skipHeading />
            </Section>
          )}

          {/* 10. Sources */}
          {sources && sources.length > 0 && (
            <Section id="sources-heading" heading="Sources">
              <SourceList sources={sources as import('@/lib/types').SourceItem[]} />
            </Section>
          )}

          {/* 11. Independent Notice + Last Updated */}
          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: {formatDate(lastUpdated)}</p>
            <IndependentNotice />
          </footer>
        </article>
      </Container>
    </>
  );
}
