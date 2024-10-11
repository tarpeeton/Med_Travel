"use client"
import { FC } from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { MdNavigateNext } from "react-icons/md"
import { BLOGS } from '@/constants/Blogs'
import { useParams } from 'next/navigation'
import { Locale } from '@/types/Locale'
import LeanMoreButton from '../ui/more'
import useSlice from '@/hooks/useSlice'



const Blogs: FC = () => {
    const { locale } = useParams()
    const { sliceNumber, handleSliceNumber } = useSlice(12)

    const allowedLocales: Locale[] = ['ru', 'uz', 'en']

    // Validate and assign currentLocale as Locale type
    const currentLocale: Locale = (typeof locale === "string" && allowedLocales.includes(locale as Locale))
        ? locale as Locale
        : 'ru' // Fallback to 'ru' if invalid

        
    return (
        <div className='mt-[20px] mdl:mt-[30px]'>
            <div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:justify-between'>

                {BLOGS.slice(0, sliceNumber).map((item, index) => (
                    <div key={index} className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[48%]  relative  mdl:pb-[80px] mb-[20px] 3xl:w-[31%]'>
                        <div className=' mdl:order-[2]'>
                            <Image quality={100} alt='blog Image' src={item.photo?.url} width={1000} height={600} className='object-cover w-full h-full' />
                        </div>

                        <div className='px-[16px] mt-[20px] mdl:px-[20px] flex flex-col  mdl:justify-center'>
                            <div>
                                <p className='text-[20px] mdl:text-[22px]  2xl:text-[25px] font-semibold text-titleDark'>
                                    {item.title[currentLocale]}
                                </p>
                            </div>
                            <div className='mt-[8px]'>
                                <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px]  font-medium text-[#7C7C7C]'>
                                    {item.description[currentLocale]}
                                </p>
                            </div>
                            <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px] mdl:absolute  mdl:bottom-[40px]'>
                                <Link href='/blog/rustamblog' className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px] '>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                            </div>
                        </div>
                    </div>

                ))}
                {sliceNumber < BLOGS.length && (
                    <LeanMoreButton sliceCounterUp={handleSliceNumber} />
                )}
            </div>
        </div>
    )
}

export default Blogs