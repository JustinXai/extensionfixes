import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  name: 'Extension Fixes',
  domain: 'https://extensionfixes.com',
  description:
    'Find safe MV3 alternatives for Chrome extensions that are disabled, unsupported, removed, or no longer maintained.',
  h1: 'Fix Unsupported Chrome Extensions',
  tagline:
    'Find safe MV3 alternatives for Chrome extensions that are disabled, unsupported, removed, or no longer maintained.',
  searchPlaceholder:
    'Search an extension, error message, or Chrome Web Store URL',
  ctas: [
    { label: 'Search Extension', href: '/tools/extension-search' },
    { label: 'Browse Alternatives', href: '/alternatives' },
    { label: 'Read MV2 / MV3 Guide', href: '/fix/manifest-v2-disabled' },
  ],
  trustPoints: [
    'No login required',
    'No extension required',
    'No tracking',
    'Official links when available',
  ],
  disclaimer:
    'Extension Fixes is an independent guide and is not affiliated with Google, Chrome, the Chrome Web Store, or any listed extension developers. Recommendations are informational and should be verified before installation.',
};

export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Search', href: '/tools/extension-search' },
  { label: 'Alternatives', href: '/alternatives' },
  { label: 'Guides', href: '/guides' },
];

export const footerLinks = [
  {
    title: 'Popular Extensions',
    links: [
      { label: 'SwitchyOmega Alternatives', href: '/alternatives/switchyomega' },
      { label: 'uBlock Origin Alternatives', href: '/alternatives/ublock-origin' },
      { label: 'Great Suspender Alternatives', href: '/alternatives/great-suspender' },
      { label: 'ModHeader Alternatives', href: '/alternatives/modheader' },
      { label: 'DownThemAll Alternatives', href: '/alternatives/downthemall' },
    ],
  },
  {
    title: 'Common Fixes',
    links: [
      { label: 'Extension No Longer Supported', href: '/fix/this-extension-is-no-longer-supported' },
      { label: 'Manifest V2 Disabled', href: '/fix/manifest-v2-disabled' },
      { label: 'Chrome Disabled Extension', href: '/fix/chrome-disabled-extension' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Extension Search Tool', href: '/tools/extension-search' },
      { label: 'All Alternatives', href: '/alternatives' },
      { label: 'All Guides', href: '/guides' },
      { label: 'Sitemap', href: '/sitemap.xml' },
    ],
  },
];
