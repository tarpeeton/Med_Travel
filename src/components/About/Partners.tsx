"use client"
import Image from 'next/image'
import { FC, useRef, useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'



interface IPartners {
    name: string,
    _id: string,
    photo?: {
        _type: 'image'
        asset: {
            _ref: string
            _type: 'reference'
        }
    }
}



const Partners: FC = () => {
    const sliderRef = useRef<Slider | null>(null)
    const [partners, setPartners] = useState<IPartners[] | []>([])

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


    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await client.fetch(
                    `*[_type == "partner"]
                        {_id, name , photo}`
                )
                setPartners(res)
            } catch (error) {
                console.error("Error fetching reviews:", error)
            }
        }
        fetchPartners()
    }, [])


    console.log(partners, "parners")







    return (
        <div className='flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>Наши партнеры</p>
                <div className='flex gap-[15px]'>
                    <button onClick={handlePrev}>
                        <GrLinkPrevious size={25} />
                    </button>
                    <button onClick={handleNext}>
                        <GrLinkNext size={25} />
                    </button>
                </div>
            </div>
            <div className='mt-[40px]'>
                <Slider ref={sliderRef} {...settings} className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className="flex flex-row gggg flex-wrap justify-between mdl:flex-row mdl:flex-nowrap" style={{ width: '100%' }}>
                            {partners?.map((par, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center mt-[40px] justify-center w-[50%] p-[4px] mdl:w-[33%] 2xl:w-[30%] 
            ${index % 2 === 0 ? 'border-r border-borderColor' : ''} 
            ${index === partners.length - 1 ? '2xl:border-r-0' : '2xl:border-r border-borderColor'}`}
                                >
                                    {par.photo?.asset?._ref && (
                                        <Image
                                            src={par.photo ? urlFor(par.photo.asset._ref).url() : 'https://ucarecdn.com/30077089-1dac-4769-b282-fba533147b26/-/preview/300x370/'}
                                            width={300}
                                            height={370}
                                            alt={par.name || 'Partner'}
                                            quality={100}
                                            className="object-contain w-full 2xl:h-[50px]"
                                        />
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Partners
