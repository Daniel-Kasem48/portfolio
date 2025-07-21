import OpenSource from '@/components/Opensource'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.opensource.title,
  description: pageMetadata.opensource.description,
  alternates: {
    canonical: `${siteConfig.url}/opensource`,
  },
}

export default function OpenSourcePage() {
  return <OpenSource />
}