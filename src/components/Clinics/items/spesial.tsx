"use client"
import useLocale from '@/hooks/useLocale'
import { FC } from 'react'
import { Link } from '@/i18n/routing'
import { MdNavigateNext } from "react-icons/md";
import { SpecializedClinic } from '@/interface/clinicks.interface'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'


interface Props {
  specionizedclicnick: SpecializedClinic[] | null | undefined
}


const SpesialClinick: FC<Props> = ({ specionizedclicnick }) => {
  const locale = useLocale()


  return (
    <div className='px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
      <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>

        {locale === 'ru' ? "Специализации клиники" : locale === 'uz' ? "Bizning klinika" : "Our clinic"}
      </p>
      <div className='flex flex-col mt-[20px] mdl:mt-[40px]'>
        <div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:gap-[20px]'>
          {specionizedclicnick?.map((item, index) => (
            <div key={index} className='flex flex-col mt-[20px] mdl:w-[48%] 2xl:w-[48%] '>
              <div className='rounded-[20px] mdl:rounded-[30px] border border-borderColor py-[35px] px-[25px] '>
                <div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
                  {item.icon?.asset?._ref && (
                    <Image src={urlFor(item.icon.asset._ref).url()} className='w-[40px] h-[40px]' width={100} height={100} alt='image' quality={100} />
                  )}

                </div>
                <div className='flex min-h-[90px] mdl:min-h-[120px] flex-col gap-[4px] mt-[25px]'>
                  <p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
                    {item.name[locale]}
                  </p>
                  <p className='text-[#505050] font-medium text-[15px] font-raleway mdl:text-[17px]'>
                    {item.description[locale]}
                  </p>
                </div>
                <Link href='' className='flex text-[#1AB2A6] items-center gap-[5px] mt-[20px] mdl:mt-[30px] font-semibold font-raleway text-[14px] mdl:text-[18px]'>

                  {locale === 'ru' ? " Cмотреть далее" : locale === 'uz' ? "Davom etish" : ""}
                  <MdNavigateNext className='w-[20px] h-[20px] mdl:w-[25px] mdl:h-[25px]' />
                </Link>
              </div>
            </div>
          ))}

        </div>
        <div className='w-full mt-[20px] mdl:mt-[40px] flex items-center justify-center'>
          <Link href='/clinics' className='greenButton font-bold text-[14px] mdl:text-[16px] p-[16px] rounded-[10px]  w-[50%] mx-auto 2xl:w-[20%]'>
            {locale === 'ru' ? "Подробнее" : locale === 'uz' ? "Ko'proq" : "More"}
          </Link>
        </div>
      </div>
    </div>
  )
}


export default SpesialClinick