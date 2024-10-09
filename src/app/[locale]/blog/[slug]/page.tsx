import MainBlogWithSlug from '@/components/BlogItems/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAHA BLOG !',
  description: 'Eng yangi Xabarlar',
  keywords: 'Med Travel, Songi Xabarlar',
}

export default function Index() {
  return (
    <div>
      <MainBlogWithSlug />
    </div>
  )
}
