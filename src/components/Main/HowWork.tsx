"use client"
"use client"
import Image from 'next/image'
import { FC, useRef } from 'react'
import { FC, useRef } from 'react'
import { TbCurrencyDollar } from "react-icons/tb"
import { PiAirplaneTiltLight } from "react-icons/pi"
import { FaCalendarCheck, FaHotel } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import useLocale from '@/hooks/useLocale'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface HowWorkData {
    id: number;
    title: {
        ru: string;
        uz: string;
        en: string;
    };
    text: {
        ru: string;
        uz: string;
        en: string;
    };
    icon?: JSX.Element;
}

const DataHowWork: HowWorkData[] = [
    {
        id: 1,
        title: {
            ru: 'Собираем документы',
            uz: 'Hujjatlarni yig\'ish',
            en: 'Collecting documents'
        },
        text: {
            ru: 'Подготавливаем все необходимые документы для вашей поездки.',
            uz: 'Sayohatingiz uchun barcha zarur hujjatlarni tayyorlaymiz.',
            en: 'We prepare all necessary documents for your trip.'
        },
        icon: <Image src='https://ucarecdn.com/115af432-16d4-4ed1-97cd-ada3a1ec0c9b/-/preview/24x26/' width={30} height={40} quality={100} alt='logo' />
    },
    {
        id: 2,
        title: {
            ru: 'Проводим оплату',
            uz: 'To\'lovni amalga oshirish',
            en: 'Processing payment'
        },
        text: {
            ru: 'После бронирования организуем безопасную оплату и предоставим подтверждение.',
            uz: 'Bron qilgandan so\'ng xavfsiz to\'lovni tashkil etamiz va tasdiqlashni taqdim etamiz.',
            en: 'After booking, we organize secure payment and provide confirmation.'
        },
        icon: <TbCurrencyDollar className='text-green100' size={40} />
    },
    {
        id: 3,
        title: {
            ru: 'Отправляем вас в путь',
            uz: 'Sizni yo\'lga jo\'natamiz',
            en: 'Sending you on your way'
        },
        text: {
            ru: 'Бронируем билеты, трансферы и проверяем документы для комфортного путешествия.',
            uz: 'Qulay sayohat uchun chiptalarni, transferlarni bron qilamiz va hujjatlarni tekshiramiz.',
            en: 'We book tickets, transfers and check documents for a comfortable journey.'
        },
        icon: <PiAirplaneTiltLight className='text-green100' size={40} />
    },
    {
        id: 4,
        title: {
            ru: 'Бронируем отель',
            uz: 'Mehmonxonani bron qilish',
            en: 'Hotel booking'
        },
        text: {
            ru: 'Подбираем и бронируем лучшие отели по вашим предпочтениям и бюджету.',
            uz: 'Sizning afzalliklaringiz va byudjetingizga ko\'ra eng yaxshi mehmonxonalarni tanlaymiz va bron qilamiz.',
            en: 'We select and book the best hotels according to your preferences and budget.'
        },
        icon: <FaHotel className='text-green100' size={40} />
    },
    {
        id: 5,
        title: {
            ru: 'Поддержка 24/7',
            uz: '24/7 qo\'llab-quvvatlash',
            en: '24/7 Support'
        },
        text: {
            ru: 'Предоставляем круглосуточную поддержку на протяжении всего путешествия.',
            uz: 'Butun sayohat davomida 24/7 qo\'llab-quvvatlashni ta\'minlaymiz.',
            en: 'We provide round-the-clock support throughout your journey.'
        },
        icon: <MdSupportAgent className='text-green100' size={40} />
    }
]
import { FaCalendarCheck, FaHotel } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import useLocale from '@/hooks/useLocale'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface HowWorkData {
    id: number;
    title: {
        ru: string;
        uz: string;
        en: string;
    };
    text: {
        ru: string;
        uz: string;
        en: string;
    };
    icon?: JSX.Element;
}

const DataHowWork: HowWorkData[] = [
    {
        id: 1,
        title: {
            ru: 'Собираем документы',
            uz: 'Hujjatlarni yig\'ish',
            en: 'Collecting documents'
        },
        text: {
            ru: 'Подготавливаем все необходимые документы для вашей поездки.',
            uz: 'Sayohatingiz uchun barcha zarur hujjatlarni tayyorlaymiz.',
            en: 'We prepare all necessary documents for your trip.'
        },
        icon: <Image src='https://ucarecdn.com/115af432-16d4-4ed1-97cd-ada3a1ec0c9b/-/preview/24x26/' width={30} height={40} quality={100} alt='logo' />
    },
    {
        id: 2,
        title: {
            ru: 'Проводим оплату',
            uz: 'To\'lovni amalga oshirish',
            en: 'Processing payment'
        },
        text: {
            ru: 'После бронирования организуем безопасную оплату и предоставим подтверждение.',
            uz: 'Bron qilgandan so\'ng xavfsiz to\'lovni tashkil etamiz va tasdiqlashni taqdim etamiz.',
            en: 'After booking, we organize secure payment and provide confirmation.'
        },
        icon: <TbCurrencyDollar className='text-green100' size={40} />
    },
    {
        id: 3,
        title: {
            ru: 'Отправляем вас в путь',
            uz: 'Sizni yo\'lga jo\'natamiz',
            en: 'Sending you on your way'
        },
        text: {
            ru: 'Бронируем билеты, трансферы и проверяем документы для комфортного путешествия.',
            uz: 'Qulay sayohat uchun chiptalarni, transferlarni bron qilamiz va hujjatlarni tekshiramiz.',
            en: 'We book tickets, transfers and check documents for a comfortable journey.'
        },
        icon: <PiAirplaneTiltLight className='text-green100' size={40} />
    },
    {
        id: 4,
        title: {
            ru: 'Бронируем отель',
            uz: 'Mehmonxonani bron qilish',
            en: 'Hotel booking'
        },
        text: {
            ru: 'Подбираем и бронируем лучшие отели по вашим предпочтениям и бюджету.',
            uz: 'Sizning afzalliklaringiz va byudjetingizga ko\'ra eng yaxshi mehmonxonalarni tanlaymiz va bron qilamiz.',
            en: 'We select and book the best hotels according to your preferences and budget.'
        },
        icon: <FaHotel className='text-green100' size={40} />
    },
    {
        id: 5,
        title: {
            ru: 'Поддержка 24/7',
            uz: '24/7 qo\'llab-quvvatlash',
            en: '24/7 Support'
        },
        text: {
            ru: 'Предоставляем круглосуточную поддержку на протяжении всего путешествия.',
            uz: 'Butun sayohat davomida 24/7 qo\'llab-quvvatlashni ta\'minlaymiz.',
            en: 'We provide round-the-clock support throughout your journey.'
        },
        icon: <MdSupportAgent className='text-green100' size={40} />
    }
]


const HowWork: FC = () => {
    const locale = useLocale()
    const swiperRef = useRef<SwiperType>();

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center' >
                    <p className='text-[25px] font-bold text-titleDark mdl:text-[35px]  2xl:text-[40px] '>
                        {locale === 'ru' 
                            ? "Как мы работаем" 
                            : locale === 'uz' 
                                ? "Biz qanday ishlaymiz"
                                : "How we work"
                        }
                    </p>
                    <div className='hidden 2xl:flex gap-[8px]'>
                        <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
                            <GrLinkPrevious size={25} />
                        </button>
                        <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
                            <GrLinkNext size={25} />
                        </button>
                    </div>
                </div>
                {/* Mobile and Tablet View */}
                <div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:gap-[2%] 2xl:hidden'>
                    {DataHowWork.map((item) => (
                        <div key={item.id} className='flex flex-col mt-[20px] mdl:w-[48%] 2xl:w-[50%] '>
                            <div className='rounded-[20px] border border-borderColor py-[35px] px-[25px] 2xl:h-[380px]'>
                                <div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-[4px] mt-[25px]'>
                                    <p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
                                        {item.title[locale]}
                                    </p>
                                    <p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
                                        {item.text[locale]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View with Swiper */}
                <div className='hidden 2xl:block mt-[30px]'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        spaceBetween={20}
                        slidesPerView={3}
                        speed={800}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 2100,
                            disableOnInteraction: false,
                        }}
                        effect="fade"
                    >
                        {DataHowWork.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='rounded-[20px] border border-borderColor cursor-pointer py-[35px] px-[25px] h-[380px]'>
                                    <div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
                                        {item.icon}
                                    </div>
                                    <div className='flex flex-col gap-[4px] mt-[25px]'>
                                        <p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
                                            {item.title[locale]}
                                        </p>
                                        <p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
                                            {item.text[locale]}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
    const locale = useLocale()
    const swiperRef = useRef<SwiperType>();

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center' >
                    <p className='text-[25px] font-bold text-titleDark mdl:text-[35px]  2xl:text-[40px] '>
                        {locale === 'ru' 
                            ? "Как мы работаем" 
                            : locale === 'uz' 
                                ? "Biz qanday ishlaymiz"
                                : "How we work"
                        }
                    </p>
                    <div className='hidden 2xl:flex gap-[8px]'>
                        <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
                            <GrLinkPrevious size={25} />
                        </button>
                        <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
                            <GrLinkNext size={25} />
                        </button>
                    </div>
                </div>
                {/* Mobile and Tablet View */}
                <div className='flex flex-col mdl:flex-row mdl:flex-wrap mdl:gap-[2%] 2xl:hidden'>
                    {DataHowWork.map((item) => (
                        <div key={item.id} className='flex flex-col mt-[20px] mdl:w-[48%] 2xl:w-[50%] '>
                            <div className='rounded-[20px] border border-borderColor py-[35px] px-[25px] 2xl:h-[380px]'>
                                <div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-[4px] mt-[25px]'>
                                    <p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
                                        {item.title[locale]}
                                    </p>
                                    <p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
                                        {item.text[locale]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View with Swiper */}
                <div className='hidden 2xl:block mt-[30px]'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        spaceBetween={20}
                        slidesPerView={3}
                        speed={800}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 2100,
                            disableOnInteraction: false,
                        }}
                        effect="fade"
                    >
                        {DataHowWork.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='rounded-[20px] border border-borderColor cursor-pointer py-[35px] px-[25px] h-[380px]'>
                                    <div className='rounded-full flex items-center bg-green20 w-[70px] h-[70px] justify-center'>
                                        {item.icon}
                                    </div>
                                    <div className='flex flex-col gap-[4px] mt-[25px]'>
                                        <p className='text-green100 text-[20px] font-semibold font-raleway mdl:text-[25px]'>
                                            {item.title[locale]}
                                        </p>
                                        <p className='text-titleDark font-medium text-[15px] font-raleway mdl:text-[17px]'>
                                            {item.text[locale]}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HowWork