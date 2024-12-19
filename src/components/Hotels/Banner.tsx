"use client";
import { FC, SetStateAction, useState  , Dispatch} from "react";
import TursTitle from "../ui/tursTitle";
import { DatePicker, Select } from "antd";
import { LuDollarSign } from "react-icons/lu";
import moment, { Moment } from "moment";
const { Option } = Select;
import sanathorybg from '@/public/sanathorybg.jpg'

// const handleOpenChange = (open: boolean, type: "from" | "to") => {
//   if (open) {
//     console.log(`Opening ${type} date picker`);
//   } else {
//     console.log(`Closing ${type} date picker`);
//   }
// };





const Banner: FC = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${sanathorybg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // Ensure relative positioning for the overlay
      }}
      className="h-[180px] mdl:h-[240px] 2xl:h-[340px] shadow-inner"
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
        <TursTitle title="Страны и Отели" />
        <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-medium font-raleway mt-[8px] mdl:mt-[10px]">
          Ваш идеальный отель ждет вас
        </p>
      </div>
     
    </div>
  );
};

export default Banner;
