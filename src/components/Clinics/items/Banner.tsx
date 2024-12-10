"use client"
import { FC , useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import ImageForBaner from '@/public/gggggggggggggggggggg.jpg'
import Image from 'next/image'
import QuestionModal from '@/components/Modal/Question';
import {BannerImage} from '@/interface/clinicks.interface'

interface IBannerClinickPorps {
    name: string | undefined | null;
    bannerImage: BannerImage | undefined | null;
}


const BannerClinicsItems: FC<IBannerClinickPorps> = ({name , bannerImage}) => {
  const [open , setOpen] = useState(false)
  const handleSwitch = () => setOpen(!open)

  return (
    <div  className='relative'>
         <div
            style={{
                backgroundImage: `url(${bannerImage ? urlFor(bannerImage.asset).url() : ImageForBaner.src})`, // Используем запасное изображение
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
            className="h-[250px] mdl:h-[260px] 2xl:h-[379px]"
        >
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10,
                }}
            ></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-8 2xl:px-[200px]">
                <div className="max-w-xl mdl:w-[80%] 2xl:max-w-[90%]">
                    <h1 className="text-[35px] mdl:text-[45px] 2xl:text-[50px] font-bold text-white">
                        {name}
                    </h1>
                    <p className="text-[16px] mdl:text-[18px] 2xl:text-[20px]  mt-[8px] mdl:mt-[10px]  text-white mb-6">
                        Передовая медицинская помощь с мировым именем
                    </p>
                    <button onClick={handleSwitch} className="bg-[#1AB2A6] 2xl:mt-[32px] text-white px-6 py-3 rounded-[10px] hover:bg-[#008F5E] mdl:text-[16px] mdl:px-[30px] mdl:py-[16px] transition-colors font-bold">
                        Оставить заявку
                    </button>
                    <QuestionModal visible={open} close={handleSwitch} />

                </div>
            </div>
        </div>
    </div>
  )
}


export default BannerClinicsItems