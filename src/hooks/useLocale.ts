import { useParams } from 'next/navigation';

const useLocale = (): 'ru' | 'uz' | 'en' => {
  const { locale } = useParams<{ locale: string }>();

  // Ensure locale is one of 'ru', 'uz', or 'en'
  return Array.isArray(locale) ? (locale[0] as 'ru' | 'uz' | 'en') : (locale || 'en') as 'ru' | 'uz' | 'en';
};

export default useLocale;
