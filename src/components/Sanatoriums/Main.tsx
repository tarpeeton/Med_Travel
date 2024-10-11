import {FC} from 'react';
import Banner from './Banner';
import Sanathory from './Sanathory';
import HowWork from '../Main/HowWork'
import Faq from '../Tours/Faq'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'






const MainSanathorium: FC = () => {
  return (
    <div>
        <Banner/>
        <Sanathory/>
        <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] flex flex-col gap-[200px] mt-[200px]'>
        <HowWork />
        <Faq />
        <Form />
        <Contacts />
        </div>
    </div>
  );
};

export default MainSanathorium;