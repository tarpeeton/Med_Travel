import Header from '@/components/Header'
import '../globals.css'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Med Travel',
  description: 'Med Travel - Sog\'liqni saqlash va sayohat bo\'yicha professional xizmatlar. Biz tibbiyot va sayohat sohasida yuqori sifatli xizmatlarni taqdim etamiz.',
  keywords: 'sayohat, sog\'liq, tibbiyot, Med Travel, sog\'liqni saqlash, sayohat xizmatlari',
  authors: [{ name: 'Rustam Kidiraliyev + RESULT AGENCY', url: 'https://my-works-ten.vercel.app/' }],
  icons: {
    icon: 'https://ucarecdn.com/42c864e6-2a67-4e47-b576-93b3cb92071b/-/preview/499x499/', // Favicon fayli yo'li
  },
  openGraph: {
    title: 'Med Travel - Sog\'liqni saqlash va sayohat xizmatlari',
    description: 'Biz sog\'liqni saqlash va sayohat bo\'yicha professional xizmatlar taqdim etamiz.',
    url: 'https://yourwebsite.com', // Saytning to'liq URL manzili
    siteName: 'Med Travel',
    images: [
      {
        url: 'https://ucarecdn.com/42c864e6-2a67-4e47-b576-93b3cb92071b/-/preview/499x499/', // Saytni ifodalovchi rasm
        width: 800,
        height: 600,
        alt: 'Med Travel rasm',
      },
    ],
    type: 'website',
  },
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
