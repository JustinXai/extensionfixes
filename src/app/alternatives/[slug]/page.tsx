import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getExtensionBySlug, extensions } from '@/data/extensions';
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
  return extensions.map((ext) => ({
    slug: ext.slug,
  }));
}

// SEO metadata for each extension
const extensionMetadata: Record<string, { title: string; description: string; quickAnswer: string }> = {
  switchyomega: {
    title: 'Best Proxy SwitchyOmega Alternatives for Chrome MV3',
    description:
      'Proxy SwitchyOmega not working in Chrome? Compare MV3-compatible alternatives such as ZeroOmega and FoxyProxy, plus migration steps and safety notes.',
    quickAnswer:
      'SwitchyOmega stopped working in Chrome 138+ because Chrome disabled Manifest V2 extensions. The best path forward is to export your proxy profiles and migrate to ZeroOmega, a community-maintained MV3 fork that can import your existing SwitchyOmega settings directly.',
  },
  'ublock-origin': {
    title: 'uBlock Origin No Longer Supported in Chrome: Best Alternatives',
    description:
      'Learn why classic uBlock Origin stopped working in Chrome, how uBlock Origin Lite differs, and which alternatives are available.',
    quickAnswer:
      'Classic uBlock Origin stopped working in Chrome 138+ because it uses Manifest V2. The official MV3 replacement is uBlock Origin Lite, developed by the same creator. For most users relying on filter lists, Lite provides equivalent ad blocking.',
  },
  'great-suspender': {
    title: 'The Great Suspender Alternatives and Tab Recovery Guide',
    description:
      'The original Great Suspender was removed from the Chrome Web Store. Learn safer alternatives and what to know before trying to recover suspended tabs.',
    quickAnswer:
      'The original Great Suspender was removed from the Chrome Web Store due to a malicious version. Chrome Memory Saver is the built-in replacement. Auto Tab Discard is a community alternative with similar functionality.',
  },
  modheader: {
    title: 'ModHeader Alternatives for Chrome',
    description:
      'ModHeader is still active in Chrome. Compare alternatives like Requestly and Header Editor for HTTP header modification needs.',
    quickAnswer:
      'ModHeader remains active in Chrome as an MV3 extension. If you need alternatives, Requestly and Header Editor offer similar HTTP header modification capabilities with MV3 support.',
  },
  downthemall: {
    title: 'DownThemAll Alternatives for Chrome',
    description:
      'DownThemAll remains active in Chrome. Compare download manager alternatives like Chrono and browser-native options.',
    quickAnswer:
      'DownThemAll remains active in Chrome. If you need alternatives, Chrono Download Manager and native browser download features offer similar capabilities for managing multiple file downloads.',
  },
  tampermonkey: {
    title: 'Tampermonkey Alternatives for Chrome',
    description:
      'Tampermonkey is actively maintained in Chrome. Compare alternatives like Violentmonkey for userscript management needs.',
    quickAnswer:
      'Tampermonkey is actively maintained as an MV3-compatible extension for Chrome. Violentmonkey is a lightweight open-source alternative that supports Tampermonkey-compatible scripts.',
  },
  violentmonkey: {
    title: 'Violentmonkey Alternatives for Chrome',
    description:
      'Violentmonkey is actively maintained in Chrome. Compare alternatives like Tampermonkey for userscript management.',
    quickAnswer:
      'Violentmonkey is an actively maintained open-source userscript manager. Tampermonkey is the most widely-used option with more built-in features and a larger script library.',
  },
  'auto-tab-discard': {
    title: 'Auto Tab Discard Alternatives for Chrome',
    description:
      'Auto Tab Discard is actively maintained in Chrome. Compare alternatives like Chrome Memory Saver and OneTab for tab management.',
    quickAnswer:
      'Auto Tab Discard is an actively maintained MV3 extension for suspending inactive tabs. Chrome Memory Saver is the built-in alternative. OneTab offers manual tab consolidation.',
  },
  foxyproxy: {
    title: 'FoxyProxy Alternatives for Chrome',
    description:
      'FoxyProxy is actively maintained in Chrome. Compare alternatives like ZeroOmega for proxy management.',
    quickAnswer:
      'FoxyProxy is an actively maintained MV3 proxy manager for Chrome with advanced features. ZeroOmega and Proxy Switcher are alternatives with different interfaces and feature sets.',
  },
  'session-buddy': {
    title: 'Session Buddy Alternatives for Chrome',
    description:
      'Session Buddy is actively maintained in Chrome. Compare alternatives like Workona and OneTab for session and tab management.',
    quickAnswer:
      'Session Buddy is an actively maintained session manager for Chrome. Workona offers workspace-based organization. OneTab provides simple manual tab consolidation.',
  },
  stylus: {
    title: 'Stylus Alternatives for Chrome',
    description:
      'Stylus is actively maintained in Chrome. Compare alternatives for custom CSS style management and website theming.',
    quickAnswer:
      'Stylus is an actively maintained open-source style manager that replaced the deprecated Stylish extension. It lets you install custom CSS themes to modify website appearance.',
  },
  'dark-reader': {
    title: 'Dark Reader Alternatives for Chrome',
    description:
      'Dark Reader is actively maintained in Chrome. Compare alternatives like Night Eye for dark mode and accessibility needs.',
    quickAnswer:
      'Dark Reader is an actively maintained MV3 extension for applying dark themes to websites. Night Eye offers multiple dark mode algorithms alongside additional features.',
  },
  onetab: {
    title: 'OneTab Alternatives for Chrome',
    description:
      'OneTab is actively maintained in Chrome. Compare alternatives like Auto Tab Discard and Session Buddy for tab management.',
    quickAnswer:
      'OneTab is an actively maintained MV3 extension for consolidating open tabs into a list. Auto Tab Discard offers automatic tab suspension. Session Buddy provides session management.',
  },
  'video-downloadhelper': {
    title: 'Video DownloadHelper Alternatives for Chrome',
    description:
      'Video DownloadHelper may be affected by Chrome MV2 deprecation. Learn about MV3-compatible versions and alternatives.',
    quickAnswer:
      'Video DownloadHelper is being updated for MV3 compatibility. The latest version from the Chrome Web Store should work in Chrome 138+. Chrono Download Manager is an alternative download manager.',
  },
  'user-agent-switcher': {
    title: 'User-Agent Switcher Alternatives for Chrome',
    description:
      'User-Agent Switcher and alternatives for Chrome. Compare Chrome DevTools and Requestly for developer testing needs.',
    quickAnswer:
      'User-Agent Switcher is available as an MV3 extension in the Chrome Web Store. Chrome DevTools includes built-in device emulation for user-agent testing without an extension.',
  },
  grammarly: {
    title: 'Grammarly Alternatives for Chrome',
    description:
      'Grammarly is actively maintained in Chrome. Compare alternatives like LanguageTool and Ginger for writing assistance.',
    quickAnswer:
      'Grammarly is an actively maintained MV3 writing assistant for Chrome. LanguageTool is an open-source alternative with a privacy-friendly option. Ginger offers translation features alongside grammar checking.',
  },
  lastpass: {
    title: 'LastPass Alternatives for Chrome',
    description:
      'LastPass is actively maintained in Chrome. Compare alternatives like Bitwarden and 1Password for password management.',
    quickAnswer:
      'LastPass is an actively maintained MV3 password manager for Chrome. Bitwarden is a popular open-source alternative. 1Password is a premium option with a polished interface.',
  },
  bitwarden: {
    title: 'Bitwarden Alternatives for Chrome',
    description:
      'Bitwarden is actively maintained in Chrome. Compare alternatives like LastPass and 1Password for password management.',
    quickAnswer:
      'Bitwarden is an actively maintained open-source password manager for Chrome. It offers both cloud-hosted and self-hosted options. LastPass and 1Password are alternative options with different approaches.',
  },
  honey: {
    title: 'Honey Alternatives for Chrome',
    description:
      'Honey is actively maintained in Chrome. Compare alternatives like Capital One Shopping for coupon and price tracking.',
    quickAnswer:
      'Honey is an actively maintained shopping utility for Chrome that finds coupon codes and tracks prices. Capital One Shopping is a free alternative with automatic coupons and price comparisons.',
  },
  'google-translate': {
    title: 'Google Translate Alternatives for Chrome',
    description:
      'Google Translate is actively maintained in Chrome. Compare alternatives like DeepL and Microsoft Translator for web page translation.',
    quickAnswer:
      'Google Translate is the official Google extension for web page and text translation. DeepL offers an alternative translation engine known for natural translations. Microsoft Translator is another option.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);

  if (!extension) {
    return {
      title: 'Extension Not Found',
      description: 'The requested extension alternative page could not be found.',
    };
  }

  const customMeta = extensionMetadata[slug] || {
    title: `Best ${extension.name} Alternatives for Chrome MV3`,
    description: extension.shortAnswer,
    quickAnswer: extension.shortAnswer,
  };

  const canonical = `https://extensionfixes.com/alternatives/${slug}`;

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

export default async function AlternativePage({ params }: PageProps) {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);

  if (!extension) {
    notFound();
    return null;
  }

  const customMeta = extensionMetadata[slug] || { quickAnswer: extension.shortAnswer };
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

  const defaultWhatNotToDo = [
    'Do not install random CRX files from unknown download sites.',
    'Do not assume a similar name means it is from the same developer.',
    'Do not grant broad permissions without checking the developer.',
    'Export settings before removing old extensions if you still need the configuration.',
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={techArticleSchema} />
      {extension.faqs.length > 0 && <JsonLd data={createFAQSchema(extension.faqs)} />}
      {extension.migrationSteps.length > 0 && <JsonLd data={howToSchema} />}

      <Container>
        <nav className="py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-900">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/alternatives" className="hover:text-slate-900">Alternatives</Link>
            </li>
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
              Best {extension.name} Alternatives for Chrome MV3
            </h1>
            <QuickAnswer answer={customMeta.quickAnswer} />
          </header>

          <section className="mb-10" aria-labelledby="what-happened-heading">
            <h2 id="what-happened-heading" className="text-xl font-semibold text-slate-900 mb-4">What Happened</h2>
            <ul className="space-y-3">
              {extension.whatHappened.map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="mb-10">
            <WhatNotToDo items={defaultWhatNotToDo} />
          </section>

          {/* ── Top 5 Enhanced Sections ─────────────────────────────── */}
          {extension.atAGlance && (
            <section className="mb-10" aria-labelledby="at-a-glance-heading">
              <h2 id="at-a-glance-heading" className="text-xl font-semibold text-slate-900 mb-4">At a Glance</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Original extension', value: extension.atAGlance.originalExtension },
                  { label: 'Current Chrome status', value: extension.atAGlance.currentStatus },
                  { label: 'Best practical option', value: extension.atAGlance.bestPracticalOption },
                  ...(extension.atAGlance.bestForAdvancedUsers
                    ? [{ label: 'Best for advanced users', value: extension.atAGlance.bestForAdvancedUsers }]
                    : []),
                  { label: 'Main caution', value: extension.atAGlance.mainCaution },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.label}</span>
                    <span className="text-sm text-slate-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {extension.comparisonTable && extension.comparisonTable.length > 0 && (
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
                    {extension.comparisonTable.map((row, i) => (
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

          {extension.decisionGuide && extension.decisionGuide.length > 0 && (
            <section className="mb-10" aria-labelledby="decision-guide-heading">
              <h2 id="decision-guide-heading" className="text-xl font-semibold text-slate-900 mb-4">Which Option Should You Choose?</h2>
              <div className="space-y-4">
                {extension.decisionGuide.map((item, i) => (
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

          {extension.commonMistakes && extension.commonMistakes.length > 0 && (
            <section className="mb-10" aria-labelledby="common-mistakes-heading">
              <h2 id="common-mistakes-heading" className="text-xl font-semibold text-slate-900 mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-3">
                {extension.commonMistakes.map((item, i) => (
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

          {slug === 'switchyomega' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/switchyomega-not-working" className="text-blue-600 hover:text-blue-800 hover:underline">
                  SwitchyOmega Not Working Guide
                </Link>
                <Link href="/switchyomega-alternative" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Best SwitchyOmega Alternatives
                </Link>
                <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Manifest V2 Disabled Guide
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'ublock-origin' && (
            <section className="mb-10 p-5 bg-amber-50 rounded-xl border border-amber-200" aria-labelledby="no-crx-heading">
              <h2 id="no-crx-heading" className="text-lg font-semibold text-amber-800 mb-2">Do not download random CRX files</h2>
              <p className="text-sm text-amber-700 leading-relaxed">
                Searching for &quot;uBlock Origin CRX&quot; may return modified packages from third-party sites. These can contain outdated code, unexpected permissions, or supply-chain risks. Always install uBlock Origin Lite from the official <a href="https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh" className="font-medium underline hover:text-amber-900" target="_blank" rel="noopener noreferrer">Chrome Web Store listing</a>, or visit the official <a href="https://github.com/gorhill/uBlock" className="font-medium underline hover:text-amber-900" target="_blank" rel="noopener noreferrer">uBlock Origin GitHub</a> to verify current options.
              </p>
            </section>
          )}

          {slug === 'ublock-origin' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/ublock-origin-no-longer-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                  uBlock Origin No Longer Supported Guide
                </Link>
                <Link href="/ublock-origin-lite-vs-ublock-origin" className="text-blue-600 hover:text-blue-800 hover:underline">
                  uBlock Origin Lite vs Classic
                </Link>
                <Link href="/fix/this-extension-is-no-longer-supported" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Extension No Longer Supported Fix
                </Link>
                <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Manifest V2 Disabled Guide
                </Link>
              </div>
            </section>
          )}

          {slug === 'great-suspender' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/fix/chrome-disabled-extension" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Chrome Disabled Extension Guide
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'tampermonkey' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/violentmonkey" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Violentmonkey Alternatives
                </Link>
                <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Manifest V2 Disabled Guide
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'violentmonkey' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/tampermonkey" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Tampermonkey Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'auto-tab-discard' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/great-suspender" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Great Suspender Alternatives
                </Link>
                <Link href="/onetab" className="text-blue-600 hover:text-blue-800 hover:underline">
                  OneTab Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'foxyproxy' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/switchyomega" className="text-blue-600 hover:text-blue-800 hover:underline">
                  SwitchyOmega Alternatives
                </Link>
                <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Manifest V2 Disabled Guide
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'onetab' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/auto-tab-discard" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Auto Tab Discard Alternatives
                </Link>
                <Link href="/session-buddy" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Session Buddy Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'session-buddy' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/onetab" className="text-blue-600 hover:text-blue-800 hover:underline">
                  OneTab Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'stylus' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'dark-reader' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'video-downloadhelper' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/downthemall" className="text-blue-600 hover:text-blue-800 hover:underline">
                  DownThemAll Alternatives
                </Link>
                <Link href="/fix/chrome-disabled-extension" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Chrome Disabled Extension Guide
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'user-agent-switcher' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/modheader" className="text-blue-600 hover:text-blue-800 hover:underline">
                  ModHeader Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'grammarly' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'lastpass' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/bitwarden" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Bitwarden Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'bitwarden' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/lastpass" className="text-blue-600 hover:text-blue-800 hover:underline">
                  LastPass Alternatives
                </Link>
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'honey' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

          {slug === 'google-translate' && (
            <section className="mb-10 p-5 bg-slate-50 rounded-xl border border-slate-200" aria-labelledby="related-resources-heading">
              <h2 id="related-resources-heading" className="text-lg font-semibold text-slate-900 mb-3">Related Resources</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/tools/extension-search" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Search More Extensions
                </Link>
              </div>
            </section>
          )}

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
