"use client"
import { useState } from 'react';
import QuestionModal from '@/components/Modal/Question';

import useLocale from '@/hooks/useLocale'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
// Images

import One from '@/public/slug/one.jpg'
import Two from '@/public/slug/two.jpg'

const AllInfoClinick = () => {
  const locale = useLocale()
  const [open , setOpen] = useState(false)

  const handleSwitch = () => setOpen(!open)


  return (
    <div className='flex flex-col gap-[20px] mdl:gap-[40px] px-[16px] mdl:px-[20px] lg:px-[200px]'>
        <h1 className='text-[25px] mdl:text-[35px] lg:text-[40px] text-titleDark font-bold'>
          {locale === 'ru' ? "Общая информация о клинике" : locale === 'uz' ? "Klinikada umumiy ma'lumotlari" : "General information about the clinic"}
        </h1>
        <div className='flex flex-col xl:flex-row xl:justify-between'>
            <div className='relative lg:w-[50%]'>
                  <div className='h-[292px] mdl:h-[535px] mdl:w-[90%]'>
                      <Image src={One} alt='Image' width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-[20px] ' />
                  </div>
                  <div className='absolute bottom-[-40px] right-0 rounded-[20px] border-[4px] mdl:h-[394.5px] mdl:w-[394.5px] border-[#FFFFFF] h-[154px] xl:right-[-80px] 2xl:w-[320px] 4xl:w-[355px] 4xl:right-[-10px]'>
                  <Image src={Two} alt='Image' width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-[20px] ' />
                  </div>
            </div>
            <div className='mt-[60px] mdl:mt-[90px] 2xl:mt-[61px] 2xl:w-[40%] 2xl:justify-end'>
                {/* NAME */}
                <h2 className='text-[25px] mdl:text-[35px] font-bold text-titleDark font-raleway '>
                Медицинский центр XYZ
                </h2>
                {/* ADDRESS */}
                <p className=' font-raleway text-[22px] mdl:text-[25px] lg:text-[30px] font-semiboldbold text-titleDark mt-[12px] mdl:mt-[24px]'>Узбекистан, г. Ташкент</p>
                <p className='font-medium font-raleway mt-[12px] mdl:mt-[24px] text-[#7C7C7C] text-[15px] mdl:text-[25px] 2xl:text-[20px] leading-[23px] mdl:leading-[30px]'>
                Медицинский центр XYZ — один из ведущих центров мира, специализирующийся на кардиологии, ортопедии и онкологии. Сочетание инновационных методов лечения и опытной команды специалистов
                </p>
                {/* Number */}
                <div className='flex flex-row  gap-[4px] items-center mt-[12px] mdl:mt-[24px]'>
                    <FaStar className='text-[#1AB2A6] xl:w-[30px] xl:h-[30px] w-[20px] h-[20px] mt-[-2px]' />
                    <p className='text-[#505050] text-[18px] mdl:text-[25px]  2xl:text-[30px] font-raleway font-semibold'>4.9</p>
                    <p className=' font-raleway text-[#7C7C7C] font-medium text-[16px] mdl:text-[20px] lg:text-[25px] 2xl:text-[30px]'>/ 250 отзывов</p>
                </div>
                {/* Button */}
                <div className='w-[80%] mt-[12px] mdl:mt-[24px]'>
                    <button onClick={handleSwitch} className='greenButton py-[16px] px-[16px] text-center font-bold text-white text-[14px] mdl:text-[16px]'>
                        Записаться на консультацию
                    </button>
                    <QuestionModal visible={open} close={handleSwitch} />
                </div>
            </div>
        </div>
    </div>
  )
}


export default AllInfoClinick