"use client";
import { FC, useState } from "react";
import TursTitle from "../ui/tursTitle";
import TursBg from "@/public/tours/banner.png";
import { DatePicker, Select } from "antd";
import { LuDollarSign } from "react-icons/lu";
const { Option } = Select;
import sanathorybg from '@/public/sanathorybg.jpg'




const handleOpenChange = (open: boolean, type: "from" | "to") => {
  if (open) {
    console.log(`Opening ${type} date picker`);
  } else {
    console.log(`Closing ${type} date picker`);
  }
};

const Banner: FC = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const totalPeople = adults + children;

  const handleIncrementAdults = () => {
    setAdults(adults + 1);
  };

  const handleDecrementAdults = () => {
    if (adults > 0) setAdults(adults - 1);
  };

  const handleIncrementChildren = () => {
    setChildren(children + 1);
  };

  const handleDecrementChildren = () => {
    if (children > 0) setChildren(children - 1);
  };

  return (
    <div
    style={{
      backgroundImage: `url(${sanathorybg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative", // Ensure relative positioning for the overlay
    }}
    className="h-[180px] mdl:h-[240px] 2xl:h-[300px]"
  >
    {/* Overlay to darken the background */}
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity for darkness level
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10, // Make sure the overlay stays behind the content
      }}
    ></div>
      <div className="py-[40px] px-[16px] relative z-[99] mdl:mx-[20px] 2xl:mx-[200px]">
        <TursTitle title="Гостиницы и отели Узбекистана" />
        <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
        
        Ваш идеальный отель ждет вас
        </p>
      </div>
      <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99]  2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-[16px] 2xl:gap-[20px] 2xl:flex-row  2xl:flex-wrap 2xl:items-center">
          
          <div className="flex flex-row gap-[1%] 2xl:w-[32%] 2xl:mt-[2px]">
            <DatePicker
              className="w-[49%] 2xl:w-full"
              placeholder="Заезд"
              onOpenChange={(open) => handleOpenChange(open, "from")}
            />
            <DatePicker
              className="w-[49%] 2xl:w-full"
              placeholder="Выезд"
              onOpenChange={(open) => handleOpenChange(open, "to")}
            />
          </div>
       
          {/* Other Select elements remain unchanged */}
          <div className="flex flex-row gap-[1%]  2xl:w-[32%]">
            <Select placeholder="Цена от" className="w-[49%]  2xl:w-full custom-select" suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}>
              <Option value="100">100$</Option>
              <Option value="200">200$</Option>
            </Select>
            <Select
              placeholder="Цена до"
              className="w-[49%] 2xl:w-full  custom-select"
              suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}
              dropdownStyle={{ backgroundColor: "##1AB2A6", color: "#fff" }}
            >
              <Option value="500">500$</Option>
              <Option value="1000">1000$</Option>
            </Select>
          </div>
          <Select
            value={`${totalPeople} человек`} // Dynamic value based on adults + children
            className="w-full custom-select 2xl:w-[32%]"
            dropdownRender={(menu) => (
              <div>
                <div className="flex justify-between items-center px-4 py-2">
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-titleDark">Взрослые</span>
                    <p className="text-[#A7A7A7] text-[14px] font-semibold">от 12 лет</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={handleDecrementAdults}
                      className="w-[35px] h-[35px] rounded-full bg-[#E8F7F6] text-[#1AB2A6] flex items-center justify-center text-center"
                    >
                      -
                    </button>
                    <span className="mx-2">{adults}</span>
                    <button
                      onClick={handleIncrementAdults}
                      className="w-[35px] h-[35px] rounded-full bg-[#E8F7F6] text-[#1AB2A6] flex items-center justify-center text-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-t">
                  <div className="flex flex-col">
                    <span className="text-[17px] font-medium text-titleDark">Дети</span>
                    <p className="text-[#A7A7A7] text-[14px] font-semibold">до 12 лет</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={handleDecrementChildren}
                      className="w-[35px] h-[35px] rounded-full bg-[#E8F7F6] text-[#1AB2A6] flex items-center justify-center text-center"
                    >
                      -
                    </button>
                    <span className="mx-2">{children}</span>
                    <button
                      onClick={handleIncrementChildren}
                      className="w-[35px] h-[35px] rounded-full bg-[#E8F7F6] text-[#1AB2A6] flex items-center justify-center text-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          >
            <Option value="people" disabled>
              Кол-во людей
            </Option>
          </Select>
         
          <div className="flex flex-col mdl:flex-row mdl:w-[62%] gap-[1%]">
            <button className="greenButton font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px]">Поиск</button>
            <button className="mt-[8px] border border-borderColor mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] text-titleDark font-bold p-[16px] font-raleway rounded-[10px] mdl:mt-0">
              Очистить всё
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
