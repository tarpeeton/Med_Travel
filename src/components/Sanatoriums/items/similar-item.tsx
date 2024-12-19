"use client";
import Image from 'next/image';
import { FC, useRef  , useEffect , useState} from "react";
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
import { ISanathoryData } from '@/interface/Sanathory';
import { client } from '@/sanity/lib/client'


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


const SimilarSanathory: FC = () => {
  const [sanathoriums, setSanathoriums] = useState<ISanathoryData[]>([])

  const locale = useLocale();
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const sanathoryRes = await client.fetch(`
          *[_type == "sanatoriums"]{rating , name , homeImage , slug , address , description}`)

        setSanathoriums(sanathoryRes)
        
      } catch (err) {
        console.error('Error fetching tours:', err)
      }
    }

    fetchTours()
  }, [locale])



  return (
    <div className="flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark">
         
          {locale === 'ru' ? "Другие санатории" : locale === 'uz' ? "Boshqa Sanatoriyalar" : " Other sanatoriums"} 
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

          {sanathoriums.map((item, index) => (
            <SwiperSlide key={index || `doctor-${index}`}>
              <div className="relative  rounded-[20px] pb-[10px] mdl:pb-[20px] border border-[#E8E8E8]">
                <div className='relative overflow-hidden rounded-tl-[20px]  rounded-tr-[20px]'>
                  <div className='h-[200px] mdl:h-[235px]'>
                     <Image
                    src={urlFor(item.homeImage.asset._ref).url()}
                    alt={item.name.en}
                    width={1000}
                    height={900}
                    quality={100}
                    className='w-full h-full object-cover'

                  />
                  </div>


                </div>
                <div className='mt-[20px] mdl:mt-[25px]  px-[16px] mdl:px-[20px]'>
                  <p className='text-[18px]  2xl:text-[20px] font-raleway font-bold'>
                    {item.name[locale]}
                  </p>
                  {/* 187 */}
                  <p className='mt-[12px] text-[#7C7C7C] text-[15px] leading-[23px] mdl:leading-[21px] font-medium '>
                    {item.description[locale].length > 137 ? item.description[locale].slice(0, 137) + "..." : item.description[locale]}
                  </p>
                  <div className='flex mt-[12px] mdl:mt-[25px] 2xl:mt-[12px] flex-row items-center text-[#1AB2A6] gap-[2px]'>
                    <Link href={item.slug.current} className='text-[18px] font-semibold mdl:text-[18px]'>
                    {locale === 'ru' ? " Подробнее" : locale === 'uz' ? " Batafsil" : " More"} 
                    </Link>
                    <MdNavigateNext className='w-[25px] h-[25px] mdl:mt-[3px]' />
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

export default SimilarSanathory;
