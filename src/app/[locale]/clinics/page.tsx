import MainClinics from '@/components/Clinics/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Клиники',
  description: 'Лучшие клиники для медицинского туризма',
  keywords: 'Med Travel, Лучшие клиники, Медицинский туризм',
}

export default function Index() {
  return (
    <div>
      <MainClinics />
    </div>
  )
}
