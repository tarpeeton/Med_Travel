'use client'
import { FC } from 'react'
import Title from '../ui/title'
import { IHotel } from '@/interface/Hotel'
import Script from 'next/script'





const Hotels: FC = () => {
  
    const clientId = "145832671cce98f22847de5fbecf6e9090dfc7"


    return (
        <div className='mt-[380px] 2xl:mt-[180px]'>
            <Title text={{ ru: 'Доступные Страны и Отели', uz: "", en: "" }} />
            <div className='mt-[25px] mdl:mt-[30px] 2xl:mt-[35px] flex flex-col mdl:flex-row mdl:flex-wrap mdl:justify-between'>
               

            <div className="tv-country tv-moduleid-9975751"></div>
            <Script
                    src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
                    strategy="afterInteractive"
                />

            </div>

            
        </div>
    )
}

export default Hotels
