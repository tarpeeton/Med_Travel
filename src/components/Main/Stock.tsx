"use client"
import Image from 'next/image'
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"

const Stock: FC = () => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows by default for smaller screens
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 3, // Show 3 slides on tablet
          arrows: false, // No arrows on tablet and smaller screens
        },
      },
      {
        breakpoint: 768, // Small screens like mobile
        settings: {
          slidesToShow: 2, // Show 2 slides on small screens
          arrows: false, // No arrows on small screens
        },
      },
      {
        breakpoint: 1440, // Desktop screens
        settings: {
          slidesToShow: 4, // Show 4 slides on desktop
          arrows: false, // Enable arrows on desktop
        },
      },
      {
        breakpoint: 1920, // Larger desktops (like 2k screens)
        settings: {
          slidesToShow: 6, // Show 6 slides on large desktops
          arrows: false, // Enable arrows on large desktops
        },
      },
    ],
  }

  return (
    <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:ml-[200px] mt-[120px] relative cursor-pointer'>
      <p className='w-[50%] font-bold text-[25px] text-[#242424] mdl:text-[35px] 2xl:text-[40px] mdl:w-full '>Акции и спецпредложения</p>
      
      {/* Arrows, visible on larger screens */}
      <div className='hidden absolute top-[250px] z-[999] bg-white 2xl:flex 2xl:items-center rounded-full w-[65px] h-[65px] 2xl:justify-center cursor-pointer' onClick={handlePrev}>
        <GrLinkPrevious size={20} />
      </div>
      <div className='hidden absolute top-[250px] right-[50px] z-[999] bg-white 2xl:flex 2xl:items-center rounded-full w-[65px] h-[65px] 2xl:justify-center cursor-pointer' onClick={handleNext}>
        <GrLinkNext size={20} />
      </div>
      
      <Slider {...settings} ref={sliderRef} className='mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[98%]'>
            <div>
              <Image src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px] mdl:w-[100%]' />
            </div>
            <div className='flex flex-col mt-[12px] relative justify-between'>
              <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>Раннее бронирование скидка 20%</p>
              <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>19 августа 2024</p>
            </div>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[98%]'>
            <div>
              <Image src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px] mdl:w-[100%]' />
            </div>
            <div className='flex flex-col mt-[12px] relative justify-between'>
              <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>Раннее бронирование скидка 20%</p>
              <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>19 августа 2024</p>
            </div>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[98%]'>
            <div>
              <Image src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px] mdl:w-[100%]' />
            </div>
            <div className='flex flex-col mt-[12px] relative justify-between'>
              <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>Раннее бронирование скидка 20%</p>
              <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>19 августа 2024</p>
            </div>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[98%]'>
            <div>
              <Image src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px] mdl:w-[100%]' />
            </div>
            <div className='flex flex-col mt-[12px] relative justify-between'>
              <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>Раннее бронирование скидка 20%</p>
              <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>19 августа 2024</p>
            </div>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[98%]'>
            <div>
              <Image src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px] mdl:w-[100%]' />
            </div>
            <div className='flex flex-col mt-[12px] relative justify-between'>
              <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>Раннее бронирование скидка 20%</p>
              <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>19 августа 2024</p>
            </div>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[98%]'>
            <div>
              <Image src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px] mdl:w-[100%]' />
            </div>
            <div className='flex flex-col mt-[12px] relative justify-between'>
              <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>Раннее бронирование скидка 20%</p>
              <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>19 августа 2024</p>
            </div>
          </div>
        </div>
        {/* Repeat similar cards here */}
      </Slider>
    </div>
  );
};

export default Stock;
