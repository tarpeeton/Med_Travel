"use client"
import Image from 'next/image'
import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Link } from '@/i18n/routing'
import { MdNavigateNext } from "react-icons/md"
import useLocale from '@/hooks/useLocale'
import { useParams } from 'next/navigation'
import { IBlog } from '@/interface/Blog'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'





interface IBlogWithSlug {
    setBlogID: Dispatch<SetStateAction<string>>
    allBlogs: IBlog[]
}

export interface IBlogSlugData {
    _id: string
    createdAt: string
    sections: Array<{
        _key: string
        title: {
            ru: string
            uz: string
            en: string
        }
        image?: {
            _type: string
            asset: {
                _type: string
                _ref: string
            }
        }
        description: {
            ru: string
            uz: string
            en: string
        }
    }>
}

const BlogWithSlug: FC<IBlogWithSlug> = ({ setBlogID, allBlogs }) => {
    const locale = useLocale()
    const { id } = useParams()
    const [blogWithSlug, setBlogWithSlug] = useState<IBlogSlugData | null>(null)



    const normalizedSlug = Array.isArray(id) ? id[0] : id


    useEffect(() => {
        const FetchBlogWithSlug = async () => {
            try {
                // Fetch the blog by `_id`
                const query = `*[_type == "blog" && _id == $_id][0]{
                    _id,
                    createdAt,
                    sections,
                }`
                const params = { _id: normalizedSlug }
                const res = await client.fetch(query, params)

                console.log(res, 'Fetched Blog Data')

                if (res) {
                    setBlogWithSlug(res)
                    setBlogID(res._id)
                }
            } catch (error) {
                console.error("Failed to fetch blog:", error)
            }
        }

        FetchBlogWithSlug()
    }, [normalizedSlug, locale, setBlogID])




    return (
        <div className='flex flex-col mt-[20px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                {/* BLOG */}
                <div className='flex flex-col 2xl:w-[68%]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[#7C7C7C] text-[15px] mdl:text-[17px] font-raleway'>
                            {blogWithSlug?.createdAt}
                        </p>
                        <h1 className='text-[25px] mdl:text-[35px] 2xl:text-[32px] 4xl:text-[40px] text-titleDark font-bold  font-raleway'>{blogWithSlug?.sections[0]?.title[locale]}</h1>
                    </div>
                    <div className='mt-[20px] mdl:mt-[25px]  rounded-[20px] overflow-hidden h-[220px] mdl:h-[420px] 2xl:h-[510px]'>
                        {blogWithSlug?.sections[0]?.image?.asset && (
                            <Image
                                quality={100}
                                alt='blogImage'
                                src={urlFor(blogWithSlug.sections[0].image.asset._ref).width(1075).height(500).url()}
                                width={1075}
                                height={500}
                                className='object-cover w-full h-full'
                            />
                        )}

                    </div>
                    <div className='mt-[30px] mdl:mt-[40px] '>
                        <p className='text-[15px] font-raleway  mdl:text-[17px]'>
                            {blogWithSlug?.sections?.[0].description[locale]}
                        </p>
                    </div>




                    <div className='mt-[40px] mdl:mt-[50px] 2xl:mt-[60px] flex flex-col gap-[12px] 2xl:gap-[12px]'>



                        {blogWithSlug?.sections && blogWithSlug.sections.length > 0 ? (
                            blogWithSlug.sections.map((data) => (
                                <div key={data._key}>
                                    <p className='text-[22px] mdl:text-[25px] text-titleDark font-semibold'>{data.title[locale]}</p>
                                    <p className='text-[15px] mdl:text-[17px] 2xl:text-[18px] text-titleDark '>
                                        {data.description[locale]}
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
                                    {similar.sections[0].title[locale]}
                                </p>
                                <div className='mt-[20px]'>
                                    <Link href={`${similar._id}`} className='flex flex-row items-center font-bold text-green100 text-[16px]'>Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} /></Link>
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