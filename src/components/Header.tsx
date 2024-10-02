import LanguageSwitcher from './LanguageWitcher'

const Header = ({locale} : {locale: string}) => {
  return <LanguageSwitcher locale={locale}/>
};

export default Header