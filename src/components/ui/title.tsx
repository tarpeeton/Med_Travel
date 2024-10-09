import {FC} from 'react';

interface IProps {
    title: string,
}

const Title: FC<IProps> = ({title}) => {
  return (
    <p className='text-[25px] font-bold font-raleway text-titleDark mdl:text-[35px] 2xl:text-[40px]'>
        {title}
    </p>
  );
};

export default Title;