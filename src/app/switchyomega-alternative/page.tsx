import type { Metadata } from 'next';
import { landingPages } from '@/data/landingPages';
import { LandingPageTemplate } from '@/components/LandingPageTemplate';

export async function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  const page = landingPages[1];
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

export default function SwitchyOmegaAlternativePage() {
  const page = landingPages.find((p) => p.slug === 'switchyomega-alternative')!;

  return (
    <LandingPageTemplate
      page={page}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Alternatives', href: '/alternatives' },
        { label: 'SwitchyOmega Alternatives' },
      ]}
    />
  );
}
