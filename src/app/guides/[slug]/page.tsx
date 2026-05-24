import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { landingPages } from '@/data/landingPages';
import { LandingPageTemplate } from '@/components/LandingPageTemplate';

// Auto-detect guide/collection landing pages from landingPages data
const GUIDE_PAGE_SLUGS = landingPages
  .filter((page) => page.templateType === 'guide' || page.templateType === 'collection')
  .map((page) => page.slug);

export async function generateStaticParams() {
  return GUIDE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  if (!page || page.templateType !== 'guide' && page.templateType !== 'collection') {
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

  if (!page || page.templateType !== 'guide' && page.templateType !== 'collection') {
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
