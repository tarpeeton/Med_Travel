import {FC} from 'react';

interface ITursTitleProps {
    title: string,
}


const TursTitle: FC<ITursTitleProps> = ({title}) => {
  return (
  
     <p className='text-[30px] font-bold font-raleway text-[#FFFFFF] mdl:text-[45px] 2xl:text-[50px]'>
            {title}
        </p>
  );
};

export default TursTitle;