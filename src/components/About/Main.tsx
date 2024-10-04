import { FC } from 'react'
import AboutBanner from './Banner'
import Mission from './Mission'
import Contacts from '../Main/Contacts'
import Form from '../Form/Form'
import Team from './Team'


const AboutContent: FC = () => {
	return (
		<div>
			<AboutBanner />
			<Mission />
			<Team/>
			<Form />
			<Contacts />
		</div>
	)
}

export default AboutContent