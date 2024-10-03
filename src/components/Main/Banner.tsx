"use client";
import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const MainBanner: FC = () => {
  const [banners] = useState([
    {
      id: 1,
      title: "Ваш путь к здоровью\n — с нашими турами!",
      imageUrl: "https://ucarecdn.com/3d54a850-9fba-41e2-aebe-170de33b84ca/-/preview/1000x666/",
    },
    {
      id: 2,
      title: "Ваш путь к здоровью — с нашими турами!",
      imageUrl: "https://ucarecdn.com/6ffeffeb-d8a4-421b-8766-3507598779da/-/preview/1000x666/",
    },
  ]);

  const settings = {
    dots: false, // Removed dots
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-between">
            <div className="flex w-full">
              {/* Main Banner */}
              <div className="w-full relative slg:w-4/5">
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t"
                  style={{
                    background:
                      "linear-gradient(180deg, #000000 0%, #00000073 45%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-[40px] w-full text-white px-[16px]">
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
    </div>
  );
};

export default MainBanner;
