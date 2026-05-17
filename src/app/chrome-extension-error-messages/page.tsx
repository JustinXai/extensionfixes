import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { createBreadcrumbSchema, createTechArticleSchema, createFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chrome Extension Error Messages: What They Mean and How to Fix Them',
  description:
    'Look up common Chrome extension warning messages, including unsupported extensions, Manifest V2 issues, disabled extensions, and removed extensions.',
  alternates: {
    canonical: 'https://extensionfixes.com/chrome-extension-error-messages',
  },
  openGraph: {
    title: 'Chrome Extension Error Messages: What They Mean and How to Fix Them',
    description:
      'Look up common Chrome extension warning messages, including unsupported extensions, Manifest V2 issues, disabled extensions, and removed extensions.',
    url: 'https://extensionfixes.com/chrome-extension-error-messages',
    siteName: 'Extension Fixes',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Chrome Extension Error Messages: What They Mean and How to Fix Them',
    description:
      'Look up common Chrome extension warning messages and find the safest next steps.',
  },
};

const warningMessages = [
  {
    message: 'This extension was turned off because it is no longer supported',
    meaning:
      'Chrome turned off the extension because it is no longer supported in the current browser environment.',
    nextStep: 'Check whether a maintained MV3-compatible replacement exists.',
    link: '/this-extension-was-turned-off-because-it-is-no-longer-supported',
  },
  {
    message: 'This extension is no longer supported',
    meaning:
      'The extension may rely on an older extension system, may have been removed, or may no longer be maintained.',
    nextStep: 'Read the general unsupported extension guide.',
    link: '/fix/this-extension-is-no-longer-supported',
  },
  {
    message: 'This extension may soon no longer be supported',
    meaning:
      'Chrome is warning that the extension may be affected by extension platform changes.',
    nextStep: 'Prepare a replacement before it stops working.',
    link: '/this-extension-may-soon-no-longer-be-supported',
  },
  {
    message: 'Manifest V2 disabled',
    meaning:
      'The extension may rely on Manifest V2, which current Chrome versions no longer support for normal users.',
    nextStep: 'Look for a Manifest V3-compatible replacement.',
    link: '/fix/manifest-v2-disabled',
  },
  {
    message: 'Chrome disabled my extension',
    meaning:
      'Chrome can disable extensions for support, policy, store, or safety reasons.',
    nextStep: 'Identify the exact message and extension name first.',
    link: '/fix/chrome-disabled-extension',
  },
  {
    message: 'Cannot install extension: unsupported manifest',
    meaning:
      'The extension package may use an unsupported manifest version.',
    nextStep: 'Check for a current Chrome Web Store version or a maintained alternative.',
    link: '/fix/manifest-v2-disabled',
  },
];

const checklistItems = [
  'Exact warning message',
  'Extension name',
  'Chrome version',
  'Chrome Web Store listing',
  'Developer website or GitHub',
  'Whether a maintained MV3 version exists',
  'Whether settings can be exported before removal',
];

const whatNotToDoItems = [
  'Do not install random CRX files from unknown sites.',
  'Do not assume a similar name means it is the right replacement.',
  'Do not grant broad permissions to unknown extensions without checking the developer.',
  'Do not remove an old extension before exporting settings if you still need its configuration.',
  'Do not assume every disabled extension is malware.',
];

const relatedGuides = [
  { label: 'Extension Search', href: '/tools/extension-search' },
  { label: 'Extension Was Turned Off', href: '/this-extension-was-turned-off-because-it-is-no-longer-supported' },
  { label: 'Extension May Soon Be Unsupported', href: '/this-extension-may-soon-no-longer-be-supported' },
  { label: 'Manifest V2 Disabled', href: '/fix/manifest-v2-disabled' },
  { label: 'SwitchyOmega Not Working', href: '/switchyomega-not-working' },
  { label: 'FoxyProxy Alternatives', href: '/foxyproxy-alternative-for-chrome' },
  { label: 'Great Suspender History', href: '/the-great-suspender-malware' },
  { label: 'uBlock Origin No Longer Supported', href: '/ublock-origin-no-longer-supported' },
];

const faqs = [
  {
    question: 'Why did Chrome turn off my extension?',
    answer:
      'Chrome may turn off extensions for several reasons. The most common is Manifest V2 deprecation, where Chrome 138 disabled all MV2 extensions. Other reasons include removal from the Chrome Web Store, security concerns, or policy violations. Check the specific warning message and extension name to determine the exact cause.',
  },
  {
    question: 'Can I turn an unsupported extension back on?',
    answer:
      'Generally, no. If the extension was disabled due to MV2 deprecation, Chrome 138 and later do not support re-enabling MV2 extensions. If it was removed from the Chrome Web Store, you should not attempt to install unofficial copies. Your best path is to find an MV3-compatible alternative.',
  },
  {
    question: 'What does Manifest V2 disabled mean?',
    answer:
      'Manifest V2 (MV2) is an older Chrome extension platform. Chrome 138 disabled all MV2 extensions by default for security, privacy, and performance reasons. Extensions built on MV2 that have not been updated to MV3 will stop working. This is a Chrome platform change, not necessarily a problem with the extension itself.',
  },
  {
    question: 'Is it safe to install an old CRX file?',
    answer:
      'No. Downloading extensions from unofficial sources is risky. These files may contain malware, outdated security patches, or modified functionality. Only install extensions from the official Chrome Web Store or verified developer sources. Chrome may also block loading of extensions from unofficial sources.',
  },
  {
    question: 'How do I know whether a replacement is trustworthy?',
    answer:
      'Verify the developer name matches the official project. Check the number of users, ratings, and recent reviews. Review the permissions requested and compare them to the stated functionality. Only install from the official Chrome Web Store. For open-source projects, check the GitHub repository for transparency.',
  },
  {
    question: 'What should I do before removing an old extension?',
    answer:
      'Export your extension settings if the option is still available. Many extensions allow you to export profiles or configuration files. Check what the extension did so you can verify alternatives meet your needs. Review the extension permissions to understand what data it had access to. After finding a replacement, check if it supports importing your exported settings.',
  },
];

const sources = [
  {
    title: 'Chrome Manifest V2 Deprecation Timeline',
    url: 'https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline',
    publisher: 'Google Chrome Developers',
  },
  {
    title: 'Chrome Web Store Program Policies',
    url: 'https://developer.chrome.com/docs/webstore/program-policies/policies',
    publisher: 'Google Chrome Developers',
  },
  {
    title: 'Manage extensions disabled by Chrome',
    url: 'https://support.google.com/chrome_webstore/answer/2811969',
    publisher: 'Google Chrome Support',
  },
];

const quickAnswer =
  'Chrome extension warnings usually mean the extension is unsupported, disabled, removed, policy-blocked, or affected by Manifest V2 changes. The practical next step is to identify the exact message, check the extension name, avoid unknown CRX downloads, and move to a maintained replacement when needed.';

export default function ChromeExtensionErrorMessagesPage() {
  const canonical = 'https://extensionfixes.com/chrome-extension-error-messages';

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://extensionfixes.com' },
    { name: 'Chrome Extension Error Messages', url: canonical },
  ]);

  const techArticleSchema = createTechArticleSchema({
    title: 'Chrome Extension Error Messages: What They Mean and How to Fix Them',
    description: quickAnswer,
    url: canonical,
    lastUpdated: '2026-05-17',
  });

  const faqSchema = createFAQSchema(faqs);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={techArticleSchema} />
      <JsonLd data={faqSchema} />

      <Container>
        <nav className="py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-900">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900" aria-current="page">Chrome Extension Error Messages</li>
          </ol>
        </nav>

        <article className="pb-16">
          <header className="mb-8 text-center">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Warning Message Lookup
            </span>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
              Chrome Extension Error Messages: What They Mean and How to Fix Them
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Paste or match the warning you see in Chrome, then follow the safest next step.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/tools/extension-search"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Search a warning message
              </Link>
              <Link
                href="/alternatives"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50"
              >
                Browse extension alternatives
              </Link>
            </div>
          </header>

          <section className="mb-10">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
                Quick Answer
              </h2>
              <p className="text-slate-700 leading-relaxed">{quickAnswer}</p>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="messages-heading">
            <h2 id="messages-heading" className="text-2xl font-bold text-slate-900 mb-6">
              Common Warning Messages
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                      Message
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                      What It Means
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                      Best Next Step
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                      Guide
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {warningMessages.map((item) => (
                    <tr key={item.message} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm sm:px-6">
                        <span className="font-medium text-slate-900">&quot;{item.message}&quot;</span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">
                        {item.meaning}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">
                        {item.nextStep}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                        <Link
                          href={item.link}
                          className="text-sm font-medium text-blue-600 hover:text-blue-800"
                        >
                          View guide
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="checklist-heading">
            <h2 id="checklist-heading" className="text-2xl font-bold text-slate-900 mb-6">
              What to Check First
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <ul className="space-y-3">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex gap-3 text-slate-600">
                    <svg className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="dont-heading">
            <h2 id="dont-heading" className="text-2xl font-bold text-slate-900 mb-6">What Not To Do</h2>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <ul className="space-y-2">
                {whatNotToDoItems.map((item, index) => (
                  <li key={index} className="flex gap-2 text-red-700 text-sm">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <span className="font-medium text-blue-600 hover:text-blue-800">
                    {guide.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-2xl font-bold text-slate-900 mb-6">Sources</h2>
            <ul className="space-y-4">
              {sources.map((source) => (
                <li key={source.url} className="rounded-xl border border-gray-200 bg-white p-4">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    {source.title}
                  </a>
                  <span className="text-slate-500 text-sm ml-2">({source.publisher})</span>
                </li>
              ))}
            </ul>
          </section>

          <footer className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            <p>Last updated: May 2026</p>
            <p className="mt-2 text-xs">
              Independent guide. Not affiliated with Google, Chrome, Chrome Web Store, or listed extension developers.
            </p>
          </footer>
        </article>
      </Container>
    </>
  );
}
