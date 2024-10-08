"use client"
import { FC, useState } from 'react'
import Image from 'next/image'
import { ToursData } from '@/constants/Tours'


const Tours: FC = () => {
    const [sliceNumber, setSliceData] = useState(9)


    const setSlice = () => {
        setSliceData((prev) => prev + 9)
    }

    return (
        <div >
            <div className='mt-[16px] mdl:mt-[20px] 2xl:mt-[25px] flex flex-col gap-[20px] mdl:flex-wrap mdl:flex-row'>
                {
                    ToursData.slice(0, sliceNumber).map((t, index) => (
                        <div key={index} className='mdl:w-[48%] 2xl:w-[32%] cursor-pointer group'>
                            <div className='h-[199px] w-full overflow-hidden rounded-[15px]'>
                                <Image src={t.image} alt='toursimage' width={1000} height={1000} className='object-cover w-full h-full' />
                                <div className='mt-[-70px] ml-[15px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-[100] p-[16px] text-center justify-center bg-white z-[999] text-green100 relative w-[200px] rounded-[10px] font-bold hover:group-[]:'>Быстрая заявка</div>
                            </div>
                            <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]  flex flex-col'>
                                <div className=''>
                                    <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-raleway font-bold text-titleDark'>{t.title.ru}</p>
                                </div>
                                <div className=''>
                                    <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px] font-raleway font-medium text-titleDark'>{t.title.ru}</p>
                                </div>
                                <div className='mt-[12px] mdl:mt-[16px] 2xl:mt-[20px]'>
                                    <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-bold text-green100 font-raleway'>{t.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {sliceNumber < ToursData.length && (
                <div className='w-full text-center mt-[40px] mdl:mt-[60px]'>
                    <button  onClick={setSlice} className="bg-greenButton p-[16px] rounded-[10px] text-[18px] font-bold w-[50%] mx-auto 2xl:w-[20%] ">
                        <span className='text-[16px] font-bold text-white'>
                            Загрузить еще
                        </span>
                    </button>
                </div>
            )}

        </div>
    )
}

export default Tours