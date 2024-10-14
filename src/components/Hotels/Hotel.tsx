'use client'
import { FC, useState } from 'react'
import Title from '../ui/title'
import useSlice from '@/hooks/useSlice'
import LeanMoreButton from '../ui/more'
import { IoIosStar } from "react-icons/io"
import Image from 'next/image'
import { HotelData } from '@/constants/Hotels/Hotel'

const Hotels: FC = () => {
    const { sliceNumber, handleSliceNumber } = useSlice(10)
    const [serviceSlice, setServiceSlice] = useState(4)

    const handleSerServiceNumber = () => {
        setServiceSlice((prev) => prev + 4)
    }

    const displayedHotels = HotelData.slice(0, sliceNumber);

    return (
        <div className='mt-[380px] 2xl:mt-[180px]'>
            <Title title='Доступные гостиницы и отели' />
            <div className='mt-[25px] mdl:mt-[30px] 2xl:mt-[35px] flex flex-col mdl:flex-row mdl:flex-wrap mdl:justify-between'>
                {
                    displayedHotels.length > 0 ? (
                        displayedHotels.map((t, index) => (
                            <div key={index} className='mdl:w-[48%] mb-[50px] 2xl:w-[32%] cursor-pointer group '>
                                <div className='h-[199px] w-full overflow-hidden rounded-[15px] relative 2xl:h-[307px]'>
                                    <Image src={t.image} alt='toursimage' width={1000} height={1000} className='object-cover w-full h-full' />
                                    {/* RATING */}
                                    <div className='flex flex-row items-center rounded-full bg-titleDark bg-opacity-[80%] py-[10px] px-[20px] absolute gap-[5px] top-[10px] left-[15px]'>
                                        <p className='text-white'>5.5</p>
                                        <IoIosStar className='text-white' />
                                    </div>
                                    <div className='mt-[-70px] ml-[15px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-[100] p-[16px] text-center justify-center bg-white z-[999] text-green100 relative w-[200px] rounded-[10px] font-bold'>Забронировать</div>
                                </div>
                                <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] flex flex-col'>
                                    <div className=''>
                                        <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-raleway font-bold text-titleDark'>{t.name}</p>
                                    </div>
                                    <div className='mt-[8px]'>
                                        <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px] font-raleway font-medium text-[#7C7C7C]'>{t.location}</p>
                                    </div>
                                    <div className='flex flex-row flex-wrap gap-[8px] mt-[16px] mdl:mt-[20px]'>
                                        {t.service.slice(0, serviceSlice).map((ser, index) => (
                                            <div key={index} className='flex flex-row gap-[10px] py-[8px] px-[12px] text-center rounded-[5px] bg-[#F3F7FB]'>
                                                <div className='w-[24px] h-[24px]'>
                                                    <Image src={ser.icon.src} alt='Service' width={24} height={24} quality={100} className='w-full h-full object-cover' />
                                                </div>
                                                <div>
                                                    <p className='text-[14px] mdl:text-[15px] 2xl:text-[16px] text-[#7C7C7C] font-semibold'>{ser.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {serviceSlice < t.service.length && (
                                            <button onClick={handleSerServiceNumber} className='bg-[#E8F7F6] rounded-[5px] text-green100 text-[14px] mdl:text-[16px] py-[8px] px-[20px] font-semibold'>
                                                Еще
                                            </button>
                                        )}
                                    </div>
                                    <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]'>
                                        <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-bold text-green100 font-raleway'>от {t.price}/сут</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-[15px] w-[75%] mdl:w-[50%] 2xl:w-full text-[#7C7C7C] mdl:text-[18px] 2xl:text-[19px] font-semibold font-raleway'>
                            Ничего не найдено. Попробуйте изменить параметры фильтра
                        </p>
                    )
                }
            </div>

            {sliceNumber < HotelData.length && (
                <LeanMoreButton sliceCounterUp={handleSliceNumber} />
            )}
        </div>
    )
}

export default Hotels
