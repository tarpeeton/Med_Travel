import { FC } from 'react'
import AboutBanner from './Banner'
import Mission from './Mission'
import Contacts from '../Main/Contacts'
import Form from '../Form/Form'
import Team from './Team'
import Partners from './Partners'
import Archivments from './Achievements'


const AboutContent: FC = () => {
	return (
		<div>
			<AboutBanner />
			<Mission />
			<Archivments/>
			<Team/>
			<Partners />
			<div className='flex flex-col gap-[120px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px]'>
			<Form />
			<Contacts />
			</div>
			
		</div>
	)
}

export default AboutContent