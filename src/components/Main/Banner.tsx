"use client"
import { FC, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { MdOutlineNavigateNext } from "react-icons/md"
import { GrFormPrevious } from "react-icons/gr"

const MainBanner: FC = () => {
  const sliderRef = useRef<Slider | null>(null) // Reference for the slider

  const [banners] = useState([
    {
      id: 1,
      title: "Ваш путь к здоровью\n — с нашими турами!",
      imageUrl:
        "https://ucarecdn.com/3d54a850-9fba-41e2-aebe-170de33b84ca/-/preview/1000x666/",
    },
    {
      id: 2,
      title: "Ваш путь к здоровью — с нашими турами!",
      imageUrl:
        "https://ucarecdn.com/6ffeffeb-d8a4-421b-8766-3507598779da/-/preview/1000x666/",
    },
  ])

  const settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
  }

  // Custom function for the previous slide
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  // Custom function for the next slide
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className="relative h-screen">
      {/* Slider instance */}
      <Slider {...settings} ref={sliderRef}>
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-between">
            <div className="flex w-full">
              {/* Main Banner */}
              <div className="w-full relative h-screen slg:w-4/5">
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-screen object-cover"
                />
                <div className="absolute bottom-[40px] w-full text-white px-[16px]">
                  <div className='flex flex-row gap-[8px] mb-[40px]'>
                    <button
                      onClick={handlePrev}
                      className="border w-[60px] h-[60px] border-white rounded-full flex items-center justify-center"
                    >
                      <GrFormPrevious size={30} className=" text-white" />
                    </button>

                    <button
                      onClick={handleNext}
                     className="border w-[60px] h-[60px] border-white rounded-full flex items-center justify-center"
                    >
                      <MdOutlineNavigateNext size={30} className=" text-white" />
                    </button>
                  </div>
                  <h2 className="text-[30px] font-bold ">
                    {banner.title.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h2>
                  <button className="mt-6 w-[60%] bg-[#1AB2A6] text-white py-[16px] px-[20px] rounded-[10px] font-bold">
                    Найти тур
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Previous and Next Buttons */}


    </div>
  )
}

export default MainBanner
