"use client";
import { FC, useEffect, useState, useMemo } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MdNavigateNext } from "react-icons/md";
import LeanMoreButton from '../ui/more';
import useSlice from '@/hooks/useSlice';
import { IBlog } from '@/interface/Blog';

interface iBlogs {
    typeID: number;
    blogs: IBlog[];
    search: string;
}

const Blogs: FC<iBlogs> = ({ typeID, blogs, search }) => {
    const [blogsName, setBlogsName] = useState<string[]>([]);

    useEffect(() => {
        const titles = blogs.map((e) => e.option[0].title);
        setBlogsName(titles);
    }, [blogs]);

    const { sliceNumber, handleSliceNumber } = useSlice(12);

    // Bloglarni filterlash (typeID orqali)
    const filteredBlogs = useMemo(() => {
        return typeID === 11212 ? blogs : blogs.filter(blog => blog.type.id === typeID);
    }, [blogs, typeID]);

    // Qidiruv bo'yicha filterlangan bloglar
    const searchFilteredBlogs = useMemo(() => {
        return filteredBlogs.filter(blog =>
            blog.option[0].title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, filteredBlogs]);

    return (
        <div className='mt-[20px] mdl:mt-[30px]'>
            <div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:justify-between'>

                {searchFilteredBlogs.length > 0 ? (
                    searchFilteredBlogs.slice(0, sliceNumber).map((item, index) => (
                        <div key={index} className='rounded-[20px] overflow-hidden border border-borderColor pb-[20px] mdl:w-[48%] relative mdl:pb-[80px] mb-[20px] 3xl:w-[31%]'>
                            <div className='mdl:order-[2]'>
                                <Image quality={100} alt='blog Image' src={item.option[0].photo.url} width={1000} height={600} className='object-cover w-full h-full' />
                            </div>

                            <div className='px-[16px] mt-[20px] mdl:px-[20px] flex flex-col mdl:justify-center'>
                                <div>
                                    <p className='text-[20px] mdl:text-[22px] 2xl:text-[25px] font-semibold text-titleDark'>
                                        {item.option[0].title}
                                    </p>
                                </div>
                                <div className='mt-[8px]'>
                                    <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px] font-medium text-[#7C7C7C]'>
                                        {item.option[0].description}
                                    </p>
                                </div>
                                <div className='mt-[16px] mdl:mt-[25px] 2xl:mt-[30px] mdl:absolute mdl:bottom-[40px]'>
                                    <Link href={`/blog/${item.slug}`} className='flex flex-row items-center font-bold text-green100 text-[14px] mdl:text-[18px] 2xl:text-[18px]'>
                                        Подробнее <MdNavigateNext className='ml-[2px] mt-[2px]' size={25} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (<div className="flex flex-col mt-[25px] mdl:mt-[35px] w-full 2xl:mt-[50px] mdl:flex-row mdl:flex-wrap mdl:justify-between"><p className="text-[15px] text-[#7C7C7C] mdl:text-[18px] 2xl:text-[19px] font-semibold font-raleway"> Ничего не найдено</p></div>)}

                {sliceNumber < searchFilteredBlogs.length && (
                    <LeanMoreButton sliceCounterUp={handleSliceNumber} />
                )}

            </div>
        </div>
    );
};

export default Blogs;
