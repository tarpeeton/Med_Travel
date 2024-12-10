"use client";
import Image from 'next/image';
import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { urlFor } from '@/sanity/lib/image';
import useLocale from '@/hooks/useLocale';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Doctor } from '@/interface/clinicks.interface';

const swiperSettings = {
  modules: [Autoplay, Navigation],
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: false,
  autoplay: {
    delay: 2500,
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
      slidesPerView: 3,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
};


interface IDoctorsProps {
  doctors: Doctor[] | null | undefined
}

const Doctors: FC<IDoctorsProps> = ({doctors}) => {
  const locale = useLocale();
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark">
        Наши врачи
        </p>
        <div className='hidden 2xl:flex gap-[8px]'>
          <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
            <GrLinkPrevious size={25} />
          </button>
          <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
            <GrLinkNext size={25} />
          </button>
        </div>
      </div>
      <div className="mt-[20px] mdl:mt-[40px]">
        <Swiper {...swiperSettings} onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}>
          {doctors?.map((item, index) => (
            <SwiperSlide key={item._key || `doctor-${index}`}>
            <div className="relative">
              <div className='relative overflow-hidden rounded-[20px]'>
                <Image
                  src={urlFor(item.image.asset._ref).url()}
                  alt={item.name.en}
                  width={200}
                  height={200}
                  quality={100}
                  className='w-full h-full object-cover'

                />
                <div className='absolute z-[99] bottom-[10px] left-[10px]'>
                  <p className='text-white text-[20px] mdl:font-semibold mdl:text-[20px] font-raleway font-semibold'>{item.name[locale]}</p>
                </div>
                <div className='w-full h-full absolute top-0 left-0 bg-[#0122481A]' />
              </div>
              <div className='mt-[20px] mdl:mt-[24px]'>
                <p className='text-[18px] 2xl:text-[20px] font-raleway font-medium'>{item.occupation[locale]}</p>
                <p className='text-[15px] mt-[12px] mdl:mt-[16px] text-[#7C7C7C] 2xl:text-[17px] font-raleway font-medium leading-[23px] mdl:leading-[21px] 2xl:leading-[25px]'>{item.description[locale]}</p>
                <div className='flex items-center flex-row mt-[12px] mdl:mt-[18px]'>
                  <span className='text-[15px] mdl:text-[17px] text-[#1AB2A6] font-medium'>Опыт работы: </span>
                  <p className='text-[15px] ml-[5px] mdl:text-[18px] 2xl:text-[22px] text-[#242424] font-medium font-raleway'>{item.stage} лет</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default Doctors;
