import { FC, useState, useEffect } from 'react'
import { Paket } from '@/interface/clinicks.interface'
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const swiperSettings = {
  modules: [Autoplay, Navigation],
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: false,
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
};

interface IPaketsProps {
  pakets: Paket[] | null | undefined
  locale: "ru" | "uz" | "en"
}


const Pakets: FC<IPaketsProps> = ({ pakets, locale }) => {
  const [number , setSliceNumber ] = useState(4)

  const handleSliceNumber = () => {
    setSliceNumber(20); // Hamma datalarni ko'rsatish
  };
  console.log(pakets)

  return (
    <div className='px-[16px] mdl:px-[20px] 2xl:px-[200px] flex flex-col gap-[20px] mdl:gap-[40px]'>
      <h3 className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-bold text-titleDark'>Пакеты</h3>
      {/* Mobile */}
      <div className='flex flex-col gap-[16px] slg:hidden'>
        {pakets?.map((pak, index) => (
          <div key={index} className='border border-[#E8E8E8] rounded-[20px] p-[20px]'>
            <h4 className='font-bold text-[22px] text-titleDark font-raleway '>{pak.name[locale]}</h4>
            <p className='text-[#7C7C7C] text-[15px] font-medium mt-[11px]'>
              {pak.description[locale]}
            </p>
            <p className='text-titleDark font-raleway text-[30px] font-semibold mt-[20px]'>{pak.price} $</p>
            <button onClick={handleSliceNumber} className='mt-[15px] w-full greenButton h-[40px] font-bold'>
              {locale === 'ru' ? "Смотреть все" : locale === 'uz' ? "Barchasini Korish" : "All"}
            </button>
            <div className='mt-[16px] flex flex-col gap-[12px]'>
              {pak.yesOrNo.slice(0, number).map((item, index) => (
                <div  key={index} className='flex flex-row gap-[10px] items-center'>
                  {item.isIncluded && (
                    <div className='flex flex-row gap-[10px] items-center'>
                      <div className='bg-[#E8F7F6] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]'>
                        <FaCheck className='text-[#1AB2A6] text-[20px]' />
                      </div>
                      <p className='text-[#242424] text-[15px] font-medium font-raleway '>{item.serviceName}</p>
                    </div>
                  )}
                  {!item.isIncluded && (
                    <div className='flex flex-row gap-[10px] items-center'>
                      <div className='bg-[#F7F8F9] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]'>
                        <MdClose className='text-[#242424] font-bold text-[20px]' />
                      </div>
                      <p className='text-[#A7A7A7] text-[15px] font-medium font-raleway '>{item.serviceName}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
        {/* DESKTOP */}
          <div className='hidden slg:block'>
          <Swiper {...swiperSettings}>
          {pakets?.map((pak, index) => (
          <SwiperSlide key={index} className='border border-[#E8E8E8] rounded-[20px] p-[20px] slg:p-[40px]'>
            <div className='2xl:min-h-[247px] 6xl:min-h-[100px]'>
            <h4 className='font-bold text-[22px] slg:text-[30px] text-titleDark font-raleway '>{pak.name[locale]}</h4>
            <p className='text-[#7C7C7C] text-[15px] slg:text-[17px] font-medium mt-[11px]'>
              {pak.description[locale]}
            </p>
            <p className='text-titleDark font-raleway slg:text-[45px] 2xl:text-[50px] text-[30px] font-semibold mt-[20px]'>{pak.price} $</p>
            </div>
            
            <button onClick={handleSliceNumber} className='mt-[15px] w-full greenButton h-[40px] font-bold slg:mt-[40px] slg:h-[55px]' >
              {locale === 'ru' ? "Смотреть все" : locale === 'uz' ? "Barchasini Korish" : "All"}
            </button>
            <div className='mt-[16px] slg:mt-[40px] flex flex-col gap-[12px]'>
              {pak.yesOrNo.slice(0, number).map((item, index) => (
                <div  key={index} className='flex flex-row gap-[10px] items-center'>
                  {item.isIncluded && (
                    <div className='flex flex-row gap-[10px] items-center'>
                      <div className='bg-[#E8F7F6] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]'>
                        <FaCheck className='text-[#1AB2A6] text-[20px]' />
                      </div>
                      <p className='text-[#242424] text-[15px] font-medium font-raleway slg:text-[17px]'>{item.serviceName}</p>
                    </div>
                  )}
                  {!item.isIncluded && (
                    <div className='flex flex-row gap-[10px] items-center'>
                      <div className='bg-[#F7F8F9] rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]'>
                        <MdClose className='text-[#242424] font-bold text-[20px]' />
                      </div>
                      <p className='text-[#A7A7A7] text-[15px] font-medium font-raleway slg:text-[17px]'>{item.serviceName}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
            </Swiper>
          </div>
    </div>
  )
}







export default Pakets