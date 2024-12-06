"use client"
import Image from 'next/image'
import { FC } from "react"
import ForAuditImage from "@/public/ForAuditImage.png"
import useLocale from '@/hooks/useLocale'

interface AchievementsContent {
    title: {
        ru: string;
        uz: string;
        en: string;
    };
    subtitle: {
        ru: string;
        uz: string;
        en: string;
    };
    description: {
        ru: string;
        uz: string;
        en: string;
    };
}

const content: AchievementsContent = {
    title: {
        ru: 'Материнская компания',
        uz: 'Bosh kompaniya',
        en: 'Parent Company'
    },
    subtitle: {
        ru: 'Партнерство с INTERMED — топовая мировая лаборатория',
        uz: 'INTERMED bilan hamkorlik - yetakchi jahon laboratoriyasi',
        en: 'Partnership with INTERMED - top global laboratory'
    },
    description: {
        ru: 'Мы — дочерняя компания Intermed Innovation, крупнейшего медицинского холдинга в Узбекистане с более чем 15-летним опытом на рынке. Наш опыт и экспертиза позволяют нам предоставлять высококачественные медицинские услуги и гарантировать безопасность наших пациентов.',
        uz: "Biz 15 yildan ortiq tajribaga ega bo'lgan O'zbekistondagi yirik tibbiyot xoldingining Intermed Innovation filialimiz. Bizning tajribamiz va malakamiz yuqori sifatli tibbiy xizmatlarni ko'rsatish va bemorlarimiz xavfsizligini ta'minlash imkonini beradi.",
        en: 'We are a subsidiary of Intermed Innovation, the largest medical holding in Uzbekistan with more than 15 years of experience in the market. Our experience and expertise allow us to provide high-quality medical services and guarantee the safety of our patients.'
    }
}

const Archivments: FC = () => {
    const locale = useLocale()

    return (
        <div className='mt-[120px] mx-[16px] sm:mx-[30px] mdl:mx-[20px] 2xl:mx-[200px]'>
            <div className='flex flex-col relative'>
                <p className='text-[25px] sm:text-[28px] lg:text-[32px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>
                    {content.title[locale]}
                </p>

                <div className='flex flex-col relative mt-[20px] sm:mt-[25px] lg:mt-[30px] mdl:mt-[30px] 2xl:mt-[40px] Archivments cursor-pointer'>
                    <div className='relative py-[25px] px-[20px] sm:py-[30px] sm:px-[25px] lg:py-[35px] lg:px-[28px] 2xl:w-[45%] mdl:py-[40px] mdl:px-[30px] border border-borderColor 
                    min-h-[350px] rounded-[20px] 2xl:h-[500px] pb-[90px]'>
                        <div>
                            <p className='text-[20px] sm:text-[22px] lg:text-[24px] mdl:text-[25px] text-green100 font-raleway font-bold 2xl:w-[90%] 4xl:w-[65%]'>
                                {content.subtitle[locale]}
                            </p>
                            <p className='text-titleDark text-[15px] sm:text-[16px] lg:text-[17px] mdl:text-[17px] font-medium mt-[10px] sm:mt-[12px] lg:mt-[14px] font-raleway'>
                                {content.description[locale]}
                            </p>
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div className='w-full h-full rounded-[20px] mt-[20px] sm:mt-[25px] lg:mt-[28px] 2xl:w-[54%] 2xl:mt-0 2xl:h-[500px] overflow-hidden'>
                        <Image src={ForAuditImage} alt='Image Intermed' quality={100} width={1000} height={1000} className='object-contain w-full h-full 2xl:object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Archivments