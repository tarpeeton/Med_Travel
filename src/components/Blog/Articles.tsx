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
import useLocale from '@/hooks/useLocale'

interface IArticlesBlogProps {
    setTypeID: Dispatch<SetStateAction<string>>
    types: IBlogTypes[]
    setSearch: Dispatch<SetStateAction<string>>
    search:string
    typeID: string
}

const Articles: FC<IArticlesBlogProps> = ({ setTypeID, types   , setSearch , search , typeID}) => {
    const locale = useLocale()

    return (
        <div className='flex flex-col  mt-[120px] mdl:w-[50%] 2xl:w-[60%]'>
            <div>
                <Title text={{ru: 'Статьи' , uz: "" , en: ""}} />
            </div>

            <div className='input_search w-[100%] mt-[20px] 2xl:mt-[24px] bg-[#F3F7FB] rounded-[10px]  py-[13px] mdl:py-[16px] px-[20px] flex flex-row items-center justify-between'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='w-full outline-none border-none bg-inherit' placeholder='Поиск статей' />
                <RiSearchLine size={22} className='text-titleDark font-bold' />
            </div>

            {/* Mobile View */}
            {/* <div className='mdl:hidden mt-[16px]'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{ delay: 2500 }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className='!flex !flex-row !flex-nowrap'
                >
                    <SwiperSlide>
                        <div>
                            <button onClick={() => setTypeID('all')} className={`py-[12px] px-[20px] ${
                  typeID === 'all'
                    ? "bg-green100 text-white"
                    : "border border-borderColor"
                } text-center flex items-center justify-center rounded-full font-raleway text-[15px] w-[100%]`}
              >
                                Все категории
                            </button>
                        </div>
                    </SwiperSlide>

                    {types.map((type) => (
                        <SwiperSlide key={type._id}>
                            <div>
                                <button onClick={() => setTypeID(type._id)} className={`py-[12px] px-[20px] ${
                    typeID === type._id
                      ? "bg-green100 text-white"
                      : "border border-borderColor"
                  } text-center flex items-center justify-center rounded-full font-raleway text-[15px] w-[100%]`}>
                                    {type.title[locale]}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div> */}
            {/* Desktop View */}
            {/* <div className='hidden mdl:block'>
                <div className='flex flex-row gap-[4px] mt-[20px] 2xl:mt-[30px] w-full'>
                    <button onClick={() => setTypeID('all')} className={`py-[12px] px-[20px] ${
                  typeID === "all"
                    ? "bg-green100 text-white"
                    : "border border-borderColor"
                } text-center flex items-center justify-center rounded-full font-raleway text-[17px] w-[170px] 2xl:w-[200px]`}
              >Все категории</button>


                    {types.map((type) => (
                        <button onClick={() => setTypeID(type._id)} className={`py-[12px] px-[20px] ${
                            typeID === type._id
                              ? "bg-green100 text-white"
                              : "border border-borderColor"
                          } text-center flex items-center justify-center rounded-full font-raleway text-[17px] 2xl:w-[200px] w-[170px]`}>{type.title[locale]}</button>
                    ))}


                </div>
            </div> */}

        </div>
    )
}

export default Articles
