"use client"
import Image from 'next/image'
import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Link } from '@/i18n/routing'
import { MdNavigateNext } from "react-icons/md"
import useLocale from '@/hooks/useLocale'
import { useParams } from 'next/navigation'
import { BlogSlug } from '@/lib/api'
import { IBlog } from '../Blog/Main'


interface IBlogWithSlug {
    setBlogID: Dispatch<SetStateAction<number>>
    allBlogs: IBlog[]
}


const BlogWithSlug: FC<IBlogWithSlug> = ({setBlogID , allBlogs}) => {
    const locale = useLocale()
    const { slug } = useParams()
    const [blogWithSlug, setBlogWithSlug] = useState<IBlog | null>(null)
    


    const normalizedSlug = Array.isArray(slug) ? slug[0] : slug




    useEffect(() => {
        const FetchBlogWithSlug = async () => {
            try {
                const res = await BlogSlug(locale, normalizedSlug)
                setBlogWithSlug(res.data)
                setBlogID(res.data.id)
            } catch (error) {

            }
        }
        FetchBlogWithSlug()
    }, [slug, locale])

   

    return (
        <div className='flex flex-col mt-[20px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                {/* BLOG */}
                <div className='flex flex-col 2xl:w-[68%]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[#7C7C7C] text-[15px] mdl:text-[17px] font-raleway'>
                            20.08.2024
                        </p>
                        <h1 className='text-[25px] mdl:text-[35px] 2xl:text-[32px] 4xl:text-[40px] text-titleDark font-bold  font-raleway'>{blogWithSlug?.option[0]?.title}</h1>
                    </div>
                    <div className='mt-[20px] mdl:mt-[25px]  rounded-[20px] overflow-hidden h-[220px] mdl:h-[420px] 2xl:h-[510px]'>
                        {blogWithSlug?.option[0]?.photo?.url ? (
                            <Image
                                quality={100}
                                alt='blogImage'
                                src={blogWithSlug.option[0].photo.url}
                                width={1075}
                                height={500}
                                className='object-cover w-full h-full'
                            />
                        ) : (
                            null
                        )}
                    </div>
                    <div className='mt-[30px] mdl:mt-[40px] '>
                        <p className='text-[15px] font-raleway  mdl:text-[17px]'>
                            {blogWithSlug?.option?.[0].description}
                        </p>
                    </div>




                    <div className='mt-[40px] mdl:mt-[50px] 2xl:mt-[60px] flex flex-col gap-[12px] 2xl:gap-[12px]'>



                        {blogWithSlug?.option && blogWithSlug.option.length > 0 ? (
                            blogWithSlug.option.map((data) => (
                                <div key={data.id}>
                                    <p className='text-[22px] mdl:text-[25px] text-titleDark font-semibold'>{data.title}</p>
                                    <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] text-titleDark '>
                                        {data.description}
                                    </p>
                                </div>
                            ))
                        ) : (
                            null // Fallback if no options are available
                        )}



                    </div>
                </div>
                {/* SIMILAR NEWS */}
                <div className='hidden 2xl:flex 2xl:flex-col 2xl:gap-[12px] 2xl:w-[30%] mt-[158px]'>
                        {
                            allBlogs.map((similar) => (
<div className='border border-borderColor p-[30px] rounded-[20px]'>
                        <p className='text-[18px] font-semibold font-raleway text-titleDark '>
                            {similar.option[0].title}
                        </p>
                        <div className='mt-[20px]'>
                            <Link href={`blog/${similar.slug}`} className='flex flex-row items-center font-bold text-green100 text-[16px]'>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
                        </div>
                    </div>
                            ))
                        }

                    
                    
                </div>
            </div>
        </div>
    )
}

export default BlogWithSlug