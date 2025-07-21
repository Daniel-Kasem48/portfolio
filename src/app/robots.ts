import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}