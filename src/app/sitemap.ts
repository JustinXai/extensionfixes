import { MetadataRoute } from 'next';
import { extensions } from '@/data/extensions';
import { errors } from '@/data/errors';
import { landingPages } from '@/data/landingPages';
import { comparisons } from '@/data/comparisons';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://extensionfixes.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/alternatives`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comparisons`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/extension-search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const landingPagesList: MetadataRoute.Sitemap = landingPages.map((page) => {
    const isGuidePage = page.slug === 'chrome-userscript-manager-alternatives' || page.slug === 'best-userscript-managers-for-chrome';
    return {
      url: isGuidePage ? `${baseUrl}/guides/${page.slug}` : `${baseUrl}/${page.slug}`,
      lastModified: new Date(page.lastUpdated),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  const extensionPages: MetadataRoute.Sitemap = extensions.map((ext) => ({
    url: `${baseUrl}/alternatives/${ext.slug}`,
    lastModified: new Date(ext.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const fixPages: MetadataRoute.Sitemap = errors.map((err) => ({
    url: `${baseUrl}/fix/${err.slug}`,
    lastModified: new Date(err.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((comp) => ({
    url: `${baseUrl}/comparisons/${comp.slug}`,
    lastModified: new Date(comp.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...landingPagesList, ...extensionPages, ...comparisonPages, ...fixPages];
}
