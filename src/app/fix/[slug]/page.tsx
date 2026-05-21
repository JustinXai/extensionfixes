// /fix/[slug] — uses FixPageTemplate
// Route layer handles: generateStaticParams, generateMetadata, params.
// All content rendering is delegated to the template component.
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getErrorBySlug, errors } from '@/data/errors';
import { getExtensionBySlug } from '@/data/extensions';
import { FixPageTemplate } from '@/components/templates/FixPageTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return errors.map((err) => ({ slug: err.slug }));
}

const fixMeta: Record<string, { title: string; description: string; quickAnswer: string }> = {
  'cannot-install-extension-unsupported-manifest': {
    title: 'Cannot Install Extension: Unsupported Manifest Version in Chrome',
    description:
      'Chrome may block extensions that use an unsupported manifest version. Learn what the error means, what not to do, and safer MV3 alternatives.',
    quickAnswer:
      'Chrome shows an unsupported manifest version error when an extension package uses an older extension format that modern Chrome no longer accepts, most commonly Manifest V2. In current Chrome versions, ordinary users usually cannot fix this by changing a simple setting. Reinstalling the same extension, downloading random CRX files, or disabling security protections can create privacy and malware risks. The safer path is to check whether the developer provides a Manifest V3 version, install a maintained alternative from the Chrome Web Store, or use a browser that still supports the extension you need.',
  },
  'this-extension-is-no-longer-supported': {
    title: 'Fix "This Extension Is No Longer Supported" in Chrome',
    description:
      'Chrome says an extension is no longer supported? Learn why it happens, what you can safely do, and how to find maintained alternatives.',
    quickAnswer:
      'Chrome shows this message when an extension uses Manifest V2 APIs that Chrome has deprecated. You cannot re-enable the old extension, but you can export settings, check for MV3 updates, and find alternatives. Most popular extensions have MV3-compatible replacements available.',
  },
  'manifest-v2-disabled': {
    title: 'Manifest V2 Disabled in Chrome: What You Can Do',
    description:
      'Chrome has disabled Manifest V2 extensions. Learn what this means, why old extensions stopped working, and how to find MV3-compatible replacements.',
    quickAnswer:
      'Chrome 138 fully disabled Manifest V2 extensions for all regular users. This affects extensions built on MV2 that have not been updated to MV3. Ordinary users cannot restore MV2 support in regular Chrome. Recommended path: find MV3-compatible replacements, check for official updates, or consider Firefox which still supports MV2 extensions. Enterprise-managed devices may use the ExtensionManifestV2Enabled policy.',
  },
  'chrome-disabled-extension': {
    title: 'Chrome Disabled My Extension: Causes and Safe Fixes',
    description:
      'Chrome can disable extensions for various reasons. Learn common causes, safe fixes, and how to find maintained alternatives.',
    quickAnswer:
      'Chrome disables extensions for several reasons: deprecated APIs, Web Store removal, security concerns, or administrator policies. The fix depends on the cause. Check the specific error message, verify the extension status in the Chrome Web Store, and look for maintained replacements.',
  },
  'extension-removed-from-chrome-web-store': {
    title: 'Chrome Extension Removed from Web Store: What to Do Next',
    description:
      'Chrome removed an extension from the Web Store? Learn why extensions get removed, whether it is safe to keep using them, and how to find maintained alternatives.',
    quickAnswer:
      'Chrome removes extensions from the Web Store for policy violations, developer request, or malware detection. Do not install unofficial copies of removed extensions. Check for official alternatives, community forks, or browser-native features as your next step.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const error = getErrorBySlug(slug);
  if (!error) return { title: 'Fix Guide Not Found' };

  const customMeta = fixMeta[slug] || {
    title: error.title,
    description: error.shortAnswer,
    quickAnswer: error.shortAnswer,
  };
  const canonical = `https://extensionfixes.com/fix/${slug}`;

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

export default async function FixPage({ params }: PageProps) {
  const { slug } = await params;
  const error = getErrorBySlug(slug);
  if (!error) { notFound(); return null; }

  const meta = fixMeta[slug];
  const relatedExtensions = error.relatedExtensionSlugs
    .map((s) => getExtensionBySlug(s))
    .filter((e): e is NonNullable<typeof e> => e !== null && e !== undefined);

  return (
    <FixPageTemplate
      error={error}
      meta={meta}
      relatedExtensions={relatedExtensions}
    />
  );
}
