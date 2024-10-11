'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoIosStar } from "react-icons/io"



import { ToursData } from '@/constants/Tours'
import useSlice from "@/hooks/useSlice";
import LeanMoreButton from '../ui/more'
import Title from '../ui/title'


const categories = ['Лечение', 'Отдых', 'Реабилитация']


const Sanathory: FC = () => {
  const [activeButton, setActiveButton] = useState('Лечение') // State to track the active button
  const { sliceNumber, handleSliceNumber } = useSlice(9);


  const handleButtonClick = (category: string) => {
    setActiveButton(category) // Set the active button when clicked
  }

 
  const getButtonStyle = (category: string) => {
    if (activeButton === category) {
      return 'bg-green100 text-white' // Active button styles
    } else {
      return 'border border-[#E8E8E8] text-[#505050]' // Inactive button styles
    }
  }

  return (
    <div className='mt-[300px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] 2xl:mt-[165px]'>
      <div>
        <Title title='Доступные санатории' />
        <div className='hidden mt-[30px] mdl:flex mdl:flex-row mdl:flex-wrap mdl:gap-[8px]'>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`py-[12px] px-[20px] text-center  font-semibold  flex items-center justify-center rounded-full font-raleway text-[15px]  ${getButtonStyle(category)}`}
              onClick={() => handleButtonClick(category)} // Handle button click
            >
              {category}
            </button>
          ))}
        </div>
        <div className='mdl:hidden mt-[20px]'>
          <Swiper
            spaceBetween={10}
            slidesPerView={2.3}
            autoplay={{ delay: 2300 }}
            modules={[Navigation, Pagination, Autoplay]}
            className='!flex !flex-row !flex-nowrap'
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div>
                  <button
                    className={`py-[12px] px-[20px] text-center  font-semibold  flex items-center justify-center rounded-full font-raleway text-[15px] w-[100%] ${getButtonStyle(
                      category
                    )}`}
                    onClick={() => handleButtonClick(category)} // Handle button click
                  >
                    {category}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='mt-[16px] mdl:mt-[20px] 2xl:mt-[35px] flex flex-col gap-[20px] mdl:flex-row mdl:flex-wrap 2xl:gap-0 2xl:justify-between'>
          {
            ToursData.slice(0, sliceNumber).map((t, index) => (
              <div key={index} className='mdl:w-[48%] 2xl:w-[32%] cursor-pointer group 2xl:mb-[50px]'>
                <div className='h-[199px] w-full overflow-hidden rounded-[15px] relative 2xl:h-[307px]'>
                  <Image src={t.image} alt='toursimage' width={1000} height={1000} className='object-cover w-full h-full' />
                  {/* RATING */}
                  <div className='flex flex-row items-center rounded-full bg-titleDark bg-opacity-[80%] py-[10px] px-[20px] absolute gap-[5px] top-[10px] left-[15px]  '>
                    <p className='text-white'>
                      5.5
                    </p>
                    <IoIosStar className='text-white' />
                  </div>
                  <div className='mt-[-70px] ml-[15px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-[100] p-[16px] text-center justify-center bg-white z-[999] text-green100 relative w-[200px] rounded-[10px] font-bold hover:group-[]:'>Быстрая заявка</div>
                </div>
                <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]  flex flex-col'>
                  <div className=''>
                    <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-raleway font-bold text-titleDark'>{t.title.ru}</p>
                  </div>
                  <div className=''>
                    <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px] font-raleway font-medium text-titleDark'>{t.title.ru}</p>
                  </div>
                  <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]'>
                    <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-bold text-green100 font-raleway'>{t.price}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {sliceNumber < ToursData.length && (
               <LeanMoreButton  sliceCounterUp={handleSliceNumber}/>
            )}
      </div>
    </div>
  )
}

export default Sanathory
