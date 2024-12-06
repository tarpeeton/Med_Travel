import type { Metadata } from 'next'
import MainClinicsItems from '@/components/Clinics/items/Main'

export const metadata: Metadata = {
  title: 'Клиники-slug',
  description: 'Лучшие клиники для медицинского туризма',
  keywords: 'Med Travel, Лучшие клиники, Медицинский туризм',
}

export default function Index() {
  return (
    <div>
      <MainClinicsItems />
    </div>
  )
}
