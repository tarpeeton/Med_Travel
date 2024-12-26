"use client"
import { FC, useRef, useState, useEffect, useMemo } from "react"
import Script from "next/script"; // Script komponentini import qilish
import useLocale from '@/hooks/useLocale';


const Stock: FC = () => {
  const locale = useLocale()
  const clientId = "145340d2c41ddb0af95a6a10d7be041cbc229a";



  return (
    <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:ml-[200px] mt-[120px] relative cursor-pointer'>
      <p className='w-[50%] mb-[20px] 2xl:mb-[30px] font-bold text-[25px] text-[#242424] mdl:text-[35px] 2xl:text-[40px] mdl:w-full'>
        {
          locale === 'ru' ? "Горящий тур"
            : locale === 'uz' ? "Qizg'in tur"
              : "Hot tour"
        }


      </p>
      <div className="tv-hot-tours tv-moduleid-9975845"></div>
      <Script
        src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
        strategy="afterInteractive"
      />
    </div>
  )
}

export default Stock
