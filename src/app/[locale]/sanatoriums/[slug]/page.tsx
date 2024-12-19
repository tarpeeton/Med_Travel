import MainSanathoriumItems from '@/components/Sanatoriums/items/Main'
import type { Metadata  } from 'next'


export const metadata: Metadata = {
  title: 'Санатории - Med Travel',
  description: 'Информация о доступных санаториях и их расположении. Узнайте больше о наших услугах в сфере здравоохранения и отдыха.',
  keywords: 'Med Travel, санатории, здравоохранение, отдых',
}


export default function Index() {
  return (
    <div>
      <MainSanathoriumItems />
    </div>
  )
}