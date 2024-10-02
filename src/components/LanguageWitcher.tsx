"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();

  // Define available languages
  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: 'Oʻzbekcha' },
    { code: 'en', name: 'English' },
  ];

  return (
    <div className="flex space-x-4">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={pathname.replace(locale, lang.code)}
          className={`px-4 py-2 rounded-lg  text-emerald-700 ${
            locale === lang.code ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
