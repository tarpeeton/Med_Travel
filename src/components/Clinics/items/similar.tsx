"use client";
import Image from 'next/image';
import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import useLocale from '@/hooks/useLocale';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { urlFor } from '@/sanity/lib/image';
import { ClinicDataInterface } from '@/interface/clinicks.interface';
import { MdNavigateNext } from "react-icons/md";
import { Link } from '@/i18n/routing';


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
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
};

interface ISimilarclinickProps {
  data: ClinicDataInterface[]
}


const SmilarClinick: FC<ISimilarclinickProps> = ({ data }) => {

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
          Другие клиники
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

          {data.map((item, index) => (
            <SwiperSlide key={index || `doctor-${index}`}>
              <div className="relative ">
                <div className='relative overflow-hidden rounded-tl-[20px]  rounded-tr-[20px]'>
                  {/* <Image
                    src={urlFor(item).url()}
                    alt={item.name.en}
                    width={200}
                    height={200}
                    quality={100}
                    className='w-full h-full object-cover'

                  /> */}
                  <div className='h-[200px] mdl:h-[235px]'>
                  <Image
                    src={'https://ucarecdn.com/0b78add8-7f04-4d6a-a58a-4592c86e20d2/-/preview/1000x666/'}
                    alt={'sdfsdf'}
                    width={1000}
                    height={900}
                    quality={100}
                    className='w-full h-full object-cover'

                  />
                  </div>
                  
                  
                </div>
                <div className='mt-[20px] mdl:mt-[25px]  px-[16px] mdl:px-[20px]'>
                  <p className='text-[18px]  2xl:text-[20px] font-raleway font-bold'>
                    {item.name}
                  </p>
                  {/* 187 */}
                  <p className='mt-[12px] text-[#7C7C7C] text-[15px] leading-[23px] mdl:leading-[21px] font-medium '>
                    {item.description[locale].length > 187 ? item.description[locale].slice(0, 187) + "..." : item.description[locale]}
                  </p>
                  <div className='flex mt-[12px] mdl:mt-[25px] 2xl:mt-[12px] flex-row items-center text-[#1AB2A6] gap-[2px]'>
                      <Link  href={item.slug.current} className='text-[18px] font-semibold mdl:text-[18px]'>
                          Подробнее
                      </Link>
                      <MdNavigateNext  className='w-[25px] h-[25px] mdl:mt-[3px]'/>
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

export default SmilarClinick;
