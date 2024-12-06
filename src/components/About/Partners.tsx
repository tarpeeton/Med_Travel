"use client";
import Image from "next/image";
import { FC, useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SwiperSlide } from 'swiper/react';


interface IPartners {
  name: string;
  _id: string;
  photo?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

const Partners: FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [partners, setPartners] = useState<IPartners[]>([]);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Show one "row" (a group of 6 images) at a time
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1800,
    arrows: false,
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await client.fetch(
          `*[_type == "partner"]
            {_id, name , photo}`
        );
        setPartners(res);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    fetchPartners();
  }, []);

  // Group partners into chunks of 6
  const chunkPartners = (arr: IPartners[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedPartners = chunkPartners(partners, 6);

  return (
    <div className="flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark">
          Наши партнеры
        </p>
        <div className="flex gap-[15px]">
          <button onClick={handlePrev}>
            <GrLinkPrevious size={25} />
          </button>
          <button onClick={handleNext}>
            <GrLinkNext size={25} />
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <Slider ref={sliderRef} {...settings} className="w-full">
        {groupedPartners.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex flex-row flex-wrap  2xl:flex-nowrap">
                {group.map((partner, index) => (
                  <div
                    key={index}
                    className={`flex items-center h-[60px] mt-[40px] justify-center w-[50%] p-[4px] mdl:w-[33%] 2xl:w-[20%] 
                        ${index % 2 === 0 ? 'border-r border-borderColor' : ''} 
                        ${index === partners.length - 1 ? '2xl:border-r-0' : '2xl:border-r border-borderColor'}`}
                                            >
                    {partner.photo?.asset?._ref && (
                      <Image
                        src={urlFor(partner.photo.asset._ref).url()}
                        alt={`Partner ${index}`}
                        width={100}
                        height={100}
                        quality={100}
                        className="object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
         
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
