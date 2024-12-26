"use client"
import { FC, useEffect, useState, useCallback } from "react"
import { Link } from '@/i18n/routing'
import { Tour } from '@/interface/Tour'
import { mixedData } from '@/constants/Mixed/TourSanathory'
import useLocale from '@/hooks/useLocale'
import { ISanathoryData } from '@/interface/Sanathory'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'



const Tours: FC = () => {
    const [data, setData] = useState<Tour[]>([])
    const [sanathory, setSanathory] = useState<ISanathoryData[]>([])
    const [active, setActive] = useState(0)
    const locale = useLocale()





    const FetchData = useCallback(async () => {
        try {
            if (active === 0) {
                const toursRes = await client.fetch(`*[_type == "tour"]`)
                setData(toursRes)
            } else {
                const sanathoryRes = await client.fetch(`
                    *[_type == "sanatoriums"]{ _id,name,
          fromAddress,
          toAddress,
           categories[]->{
                _id,
                title
              },
          price,
          rating,
          mainImage,}`)
                setSanathory(sanathoryRes)
            }
        } catch (error) {
            console.error(error)
        }
    }, [active, locale])

    useEffect(() => {
        FetchData()
    }, [FetchData])









    return (
        <div className='mt-[120px] mx-[16px] 2xl:ml-[200px]'>
            <div className='flex flex-col'>
                <p className='text-titleDark font-bold font-raleway text-[25px] w-[70%] mdl:text-[35px] 2xl:text-[40px] slg:w-[50%] 2xl:w-[40%]'>
                    {
                        locale === 'ru' ? "Клиники и санатории"
                            : locale === 'uz' ? "Klinikalar va sanatoriyalar"
                                : "Clinics and sanatoriums"
                    }

                </p>
                <div className='flex flex-row gap-[4px] mt-[20px] 2xl:mt-[30px]'>
                    {mixedData.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setActive(m.id)}
                            aria-label={`Select category: ${m.name[locale]}`}
                            className={`py-[12px]  px-[25px] text-center flex items-center justify-center rounded-full font-raleway text-[15px] 
                            ${active === m.id ? 'bg-green100 text-white' : 'border border-borderColor text-[#505050]'}`}>
                            {m.name[locale]}
                        </button>
                    ))}
                </div>

                <div className='mt-[16px] mdl:mt-[20px] w-full'>
                    {active === 0 ? (
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                700: { slidesPerView: 1 },
                                1200: { slidesPerView: 2.9 }
                            }}
                        >
                            {data.map((data) => (
                                <SwiperSlide key={data._id} >
                                    <div
                                        className='rounded-[20px] w-full flex flex-col justify-between bg-cover bg-center min-h-[240px] py-[20px] px-[16px] mdl:h-[350px] mdl:w-[98%] 2xl:h-[300px] mdl:pb-[25px] 2xl:w-[100%]'
                                        style={{
                                            backgroundImage: data.mainPhoto
                                                ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${urlFor(data.mainPhoto.asset._ref)})`
                                                : 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}

                                    >
                                        <div>
                                            <button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-white rounded-full font-raleway text-[15px] text-white'>
                                                {data.fromAddress[locale]}
                                            </button>
                                        </div>
                                        {/* <div>
                                            <p className='text-white text-[22px] mdl:text-[25px] 2xl:text-[30px] font-bold'>
                                                {data.toAddress[locale]}
                                            </p>
                                        </div> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                700: { slidesPerView: 1 },
                                1200: { slidesPerView: 2.9 }
                            }}
                        >
                            {sanathory.map((data) => (
                                <SwiperSlide key={data._id}>
                                    <div
                                        className='rounded-[20px] w-full flex flex-col justify-between bg-cover bg-center min-h-[240px] py-[20px] px-[16px] mdl:h-[350px] mdl:w-[98%] 2xl:h-[300px] mdl:pb-[25px]'
                                        style={{
                                            backgroundImage: data.homeImage
                                                ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${urlFor(data.homeImage.asset._ref)})`
                                                : 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
                                        }}
                                    >
                                        <div>
                                            <button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-white rounded-full font-raleway text-[15px] text-white'>
                                                {/* {data.address[locale]} */}
                                            </button>
                                        </div>
                                        {/* <div>
                                            <p className='text-white text-[22px] mdl:text-[25px] 2xl:text-[30px] font-bold'>
                                                {data.}$
                                            </p>
                                        </div> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                {/* <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[50px] 2xl:justify-around'>
                    <Link href='/tours' className='w-[70%] mdl:w-[40%] 2xl:w-[15%] bg-green100 text-white text-[14px] font-bold font-raleway text-center rounded-[10px] p-[16px] 2xl:ml-[80px]'>
                        Все туры
                    </Link>
                    <div />
                </div> */}
            </div>
        </div>
    )
}

export default Tours
