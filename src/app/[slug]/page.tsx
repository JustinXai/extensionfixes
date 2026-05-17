import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { landingPages } from '@/data/landingPages';
import { LandingPageTemplate } from '@/components/LandingPageTemplate';

export async function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

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

export default async function LandingPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
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
