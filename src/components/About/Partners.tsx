"use client"
import Image from 'next/image'
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import imagePartner1 from './partners/a.png'
import imagePartner2 from './partners/b.png'
import imagePartner3 from './partners/c.png'
import imagePartner4 from './partners/f.png'
import imagePartner5 from './partners/t.png'
import imagePartner6 from './partners/u.png'

const partnersImages = [
    imagePartner1,
    imagePartner2,
    imagePartner3,
    imagePartner4,
    imagePartner5,
    imagePartner6,
]

const Partners: FC = () => {
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

    const settings = {
        dots: false,
        infinite: true,
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

    return (
        <div className='flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>Наши партнеры</p>
                <div className='flex gap-[8px]'>
                    <button onClick={handlePrev}>
                        <GrLinkPrevious size={25} />
                    </button>
                    <button onClick={handleNext}>
                        <GrLinkNext size={25} />
                    </button>
                </div>
            </div>
            <div className='mt-[20px]'>
                <Slider ref={sliderRef} {...settings} className='flex flex-col'>
                    {partnersImages.map((image, index) => (
                       <div className="flex flex-row gggg flex-wrap justify-between" style={{ width: '100%' }}>
                       {partnersImages.map((img, index) => (
                           <div className="flex  items-center justify-center w-[50%] p-[4px]  " key={index}>
                               <Image
                                   src={img}
                                   width={300}
                                   height={370}
                                   alt={`Photo ${index + 1}`}
                                   quality={100}
                                   className="object-contain w-full "
                               />
                          {index % 2 === 0 && index < partnersImages.length - 1 && ( // 0, 2, 4 indekslarida div qo'shish
                                    <div className='bg-borderColor h-[40px] w-[3px]' />
                                )}

                           </div>
                       ))}
                   </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Partners
