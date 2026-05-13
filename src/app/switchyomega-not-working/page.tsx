import type { Metadata } from 'next';
import { landingPages } from '@/data/landingPages';
import { LandingPageTemplate } from '@/components/LandingPageTemplate';

export async function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  const page = landingPages[0];
  const canonical = `https://extensionfixes.com/${page.slug}`;

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

export default function SwitchyOmegaNotWorkingPage() {
  const page = landingPages.find((p) => p.slug === 'switchyomega-not-working')!;

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
