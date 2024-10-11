"use client"
import { FC, useState } from 'react'
import Title from '../ui/title'
import Galler from './Images'
import { GalleryData } from '@/constants/Gallery'



const MainGalley: FC = () => {
    const [sliceNumber, setSliceNumber] = useState(10)

    const toggleSliceNumber = () => {
        setSliceNumber((prev) => prev + 10)
    }

    return (
        <div className='flex flex-col mt-[20px] mdl:mt-[40px] 2xl:mt-[60px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
            <div>
                <Title title='Фотографии из туров' />
                <p className='text-[#7C7C7C] text-[15px] mdl:text-[18px] 2xl:text-[20px]  font-raleway font-medium'>Часть незабываемых моментов с туров</p>
            </div>
            <div className='mt-[20px] mdl:mt-[40px]'>
                <Galler images={GalleryData} number={sliceNumber} />
            </div>
            {sliceNumber < GalleryData.length && (
                <div className='w-full flex justify-center items-center mt-[20px] mdl:mt-[70px]'>
                    <button
                        onClick={toggleSliceNumber}
                        className='bg-green100 text-white font-semibold w-[60%] mdl:w-[30%] 3xl:w-[20%] text-[14px] mdl:text-[16px] py-[15px] px-[20px] rounded-[10px]'
                    >
                        Загрузить еще
                    </button>
                </div>
            )}

        </div>
    )
}

export default MainGalley