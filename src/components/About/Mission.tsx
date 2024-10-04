import { FC } from 'react';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    title: 'Качество обслуживания',
    description: 'Мы обеспечиваем высокий уровень медицинского обслуживания и поддержки, ориентированный на потребности каждого клиента',
    image: 'https://ucarecdn.com/0f358266-03e0-4763-912b-11a159410cb8/-/preview/60x60/',
  },
  {
    id: 2,
    title: 'Безопасность',
    description: 'Мы гарантируем безопасность и комфорт наших клиентов на всех этапах их медицинского путешествия',
    image: 'https://ucarecdn.com/dcb32af3-2429-474e-b873-74de2a789fed/-/preview/60x60/',
  },
  {
    id: 3,
    title: 'Профессионализм',
    description: 'Наша команда состоит из опытных специалистов, которые постоянно совершенствуют свои знания и навыки для предоставления лучших услуг',
    image: 'https://ucarecdn.com/821a9c5a-e4d0-4477-9d43-582210cb276d/-/preview/60x60/',
  },
  {
    id: 4,
    title: 'Индивидуальный подход',
    description: 'Мы предлагаем индивидуальный подход к каждому клиенту для обеспечения наилучших результатов',
    image: 'https://ucarecdn.com/68bb9d02-945f-4b63-9ff6-be70333b043a/-/preview/60x60/',
  },
  {
    id: 5,
    title: 'Выбор лучших клиник',
    description: 'Мы работаем в тесном партнерстве с ведущими медицинскими учреждениями и специалистами, чтобы обеспечить наиболее эффективное лечение и поддержку',
    image: 'https://ucarecdn.com/dcb32af3-2429-474e-b873-74de2a789fed/-/preview/60x60/',
  },
  {
    id: 6,
    title: 'Ответственность',
    description: 'Мы несем ответственность за результаты нашего труда, всегда стремясь к лучшим возможным результатам для каждого клиента',
    image: 'https://ucarecdn.com/40cd40e6-662a-4b8d-85f9-0ef7fb7d7ba2/-/preview/60x60/',
  },
];

const Mission: FC = () => {
  return (
    <div className='mt-[120px] px-[16px] 2xl:px-[200px]'>
      <div className='flex flex-col'>
        <div>
          <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway text-titleDark font-bold w-[90%]'>
            Миссия и ценности компании
          </p>
          <p className='text-[15px] mdl:text-[17px] font-raleway font-medium mt-[12px]'>
            Миссия заключается в том, чтобы максимально способствовать созданию
            цивилизованного туристского рынка, где отношения в цепочке клиент - агент - оператор
            основаны на взаимном доверии и уважении. Конечная цель деятельности компании - сделать качественный отдых доступным для всех категорий населения Узбекистана.
          </p>
        </div>
        <div className='mt-[30px] 2xl:mt-[40px] flex flex-col mdl:flex-row mdl:flex-wrap mdl:gap-[4%] 2xl:gap-[1%]'>
          {cardData.map((card) => (
            <div
              key={card.id}
              className='bg-white rounded-[20px] flex flex-col py-[25px] px-[20px] shadow-2xl mb-[16px] mdl:mb-[20px] mdl:w-[48%] 2xl:w-[32%]  cursor-pointer'
            >
              <div>
                <Image
                  className='w-[45px] 2xl:w-[60px]'
                  src={card.image}
                  width={90}
                  height={90}
                  alt='missionImage'
                  quality={100}
                />
              </div>
              <div className='mt-[20px] mdl:mt-[40px]'>
                <p className='text-[20px] font-semibold text-titleDark font-raleway mdl:text-[25px]'>
                  {card.title}
                </p>
                <p className='mt-[8px] mdl:mt-[12px] 2xl:mt-[16px] text-[#7C7C7C]'>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
