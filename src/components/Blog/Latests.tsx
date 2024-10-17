import { FC } from 'react'
import Title from '../ui/title'
import Image from 'next/image'
import { MdNavigateNext } from "react-icons/md"
import { Link } from '@/i18n/routing'
import { IBlog } from '@/interface/Blog'

interface Latest {
    blogs: IBlog[]
}


const Latests: FC<Latest> = ({ blogs }) => {

    return (
        <div className='flex flex-col  mt-[20px] mdl:mt-[60px]'>
            <div>
                <Title title='Свежие новости' />
            </div>
            <div className='flex flex-col mt-[16px] mdl:mt-[30px] 2xl:mt-[30px] gap-[16px] mdl:gap-[20px]'>
                {blogs.map((blog) => (
                    <div key={blog.id} className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[100%] mdl:flex mdl:flex-row mdl:h-[400px] mdl:pb-0 '>
                        <div className='mdl:w-[50%] mdl:order-[2]'>
                            <Image quality={100} alt='blog Image' src={blog.option[0].photo.url} width={1000} height={600} className='object-cover w-full h-full' />
                        </div>

                        <div className='px-[16px] mdl:px-[30px] 2xl:px-[40px] mt-[20px] flex flex-col mdl:w-[50%] mdl:justify-center'>
                            <div>
                                <p className='text-[20px] mdl:text-[22px]  2xl:text-[25px] font-semibold text-titleDark'>
                                    {blog.option[0].title}
                                </p>
                            </div>
                            <div className='mt-[8px]'>
                                <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px]  font-medium text-[#7C7C7C]'>
                                    {blog.option[0].description}
                                </p>
                            </div>
                            <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px]'>
                                <Link href={`/blogs/${blog.slug}`} className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px] '>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latests