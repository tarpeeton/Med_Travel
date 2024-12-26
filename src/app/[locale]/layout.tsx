import Header from '@/components/Header';
import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import dynamic from 'next/dynamic';
import Script from 'next/script'; // Import Script component
import messages_en from '@/translation/en.json';
import messages_ru from '@/translation/ru.json';
import messages_uz from '@/translation/uz.json';
import { LoaderProvider } from '@/context/LoaderContext';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export const metadata: Metadata = {
  title: 'Med Travel - Туры для здоровья и отдыха',
  description: 
    'Med Travel предоставляет медицинские туры и туры для отдыха. Наслаждайтесь лучшими медицинскими услугами и комфортным отдыхом в одном месте. Организуем ваше путешествие с заботой о вашем здоровье и комфорте.',
  keywords: 
    'медицинские туры, отдых, здоровье, туризм, медицинские услуги, лечение за рубежом, SPA-туры, релаксация, путешествия для здоровья, wellness-туры',
  authors: [
    { name: 'Rustam Kidiraliyev + RESULT AGENCY', url: 'https://my-works-ten.vercel.app/' }
  ],
  icons: {
    icon: 'https://ucarecdn.com/42c864e6-2a67-4e47-b576-93b3cb92071b/-/preview/499x499/', // Favicon
  },
  openGraph: {
    title: 'Med Travel - Ваши туры для здоровья и отдыха',
    description: 
      'Откройте для себя мир медицинских туров и комфортного отдыха с Med Travel. Высокое качество услуг, забота о здоровье и лучшие туристические направления ждут вас.',
    url: 'https://yourwebsite.com',
    siteName: 'Med Travel',
    images: [
      {
        url: 'https://ucarecdn.com/42c864e6-2a67-4e47-b576-93b3cb92071b/-/preview/800x600/',
        width: 800,
        height: 600,
        alt: 'Картинка Med Travel',
      },
      {
        url: 'https://ucarecdn.com/abcd1234/example-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Отдых и здоровье с Med Travel',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Med Travel - Туры для здоровья и отдыха',
    description: 
      'Мы предлагаем уникальные медицинские туры и путешествия для релаксации. Забота о здоровье и комфорт - наша основная цель.',
    images: [
      'https://ucarecdn.com/42c864e6-2a67-4e47-b576-93b3cb92071b/-/preview/800x600/',
    ],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  switch (locale) {
    case 'en':
      messages = messages_en;
      break;
    case 'ru':
      messages = messages_ru;
      break;
    case 'uz':
      messages = messages_uz;
      break;
    default:
      messages = messages_en;
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="yandex-verification" content="5cd5b7b85111a318" />
        {/* Google Analytics */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-94Y58W4056"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-94Y58W4056');
            `,
          }}
        />
      </head>
      <body>
        <LoaderProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header locale={locale} />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </LoaderProvider>
        {/* Yandex Metrika */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99042341, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/99042341" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
