import MainTours from '@/components/Tours/Main'
import type { Metadata  } from 'next'


export const metadata: Metadata = {
  title: 'Туры',
  description: 'Откройте для себя лучшие туры и направления для отдыха.',
  keywords: 'Med Travel, Туры, Отдых, Направления для путешествий',
};

export default function Index() {
  return (
    <div>
      <MainTours />
    </div>
  )
}
