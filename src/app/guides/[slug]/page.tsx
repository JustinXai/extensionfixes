import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { landingPages } from '@/data/landingPages';
import { LandingPageTemplate } from '@/components/LandingPageTemplate';

// Only slugs that belong under /guides/ (not / or /alternatives/)
const GUIDE_SLUGS = [
  'chrome-userscript-manager-alternatives',
  'best-userscript-managers-for-chrome',
  'best-custom-css-and-dark-mode-extensions',
  'best-tab-suspender-extensions-chrome',
];

export async function generateStaticParams() {
  return landingPages
    .filter((page) => GUIDE_SLUGS.includes(page.slug))
    .map((page) => ({
      slug: page.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  if (!page || !GUIDE_SLUGS.includes(slug)) {
    return {
      title: 'Guide Not Found',
      description: 'The requested guide could not be found.',
    };
  }

  const canonical = `https://extensionfixes.com/guides/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.aliases,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: page.title,
      description: page.description,
    },
  };
}

export default async function GuidePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  if (!page || !GUIDE_SLUGS.includes(slug)) {
    notFound();
    return null;
  }

  return (
    <LandingPageTemplate
      page={page}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Guides', href: '/guides' },
        { label: page.h1 },
      ]}
    />
  );
}
