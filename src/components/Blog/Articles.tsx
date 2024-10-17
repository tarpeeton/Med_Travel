"use client"
import { Dispatch, FC, SetStateAction } from 'react'
import Title from '../ui/title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { RiSearchLine } from "react-icons/ri"
import { IBlogTypes } from './Main'

interface IArticlesBlogProps {
    setTypeID: Dispatch<SetStateAction<number>>
    types: IBlogTypes[]
    setSearch: Dispatch<SetStateAction<string>>
    search: string
}

const Articles: FC<IArticlesBlogProps> = ({ setTypeID, types   , setSearch , search}) => {


    return (
        <div className='flex flex-col  mt-[120px] mdl:w-[50%] 2xl:w-[35%]'>
            <div>
                <Title title='Статьи' />
            </div>

            <div className='input_search w-[100%] mt-[20px] 2xl:mt-[24px] bg-[#F3F7FB] rounded-[10px]  py-[13px] mdl:py-[16px] px-[20px] flex flex-row items-center justify-between'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='w-full outline-none border-none bg-inherit' placeholder='Поиск статей' />
                <RiSearchLine size={22} className='text-titleDark font-bold' />
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
                            <button onClick={() => setTypeID(11212)} className='py-[12px] px-[20px] bg-green100 text-white text-center flex items-center justify-center rounded-full font-raleway text-[15px] w-[100%]'>
                                Все категории
                            </button>
                        </div>
                    </SwiperSlide>

                    {types.map((type) => (
                        <SwiperSlide key={type.id}>
                            <div>
                                <button onClick={() => setTypeID(type.id)} className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor rounded-full font-raleway text-[15px] w-[100%]'>
                                    {type.name}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>
            {/* Desktop View */}
            <div className='hidden mdl:block'>
                <div className='flex flex-row gap-[4px] mt-[20px] 2xl:mt-[30px]'>
                    <button onClick={() => setTypeID(11212)} className='py-[12px] px-[20px] bg-green100 text-white text-center flex items-center justify-center rounded-full font-raleway text-[15px]'>Все категории</button>


                    {types.map((type) => (
                        <button onClick={() => setTypeID(type.id)} className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor  rounded-full font-raleway text-[15px]'>{type.name}</button>
                    ))}


                </div>
            </div>

        </div>
    )
}

export default Articles
