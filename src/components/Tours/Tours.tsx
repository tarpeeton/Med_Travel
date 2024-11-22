"use client"
import { FC } from 'react'
import Image from 'next/image'
import useSlice from "@/hooks/useSlice"
import LeanMoreButton from '../ui/more'
import { Tour } from '@/interface/Tour'
import useLocale from '@/hooks/useLocale'
import { urlFor } from '@/sanity/lib/image'
import { formatDate } from '@/hooks/fotmatDate'
import Script from 'next/script'

const Tours: FC<{ tours: Tour[] }> = ({ tours }) => {
    const locale = useLocale()

    const { sliceNumber, handleSliceNumber } = useSlice(9)
    if (!tours || tours.length === 0) {
        return (
            <div className='mt-[16px] mdl:mt-[20px] 2xl:mt-[40px]'>
                <p className=" text-[18px] text-[#7C7C7C] font-raleway ">
                    Ничего не найдено. Попробуйте изменить параметры фильтра.
                </p>
            </div>
        )
    }


    const clientId = "145832671cce98f22847de5fbecf6e9090dfc7";


    
    return (
        <div >
            <div className='mt-[16px] mdl:mt-[20px] 2xl:mt-[25px] flex flex-col gap-[20px] mdl:flex-wrap mdl:flex-row'>

            <div className="tv-hot-tours tv-moduleid-9975749"></div>
<Script
        src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
        strategy="afterInteractive"
      />


                {/* {
                    tours.slice(0, sliceNumber).map(t => (
                        <div key={t._id} className='mdl:w-[48%] 2xl:w-[32%] cursor-pointer group'>
                            <div className='h-[199px] w-full overflow-hidden rounded-[15px]'>
                                {t.mainPhoto?.asset?._ref && (
                                    <Image
                                        src={urlFor(t.mainPhoto.asset._ref || "").url()} // Convert to string URL
                                        alt="toursimage"
                                        width={1000}
                                        height={1000}
                                        className="object-cover w-full h-full"
                                    />
                                )}
                                <div className='mt-[-70px] ml-[15px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-[100] p-[16px] text-center justify-center bg-white z-[999] text-green100 relative w-[200px] rounded-[10px] font-bold hover:group-[]:'>Быстрая заявка</div>
                            </div>
                            <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]  flex flex-col'>
                                <div className='rustam'>
                                    <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-raleway font-bold text-titleDark'>{t.name[locale]}</p>
                                </div>
                                <div className='rustam'>
                                    <p className='text-[14px] text-[#7C7C7C] mdl:text-[17px] 2xl:text-[18px] font-raleway font-medium '>{t.fromAddress[locale]} - {t.toAddress[locale]} • {formatDate(t.fromDate)} — {formatDate(t.toDate)}</p>
                                </div>
                                <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]'>
                                    <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-bold text-green100 font-raleway'>{t.price}$</p>
                                </div>
                            </div>
                        </div>
                    ))
                } */}
            </div>
            {/* {sliceNumber < tours.length && (
                <LeanMoreButton sliceCounterUp={handleSliceNumber} />
            )} */}

        </div>
    )
}

export default Tours