"use client"
import { FC, useRef, useState , useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'
import { GiCommercialAirplane } from "react-icons/gi";
import { Link } from '@/i18n/routing'
import useLocale from '@/hooks/useLocale'
import { AllBanner } from '@/lib/api'


interface IBanner {
  id: number;
  title: string;
  leftPhoto: { id: number, url: string};
  rightPhoto: { id: number, url: string}
  orderNum: number
}

const MainBanner: FC = () => {
  const sliderRef = useRef<Slider | null>(null) // Reference for the slider
  const [banners , setBanner] = useState<IBanner[] | []>([])
  const locale = useLocale()


  useEffect(() => {
    const fetchBanners = async () => {
      try {
         const res = await AllBanner(locale)
        setBanner(res.data)
      } catch (error) {
        
      }
    }
    fetchBanners()
  } , [locale])


  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
    arrows: false,
  }

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
    <div className="relative ">
      <Slider {...settings} ref={sliderRef}>
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-between">
            <div className="flex w-full cursor-pointer">
              <div className="w-full relative h-[500px] mdl:h-[600px] ">
                <Image
                  src={banner.leftPhoto.url}
                  alt={banner.title}
                  quality={100}
                  width={1500}
                  height={666}
                  className="w-full h-[500px] mdl:h-[600px] object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35" />
                <div className="absolute bottom-[40px] w-full text-white px-[16px] mdl:px-[20px] 2xl:px-[200px] 2xl:bottom-[80px]">

                  <h2 className="text-[30px] font-bold mdl:text-[45px] 2xl:text-[50px] 2xl:w-[70%] 3xl:w-[50%]">
                    {banner.title.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h2>
                  <div className="flex flex-row items-center justify-between">
                    <Link href='/tours' className="mt-6 w-[60%] mdl:w-[40%] bg-[#1AB2A6] text-white py-[16px] px-[20px] 2xl:w-[20%] rounded-[10px] font-bold flex flex-row justify-center gap-[8px]">
                      Найти тур <GiCommercialAirplane />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex absolute top-[40%] left-[20px] flex-row gap-[8px] mb-[40px] mdl:left-auto mdl:right-[20px] mdl:bottom-[0px] mdl:top-auto 2xl:bottom-[40px] 2xl:right-[200px] 2xl:gap-[10px]">
        <button
          onClick={handlePrev}
          className="border w-[60px] h-[60px] 2xl:w-[70px] 2xl:h-[70px] border-white rounded-full flex items-center justify-center"
        >
          <GrLinkPrevious size={30} className="text-white" />
        </button>

        <button
          onClick={handleNext}
          className="border w-[60px] h-[60px] 2xl:w-[70px] 2xl:h-[70px] border-white rounded-full flex items-center justify-center"
        >
          <GrLinkNext size={30} className="text-white" />
        </button>
      </div>
    </div>
  )
}

export default MainBanner
