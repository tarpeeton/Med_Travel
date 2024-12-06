"use client"
import useLocale from '@/hooks/useLocale'
import { FC } from 'react'
import { Link } from '@/i18n/routing'
import { MdNavigateNext } from "react-icons/md";
import { SpecializedClinic } from '@/interface/clinicks.interface'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import { IServiceForLecheniye } from '@/interface/clinicks.interface'
import ImageOneCard from '@/public/slug/OneCard.jpg'
import ImageTwoCard from '@/public/slug/TwoCard.jpg'
import ImageThreeCard from '@/public/slug/ThreeCard.jpg'

interface IServiceAndLechenyaProps {
  serviceForLecheniye : IServiceForLecheniye[] | []
}

const SeriveAndLechenya: FC<IServiceAndLechenyaProps> = ({serviceForLecheniye}) => {
  const locale = useLocale()


  return (
    <div className='px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
      <div className='flex flex-col xl:flex-row gap-[20px] mdl:gap-[40px] xl:gap-0'>
        <div className='lg:w-[50%]'>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-4 w-full'>
            <div className='w-full h-[87px] mdl:h-[192px] 2xl:h-[194px] relative'>
              <Image
                src={ImageOneCard}
                alt="Medical Service 1"
                fill
                className='object-cover rounded-[16px]'
              />
            </div>
            <div className='w-full h-[192px] mdl:h-[432px] mt-[30px] relative'>
              <Image
                src={ImageTwoCard}
                alt="Medical Service 2"
                fill
                className='object-cover rounded-[16px]'
              />
            </div>
            <div className='w-full h-[181px] mdl:h-[405px] mt-[-120px] mdl:mt-[-250px] relative xl:mt-[-270px]'>
              <Image
                src={ImageThreeCard}
                alt="Medical Service 3"
                fill
                className='object-cover rounded-[20px]'
              />
            </div>
          </div>
        </div>

        <div className='lg:w-[50%] lg:order-[-1] xl:flex 2xl:items-center 2xl:pr-[80px]'>
          <div className='flex flex-col'>
            <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>
              {locale === 'ru' ? "Услуги и лечение" : locale === 'uz' ? "Xizmatlar va davolash" : "Services and treatment"}
            </p>
            <div className='mt-[20px] flex flex-col gap-[12px] mdl:gap-0 mdl:mt-[40px]'>
              {serviceForLecheniye?.map((item, index) => (
                <div key={index} className='gap-[16px] flex flex-row  items-center py-[12px] border-y border-y-[#D1F0ED]'>
                <div className='text-[18px] text-[#1AB2A6] font-semibold mdl:text-[25px]  4xl::text-[30px]'>
                  {/* Добавляем 1 к индексу и форматируем число с ведущим нулем если оно меньше 10 */}
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className=' mdl:text-[25px] 4xl::text-[30px]  text-[18px]  font-raleway font-medium text-[#505050] leading-[28px]'>
                    {item.title[locale]}
                  </p>
                </div>
              </div>
              ))}
              

            </div>
          </div>


        </div>
      </div>


    </div>
  )
}


export default SeriveAndLechenya