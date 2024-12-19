"use client"
import { FC, useRef, useState } from "react";

import { Modal } from 'antd'
import { IRoomType } from '@/interface/sanatorium.interface'
import useLocale from '@/hooks/useLocale';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

interface IRoomsModalProps {
  visible: boolean;
  close: () => void;
  data: IRoomType | null;
}


const swiperSettings = {
  modules: [Autoplay, Navigation],
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
};



const RoomsModal: FC<IRoomsModalProps> = ({ visible, close, data }) => {
  const locale = useLocale()
  const [fullImageVisible, setFullImageVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setFullImageVisible(true);
  };



  return (
    <div>
      <Modal
        open={visible}
        footer={null}
        onCancel={close} // Using the close function
        centered
        closeIcon={null}
        className="custom-modal"
        width={1200}
      >
        <div className='flex flex-col  gap-[20px] mdl:gap-[40px]'>
          <h1 className='text-[18px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>
            {data?.title[locale]}
          </h1>
          <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
            <div className='rounded-[20px] w-full h-[160px] mdl:h-[360px] 2xl:h-[344px] overflow-hidden  2xl:w-[45%]'>
              {data?.images?.[0].asset._ref && (
                <Image src={urlFor(data?.images?.[0].asset._ref).url()} alt='Image' width={1000} height={1000} quality={100} className='w-full h-full object-cover  ' />
              )}

            </div>
            <div className='flex flex-col 2xl:w-[44%]'>
              <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] leading-[23px] mdl:leading-[25px] text-[#7C7C7C] font-raleway'>
                {data?.description[locale]?.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>



          <div>
            <Swiper {...swiperSettings}>
              {data?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='rounded-[20px] w-full h-[160px] mdl:h-[220px] 2xl:h-[144px] overflow-hidden  ' onClick={() => handleImageClick(urlFor(image.asset._ref).url())}>
                    {image.asset._ref && (
                      <Image src={urlFor(image.asset._ref).url()} alt='Image' width={1000} height={1000} quality={100} className='w-full h-full object-cover  ' />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* FULL IMAGE  */}
          <Modal
            open={fullImageVisible}
            footer={null}
            closeIcon={null}
            onCancel={() => setFullImageVisible(false)}
            centered
            width={600}
            style={{ padding: 0, backgroundColor: 'transparent' }} // Remove padding and set background to transparent
            bodyStyle={{ padding: 0 }} // Remove padding from the body
          >
            {selectedImage && (
              <Image src={selectedImage} alt='Full Image' width={1000} height={1000} quality={100} className='w-full h-full object-cover' />
            )}
          </Modal>
        </div>
      </Modal>

    </div>
  )
}

export default RoomsModal
