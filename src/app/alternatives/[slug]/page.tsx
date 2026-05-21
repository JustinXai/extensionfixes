// /alternatives/[slug] — uses AlternativePageTemplate
// All content rendering is delegated to the template component.
// Route layer handles: generateStaticParams, generateMetadata, params.
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getExtensionBySlug, extensions } from '@/data/extensions';
import { AlternativePageTemplate } from '@/components/templates/AlternativePageTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return extensions.map((ext) => ({ slug: ext.slug }));
}

const extensionMeta: Record<string, { title: string; description: string; quickAnswer: string }> = {
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
      'Classic uBlock Origin stopped working in Chrome 138+ because Chrome disabled Manifest V2 extensions. For many Chrome users, uBlock Origin Lite is the closest MV3-compatible option from the same developer, but it does not replicate every feature of the original extension. Firefox remains a practical option for users who need full classic uBlock Origin functionality, since Firefox still supports MV2 extensions. Avoid installing random CRX copies of classic uBlock Origin from unofficial sources, because modified extensions can create privacy and security risks. The MV3-compatible ad blocker space is actively developed, and other options like AdGuard AdBlocker and Adblock Plus are available in the Chrome Web Store.',
  },
  'great-suspender': {
    title: 'The Great Suspender Alternatives and Tab Recovery Guide',
    description:
      'The original Great Suspender was removed from the Chrome Web Store. Learn safer alternatives and what to know before trying to recover suspended tabs.',
    quickAnswer:
      'The original Great Suspender was removed from the Chrome Web Store after a malicious version incident in 2021, and Chrome proactively disabled it for installed users. Users should avoid reinstalling old CRX copies from mirror sites because modified versions can contain unwanted code. For most Chrome users, Chrome Memory Saver is the simplest built-in replacement for tab suspension. Auto Tab Discard is a practical extension alternative for automatic tab unloading, while OneTab is better for manual tab consolidation and Workona is more focused on workspace management. The best option depends on whether you want automatic suspension, simple memory savings, or session organization.',
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
    title: 'Tampermonkey Alternatives for Chrome Users',
    description:
      'Compare Tampermonkey, Violentmonkey, and other userscript manager options for Chrome. Learn what to use, what to avoid, and how to migrate safely.',
    quickAnswer:
      'Tampermonkey is one of the most widely used userscript managers for Chrome, but some users look for alternatives because they prefer open-source tooling, want a different permission model, or need to test script compatibility in another manager. Violentmonkey is the most common alternative for users who want an open-source userscript workflow, while simple browser bookmarks or snippets may be enough for very small personal scripts. Userscript managers can run powerful code on pages you visit, so the main decision is not only which extension to install, but also which scripts you trust and how carefully you review permissions.',
  },
  violentmonkey: {
    title: 'Violentmonkey Alternatives for Chrome Users',
    description:
      'Compare Violentmonkey, Tampermonkey, and userscript manager options for Chrome. Learn what to use, what to avoid, and how to migrate safely.',
    quickAnswer:
      'Violentmonkey is an open-source userscript manager used to run custom browser scripts on websites you visit. If you need a Violentmonkey alternative for Chrome, Tampermonkey is the most widely known option, while Violentmonkey remains a practical choice for users who prefer an open-source workflow. The right choice depends on script compatibility, permission expectations, browser support, and how much control you want over imported scripts. Userscript managers can run powerful code on pages you visit, so avoid random script mirrors, review script permissions, and only install scripts from sources you trust.',
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
      'Compare FoxyProxy, ZeroOmega, and other proxy manager options for Chrome. Learn which is best for profile-based switching or SwitchyOmega migration.',
    quickAnswer:
      'FoxyProxy remains a practical Chrome proxy manager for users who need multiple proxy profiles, pattern-based switching, and quick control over browser proxy settings. If you are migrating from SwitchyOmega, ZeroOmega may feel more familiar because it is a community fork designed for modern Manifest V3 browsers. FoxyProxy is a better fit when you want an established proxy manager with long-running Chrome and Firefox support. The best choice depends on whether you need SwitchyOmega-style rules, FoxyProxy-style profiles, or a simpler one-click proxy switcher.',
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
  if (!extension) return { title: 'Extension Not Found' };

  const customMeta = extensionMeta[slug] || {
    title: `Best ${extension.name} Alternatives for Chrome MV3`,
    description: extension.shortAnswer,
    quickAnswer: extension.shortAnswer,
  };
  const canonical = `https://extensionfixes.com/alternatives/${slug}`;

  return {
    title: customMeta.title,
    description: customMeta.description,
    alternates: { canonical },
    openGraph: {
      title: customMeta.title,
      description: customMeta.description,
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary', title: customMeta.title, description: customMeta.description },
  };
}

export default async function AlternativePage({ params }: PageProps) {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);
  if (!extension) { notFound(); return null; }

  const meta = extensionMeta[slug];
  return (
    <AlternativePageTemplate
      extension={extension}
      meta={meta}
    />
  );
}
