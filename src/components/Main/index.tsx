import {FC} from 'react';
import Banner from './Banner'
import Services from './Services'
import Stock from './Stock'
import Tours from './Tours'
import HowWork from './HowWork';
import Reviews from './Reviews'
import Map from './Map';
import Form from '../Form/Form';
import Contacts from './Contacts';


const MainContent: FC = () => {
  return (
	<div>
		<Banner />
		<Services />
		<Stock />
		<Map />
		<div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
		<HowWork />
		</div>
		<Reviews />
		<Tours />
		<div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
		<Form />
		<Contacts />

		</div>
	</div>
  );
};

export default MainContent;