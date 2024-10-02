import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Header');
  return <h1>{t('service')}</h1>;
}
