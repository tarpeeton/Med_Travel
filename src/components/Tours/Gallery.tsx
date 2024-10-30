'use client'
import { FC, useEffect, useState } from 'react'
import Title from '../ui/title'
import { Link } from '@/i18n/routing'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Tour } from '@/interface/Tour'
import { urlFor } from '@/sanity/lib/image'
import { IGallery } from '@/interface/Gallery'





interface IGalleryProps {
    data: Tour[] | null
}





const Gallery: FC<IGalleryProps> = ({ data }) => {
    const [gallery, setGallery] = useState<IGallery[]>([])

    useEffect(() => {
        // Извлекаем данные галереи только если `data` не null
        setGallery(data ? data.flatMap((tour) => tour.gallery) : [])
    }, [data])





    if (gallery.length <= 0) {
        return null;
    }
    

    return (
        <div className='mt-[120px] 2xl:mt-[180px]'>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <Title text={{ ru: 'Фотографии из туров', uz: "", en: "" }} />
                    <p className='mt-[5px]  2xl:mt-[10px] font-raleway text-[15px] mdl:text-[18px] 2xl:text-[20px] text-[#7C7C7C] font-medium'>Часть незабываемых моментов с туров</p>
                </div>
                {/* SLIDER */}
                <div className='mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}
                        autoplay={{ delay: 2500 }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className='!flex !flex-row !flex-nowrap'
                        breakpoints={{
                            640: {
                                slidesPerView: 1, // 1 slide for small devices
                            },
                            768: {
                                slidesPerView: 2, // 2 slides for medium devices and larger
                            },
                        }}
                    >

                        {gallery?.map((gal , index) => (
                            <SwiperSlide key={index} className=' cursor-pointer'>
                                <div className=' h-[220px] mdl:h-[320px] 2xl:h-[390px]'>

                                    {gal.asset._ref && (
                                        <Image
                                            src={urlFor(gal.asset._ref || "").url()} // Convert to string URL
                                            alt="toursimage"
                                            width={1000}
                                            quality={100}
                                            height={1000}
                                            className="object-cover w-full h-full"
                                        />
                                    )}




                                </div>
                            </SwiperSlide>
                        ))}



                    </Swiper>
                </div>

                <div className='w-full text-center mt-[40px] mdl:mt-[60px]'>
                    <Link href={'/tours/gallery'} className="bg-greenButton p-[16px] rounded-[10px] text-[18px] font-bold w-[50%] mx-auto 2xl:w-[20%] ">
                        <span className='text-[16px] font-bold text-white'>
                            Смотреть все
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Gallery