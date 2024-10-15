// hooks/useLocale.ts
import { useParams } from 'next/navigation';

const useLocale = (): string => {
    const { locale } = useParams<{ locale: string }>();

    // Fallback to a default locale if it's an array or undefined
    return Array.isArray(locale) ? locale[0] : locale || 'en'; // Default to 'en'
};

export default useLocale;
