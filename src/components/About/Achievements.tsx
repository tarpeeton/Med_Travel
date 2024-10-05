"use client"
import Image from 'next/image'
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import ImageJPG from './partners/Image.jpg'



const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,  // Show one slide (a row of images) at a time
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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

    return (
        <div className='mt-[120px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
            <div className='flex flex-col relative'>
                <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>
                    Достижения компании</p>

                <Slider {...settings} ref={sliderRef}>
                    <div className='flex flex-col relative mt-[20px] mdl:mt-[30px] 2xl:mt-[40px] Archivments'>
                        <div className='relative py-[25px] px-[20px] 2xl:w-[45%] mdl:py-[40px] mdl:px-[30px]  border border-borderColor rounded-[20px] 2xl:h-[500px]'>
                            <div className=''>
                                <p className='text-[20px] mdl:text-[25px] text-green100 font-raleway font-bold'>
                                    Партнерство с Intermed — топовая мировая лаборатория
                                </p>
                                <p className='text-[15px] text-[#505050] font-raleway mdl:text-[17px]   mt-[16px] mdl:mt-[20px] 2xl:mt-[30px] font-medium'>
                                    Компания гордится своим стратегическим партнёрством с Intermed, одной из ведущих мировых лабораторий. Партнёрство с Intermed укрепляет нашу позицию на рынке, обеспечивая высокие стандарты качества и надёжности в каждом тесте. Мы стремимся к тому, чтобы наши клиенты получали только лучшие медицинские услуги
                                </p>

                                <div className=' w-[90%] flex gap-[8px] justify-end mt-[20px] mdl:mt-[40px]'>
                                    <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[50px] h-[50px] mdl:w-[60px] mdl:h-[60px]'>
                                        <GrLinkPrevious size={25} />
                                    </button>
                                    <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[50px] h-[50px] mdl:w-[60px] mdl:h-[60px]'>
                                        <GrLinkNext size={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* IMAGE */}
                        <div className='w-full h-full rounded-[20px] mt-[20px] 2xl:w-[54%] 2xl:mt-0 2xl:h-[500px] overflow-hidden'>
                            <Image src={ImageJPG} alt='Image' quality={100} width={1000} height={1000} className='object-contain w-full h-full 2xl:object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col relative mt-[20px] mdl:mt-[30px] 2xl:mt-[40px] Archivments'>
                        <div className='relative py-[25px] px-[20px] 2xl:w-[45%] mdl:py-[40px] mdl:px-[30px]  border border-borderColor rounded-[20px] 2xl:h-[500px]'>
                            <div className=''>
                                <p className='text-[20px] mdl:text-[25px] text-green100 font-raleway font-bold'>
                                    Партнерство с Intermed — топовая мировая лаборатория
                                </p>
                                <p className='text-[15px] text-[#505050] font-raleway mdl:text-[17px]   mt-[16px] mdl:mt-[20px] 2xl:mt-[30px] font-medium'>
                                    Компания гордится своим стратегическим партнёрством с Intermed, одной из ведущих мировых лабораторий. Партнёрство с Intermed укрепляет нашу позицию на рынке, обеспечивая высокие стандарты качества и надёжности в каждом тесте. Мы стремимся к тому, чтобы наши клиенты получали только лучшие медицинские услуги
                                </p>

                                <div className=' w-[90%] flex gap-[8px] justify-end mt-[20px] mdl:mt-[40px]'>
                                    <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[50px] h-[50px] mdl:w-[60px] mdl:h-[60px]'>
                                        <GrLinkPrevious size={25} />
                                    </button>
                                    <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[50px] h-[50px] mdl:w-[60px] mdl:h-[60px]'>
                                        <GrLinkNext size={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* IMAGE */}
                        <div className='w-full h-full rounded-[20px] mt-[20px] 2xl:w-[54%] 2xl:mt-0 2xl:h-[500px] overflow-hidden'>
                            <Image src={ImageJPG} alt='Image' quality={100} width={1000} height={1000} className='object-contain w-full h-full 2xl:object-cover' />
                        </div>
                    </div>
                  
                </Slider>
               
            </div>
        </div>
    )
}



export default Archivments