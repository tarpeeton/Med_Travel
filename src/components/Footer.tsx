import Image from 'next/image'
import { FC } from 'react'
import { Link } from '@/i18n/routing'

const Footer: FC = () => {
	return (
		<div className='bg-[#F9F9F9] mt-[120px] '>
			<div className='2xl:flex 2xl:flex-row 2xl:px-[200px]'>
				<div className='flex flex-col border-b border-borderColor 2xl:border-b-0 '>
					<div className='p-[16px] w-[80%]  mdl:flex mdl:flex-row mdl:w-[100%]  mdl:py-[30px] mdl:px-[20px]'>
						<Image src='https://ucarecdn.com/42c864e6-2a67-4e47-b576-93b3cb92071b/-/preview/499x499/' alt='Logo' quality={100} width={80} height={80} className='object-contain mdl:w-[90px]' />

						<div className='mt-[16px] mdl:ml-[80px] mdl:w-[40%] 2xl:hidden'>
							<p className='text-[22px] font-raleway text-titleDark font-bold mdl:text-[28px] '>Здоровье и отдых в одном путешествии!</p>
							<button className='borderedButton mt-[16px] font-bold'>
								Начать путешествие
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-row flex-wrap py-[25px] px-[16px] justify-between border-b border-borderColor mdl:px-[20px] mdl:py-[40px]'>
					<div className='w-[50%] mdl:w-[33%] 2xl:w-[15%]'>
						<span className='text-[16px] font-semibold text-titleDark mdl:text-[18px]'>Услуги</span>
						<div className='flex flex-col mt-[8px] gap-[4px] mdl:gap-[6px]'>
							<Link href='/tours' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Туры</Link>
							<Link href='/clinics' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Клиники</Link>
							<Link href='/sanatoriums' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Санатории</Link>

							<Link href='/hotels' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Гостиницы</Link>

						</div>
					</div>
					<div className='w-[50%] mdl:w-[33%] 2xl:w-[15%]'>
						<span className='text-[16px] font-semibold text-titleDark mdl:text-[18px]'>Med Travel</span>
						<div className='flex flex-col mt-[8px] gap-[4px] mdl:gap-[6px]'>
							<Link href='/about' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>О компании</Link>
							<Link href='/' className='text-[15px] font-medium text-titleDark font-raleway'>Партнеры</Link>
							<Link href='/' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Задать вопрос</Link>
							<Link href='/blog' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Блог</Link>

						</div>
					</div>
					<div className='w-[80%] mt-[40px] mdl:w-[33%] mdl:mt-0 2xl:w-[15%]'>
						<span className='text-[16px] font-semibold text-titleDark mdl:text-[18px]'>Мы в соц.сетях</span>
						<div className='flex flex-row flex-wrap mt-[8px] gap-[40px]  mdl:flex-col mdl:gap-0'>
							<div className='flex flex-col gap-[4px] mdl:gap-[6px]'>
								<Link href='/' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Instagram</Link>
								<Link href='/' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Telegram</Link>
							</div>

							<div className='flex flex-col gap-[4px] mdl:gap-[6px] mdl:mt-[6px]'>
								<Link href='/' className='text-[15px] font-medium text-titleDark font-raleway hover:text-[#1AB2A6] duration-300'>Facebook</Link>
								<Link href='/' className='text-[15px] font-medium text-titleDark font-raleway  hover:text-[#1AB2A6]'>E-mail</Link>
							</div>


						</div>
					</div>
					<div className='hidden   2xl:block 2xl:w-[35%]'>
						<p className='text-[22px] font-raleway text-titleDark font-bold mdl:text-[28px] '>Здоровье и отдых в одном путешествии!</p>
						<button className='borderedButton mt-[16px] font-bold'>
							Начать путешествие
						</button>
					</div>
				</div>
				{/* COPY */}


			</div>
			<div className='flex flex-row py-[12px] px-[18px] 2xl:px-[200px] border-t border-borderColor'>
				<div className='w-[55%] flex items-center mdl:w-[70%]'>
					<p className='font-raleway font-medium text-[12px] text-[#B3B3B3] mdl:text-[16px] '>2024 © Med Travel  Association. Все права защищены</p>
				</div>
				<div className='w-[45%] flex items-center justify-end'>
					<Link href='https://result-me.uz/api/redirect?from=bWVkLXRyYXZlbA=='>
						<Image src='https://ucarecdn.com/e2c4cecc-45d3-41ad-a1dd-bd0b0059a025/-/preview/1000x553/' alt='logo Result' width={130} height={72} quality={100} className='object-contain mdl:w-[130px] mdl:h-[72px]' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer