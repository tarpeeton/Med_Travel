"use client"
import { FC, useRef } from 'react'
import useLocale from '@/hooks/useLocale'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { FaFileAlt, FaHospital, FaCreditCard, FaPlane } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
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
    icon: JSX.Element;
}

const DataHowWork: HowWorkData[] = [
    {
        id: 1,
        title: {
            ru: 'Собираем документы',
            uz: 'Hujjatlarni yig\'amiz',
            en: 'Collecting documents'
        },
        text: {
            ru: 'Мы подготавливаем все необходимые документы для вашей медицинской поездки: визы, медицинские справки и другие документы, чтобы ваше лечение прошло без задержек.',
            uz: 'Biz sizning tibbiy sayohatingiz uchun barcha zarur hujjatlarni tayyorlaymiz: vizalar, tibbiy ma\'lumotnomalar va boshqa hujjatlar, davolanishingiz kechikmasdan o\'tishi uchun.',
            en: 'We prepare all necessary documents for your medical trip: visas, medical certificates and other documents to ensure your treatment proceeds without delays.'
        },
        icon: <FaFileAlt className='text-green100' size={40} />
    },
    {
        id: 2,
        title: {
            ru: 'Бронируем и организуем поездку',
            uz: 'Sayohatni bron qilish va tashkil qilish',
            en: 'Booking and organizing the trip'
        },
        text: {
            ru: 'Бронируем медицинские туры, клиники и гостиницы. Для организации комплексных медицинских услуг и индивидуальных поездок свяжитесь с нами — мы учтем все ваши пожелания.',
            uz: 'Tibbiy turlar, klinikalar va mehmonxonalarni bron qilamiz. Kompleks tibbiy xizmatlar va individual sayohatlarni tashkil qilish uchun biz bilan bog\'laning - biz barcha istaklaringizni hisobga olamiz.',
            en: 'We book medical tours, clinics and hotels. Contact us for organizing comprehensive medical services and individual trips - we will take all your wishes into account.'
        },
        icon: <FaHospital className='text-green100' size={40} />
    },
    {
        id: 3,
        title: {
            ru: 'Проводим оплату',
            uz: 'To\'lovni amalga oshiramiz',
            en: 'Processing payment'
        },
        text: {
            ru: 'После подтверждения всех деталей и бронирования мы организуем безопасную оплату и предоставим вам все необходимые подтверждения.',
            uz: 'Barcha tafsilotlar va bronni tasdiqlangandan so\'ng, biz xavfsiz to\'lovni tashkil etamiz va sizga barcha kerakli tasdiqlashlarni taqdim etamiz.',
            en: 'After confirming all details and booking, we organize secure payment and provide you with all necessary confirmations.'
        },
        icon: <FaCreditCard className='text-green100' size={40} />
    },
    {
        id: 4,
        title: {
            ru: 'Отправляем вас в путь',
            uz: 'Sizni yo\'lga jo\'natamiz',
            en: 'Sending you on your way'
        },
        text: {
            ru: 'Мы забронируем билеты, обеспечим трансферы и проверим готовность всех документов, чтобы ваше путешествие и лечение прошли максимально комфортно.',
            uz: 'Biz chiptalarni bron qilamiz, transferlarni ta\'minlaymiz va sayohatingiz va davolanishingiz maksimal darajada qulay bo\'lishi uchun barcha hujjatlarning tayyorligini tekshiramiz.',
            en: 'We will book tickets, provide transfers and check the readiness of all documents to ensure your journey and treatment are as comfortable as possible.'
        },
        icon: <FaPlane className='text-green100' size={40} />
    },
    {
        id: 5,
        title: {
            ru: 'Свяжитесь с нами',
            uz: 'Biz bilan bog\'laning',
            en: 'Contact us'
        },
        text: {
            ru: 'Для бронирования медицинских услуг или получения консультаций по вашей поездке, свяжитесь с нами — мы с радостью окажем вам помощь и предоставим всю необходимую информацию.',
            uz: 'Tibbiy xizmatlarni bron qilish yoki sayohatingiz bo\'yicha maslahat olish uchun biz bilan bog\'laning - biz sizga yordam berishdan xursand bo\'lamiz va barcha kerakli ma\'lumotlarni taqdim etamiz.',
            en: 'For booking medical services or getting consultations about your trip, contact us - we will be happy to help you and provide all necessary information.'
        },
        icon: <MdSupportAgent className='text-green100' size={40} />
    }
];

const ClinickHowWork: FC = () => {
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
                <div className='flex justify-between items-center'>
                    <p className='text-[25px] font-bold text-titleDark mdl:text-[35px] 2xl:text-[40px]'>
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
                        <div key={item.id} className='flex flex-col mt-[20px] mdl:w-[48%] 2xl:w-[50%]'>
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

export default ClinickHowWork