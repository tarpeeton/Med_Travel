"use client";
import Image from 'next/image';
import { FC, useRef , useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { client } from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image'
import useLocale from '@/hooks/useLocale'


interface TeamMember {
  name: { ru: string; uz: string; en: string };
  occupation: { ru: string; uz: string; en: string };
  photo?: {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
};
}



const Team: FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [team , setTeam] = useState<TeamMember[] | []>([])
  const locale = useLocale()


  useEffect(() => {
    const fetchAllTeam = async () => {
      try {
        const teamData = await client.fetch(`
          *[_type == "teamMember"]{
            name,
            occupation,
            photo
          }
        `);
        setTeam(teamData);
      } catch (error) {
        console.error("Failed to fetch team data:", error);
      }
    };
    fetchAllTeam();
  }, []);


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
    infinite: true,
    speed: 610,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false, // Disable arrows by default for smaller screens
    responsive: [
      {
        breakpoint: 768, // Small screens like mobile
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          arrows: false, // No arrows on small screens
        },
      },
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3, // Show 3 slides on tablet
          arrows: false, // No arrows on tablet
        },
      },
      {
        breakpoint: 1440, // Desktop screens
        settings: {
          slidesToShow: 5, // Show 5 slides on desktop
          arrows: true, // Enable arrows on desktop
        },
      },
    ],
  };

  return (
    <div className='flex flex-col mt-[120px] px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-[25px] mdl:text-[35px] 2xl:text-[40px] font-raleway font-bold text-titleDark'>Наша команда</p>
        <div className='hidden 2xl:flex gap-[8px]'>
          <button onClick={handlePrev} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
            <GrLinkPrevious size={25} />
          </button>
          <button onClick={handleNext} className='rounded-full flex items-center justify-center border border-[#242424] w-[60px] h-[60px]'>
            <GrLinkNext size={25} />
          </button>
        </div>
      </div>
      <div className='mt-[20px]'>
        <Slider ref={sliderRef} {...settings}>
          {team.map((member, index) => (
            <div key={index} className='flex flex-col 2xl:w-[30%] w-full items-center mdl:w-[25%] px-[2px]'>
              {member?.photo && (
                 <Image
                 src={urlFor(member.photo.asset._ref).url()}
                 width={300}
                 height={370}
                 alt={`Photo of ${member.name[locale]}`}
                 quality={100}
                 className='object-cover rounded-[20px]  w-full h-[270px] 2xl:h-[276px] 2xl:w-[276px]'
               />
              )}
              <div className='flex flex-col mt-[20px]  w-full'>
                <p className='text-[20px] mdl:text-[25px] font-semibold text-titleDark'>{member.name[locale]}</p>
                <p className='text-[14px] mdl:text-[17px] font-raleway font-medium text-[#7C7C7C]'>{member.occupation[locale]}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
