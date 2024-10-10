"use client"
import { FC } from 'react';
import Image from 'next/image';
import TursTitle from '../ui/tursTitle';
import TursBg from '@/public/tours/banner.png';
import { Button, DatePicker, Select } from 'antd';

const { Option } = Select;

const Banner: FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${TursBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="h-[180px] mdl:h-[240px] 2xl:h-[300px]"
        >
            <div className="py-[40px] px-[16px]">
                <TursTitle title="Туры по Узбекистану" />
                <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
                    Незабываемые туры по Узбекистану
                </p>
            </div>
            <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px]">
                <div className="flex flex-col gap-[16px] 2xl:gap-[20px]">
                    <div className='flex flex-row gap-[1%]'>
                    <Select placeholder="Откуда" className="w-[49%]">
                        <Option value="tashkent">Ташкент</Option>
                        <Option value="samarkand">Самарканд</Option>
                        {/* Add more options as needed */}
                    </Select>
                    <Select placeholder="Куда" className="w-[49%]">
                        <Option value="bukhara">Бухара</Option>
                        <Option value="khiva">Хива</Option>
                        {/* Add more options as needed */}
                    </Select>
                    </div>
                    <div className='flex flex-row gap-[1%] flex-wrap'>
                    <DatePicker className="w-[49%]" placeholder={"От"} />
                    <DatePicker className="w-[49%]" placeholder='До' />

                    </div>
                   
                  
                    
                    
                    <button className="greenButton font-bold p-[16px] ">Поиск</button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
