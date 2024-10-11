import AboutContent from '@/components/About/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О нас - Med Travel',
  description: 'Информация о Med Travel. Мы предоставляем высококачественные услуги в области здравоохранения и путешествий.',
  keywords: 'Med Travel, о нас, здравоохранение, услуги путешествий',
}


export default function Index() {
  return (
    <div>
      <AboutContent />
    </div>
  )
}
