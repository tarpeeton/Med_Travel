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
import { RandomGallery } from '@/lib/api'
import { IGallery } from '@/interface/Gallery'

const Gallery: FC = () => {
    const [gallery, setGallery] = useState<IGallery[]>([])
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await RandomGallery(1)
                setGallery(res.data) 
            } catch (error) {
                console.error("Error fetching gallery:", error)
            }
        }

        fetchGallery() 
    }, []) 

    return (
        <div className='mt-[120px] 2xl:mt-[180px]'>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <Title title='Фотографии из туров' />
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

                        {gallery.map((gal) => (
                            <SwiperSlide key={gal.id} className=' cursor-pointer'>
                                <div className=' h-[220px] mdl:h-[320px] 2xl:h-[390px]'>
                                    <Image src={gal.url} alt='image slider' width={1000} height={700} quality={100} className='object-cover w-full h-full' />
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