"use client";
import { FC, SetStateAction, useState  , Dispatch} from "react";
import TursTitle from "../ui/tursTitle";
import { DatePicker, Select } from "antd";
import { LuDollarSign } from "react-icons/lu";
import moment, { Moment } from "moment";
const { Option } = Select;
import sanathorybg from '@/public/sanathorybg.jpg'

const handleOpenChange = (open: boolean, type: "from" | "to") => {
  if (open) {
    console.log(`Opening ${type} date picker`);
  } else {
    console.log(`Closing ${type} date picker`);
  }
};


interface BannerProps {
  setAvailableFrom: Dispatch<SetStateAction<string | ''>>;
  setAvailableTo: Dispatch<SetStateAction<string | ''>>;
  setAdultsSize: Dispatch<SetStateAction<number>>;
  setChildrenSize: Dispatch<SetStateAction<number>>;
  setPriceFrom: Dispatch<SetStateAction<number | 0>>;
  setPriceTo: Dispatch<SetStateAction<number | 0>>;
  onSearch: () => void;
}


const Banner: FC<BannerProps> = ({ setAvailableFrom,
  setAdultsSize,
  setChildrenSize,
  setPriceFrom,
  setPriceTo , setAvailableTo , onSearch}) => {
// State for DatePickers and Selects
const [fromDate, setFromDate] = useState<string | null>(null);
const [toDate, setToDate] = useState<string | null>(null);
const [priceFrom, setPriceFromGG] = useState<number | null>(null);
const [priceTo, setPriceToGG] = useState<number | null>(null);
const [adults, setAdults] = useState<number>(0);
const [children, setChildren] = useState<number>(0);

const totalPeople = adults + children;

// Handlers for DatePicker values
const handleDateFromChange = (date: Moment | null, dateString: string | string[]) => {
  if (typeof dateString === 'string') {
    setFromDate(dateString); // save formatted date as string
  }
};

const handleDateToChange = (date: Moment | null, dateString: string | string[]) => {
  if (typeof dateString === 'string') {
    setToDate(dateString); // save formatted date as string
  }
};

// Handlers for Select values
const handlePriceFromChange = (value: number) => {
  setPriceFromGG(value);
};

const handlePriceToChange = (value: number) => {
  setPriceToGG(value);
};

// Handle increments and decrements for people count
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

// Handler for "Поиск" button click
const handleSearch = () => {
  setAvailableFrom(fromDate || '');
  setAvailableTo(toDate || '');
  setAdultsSize(adults);
  setChildrenSize(children);
  setPriceFrom(priceFrom || 0);
  setPriceTo(priceTo || 0);
  onSearch();
};
const handleClean = () => {
  // Reset local state
  setFromDate(null);
  setToDate(null);
  setPriceFromGG(null);
  setPriceToGG(null);
  setAdults(1); // Reset adults to 1
  setChildren(0); // Reset children to 0

  // Reset parent state
  setAvailableFrom('');
  setAvailableTo('');
  setAdultsSize(1); // Default to 1 adult
  setChildrenSize(0); // Default to 0 children
  setPriceFrom(0); // Default to 0 price
  setPriceTo(0); // Default to 0 price
};

  return (
    <div
      style={{
        backgroundImage: `url(${sanathorybg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // Ensure relative positioning for the overlay
      }}
      className="h-[180px] mdl:h-[240px] 2xl:h-[300px] shadow-inner"
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
      <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99]  2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-[16px] 2xl:gap-[20px] 2xl:flex-row  2xl:flex-wrap 2xl:items-center">
          
          <div className="flex flex-row gap-[1%] 2xl:w-[32%] 2xl:mt-[2px]">
            <DatePicker
              className="w-[49%] 2xl:w-full"
              placeholder="Заезд"
              value={fromDate ? moment(fromDate) : null}
              onChange={handleDateFromChange}
              onOpenChange={(open) => handleOpenChange(open, "from")}
            />
            <DatePicker
              className="w-[49%] 2xl:w-full"
              placeholder="Выезд"
              value={toDate ? moment(toDate) : null}
              onChange={handleDateToChange}
              onOpenChange={(open) => handleOpenChange(open, "to")}
            />
          </div>
       
          {/* Other Select elements */}
          <div className="flex flex-row gap-[1%]  2xl:w-[32%]">
            <Select
              placeholder="Цена от"
              className="w-[49%]  2xl:w-full custom-select"
              suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}
              onChange={handlePriceFromChange}
              value={priceFrom || undefined}
            >
              <Option value={100}>100$</Option>
              <Option value={200}>200$</Option>
            </Select>
            <Select
              placeholder="Цена до"
              value={priceTo || undefined}
              className="w-[49%] 2xl:w-full  custom-select"
              suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}
              onChange={handlePriceToChange}
            >
              <Option value={500}>500$</Option>
              <Option value={1000}>1000$</Option>
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
            <button
              className="greenButton font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px]"
              onClick={handleSearch} // Call search handler on button click
            >
              Поиск
            </button>
            <button onClick={handleClean} className="mt-[8px] border border-borderColor mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] text-titleDark font-bold p-[16px] font-raleway rounded-[10px] mdl:mt-0">
              Очистить всё
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
