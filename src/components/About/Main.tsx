import {FC} from 'react';
import AboutBanner from './Banner'
import Mission from './Mission'


const AboutContent: FC = () => {
  return (
	<div>
		<AboutBanner />
		<Mission />
	</div>
  );
};

export default AboutContent;