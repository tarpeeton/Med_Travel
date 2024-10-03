import {FC} from 'react';
import Banner from './Banner'
import Services from './Services'
import Stock from './Stock'
import Tours from './Tours'
import HowWork from './HowWork';
import Reviews from './Reviews'
import Sanatoriums from './Sanatoriums';
import Form from '../Form/Form';
import Contacts from './Contacts';


const MainContent: FC = () => {
  return (
	<div>
		<Banner />
		<Services />
		<Stock />
		<Tours />
		<HowWork />
		<Reviews />
		<Sanatoriums />
		<Form />
		<Contacts />
	</div>
  );
};

export default MainContent;