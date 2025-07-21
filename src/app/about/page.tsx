import Bio from '@/components/Bio'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}

export default function About() {
  return <Bio />
}