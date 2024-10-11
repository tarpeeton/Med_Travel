"use client"
import Image from 'next/image'
import { FC, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Stock1 from '@/public/aksia.jpg'
import Stock2 from '@/public/aksi5.jpg'
import Stock3 from '@/public/aksi8.jpg'
import Stock4 from '@/public/aksiaThre.jpg'
import Stock5 from '@/public/aksiaTwo.jpg'
import Stories from 'react-insta-stories'

const StockData = [
  {
    title: 'Раннее бронирование скидка 20%',
    date: '19 августа 2024',
    url: Stock1,
  },
  {
    title: 'Раннее бронирование скидка 20%',
    date: '19 августа 2024',
    url: Stock2,
  },
  {
    title: 'Раннее бронирование скидка 20%',
    date: '19 августа 2024',
    url: Stock3,
  },
  {
    title: 'Раннее бронирование скидка 20%',
    date: '19 августа 2024',
    url: Stock4,
  },
  {
    title: 'Раннее бронирование скидка 20%',
    date: '19 августа 2024',
    url: Stock5,
  },
]

const Stock: FC = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [storiesVisible, setStoriesVisible] = useState(false)

  const handlePrev = () => {
    sliderRef.current?.slickPrev()
  }

  const handleNext = () => {
    sliderRef.current?.slickNext()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          arrows: false,
        },
      },
    ],
  }

  const handleStoryOpen = (index: number) => {
    setStoriesVisible(true)
  }

  const handleStoryClose = () => {
    setStoriesVisible(false)
  }

  // Prepare stories data by converting StaticImageData to string URLs
  const stories = StockData.map(stock => ({
    title: stock.title,
    url: stock.url.src,
    duration: 5000,
    header: {
      heading: stock.title, // Story uchun sarlavha
      subheading: stock.date, // Sana yoki boshqa qo'shimcha matn
      profileImage: 'https://ucarecdn.com/0127b73e-4ec4-47b9-ae5c-a3e603ee4622/-/preview/499x499/' // Agar kerak bo'lsa, profil rasmi qo'shishingiz mumkin
    }
  }))
  return (
    <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:ml-[200px] mt-[120px] relative cursor-pointer'>
      <p className='w-[50%] font-bold text-[25px] text-[#242424] mdl:text-[35px] 2xl:text-[40px] mdl:w-full'>Акции и спецпредложения</p>

      {/* Arrows, visible on larger screens */}
      <div className='hidden absolute top-[250px] z-[999] bg-white 2xl:flex 2xl:items-center rounded-full w-[65px] h-[65px] 2xl:justify-center cursor-pointer' onClick={handlePrev} aria-label="Previous slide">
        <GrLinkPrevious size={20} />
      </div>
      <div className='hidden absolute top-[250px] right-[50px] z-[999] bg-white 2xl:flex 2xl:items-center rounded-full w-[65px] h-[65px] 2xl:justify-center cursor-pointer' onClick={handleNext} aria-label="Next slide">
        <GrLinkNext size={20} />
      </div>

      <Slider {...settings} ref={sliderRef} className='mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
        {StockData.map((stock, index) => (
          <div className='w-[40%]' key={index} onClick={() => handleStoryOpen(index)}>
            <div className='flex flex-col w-[98%]'>
              <div className='h-[230px] mdl:h-[230px] 2xl:h-[300px]'>
                <Image src={stock.url} width={1000} height={700} alt={`Акция: ${stock.title}`} className='rounded-[20px] mdl:w-[100%] w-full h-full object-cover' />
              </div>
              <div className='flex flex-col mt-[12px] relative justify-between'>
                <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words'>{stock.title}</p>
                <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px]'>{stock.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {storiesVisible && (
        <div className='fixed top-0 z-[99999999] left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75'>
          <div className=''>
            <Stories
              stories={stories}
              width={432} // Set width of story viewer
              height={768} // Set height of story viewer
              defaultInterval={5000}
              onStoryEnd={() => console.log("Story ended")}
              onAllStoriesEnd={() => console.log("All stories ended")}
              storyContainerStyles={{ backgroundColor: "black" }} // Optional styles for the story container
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Stock
