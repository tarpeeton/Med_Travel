import MainTours from '@/components/Tours/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bloglar',
  description: 'Eng yangi Xabarlar',
  keywords: 'Med Travel, Songi Xabarlar',
}

export default function Index() {
  return (
    <div>
      <MainTours />
    </div>
  )
}
