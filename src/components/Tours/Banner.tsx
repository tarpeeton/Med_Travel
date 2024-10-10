"use client";
import { FC, useState } from "react";
import Image from "next/image";
import TursTitle from "../ui/tursTitle";
import TursBg from "@/public/tours/banner.png";
import { DatePicker, Select } from "antd";
import { LuDollarSign } from "react-icons/lu";
const { Option } = Select;

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
      backgroundImage: `url(${TursBg.src})`,
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
      <div className="py-[40px] px-[16px] relative z-[99]">
        <TursTitle title="Туры по Узбекистану" />
        <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
          Незабываемые туры по Узбекистану
        </p>
      </div>
      <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99]">
        <div className="flex flex-col gap-[16px] 2xl:gap-[20px]">
          <div className="flex flex-row gap-[1%]">
            <Select placeholder="Откуда" className="w-[49%] custom-select" suffixIcon={null}>
              <Option value="tashkent">Ташкент</Option>
              <Option value="samarkand">Самарканд</Option>
            </Select>
            <Select placeholder="Куда" className="w-[49%] custom-select" suffixIcon={null}>
              <Option value="bukhara">Бухара</Option>
              <Option value="khiva">Хива</Option>
            </Select>
          </div>
          <div className="flex flex-row gap-[1%]">
            <DatePicker
              className="w-[49%]"
              placeholder="От"
              onOpenChange={(open) => handleOpenChange(open, "from")}
            />
            <DatePicker
              className="w-[49%]"
              placeholder="До"
              onOpenChange={(open) => handleOpenChange(open, "to")}
            />
          </div>
          <Select
            value={`${totalPeople} человек`} // Dynamic value based on adults + children
            className="w-full custom-select"
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
          {/* Other Select elements remain unchanged */}
          <div className="flex flex-row gap-[1%]">
            <Select placeholder="Цена от" className="w-[49%] custom-select" suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}>
              <Option value="100">100$</Option>
              <Option value="200">200$</Option>
            </Select>
            <Select
              placeholder="Цена до"
              className="w-[49%] custom-select"
              suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}
              dropdownStyle={{ backgroundColor: "##1AB2A6", color: "#fff" }}
            >
              <Option value="500">500$</Option>
              <Option value="1000">1000$</Option>
            </Select>
          </div>
          <Select placeholder="Тип тура" className="w-full custom-select">
            <Option value="medical">Медицинский</Option>
            <Option value="default">Обычный</Option>
          </Select>
          <div className="flex flex-col">
            <button className="greenButton font-bold p-[16px]">Поиск</button>
            <button className="mt-[8px] border border-borderColor text-titleDark font-bold p-[16px] font-raleway rounded-[10px]">
              Очистить всё
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
