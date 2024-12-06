"use client"
import { FC } from 'react'
import Script from 'next/script'

const Tours: FC = () => {
    const clientId = "145340d2c41ddb0af95a6a10d7be041cbc229a"
    
    return (
        <div >
            <div className='mt-[16px] mdl:mt-[20px] 2xl:mt-[25px] flex flex-col gap-[20px] mdl:flex-wrap mdl:flex-row'>
            <div className="tv-hot-tours tv-moduleid-9975846"></div>
                <Script
                    src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
                    strategy="afterInteractive"
                />
            </div>
        </div>
    )
}

export default Tours