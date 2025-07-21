import Bio from '@/components/Bio'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  return <Bio />
}