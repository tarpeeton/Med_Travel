import { FC } from 'react'
import Title from '../ui/title'
import Image from 'next/image'
import Link from 'next/link'
import { MdNavigateNext } from "react-icons/md"
import blogone from '../../public/blogone.jpg'


const Latests: FC = () => {
    return (
        <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[20px] mdl:mt-[60px]'>
            <div>
                <Title title='Свежие новости' />
            </div>
            <div className='flex flex-col mt-[16px] mdl:mt-[30px] 2xl:mt-[30px] gap-[16px] mdl:gap-[20px]'>
                <div className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[100%] mdl:flex mdl:flex-row mdl:h-[400px] mdl:pb-0 '>
                    <div className='mdl:w-[50%] mdl:order-[2]'>
                        <Image quality={100} alt='blog Image' src='https://ucarecdn.com/7e005fcf-aeb8-4438-b37a-142611095d5c/-/preview/670x400/' width={1000} height={600} className='object-cover w-full h-full' />
                    </div>

                    <div className='px-[16px] mdl:px-[30px] 2xl:px-[40px] mt-[20px] flex flex-col mdl:w-[50%] mdl:justify-center'>
                        <div>
                            <p className='text-[20px] mdl:text-[22px]  2xl:text-[25px] font-semibold text-titleDark'>Как выбрать правильное место для реабилитации: Советы экспертов</p>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px]  font-medium text-[#7C7C7C]'>Рекомендации по выбору реабилитационных центров, которые помогут вам восстановиться быстрее</p>
                        </div>
                        <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px] '>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                </div>
                <div className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[100%] mdl:flex mdl:flex-row mdl:h-[400px] mdl:pb-0'>
                    <div className='mdl:w-[50%] mdl:order-[2]'>
                        <Image quality={100} alt='blog Image' src={blogone} width={1000} height={600} className='object-cover w-full h-full' />
                    </div>
                    <div className='px-[16px] mdl:px-[30px] 2xl:px-[40px] mt-[20px] flex flex-col mdl:w-[50%] mdl:justify-center'>
                        <div>
                            <p className='text-[20px] mdl:text-[22px]  2xl:text-[25px] font-semibold text-titleDark'>Как выбрать лучшую клинику для лечения: Советы и рекомендации</p>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px]  font-medium text-[#7C7C7C]'>Полезные советы, которые помогут вам найти подходящее медицинское учреждение для вашего лечения</p>
                        </div>
                        <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px] '>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                </div>
                <div className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[100%] mdl:flex mdl:flex-row mdl:h-[400px] mdl:pb-0'>
                    <div className='hidden mdl:w-[40%] mdl:block mdl:order-[2]'>

                    </div>
                    <div className='px-[16px] mdl:px-[30px] 2xl:px-[40px] mt-[20px] flex flex-col mdl:justify-center mdl:w-[60%]'>

                        <div>
                            <p className='text-[20px] mdl:text-[22px]  2xl:text-[25px] font-semibold text-titleDark'>Топ-10 медицинских центров: Где получать качественное лечение?</p>
                        </div>
                        <div className='mt-[8px]'>
                            <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px]  font-medium text-[#7C7C7C]'>Обзор ведущих медицинских учреждений, предлагающих высококачественные услуги</p>
                        </div>
                        <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px]'>
                            <Link href={"/slug"} className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px] '>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latests