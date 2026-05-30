import type { MetadataRoute } from 'next'
import { locations } from '@/data/locations'
import { portfolioProjects } from '@/data/portfolio'
import { absoluteUrl } from '@/lib/seo'

const staticPages = [
  '/',
  '/about',
  '/contact',
  '/expertise',
  '/locations',
  '/privacy-policy',
  '/terms-of-service',
  '/work',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(path => ({
      url: absoluteUrl(path),
      changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/' ? 1 : 0.8,
    })),
    ...locations.map(location => ({
      url: absoluteUrl(`/locations/${location.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...portfolioProjects.map(project => ({
      url: absoluteUrl(`/work/${project.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}

