import { FC } from 'react'
import dynamic from 'next/dynamic'
import Banner from './Banner'

const Services = dynamic(() => import('./Services'), { ssr: false })
const Stock = dynamic(() => import('./Stock'), { ssr: false })
const Tours = dynamic(() => import('./Tours'), { ssr: false })
const HowWork = dynamic(() => import('./HowWork'), { ssr: false })
const Reviews = dynamic(() => import('./Reviews'), { ssr: false })
const Map = dynamic(() => import('./Map'), { ssr: false })
const Form = dynamic(() => import('../Form/Form'), { ssr: false })
const Contacts = dynamic(() => import('./Contacts'), { ssr: false })


const MainContent: FC = () => {
	return (
		<div>
			<Banner />
			<Services />
			<Stock />
			<Map />
			<div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px]'>
				<HowWork />
			</div>
			<Reviews />
			<Tours />
			<div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px] flex flex-col gap-[120px]'>
				<Form />
				<Contacts />
			</div>
		</div>
	)
}

export default MainContent