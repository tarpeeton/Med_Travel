"use client"
import Image from 'next/image'
import { FC, useRef, useState, useEffect , useMemo } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import useLocale from '@/hooks/useLocale'
import { Allpromotions } from '@/lib/api'
import { IPromotions } from '@/interface/Promotions'
import { IoClose } from "react-icons/io5";
import Stories from 'react-insta-stories'


const Stock: FC = () => {
  const locale = useLocale()
  const sliderRef = useRef<Slider | null>(null)
  const [storiesVisible, setStoriesVisible] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const storyModalRef = useRef<HTMLDivElement | null>(null) // Ref for the story modal
  const [stocks , setStock] = useState<IPromotions[]>([])

    useEffect(() => {
      const FetchPromotions = async () => {
        try {
          const res = await Allpromotions(locale)
          setStock(res.data) 
        } catch (error) {
          console.log(error)
        }
      }

      FetchPromotions()
    }  , [locale])





  const handlePrev = () => {
    sliderRef.current?.slickPrev()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 620,
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

  const handleNext = () => {
    sliderRef.current?.slickNext()
  }

  const handleStoryOpen = (index: number) => {
    setCurrentStoryIndex(index)
    setStoriesVisible(true)
  }

  const handleStoryClose = () => {
    setStoriesVisible(false)
  }

  const handleStoryNext = () => {
    if (currentStoryIndex < stocks.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1)
    } else {
      setStoriesVisible(false) // Optionally close when reaching the end
    }
  }

  const handleStoryPrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1)
    }
  }

  // Prepare stories data by converting StaticImageData to string URLs
  const stories = useMemo(() => stocks.map(stock => ({
    title: stock.title,
    url: stock.photo.url,
    duration: 5000,
    header: {
      heading: stock.title,
      subheading: stock.date,
      profileImage: 'https://ucarecdn.com/0127b73e-4ec4-47b9-ae5c-a3e603ee4622/-/preview/499x499/',
    },
  })), [stocks]);
  
  

  return (
    <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:ml-[200px] mt-[120px] relative cursor-pointer'>
      <p className='w-[50%] font-bold text-[25px] text-[#242424] mdl:text-[35px] 2xl:text-[40px] mdl:w-full'>Акции и спецпредложения</p>

      {/* Arrows, visible on larger screens */}
      <div className='hidden absolute top-[250px] z-[999] bg-white 2xl:flex 2xl:items-center rounded-full w-[55px] h-[55px] 2xl:justify-center cursor-pointer' onClick={handlePrev} aria-label="Previous slide">
        <GrLinkPrevious size={20} />
      </div>
      <div className='hidden absolute top-[250px] right-[50px] z-[999] bg-white 2xl:flex 2xl:items-center rounded-full w-[55px] h-[55px] 2xl:justify-center cursor-pointer' onClick={handleNext} aria-label="Next slide">
        <GrLinkNext size={20} />
      </div>

      <Slider {...settings} ref={sliderRef} className='mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
        {stocks.map((stock, index) => (
          <div className='w-[40%]' key={index} onClick={() => handleStoryOpen(index)}>
            <div className='flex flex-col w-[98%]'>
              <div className='h-[230px] mdl:h-[230px] 2xl:h-[300px]'>
                <Image src={stock?.photo?.url} width={1000} height={700} alt={`Акция: ${stock.title}`} className='rounded-[20px] mdl:w-[100%] w-full h-full object-cover' />
              </div>
              <div className='flex flex-col mt-[12px] relative justify-between   2xl:pb-[40px] 2xl:h-[175px]'>
                <p className='text-[15px] font-semibold text-[#242424] font-raleway w-[80%] mb-[25px] mdl:text-[20px] h-auto break-words 2xl:text-[18px] 2xl:w-full  '>
                {stock.title.length > 27 ? `${stock.title.slice(0, 27)}...` : stock.title}

                </p>
                <p className='text-[#7C7C7C] text-[14px] 2xl:text-[17px] 2xl:absolute 2xl:bottom-[80px]'>{stock.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {storiesVisible && (
        <div ref={storyModalRef} className='fixed top-0 z-[99999999] left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75'>
          <div className='relative rounded-[20px]'>
            <Stories
              stories={[stories[currentStoryIndex]]}
              defaultInterval={5000}
              onStoryEnd={handleStoryNext}
              loop={true}
              storyContainerStyles={{ backgroundColor: "black"  }} // Optional styles for the story container
            />
            <button onClick={handleStoryClose} className='absolute top-[-40px] mdl:top-[-25px]  mdl:right-[-50px]'>
              <IoClose  className='text-white' size={30}/>
              </button>
            <div className='absolute top-[50%] hidden mdl:left-[-60px] bg-white  w-[40px] h-[40px] mdl:flex items-center justify-center rounded-full transform -translate-y-1/2 cursor-pointer' onClick={handleStoryPrev}>
              <GrLinkPrevious size={19} className="text-titleDark" />
            </div>
            <div className='absolute top-[50%] hidden mdl:right-[-60px] transform bg-white w-[40px] h-[40px] mdl:flex items-center justify-center  rounded-full -translate-y-1/2 cursor-pointer' onClick={handleStoryNext}>
              <GrLinkNext size={19} className="text-titleDark" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Stock
