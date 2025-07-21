import ChallengesAndOptimizations from '@/components/ChallengesAndOptimizations'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.challenges.title,
  description: pageMetadata.challenges.description,
  alternates: {
    canonical: `${siteConfig.url}/challenges`,
  },
}

export default function ChallengesPage() {
  return <ChallengesAndOptimizations />
}