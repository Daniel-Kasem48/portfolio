import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/skills',
    '/work-experiences',
    '/educations',
    '/certificates',
    '/challenges',
    '/opensource',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}