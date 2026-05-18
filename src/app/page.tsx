import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ExtensionCard } from '@/components/ExtensionCard';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';
import { Container } from '@/components/Container';
import { getPopularExtensions } from '@/data/extensions';
import { createWebsiteSchema, createFAQSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Extension Fixes - Fix Unsupported Chrome Extensions',
  description:
    'Find safe MV3 alternatives for Chrome extensions that are disabled, unsupported, removed, or no longer maintained. No login, no tracking.',
  keywords: [
    'chrome extension not working',
    'chrome extension disabled',
    'mv3 alternatives',
    'manifest v2 deprecated',
    'chrome extension replacement',
    'switchyomega alternative',
    'ublock origin alternative',
    'great suspender alternative',
    'foxyproxy alternative',
    'chrome ublock origin lite',
    'the great suspender malware',
    'extension was turned off',
  ],
};

const homeFaqs: FAQItem[] = [
  {
    question: 'Why are my Chrome extensions no longer working?',
    answer:
      'Chrome has been phasing out Manifest V2 (MV2) extensions since 2023, and fully disabled MV2 for all users starting with Chrome 138. Extensions that have not been updated to Manifest V3 (MV3) will stop working or show "no longer supported" messages.',
  },
  {
    question: 'Are the alternatives on this site safe?',
    answer:
      'We recommend extensions from official sources like the Chrome Web Store and well-known developers. We include source links so you can verify information independently. Always review extension permissions before installing.',
  },
  {
    question: 'Do I need to create an account to use this site?',
    answer:
      'No. Extension Fixes is a read-only resource that does not require login, tracking, or any personal information.',
  },
  {
    question: 'Can I use these extensions on other browsers?',
    answer:
      'Some extensions work on other Chromium-based browsers (Edge, Brave) or Firefox. Firefox still supports Manifest V2 extensions, which may be useful if you need legacy extension functionality.',
  },
  {
    question: 'What is the difference between MV2 and MV3?',
    answer:
      'Manifest V3 (MV3) is the newer Chrome extension platform with improved security, privacy, and performance features. Key changes include the declarativeNetRequest API replacing the webRequest API and modifications to background script handling.',
  },
];

export default function HomePage() {
  const popularExtensions = getPopularExtensions();
  const websiteSchema = createWebsiteSchema();
  const faqSchema = createFAQSchema(homeFaqs);

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />

      <Hero />

      <Container>
        {/* Quick Answer */}
        <section className="py-8 border-b border-gray-200">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
              Quick Answer
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Extension Fixes helps you find practical next steps when Chrome extensions stop working. Browse alternatives by extension name, match your exact warning message, or search for a specific extension — all without creating an account.
            </p>
          </div>
        </section>

        {/* AI-Readable Section */}
        <section className="py-12 border-b border-gray-200">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-3">
              Built for AI-readable answers
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Extension Fixes pages are structured with quick answers, comparison tables, safety notes, and source links so users and AI browsing tools can understand extension issues faster.
            </p>
          </div>
        </section>

        {/* What do you need to fix? */}
        <section id="what-to-fix" className="py-16 border-b border-gray-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">What do you need to fix?</h2>
            <p className="mt-2 text-slate-600">
              Choose the scenario that matches your situation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/tools/extension-search"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900">Search an extension</h3>
              <p className="mt-2 text-sm text-slate-600">
                Find current Chrome status, alternatives, and related fix guides.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Search extensions
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            <Link
              href="/alternatives"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900">Browse alternatives</h3>
              <p className="mt-2 text-sm text-slate-600">
                Compare MV3-compatible and maintained alternatives.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Browse alternatives
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            <Link
              href="/chrome-extension-error-messages"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900">Fix Chrome warnings</h3>
              <p className="mt-2 text-sm text-slate-600">
                Understand common warnings and what to do next.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Look up warnings
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            <Link
              href="/fix/manifest-v2-disabled"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900">Understand MV2 shutdown</h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn why older extensions stopped working in Chrome.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Read MV2 guide
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <section id="alternatives" className="py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Popular Extension Alternatives</h2>
            <p className="mt-2 text-slate-600">
              Find MV3-compatible replacements for commonly affected Chrome extensions.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularExtensions.map((extension) => (
              <ExtensionCard key={extension.slug} extension={extension} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/alternatives"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50"
            >
              Browse all alternatives
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Start with the Chrome message you see</h2>
            <p className="mt-2 text-slate-600">
              Select the error message or warning you received to find solutions.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Link
              href="/fix/this-extension-is-no-longer-supported"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">
                &quot;This extension is no longer supported&quot;
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                What to do when Chrome shows your extension is no longer supported.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Read guide
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/this-extension-may-soon-no-longer-be-supported"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">
                &quot;This extension may soon no longer be supported&quot;
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Prepare for upcoming changes and find alternatives before they stop working.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Read guide
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/fix/manifest-v2-disabled"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">&quot;Manifest V2 disabled&quot;</h3>
              <p className="mt-2 text-sm text-slate-600">
                Understand why Chrome disabled older extension formats and what it means for you.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                Read guide
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Why Chrome Disabled Old Extensions
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600">
                Many older Chrome extensions were built for Manifest V2. Current Chrome versions now
                rely on Manifest V3 for supported extension workflows, so some older extensions may stop
                working unless the developer ships a compatible version.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-blue-50 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">Better Security</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    MV3 limits extension capabilities to reduce attack surfaces and prevent misuse.
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">Improved Privacy</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Users have more control over permissions and what data extensions can access.
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">Better Performance</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    MV3 extensions use fewer system resources and have less impact on browser speed.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-slate-500">
                Learn more:{' '}
                <Link href="/fix/manifest-v2-disabled" className="text-blue-600 hover:underline">
                  Manifest V2 Disabled in Chrome: What You Can Do
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              How Extension Fixes Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Search the extension or error message</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Enter the extension name, error message, or Chrome Web Store URL in the search box.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Read what changed and what to avoid</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Learn why the extension stopped working and what safe steps you can take next.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Choose a maintained replacement or migration path</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Select from verified alternatives and follow migration guides to continue your workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="guides" className="py-16 border-t border-gray-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Common Fix Guides</h2>
            <p className="mt-2 text-slate-600">
              Understand and resolve common Chrome extension issues.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/fix/this-extension-is-no-longer-supported"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">
                Fix &quot;This Extension Is No Longer Supported&quot;
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                What to do when Chrome shows your extension is no longer supported.
              </p>
            </Link>
            <Link
              href="/this-extension-was-turned-off-because-it-is-no-longer-supported"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">
                Fix &quot;This Extension Was Turned Off&quot;
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn why Chrome turned off an extension and what to do next.
              </p>
            </Link>
            <Link
              href="/fix/manifest-v2-disabled"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">Manifest V2 Disabled</h3>
              <p className="mt-2 text-sm text-slate-600">
                Understand Chrome MV2 deprecation and what it means for your extensions.
              </p>
            </Link>
            <Link
              href="/fix/chrome-disabled-extension"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">Chrome Disabled My Extension</h3>
              <p className="mt-2 text-sm text-slate-600">
                Common reasons Chrome disables extensions and safe ways to resolve issues.
              </p>
            </Link>
            <Link
              href="/foxyproxy-alternative-for-chrome"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">FoxyProxy Alternatives</h3>
              <p className="mt-2 text-sm text-slate-600">
                Compare FoxyProxy, ZeroOmega, and other proxy switching options.
              </p>
            </Link>
            <Link
              href="/the-great-suspender-malware"
              className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">The Great Suspender History</h3>
              <p className="mt-2 text-sm text-slate-600">
                Learn what happened and find safer tab management alternatives.
              </p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              View all guides
              <svg
                className="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200">
          <div className="mx-auto max-w-3xl">
            <FAQ faqs={homeFaqs} />
          </div>
        </section>

        <p className="py-8 text-center text-sm text-slate-500">
          Last updated: May 2026
        </p>
      </Container>
    </>
  );
}
