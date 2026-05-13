import { SearchBox } from './SearchBox';
import { siteConfig } from '@/data/site';
import { CommonSearches } from './CommonSearches';

const commonSearches = [
  { label: 'SwitchyOmega not working', href: '/switchyomega-not-working' },
  { label: 'uBlock Origin no longer supported', href: '/ublock-origin-no-longer-supported' },
  { label: 'Manifest V2 disabled', href: '/fix/manifest-v2-disabled' },
  { label: 'Chrome disabled my extension', href: '/fix/chrome-disabled-extension' },
  { label: 'This extension may soon no longer be supported', href: '/this-extension-may-soon-no-longer-be-supported' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {siteConfig.h1}
        </h1>

        <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-2xl mx-auto">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 max-w-2xl mx-auto">
          <SearchBox />
        </div>

        <CommonSearches searches={commonSearches} className="mt-6 justify-center" />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          {siteConfig.trustPoints.map((point: string, index: number) => (
            <span key={index} className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {point}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Last updated: May 2026
        </p>
      </div>
    </section>
  );
}
