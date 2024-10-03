import Image from 'next/image'
import { FC } from 'react'
import { TbCurrencyDollar } from "react-icons/tb";
import { PiAirplaneTiltLight } from "react-icons/pi";


const HowWork: FC = () => {
	return (
		<div className=' mx-[16px] mt-[120px]'>
			<div className='flex flex-col'>
				<div>
					<p className='text-[25px] font-bold text-titleDark mdl:text-[35px]  2xl:text-[40px] '>Как мы работаем</p>
				</div>
				<div className='flex flex-col mt-[20px]'>
					<div className='rounded-[20px] border border-borderColor py-[35px] px-[25px]'>
						<div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
							<Image src='https://ucarecdn.com/115af432-16d4-4ed1-97cd-ada3a1ec0c9b/-/preview/24x26/' width={30} height={40} quality={100} alt='logo' />
						</div>
						<div className='flex flex-col gap-[4px] mt-[25px]'>
							<p className='text-green100 text-[20px] font-semibold font-raleway'>
							Собираем документы
							</p>
							<p className='text-titleDark font-medium text-[15px] font-raleway'>
							На этом этапе мы собираем все необходимые документы для вашего тура: паспорта, визы иrмедицинские справки. Мы помогаем вам подготовить и оформить все бумаги, чтобы ваш отдых был комфортным
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col mt-[20px]'>
					<div className='rounded-[20px] border border-borderColor py-[35px] px-[25px]'>
						<div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
						<TbCurrencyDollar className='text-green100'  size={40}/>
						</div>
						<div className='flex flex-col gap-[4px] mt-[25px]'>
							<p className='text-green100 text-[20px] font-semibold font-raleway'>
							Проводим оплату
							</p>
							<p className='text-titleDark font-medium text-[15px] font-raleway'>
							После подтверждения всех деталей вашего тура мы организуем безопасную оплату. Вы получите все необходимые инструкции для завершения транзакции, и мы предоставим подтверждение оплаты и бронирования
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col mt-[20px]'>
					<div className='rounded-[20px] border border-borderColor py-[35px] px-[25px]'>
						<div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
						<PiAirplaneTiltLight className='text-green100'  size={40}/>
						</div>
						<div className='flex flex-col gap-[4px] mt-[25px]'>
							<p className='text-green100 text-[20px] font-semibold font-raleway'>
							Отправляем вас в путь
							</p>
							<p className='text-titleDark font-medium text-[15px] font-raleway'>
							На этом этапе мы организуем все детали вашего путешествия: бронируем билеты, обеспечиваем трансферы и проверяем готовность всех документов, чтобы ваш отдых начался без забот
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowWork