import {FC} from 'react';
import useLocale from '@/hooks/useLocale'

interface ITitleProps {
  text?: { ru?: string; uz?: string , en?: string } // Making both properties optional
  oneText?: string // This can be used to display a single text if needed
}

const Title: FC<ITitleProps> = ({text , oneText}) => {
  const locale = useLocale()
  const displayText = text ? text[locale] || text.ru || text.uz : oneText
  return (
    <p className='text-[25px] font-bold font-raleway text-titleDark mdl:text-[35px] 2xl:text-[40px]'>
        {displayText}
    </p>
  );
};

export default Title;








