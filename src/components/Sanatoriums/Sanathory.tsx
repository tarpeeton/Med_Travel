'use client'
import { FC, useState, useEffect, RefObject } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoIosStar } from 'react-icons/io'
import { ISanathoryData } from '@/interface/Sanathory'
import useSlice from '@/hooks/useSlice'
import LeanMoreButton from '../ui/more'
import Title from '../ui/title'
import { ICategory } from './Main'
import useLocale from '@/hooks/useLocale'
import { urlFor } from '@/sanity/lib/image'

interface ISanathory {
  data: ISanathoryData[],
  cotegory: ICategory[]
  animation: RefObject<HTMLDivElement>
  activeButtonDefault: string
}


const Sanathory: FC<ISanathory> = ({ data, cotegory, animation, activeButtonDefault }) => {
  const [activeButton, setActiveButton] = useState<string>(activeButtonDefault) // State to track the active button
  const { sliceNumber, handleSliceNumber } = useSlice(9)
  const [filteredData, setFilteredData] = useState(data)
  const locale = useLocale()

  console.log(filteredData, 'FFF')




  const handleButtonClick = (category: string) => {
    setActiveButton(category) // Set the active button when clicked
  }

  useEffect(() => {
    setActiveButton(activeButtonDefault)
  }, [activeButtonDefault])

  useEffect(() => {
    if (activeButton) {
      setFilteredData(
        data.filter(item =>
          item.categories.some(category => category.title[locale] === activeButton)
        )
      )
    } else {
      setFilteredData(data)
    }
  }, [activeButton, data, locale])





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
        <Title text={{ ru: 'Доступные санатории', uz: "", en: "" }} />
        <div className='hidden mt-[30px] mdl:flex mdl:flex-row mdl:flex-wrap mdl:gap-[8px]'>
          {cotegory.map((category, index) => (
            <button
              key={index}
              className={`py-[12px] px-[20px] text-center  font-semibold  flex items-center justify-center rounded-full font-raleway text-[15px]  ${getButtonStyle(category.title[locale])}`}
              onClick={() => handleButtonClick(category.title[locale])} // Handle button click
            >
              {category.title[locale]}
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
            {cotegory.map((category, index) => (
              <SwiperSlide key={index}>
                <div>
                  <button
                    className={`py-[12px] px-[20px] text-center  font-semibold  flex items-center justify-center rounded-full font-raleway text-[15px] w-[100%] ${getButtonStyle(
                      category.title[locale]
                    )}`}
                    onClick={() => handleButtonClick(category.title[locale])} // Handle button click
                  >
                    {category.title[locale]}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div ref={animation} className='mt-[16px] mdl:mt-[20px] 2xl:mt-[35px] flex flex-col gap-[20px] mdl:flex-row mdl:flex-wrap 2xl:gap-0 2xl:justify-between'>
          {
            filteredData && filteredData.length > 0 ? (
              filteredData.slice(0, sliceNumber).map((t, index) => (
                <div key={index} className='mdl:w-[48%] 2xl:w-[32%] cursor-pointer group 2xl:mb-[50px]' >
                  <div className='h-[199px] w-full overflow-hidden rounded-[15px] relative 2xl:h-[307px]'>

                    <Image
                      src={urlFor(t.mainImage.asset._ref).url() || ''}
                      alt='toursimage'
                      width={1000}
                      height={1000}
                      className='object-cover w-full h-full'
                    />

                    {/* RATING */}
                    <div className='flex flex-row items-center rounded-full bg-titleDark bg-opacity-[80%] py-[10px] px-[20px] absolute gap-[5px] top-[10px] left-[15px]'>
                      <p className='text-white'>{t.rating}</p>
                      <IoIosStar className='text-white' />
                    </div>
                    <div className='mt-[-70px] ml-[15px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-[100] p-[16px] text-center justify-center bg-white z-[999] text-green100 relative w-[200px] rounded-[10px] font-bold'>
                      Быстрая заявка
                    </div>
                  </div>
                  <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] flex flex-col'>
                    <div>
                      <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-raleway font-bold text-titleDark'>{t.name[locale]}</p>
                    </div>
                    <div>
                      <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px] font-raleway font-medium text-titleDark'>{t.fromAddress[locale]} - {t.toAddress[locale]}</p>
                    </div>
                    <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]'>
                      <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-bold text-green100 font-raleway'>{t.price}$</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='mt-[16px] mdl:mt-[20px] '>
                <p className='text-[18px] text-[#7C7C7C] font-raleway'>
                  Ничего не найдено. Попробуйте изменить параметры фильтра.
                </p>
              </div>
            )
          }

        </div>

        {sliceNumber < filteredData.length && (
          <LeanMoreButton sliceCounterUp={handleSliceNumber} />
        )}
      </div>
    </div>
  )
}

export default Sanathory
