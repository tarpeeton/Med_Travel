"use client"
import { FC } from 'react'
import Script from 'next/script'

const Tours: FC = () => {
    const clientId = "145832671cce98f22847de5fbecf6e9090dfc7"
    
    return (
        <div >
            <div className='mt-[16px] mdl:mt-[20px] 2xl:mt-[25px] flex flex-col gap-[20px] mdl:flex-wrap mdl:flex-row'>
                <div className="tv-hot-tours tv-moduleid-9975749"></div>
                <Script
                    src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
                    strategy="afterInteractive"
                />
            </div>
        </div>
    )
}

export default Tours