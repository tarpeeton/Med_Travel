'use client'
import { FC } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { MdNavigateNext } from "react-icons/md"
import Title from '../ui/title'
import { IBlog } from '@/interface/Blog'


interface IOtherBlog {
  otherBlogs: IBlog[]
}


const OtherBlogs: FC<IOtherBlog> = ({ otherBlogs }) => {


  return (
    <div className='mt-[120px]'>
      <div className='flex flex-col'>
        <Title  text={{ru: 'Другие статьи' , uz: "" , en: ""}} />
      </div>
      <div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:justify-between mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
        {otherBlogs.map((item, index) => (
          <div key={index} className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[48%]  relative  mdl:pb-[80px] mb-[20px] 3xl:w-[31%]'>
            <div className=' mdl:order-[2]'>
              <Image quality={100} alt='blog Image' src={item.option[0].photo.url} width={1000} height={600} className='object-cover w-full h-full' />
            </div>

            <div className='px-[16px] mt-[20px] mdl:px-[20px] flex flex-col  mdl:justify-center'>
              <div>
                <p className='text-[20px] mdl:text-[22px]  2xl:text-[25px] font-semibold text-titleDark'>
                  {item.option[0].title}
                </p>
              </div>
              <div className='mt-[8px]'>
                <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px]  font-medium text-[#7C7C7C]'>
                  {item.option[0].description}
                </p>
              </div>
              <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px] mdl:absolute  mdl:bottom-[40px]'>
                <Link href={`${item.slug}`} className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px] '>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
              </div>
            </div>
          </div>

        ))}
      </div>
      <Link href='/blog' className='w-full flex justify-center items-center mt-[20px] mdl:mt-[70px]'>
        <button
          className='bg-green100 text-white font-semibold w-[60%] mdl:w-[30%] 3xl:w-[20%] text-[14px] mdl:text-[16px] py-[15px] px-[20px] rounded-[10px]'
        >
          Все статьи
        </button>
      </Link>
    </div>
  )
}

export default OtherBlogs