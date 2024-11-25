import Image from 'next/image'
import { FC } from 'react'
import { TbCurrencyDollar } from "react-icons/tb"
import { PiAirplaneTiltLight } from "react-icons/pi"


const HowWork: FC = () => {
	return (
		<div >
			<div className='flex flex-col'>
				<div>
					<p className='text-[25px] font-bold text-titleDark mdl:text-[35px]  2xl:text-[40px] '>Как мы работаем</p>
				</div>
				<div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:gap-[2%] 2xl:flex-nowrap 2xl:mt-[30px]'>
					<div className='flex flex-col mt-[20px] mdl:w-[48%] 2xl:w-[50%] '>
						<div className='rounded-[20px] border border-borderColor py-[35px] px-[25px] 2xl:h-[380px]'>
							<div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
								<Image src='https://ucarecdn.com/115af432-16d4-4ed1-97cd-ada3a1ec0c9b/-/preview/24x26/' width={30} height={40} quality={100} alt='logo' />
							</div>
							<div className='flex flex-col gap-[4px] mt-[25px]'>
								<p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
									Собираем документы
								</p>
								<p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
								Собираем все нужные документы: паспорт, визу, справки. Помогаем подготовить бумаги для комфортного отдыха.
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col mt-[20px] mdl:w-[48%] 2xl:w-[50%] '>
						<div className='rounded-[20px] border border-borderColor py-[35px] px-[25px] 2xl:h-[380px]'>
							<div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
								<TbCurrencyDollar className='text-green100' size={40} />
							</div>
							<div className='flex flex-col gap-[4px] mt-[25px]'>
								<p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
									Проводим оплату
								</p>
								<p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
								Организуем безопасную оплату. Вы получаете инструкции для завершения и подтверждение всех транзакций.
								</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col mt-[20px] 2xl:w-[50%] '>
						<div className='rounded-[20px] border border-borderColor py-[35px] px-[25px] 2xl:h-[380px]'>
							<div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
								<PiAirplaneTiltLight className='text-green100' size={40} />
							</div>
							<div className='flex flex-col gap-[4px] mt-[25px]'>
								<p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
									Отправляем вас в путь
								</p>
								<p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
								Бронируем билеты, трансферы и проверяем документы, чтобы ваш отдых начался без забот.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowWork