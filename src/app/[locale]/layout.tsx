import Header from '@/components/Header'

export default function LocaleLayout({
	children,
	params: { locale },
  }: {
	children: React.ReactNode;
	params: { locale: string };
  }) {
	return (
	  <html lang={locale}>
		<body>
			<Header  locale={locale}/>
			{children}
			</body>
	  </html>
	);
  }
  