import { MetadataRoute } from 'next';
import { extensions } from '@/data/extensions';
import { errors } from '@/data/errors';
import { landingPages } from '@/data/landingPages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://extensionfixes.com';
  // v=2 ensures fresh CDN cache after deployment

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/alternatives/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/extension-search/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const landingPagesList: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

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

  return [...staticPages, ...landingPagesList, ...extensionPages, ...fixPages];
}
