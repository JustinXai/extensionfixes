import Link from 'next/link';
import { Breadcrumbs } from './Breadcrumbs';
import { JsonLd } from './JsonLd';
import { FAQ } from './FAQ';
import { SourceList } from './SourceList';
import { Container } from './Container';
import type {
  LandingPageRecord,
  LandingPageSection,
  BreadcrumbItem,
} from '@/lib/types';
import { createTechArticleSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/seo';

interface LandingPageTemplateProps {
  page: LandingPageRecord;
  breadcrumbItems: BreadcrumbItem[];
}

interface ComparisonTableProps {
  columns: string[];
  rows: string[][];
}

function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-semibold text-slate-900"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-slate-100 hover:bg-slate-50"
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionContent({ section }: { section: LandingPageSection }) {
  switch (section.type) {
    case 'text':
      return (
        <div className="prose prose-slate max-w-none">
          {section.title && (
            <h2 className="text-xl font-semibold text-slate-900">
              {section.title}
            </h2>
          )}
          {section.content && (
            <p className="mt-3 text-slate-600 leading-relaxed">{section.content}</p>
          )}
        </div>
      );

    case 'list':
      return (
        <div>
          {section.title && (
            <h2 className="text-xl font-semibold text-slate-900">
              {section.title}
            </h2>
          )}
          {section.items && (
            <ul className="mt-3 space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 mt-0.5 flex-shrink-0">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'callout':
      const variantStyles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-amber-50 border-amber-200 text-amber-800',
        success: 'bg-green-50 border-green-200 text-green-800',
      };
      const variantIcons = {
        info: (
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        ),
        warning: (
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ),
        success: (
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      };
      return (
        <div
          className={`rounded-lg border p-4 flex gap-3 ${
            variantStyles[section.variant || 'info']
          }`}
        >
          <span className="flex-shrink-0 mt-0.5">
            {variantIcons[section.variant || 'info']}
          </span>
          <div>
            {section.title && (
              <h3 className="font-semibold text-sm">{section.title}</h3>
            )}
            {section.content && (
              <p className="mt-1 text-sm leading-relaxed">{section.content}</p>
            )}
          </div>
        </div>
      );

    case 'table':
      return (
        <div>
          {section.title && (
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              {section.title}
            </h2>
          )}
          <ComparisonTable columns={section.columns || []} rows={section.rows || []} />
        </div>
      );

    case 'comparison':
      return (
        <div>
          {section.title && (
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              {section.title}
            </h2>
          )}
          <ComparisonTable columns={section.columns || []} rows={section.rows || []} />
        </div>
      );

    default:
      return null;
  }
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

function WhatNotToDo({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-5">
      <h2 className="text-sm font-semibold text-red-800 uppercase tracking-wide mb-3">
        What Not to Do
      </h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-red-700 text-sm">
            <span className="flex-shrink-0 mt-0.5">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BestOption({ title, options }: { title: string; options: { label: string; description: string }[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-3">
        {title}
      </h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-blue-600 font-medium text-sm flex-shrink-0">{option.label}</span>
            <span className="text-slate-600 text-sm leading-relaxed">{option.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LandingPageTemplate({ page, breadcrumbItems }: LandingPageTemplateProps) {
  const pageUrl = `https://extensionfixes.com/${page.slug}`;
  const techArticleSchema = createTechArticleSchema({
    title: page.title,
    description: page.description,
    url: pageUrl,
    lastUpdated: page.lastUpdated,
  });
  const faqSchema = createFAQSchema(page.faqs);
  const breadcrumbSchema = createBreadcrumbSchema(
    breadcrumbItems.map((item) => ({
      name: item.label,
      url: item.href
        ? `https://extensionfixes.com${item.href}`
        : pageUrl,
    }))
  );

  // Find comparison table section
  const comparisonSection = page.sections.find(
    (s) => s.type === 'comparison' || s.type === 'table'
  );

  // Find what not to do section
  const whatNotToDoSection = page.sections.find((s) => s.type === 'callout' && s.variant === 'warning');

  // Extract what not to do items if available
  const whatNotToDoItems = whatNotToDoSection?.items || [
    'Do not install random CRX files from unknown download sites.',
    'Do not assume a similar name means it is official.',
    'Do not grant broad permissions without checking the developer.',
    'Export settings before removing old extensions if you still need the configuration.',
  ];

  return (
    <>
      <JsonLd data={techArticleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Container>
        <article className="py-12">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
              {page.h1}
            </h1>

            <div className="mt-6">
              <QuickAnswer answer={page.shortAnswer} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {page.primaryCta && (
                <Link
                  href={page.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  {page.primaryCta.label}
                </Link>
              )}
              {page.secondaryCta && (
                <Link
                  href={page.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {page.secondaryCta.label}
                </Link>
              )}
            </div>
          </header>

          {/* Comparison Table */}
          {comparisonSection && (
            <section className="mb-8">
              <SectionContent section={comparisonSection} />
            </section>
          )}

          <div className="space-y-8">
            {page.sections
              .filter((s) => s !== comparisonSection && s !== whatNotToDoSection)
              .map((section, index) => (
                <section
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <SectionContent section={section} />
                </section>
              ))}
          </div>

          {/* What Not to Do */}
          <section className="mt-8">
            <WhatNotToDo items={whatNotToDoItems} />
          </section>

          {/* Best Options */}
          {page.bestOptions && page.bestOptions.length > 0 && (
            <section className="mt-8">
              <BestOption
                title="Best Options at a Glance"
                options={page.bestOptions}
              />
            </section>
          )}

          {/* FAQs */}
          {page.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <FAQ faqs={page.faqs} skipHeading />
            </section>
          )}

          {/* Sources */}
          {page.sources.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Sources</h2>
              <SourceList sources={page.sources} />
            </section>
          )}

          {/* Related Links */}
          {page.relatedLinks.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Related Pages
              </h2>
              <div className="flex flex-wrap gap-3">
                {page.relatedLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <p className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            Last updated: {new Date(page.lastUpdated).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </article>
      </Container>
    </>
  );
}
