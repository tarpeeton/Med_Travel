"use client"
import Image from 'next/image'
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import ImageJPG from './partners/Image.jpg'


const handlePrev = () => {
    if (sliderRef.current) {
        sliderRef.current.slickPrev()
    }
}

const handleNext = () => {
    if (sliderRef.current) {
        sliderRef.current.slickNext()
    }
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,  // Show one slide (a row of images) at a time
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 0,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}


const Archivments: FC = () => {
    const sliderRef = useRef<Slider | null>(null)

    return (
        <div className='mt-[120px] mx-[16px]'>
            <div className='flex flex-col'>
                <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>
                    Достижения компании</p>
                <div className='flex flex-col relative mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
                    <div className='relative py-[25px] px-[20px] mdl:py-[40px] mdl:px-[30px] pb-[60px] border border-borderColor rounded-[20px]'>
                        <div className=''>
                            <p className='text-[20px] mdl:text-[25px] text-green100 font-raleway font-bold'>
                                Партнерство с Intermed — топовая мировая лаборатория
                            </p>
                            <p className='text-[15px] text-[#505050] font-raleway mdl:text-[17px]   mt-[16px] mdl:mt-[20px] 2xl:mt-[30px] font-medium'>
                                Компания гордится своим стратегическим партнёрством с Intermed, одной из ведущих мировых лабораторий. Партнёрство с Intermed укрепляет нашу позицию на рынке, обеспечивая высокие стандарты качества и надёжности в каждом тесте. Мы стремимся к тому, чтобы наши клиенты получали только лучшие медицинские услуги
                            </p>


                            <div className='absolute bottom-[10px] w-[90%] flex gap-[8px] justify-end mt-[20px] mdl:mt-[25px]'>
                                <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[50px] h-[50px]'>
                                    <GrLinkPrevious size={25} />
                                </button>
                                <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[50px] h-[50px]'>
                                    <GrLinkNext size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div className='w-full rounded-[20px] mt-[20px]'>
                        <Image src={ImageJPG} alt='Image' width={1000} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Archivments