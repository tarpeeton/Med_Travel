"use client"
import useLocale from '@/hooks/useLocale'
import { FC } from 'react'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import ImageOneCard from '@/public/slug/OneCard.jpg'
import ImageTwoCard from '@/public/slug/TwoCard.jpg'
import ImageThreeCard from '@/public/slug/ThreeCard.jpg'
import { ISpecializations } from '@/interface/sanatorium.interface';

interface IServiceAndLechenyaProps {
  data: ISpecializations | null | undefined
}

const SpesialSanathory: FC<IServiceAndLechenyaProps> = ({ data }) => {
  const locale = useLocale()

  if (!data) return null

  return (
    <div className='px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
      <div className='flex flex-col xl:flex-row gap-[20px] mdl:gap-[40px] xl:gap-0'>
        <div className='lg:w-[50%]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
            <div className='w-full h-[87px] mdl:h-[192px] 2xl:h-[194px] relative'>
              <Image
                src={data.images?.[0] ? urlFor(data.images[0].asset._ref).url() : ImageOneCard}
                alt="Medical Service 1"
                fill
                className='object-cover rounded-[16px]'
              />
            </div>
            <div className='w-full h-[192px] mdl:h-[432px] mt-[30px] relative'>
              <Image
                src={data.images?.[1] ? urlFor(data.images[1].asset._ref).url() : ImageTwoCard}
                alt="Medical Service 2"
                fill
                className='object-cover rounded-[16px]'
              />
            </div>
            <div className='w-full h-[181px] mdl:h-[405px] mt-[-120px] mdl:mt-[-250px] relative xl:mt-[-270px]'>
              <Image
                src={data.images?.[2] ? urlFor(data.images[2].asset._ref).url() : ImageThreeCard}
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
              {locale === 'ru' ? "Специализации и оздоровительные программы" : locale === 'uz' ? "Mutaxassisliklar va sog‘lomlashtirish dasturlari" : "Specializations and recovery programs"}
            </p>
            <div className='mt-[20px] flex flex-col mdl:gap-0 mdl:mt-[40px]'>
              {data.programs?.map((program, index) => (
                <div key={index} className='gap-[16px] flex flex-row items-center py-[12px] border-y border-y-[#D1F0ED] 2xl:py-[40px] '>
                  <div className='rounded-full w-[36px] h-[36px] flex items-center justify-center bg-[#D1F0ED] mdl:min-w-[56px] mdl:min-h-[56px]'>
                    <div className='w-[20px] h-[20px] mdl:w-[32px] mdl:h-[32px] '>
                      <Image
                        src={urlFor(program.icon.asset._ref).url()}
                        alt={program.title[locale]}
                        width={40}
                        height={40}
                        quality={100}
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </div>

                  <p className='mdl:text-[25px] 4xl:text-[30px] text-[18px] font-raleway font-medium text-[#505050] leading-[28px]'>
                    {program.title[locale]}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
      <div className='w-full flex items-center justify-center mt-[20px] mdl:mt-[40px] 2xl:mt-[60px]'>
        <button className='greenButton font-bold py-[13px]  w-[223px] '>
          {locale === 'ru' ? "Подробнее" : locale === 'uz' ? "Ba'tafsil" : "More"}
        </button>
      </div>
    </div>
  )
}

export default SpesialSanathory