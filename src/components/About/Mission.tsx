import {FC} from 'react';
import Image from 'next/image';

const Mission: FC = () => {
  return (
	<div className='mt-[120px] px-[16px]'>
		<div className='flex flex-col '>
			<div className=''>
				<p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway text-titleDark font-bold w-[90%]'>Миссия и ценности компании</p>
				<p className='text-[15px] mdl:text-[17px] font-raleway font-medium mt-[12px]'>Миссия заключается в том, чтобы максимально способствовать созданию цивилизованного туристского рынка, где отношения в цепочке клиент - агент - оператор основаны на взаимном доверии и уважении. Конечная цель деятельности компании - сделать качественный отдых доступным для всех категорий населения Узбекистана</p>
			</div>
			<div className='mt-[30px] 2xl:mt-[40px] flex flex-col mdl:flex-row mdl:flex-wrap'>
				<div className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px]'>
					<div>
						<Image className='w-[45px]' src='https://ucarecdn.com/0f358266-03e0-4763-912b-11a159410cb8/-/preview/60x60/' width={90} height={90} alt='missinImage ' quality={100}/>
					</div>
					<div className='mt-[20px] mdl:mt-[40px]'>
						<p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>Качество обслуживания</p>
						<p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>Мы обеспечиваем высокий уровень медицинского обслуживания и поддержки, ориентированный на потребности каждого клиента</p>
					</div>
				</div>
				<div className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px]'>
					<div>
						<Image className='w-[45px]' src='https://ucarecdn.com/dcb32af3-2429-474e-b873-74de2a789fed/-/preview/60x60/' width={90} height={90} alt='missinImage ' quality={100}/>
					</div>
					<div className='mt-[20px] mdl:mt-[40px]'>
						<p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>Безопасность</p>
						<p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>Мы гарантируем безопасность и комфорт наших клиентов на всех этапах их медицинского путешествия</p>
					</div>
				</div>
				<div className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px]'>
					<div>
						<Image className='w-[45px]' src='https://ucarecdn.com/821a9c5a-e4d0-4477-9d43-582210cb276d/-/preview/60x60/' width={90} height={90} alt='missinImage ' quality={100}/>
					</div>
					<div className='mt-[20px] mdl:mt-[40px]'>
						<p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>Профессионализм</p>
						<p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>Наша команда состоит из опытных специалистов, которые постоянно совершенствуют свои знания и навыки для предоставления лучших услуг</p>
					</div>
				</div>
				<div className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px]'>
					<div>
						<Image className='w-[45px]' src='https://ucarecdn.com/68bb9d02-945f-4b63-9ff6-be70333b043a/-/preview/60x60/' width={90} height={90} alt='missinImage ' quality={100}/>
					</div>
					<div className='mt-[20px] mdl:mt-[40px]'>
						<p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>Индивидуальный подход</p>
						<p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>Наша команда состоит из опытных специалистов, которые постоянно совершенствуют свои знания и навыки для предоставления лучших услуг</p>
					</div>
				</div>
				<div className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px]'>
					<div>
						<Image className='w-[45px]' src='https://ucarecdn.com/dcb32af3-2429-474e-b873-74de2a789fed/-/preview/60x60/' width={90} height={90} alt='missinImage ' quality={100}/>
					</div>
					<div className='mt-[20px] mdl:mt-[40px]'>
						<p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>Выбор лучших клиник</p>
						<p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>Мы работаем в тесном партнерстве с ведущими медицинскими учреждениями и специалистами, чтобы обеспечить наиболее эффективное лечение и поддержку</p>
					</div>
				</div>
				<div className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px]'>
					<div>
						<Image className='w-[45px]' src='https://ucarecdn.com/40cd40e6-662a-4b8d-85f9-0ef7fb7d7ba2/-/preview/60x60/' width={90} height={90} alt='missinImage ' quality={100}/>
					</div>
					<div className='mt-[20px] mdl:mt-[40px]'>
						<p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>Ответственность</p>
						<p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>Мы несем ответственность за результаты нашего труда, всегда стремясь к лучшим возможным результатам для каждого клиента</p>
					</div>
				</div>
				</div>
		</div>
	</div>
  );
};

export default Mission;