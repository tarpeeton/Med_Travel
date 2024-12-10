"use client";
import Image from 'next/image';
import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { urlFor } from '@/sanity/lib/image';
import useLocale from '@/hooks/useLocale';
import { GallereyaClinikc } from '@/interface/clinicks.interface';
import 'swiper/css';
import 'swiper/css/navigation';

interface IClinickGalleryProps {
  gallereya: GallereyaClinikc | null | undefined;
}

const ClinickGallery: FC<IClinickGalleryProps> = ({ gallereya }) => {
  const locale = useLocale();

  return (
    <div className='flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>
          
          {locale === 'ru' ? "Наша клиника" : locale === 'uz' ? "Bizning klinika" : "Our clinic"}
        </p>
        <div className='hidden 2xl:flex gap-[8px]'>
          <button className='prev-button rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
            <GrLinkPrevious size={25} />
          </button>
          <button className='next-button rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
            <GrLinkNext size={25} />
          </button>
        </div>
      </div>
      <div className='mt-[20px] relative mdl:mt-[]40px'>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {gallereya?.map((image) => (
            <SwiperSlide key={image._type}>
              <div className='w-full overflow-hidden rounded-[20px] relative'>
              <Image
                src={urlFor(image.asset._ref).url()}
                width={1000}
                height={990}
                alt="Gallery image"
                quality={100}
                className='object-cover  w-full h-[270px] 2xl:h-[300px] 4xl:h-[334px] '
              />
              <div className='absolute  bg-[#01224826] top-0 bottom-0 left-0 right-0 w-full h-full  z-[10px]'></div>
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClinickGallery;
