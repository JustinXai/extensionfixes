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
