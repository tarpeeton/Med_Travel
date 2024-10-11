import MainTours from '@/components/Gallery/Main'
import type { Metadata  } from 'next'


export const metadata: Metadata = {
  title: 'Фотографии из туров',
  description: 'Часть незабываемых моментов с туров',
  keywords: 'Часть незабываемых моментов с туров',
}

export default function Index() {
  return (
    <div>
      <MainTours />
    </div>
  )
}
