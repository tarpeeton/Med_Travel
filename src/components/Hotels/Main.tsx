import {FC} from 'react';
import Banner from './Banner'
import Hotels from './Hotel'


const MainHotels: FC = () => {
  return (
    <div>
        <Banner />

        <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
        <Hotels />
        </div>
    </div>
  );
};

export default MainHotels;