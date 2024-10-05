import AboutContent from '@/components/About/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biz haqimizda - Med Travel',
  description: 'Med Travel haqida ma\'lumot. Biz sog\'liqni saqlash va sayohat xizmatlari bo\'yicha yuqori sifatli xizmatlarni taqdim etamiz.',
  keywords: 'Med Travel, biz haqimizda, sog\'liqni saqlash, sayohat xizmatlari',
}

export default function Index() {
  return (
    <div>
      <AboutContent />
    </div>
  )
}
