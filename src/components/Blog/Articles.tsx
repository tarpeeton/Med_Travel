"use client"
import { FC } from 'react'
import Title from '../ui/title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css' // Import Swiper styles

// Optional: Swiper's module styles (depending on what features you use)
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Articles: FC = () => {


    return (
        <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px]'>
            <div>
                <Title title='Статьи' />
            </div>

            {/* Mobile View */}
            <div className='mdl:hidden mt-[16px]'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{ delay: 2500 }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className='!flex !flex-row !flex-nowrap'
                >
                    <SwiperSlide>
                        <div>
                            <button className='py-[12px] px-[20px] bg-green100 text-white text-center flex items-center justify-center rounded-full font-raleway text-[15px] w-[100%]'>
                                Все категории
                            </button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor rounded-full font-raleway text-[15px] w-[100%]'>
                                Медицина
                            </button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor rounded-full font-raleway text-[15px] w-[100%]'>
                                Туризм
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Desktop View */}
            <div className='hidden mdl:block'>
                <div className='flex flex-row gap-[4px] mt-[20px] 2xl:mt-[30px]'>
                    <button className='py-[12px] px-[20px] bg-green100 text-white text-center flex items-center justify-center rounded-full font-raleway text-[15px]'>Все категории</button>
                    <button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor  rounded-full font-raleway text-[15px]'>Медицина</button>
                    <button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor  rounded-full font-raleway text-[15px]'>Туризм</button>
                </div>
            </div>
        </div>
    )
}

export default Articles
