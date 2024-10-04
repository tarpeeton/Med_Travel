import { FC } from 'react'
import Image from 'next/image'

const AboutBanner: FC = () => {
	return (
		<div className='py-[13px] px-[16px]'>
			<div className='flex flex-col 2xl:flex-row 2xl:pl-[200px] 2xl:items-center 2xl:justify-between'>
				<div className='flex flex-col mdl:relative mdl:h-[500px] 2xl:w-[55%]  2xl:h-[745px]'>
					<div className='mdl:w-[80%] mdl:h-full 2xl:w-full'>
						<Image src='https://ucarecdn.com/505b522f-42e9-4ced-91fc-957d8d0c8f1d/-/preview/1000x666/' className='object-contain w-full rounded-[20px] mdl:h-full mdl:object-cover 2xl:rounded-[0px]' width={300} height={300} alt='IMAGE' quality={100} />
					</div>
					<div className='mt-[12px] h-[144px] mdl:absolute mdl:bottom-[20px] mdl:right-[40px] 2xl:left-[-80px] mdl:h-[375px] mdl:w-[320px] 2xl:border-[5px] border-white 2xl:rounded-[20px] 2xl:overflow-hidden'>
						<Image src='https://ucarecdn.com/73776fae-6181-4804-9e43-a42ef60311cc/-/preview/1000x561/' className='object-cover w-full h-full rounded-[20px] mdl:object-cover mdl:h-full 2xl:rounded-[0px]' width={300} height={410} alt='IMAGE' quality={100} />
					</div>
				</div>
				{/* TEXT */}
				<div className='relative mt-[40px] mdl:mt-[50px] mdl:w-[60%] 2xl:order-[-1] 2xl:w-[35%]'>
					<div>
						<p className='text-[30px] font-bold font-raleway mdl:text-[45px] 2xl:text-[50px] text-titleDark'>MED TRAVEL</p>
						<p className='text-[30px] font-bold font-raleway mdl:text-[45px] 2xl:text-[50px] text-titleDark'>ASSOCIATION</p>
					</div>
					<div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[25px]'>
						<p className='text-[#505050] text-[15px] mdl:text-[17px] font-raleway font-medium'>Мы специализируемся на подборе лучших медицинских учреждений и предоставлении полного спектра услуг для пациентов, которые ищут качественное лечение</p>
					</div>
					<div className='flex flex-row items-center mt-[30px] mdl:mt-[40px] 2xl:mt-[60px] mdl:w-[100%]'>
						<button className='borderedButton font-bold mdl:w-[50%]'>Связаться с нами</button>
						<Image className='ml-[10px] mdl:w-[30%] mdl:mb-[30px]' src='https://ucarecdn.com/7b50ed13-3675-4b18-93a1-c29d72d6a247/-/preview/145x46/' width={100} height={50} alt='Airplane' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutBanner