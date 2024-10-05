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
			<Form />
			<Contacts />
		</div>
	)
}

export default AboutContent