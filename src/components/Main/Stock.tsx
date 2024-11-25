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
import { client } from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image'

import Script from "next/script"; // Script komponentini import qilish

interface IHistoryData {
  title: {
    ru: string;
    uz: string;
    en: string;
  };
  createdAt: string;
  media: Array<{
    _type: 'image';
    _key: string;
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
}


const Stock: FC = () => {
  const locale = useLocale()
  const sliderRef = useRef<Slider | null>(null)
  const [storiesVisible, setStoriesVisible] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const storyModalRef = useRef<HTMLDivElement | null>(null) // Ref for the story modal
  const [stocks , setStock] = useState<IHistoryData[] | []>([])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }




    useEffect(() => {
      const FetchPromotions = async () => {
        try {
          const res = await client.fetch(
            `*[_type == "history"]{ 
              title, 
              createdAt, 
              media 
            }`
          )
          setStock(res) 
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
    title: stock.title[locale],
    url: stock.media[0] ? urlFor(stock.media[0].asset).url() : '',
    duration: 5000,
    header: {
      heading: stock.title[locale],
      subheading: formatDate(stock.createdAt),
      profileImage: 'https://ucarecdn.com/0127b73e-4ec4-47b9-ae5c-a3e603ee4622/-/preview/499x499/',
    },
  })), [stocks, locale]);
  
  const clientId = "145340d2c41ddb0af95a6a10d7be041cbc229a";

  return (
    <div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:ml-[200px] mt-[120px] relative cursor-pointer'>
      <p className='w-[50%] mb-[20px] 2xl:mb-[30px] font-bold text-[25px] text-[#242424] mdl:text-[35px] 2xl:text-[40px] mdl:w-full'>Горячие туры</p>
      <div className="tv-hot-tours tv-moduleid-9975845"></div>
      <Script
        src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
        strategy="afterInteractive"
      />
    </div>
  )
}

export default Stock
