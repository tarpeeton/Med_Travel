import {FC} from 'react';
import Title from '../ui/title'
import Tours from './Tours'


const Available: FC = () => {
  return (
    <div className='relative'>
        <div className='flex flex-col'>
            <Title  title='Доступные туры'/>
            <div className='flex 2xl:w-[30%] flex-row justify-between mt-[20px] mdl:mt-[30px]'>
                <button className='text-[15px] rounded-full bg-greenButton text-white font-semibold py-[12px]  w-[48%]'>Медицинские туры</button>
                <button className='text-[15px] w-[48%] rounded-full border border-borderColor bg-white text-titleDark font-semibold py-[12px] '>Обычные туры</button>
            </div>
            <Tours/>
        </div>
    </div>
  );
};

export default Available;