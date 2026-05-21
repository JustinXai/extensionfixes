// AlternativePageTemplate
// Used by /alternatives/[slug] pages.
// Produces the same HTML output as the original page.tsx.
// When migrating a page, replace the inline JSX in page.tsx with this component.
import Link from 'next/link';
import type { RelatedPage } from '@/lib/contentTypes';
import type { ExtensionRecord } from '@/lib/types';
import { StatusBadge } from '@/components/StatusBadge';
import { AlternativeTable } from '@/components/AlternativeTable';
import { FAQ } from '@/components/FAQ';
import { SourceList } from '@/components/SourceList';
import { KeyTakeaways } from '@/components/KeyTakeaways';
import { CurrentStatusCard } from '@/components/CurrentStatusCard';
import { CommonFailedFixes } from '@/components/CommonFailedFixes';
import { createFAQSchema, createBreadcrumbSchema, createTechArticleSchema, createHowToSchema } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { QuickAnswer } from './QuickAnswer';
import { WhatNotToDo } from './WhatNotToDo';
import { SafetyChecklist } from './SafetyNotes';
import { MigrationSteps } from './MigrationSteps';
import { Section } from './Section';
import { DecisionGuide } from './DecisionGuide';
import { RelatedPages } from './RelatedPages';
import { IndependentNotice } from './IndependentNotice';

const DEFAULT_WHAT_NOT_TO_DO = [
  'Do not install random CRX files from unknown download sites.',
  'Do not assume a similar name means it is from the same developer.',
  'Do not grant broad permissions without checking the developer.',
  'Export settings before removing old extensions if you still need the configuration.',
];

interface AlternativePageTemplateProps {
  extension: ExtensionRecord;
  meta?: { title: string; description: string; quickAnswer: string };
  relatedPages?: RelatedPage[];
  whatNotToDoItems?: string[];
}

function buildSchemas(
  extension: ExtensionRecord,
  meta: { title: string; description: string; quickAnswer: string },
  canonical: string,
) {
  return {
    breadcrumb: createBreadcrumbSchema([
      { name: 'Home', url: 'https://extensionfixes.com' },
      { name: 'Alternatives', url: 'https://extensionfixes.com/alternatives' },
      { name: extension.name, url: canonical },
    ]),
    techArticle: createTechArticleSchema({
      title: `Best ${extension.name} Alternatives for Chrome MV3`,
      description: extension.shortAnswer,
      url: canonical,
      lastUpdated: extension.lastUpdated,
    }),
    faq: extension.faqs.length > 0 ? createFAQSchema(extension.faqs) : null,
    howTo:
      extension.migrationSteps.length > 0
        ? createHowToSchema({ title: `How to migrate from ${extension.name}`, steps: extension.migrationSteps })
        : null,
  };
}

export function AlternativePageTemplate({
  extension,
  meta,
  relatedPages,
  whatNotToDoItems,
}: AlternativePageTemplateProps) {
  const canonical = `https://extensionfixes.com/alternatives/${extension.slug}`;
  const qa = meta?.quickAnswer ?? extension.shortAnswer ?? '';
  const schemas = buildSchemas(extension, { title: meta?.title ?? '', description: meta?.description ?? '', quickAnswer: qa }, canonical);
  const whatNotToDo = whatNotToDoItems ?? DEFAULT_WHAT_NOT_TO_DO;

  return (
    <>
      <JsonLd data={schemas.breadcrumb} />
      <JsonLd data={schemas.techArticle} />
      {schemas.faq && <JsonLd data={schemas.faq} />}
      {schemas.howTo && <JsonLd data={schemas.howTo} />}

      <Container>
        {/* Breadcrumb */}
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
          {/* Page Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <StatusBadge status={extension.status} />
              <span className="text-sm text-slate-500">{extension.category}</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">
              {extension.slug === 'tampermonkey'
                ? 'Tampermonkey Alternatives for Chrome'
                : `Best ${extension.name} Alternatives for Chrome MV3`}
            </h1>
            <QuickAnswer answer={qa} />
          </header>

          {/* 1. What Happened */}
          <Section id="what-happened-heading" heading="What Happened">
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
          </Section>

          {/* 2. Best Alternatives Table */}
          {extension.alternatives.length > 0 && (
            <Section id="alternatives-heading" heading={`Best Alternatives to ${extension.name}`}>
              <div className="overflow-x-auto">
                <AlternativeTable alternatives={extension.alternatives} />
              </div>
            </Section>
          )}

          {/* 3. Migration Steps */}
          <Section id="migration-heading" heading="Migration Steps">
            <MigrationSteps steps={extension.migrationSteps.map((s) => ({ title: s }))} />
          </Section>

          {/* 4. Safety Notes */}
          {extension.safetyNotes.length > 0 && (
            <Section id="safety-heading" heading="Safety Notes">
              <SafetyChecklist items={extension.safetyNotes} />
            </Section>
          )}

          {/* 5. What Not to Do */}
          <WhatNotToDo items={whatNotToDo} />

          {/* 6. Key Takeaways */}
          {extension.keyTakeaways && extension.keyTakeaways.length > 0 && (
            <Section id="key-takeaways-heading" heading="Key Takeaways">
              <KeyTakeaways items={extension.keyTakeaways} />
            </Section>
          )}

          {/* 7. Current Status */}
          {extension.currentStatus && extension.currentStatus.length > 0 && (
            <Section id="current-status-heading" heading="Current Status">
              <CurrentStatusCard entries={extension.currentStatus} />
            </Section>
          )}

          {/* 8. Comparison Table — guarded by slug exclusion */}
          {extension.comparisonTable &&
           extension.comparisonTable.length > 0 &&
           !['violentmonkey', 'tampermonkey'].includes(extension.slug) && (
            <Section id="comparison-heading" heading="Comparison Table">
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
                    {extension.comparisonTable.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">{row.option}</td>
                        <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.bestFor}</td>
                        <td className="px-4 py-4 text-sm sm:px-6">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                            row.mv3Support === 'Yes (official)' || row.mv3Support === 'Yes'
                              ? 'bg-green-50 text-green-700'
                              : row.mv3Support?.includes('MV2')
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
            </Section>
          )}

          {/* 9. Who Should Choose Which Option */}
          {extension.decisionGuide && extension.decisionGuide.length > 0 && (
            <Section id="decision-guide-heading" heading="Who Should Choose Which Option">
              <DecisionGuide items={extension.decisionGuide} />
            </Section>
          )}

          {/* 10. Common Failed Fixes */}
          {extension.commonFailedFixes && extension.commonFailedFixes.length > 0 && (
            <Section id="common-failed-fixes-heading" heading="Common Failed Fixes">
              <CommonFailedFixes items={extension.commonFailedFixes} />
            </Section>
          )}

          {/* 11. Related Resources */}
          {relatedPages && relatedPages.length > 0 && (
            <Section id="related-resources-heading" heading="Related Resources">
              <RelatedPages pages={relatedPages} />
            </Section>
          )}

          {/* 12. Frequently Asked Questions */}
          {extension.faqs.length > 0 && (
            <Section id="faq-heading" heading="Frequently Asked Questions">
              <FAQ faqs={extension.faqs} skipHeading />
            </Section>
          )}

          {/* 13. Sources */}
          <Section id="sources-heading" heading="Sources">
            <SourceList sources={extension.sources} />
          </Section>

          {/* 14. Independent Notice + Last Updated */}
          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: {formatDate(extension.lastUpdated)}</p>
            <IndependentNotice />
          </footer>
        </article>
      </Container>
    </>
  );
}
