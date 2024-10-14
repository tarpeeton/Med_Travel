import {FC} from 'react';
import Banner from './Banner'
import Hotels from './Hotel'


const MainHotels: FC = () => {
  return (
    <div>
        <Banner />
        <Hotels />
    </div>
  );
};

export default MainHotels;