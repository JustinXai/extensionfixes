// /comparisons/[slug] page
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { comparisons, getComparisonBySlug } from '@/data/comparisons';
import { ComparisonPageTemplate } from '@/components/templates/ComparisonPageTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getComparisonBySlug(slug);
  if (!record) return { title: 'Comparison Not Found' };

  const canonical = `https://extensionfixes.com/comparisons/${slug}`;
  return {
    title: record.metaTitle,
    description: record.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: record.metaTitle,
      description: record.metaDescription,
      url: canonical,
      siteName: 'Extension Fixes',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary', title: record.metaTitle, description: record.metaDescription },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const record = getComparisonBySlug(slug);
  if (!record) { notFound(); return null; }

  return (
    <ComparisonPageTemplate
      {...record}
      breadcrumbTitle={record.title}
    />
  );
}
