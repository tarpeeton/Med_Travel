"use client";
import Image from 'next/image';
import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import useLocale from '@/hooks/useLocale';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { urlFor } from '@/sanity/lib/image';
import { IRoomType } from '@/interface/sanatorium.interface';
import RoomsModal from '@/components/Modal/RoomsModal';


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
  data: IRoomType[] | null | undefined
}


const RoomsItems: FC<ISimilarclinickProps> = ({ data }) => {
  const [selectedRoom , setSelectedRoom] = useState<IRoomType | null>(null)
  const [open, setOpen] = useState(false)

  const locale = useLocale();
  const swiperRef = useRef<SwiperType>(); 

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const showModalRoom = (item: IRoomType) => {
    setSelectedRoom(item)
  setOpen(true)
  }

  return (
    <div className="flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark">
            {locale  === 'ru' ? "Типы номеров и проживание" : locale === 'uz' ? "Nomer turlari va yashash joylari":"Room types and accommodation" }
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

          {data?.map((item, index) => (
            <SwiperSlide key={index || `doctor-${index}`}>
              <div className="relative rounded-[20px] border border-[#E8E8E8] pb-[16px] ">
                <div className='relative overflow-hidden rounded-tl-[20px]  rounded-tr-[20px]'>
                  <div className='h-[200px] mdl:h-[235px]'>
                     <Image
                    src={urlFor(item.images[0].asset._ref).url()}
                    alt={item?.title?.en || 'salom'}
                    width={1000}
                    height={900}
                    quality={100}
                    className='w-full h-full object-cover'

                  />
                  </div>


                </div>
                <div className='mt-[20px] mdl:mt-[25px]  px-[16px] mdl:px-[20px]'>
                  <p className='text-[18px]  2xl:text-[20px] font-raleway font-bold'>
                    {item.title[locale]}
                  </p>
                  {/* 187 */}
                  <p className='mt-[12px] text-[#7C7C7C] text-[15px] leading-[23px] mdl:leading-[21px] font-medium '>
                    {item.description[locale].length > 114 ? item.description[locale].slice(0, 114) + "..." : item.description[locale]}
                  </p>
                    <button onClick={() => showModalRoom(item)}  className='text-[16px] greenButton py-[12px] mdl:py-[16px] px-[32px]  font-bold   mdl:text-[16px] mt-[12px] mdl:mt-[25px]'>
                      
                      {locale === 'ru' ? " Подробнее" : locale === 'uz' ? " Batafsil" : " More"}  
                    </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <RoomsModal  visible={open} close={() => setOpen(false)} data={selectedRoom}/>
      </div>
    </div>
  );
};

export default RoomsItems;
