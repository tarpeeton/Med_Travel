"use client"
import { FC, useState, useEffect, Dispatch, SetStateAction } from "react"
import TursTitle from "../ui/tursTitle"
import TursBg from "@/public/tours/banner.png"
import { DatePicker, Select } from "antd"
import { LuDollarSign } from "react-icons/lu"
const { Option } = Select
import { Filters } from '@/interface/ToursFilter'
import moment from "moment"; // Import moment




interface BannerProps {
  setFilters: (filters: Filters) => void // Ota komponentdan keladigan funksiya
  filters: Filters
  types: { _id: string; name: {ru: string , uz:string , en:string} }[] 
  setIsRefresh: Dispatch<SetStateAction<boolean>>
  locale: "ru" | "uz" | "en",
}


const handleOpenChange = (open: boolean, type: "from" | "to") => {
  if (open) {
    console.log(`Opening ${type} date picker`)
  } else {
    console.log(`Closing ${type} date picker`)
  }
}

const Banner: FC<BannerProps> = ({ setFilters, filters, types, setIsRefresh  , locale }) => {

  // State variables initialized with filters prop values
  const [adults, setAdults] = useState(filters.adultSize)
  const [children, setChildren] = useState(filters.childrenSize)
  const [fromAddress, setFromAddress] = useState(filters.fromAddress)
  const [toAddress, setToAddress] = useState(filters.toAddress)
  const [fromDate, setFromDate] = useState(filters.fromDate)
  const [toDate, setToDate] = useState(filters.toDate)
  const [priceFrom, setPriceFrom] = useState(filters.priceFrom)
  const [priceTo, setPriceTo] = useState(filters.priceTo)
  const [typeId, setTypeID] = useState(filters.typeId)

  useEffect(() => {
    setAdults(filters.adultSize)
    setChildren(filters.childrenSize)
    setFromAddress(filters.fromAddress)
    setToAddress(filters.toAddress)
    setFromDate(filters.fromDate)
    setToDate(filters.toDate)
    setPriceFrom(filters.priceFrom)
    setPriceTo(filters.priceTo)
    setTypeID(filters.typeId)
  }, [filters])

  const totalPeople = adults + children

  const handleIncrementAdults = () => {
    setAdults(adults + 1)
  }

  const handleDecrementAdults = () => {
    if (adults > 0) setAdults(adults - 1)
  }

  const handleIncrementChildren = () => {
    setChildren(children + 1)
  }

  const handleDecrementChildren = () => {
    if (children > 0) setChildren(children - 1)
  }

  const handleSearch = () => {
    const updatedFilters = {
      fromAddress,
      toAddress,
      fromDate,
      toDate,
      adultSize: adults,
      childrenSize: children,
      priceFrom,
      priceTo,
      typeId,
    }
    setFilters(updatedFilters) // Filtrlar ota komponentga yuboriladi
  }

  

  const handleClean = () => {
    // Reset all state variables to empty values
    setAdults(0) // Assuming 0 is the default for adults
    setChildren(0) // Assuming 0 is the default for children
    setFromAddress("") // Empty string for fromAddress
    setToAddress("") // Empty string for toAddress
    setFromDate(undefined) // Resetting to no date
    setToDate(undefined) // Resetting to no date
    setPriceFrom(undefined) // Resetting priceFrom to undefined
    setPriceTo(undefined) // Resetting priceTo to undefined
    setTypeID('') // Assuming 0 or any other default value for typeId
    setFilters({
      fromAddress: "", // Resetting to empty string
      toAddress: "", // Resetting to empty string
      fromDate: undefined, // Resetting to no date
      toDate: undefined, // Resetting to no date
      adultSize: 0, // Resetting to 0
      childrenSize: 0, // Resetting to 0
      priceFrom: undefined, // Resetting priceFrom to undefined
      priceTo: undefined, // Resetting priceTo to undefined
      typeId: '', // Resetting to a default value
    })
    setIsRefresh(true)

  }



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

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity for darkness level
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      ></div>
      <div className="py-[40px] px-[16px] relative z-[99] mdl:mx-[20px] 2xl:mx-[200px]">
        <TursTitle title="Туры по Узбекистану" />
        <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
          Незабываемые туры по Узбекистану
        </p>
      </div>
      <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99]  2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-[16px] 2xl:gap-[20px] 2xl:flex-row  2xl:flex-wrap 2xl:items-center">
          <div className="flex flex-row gap-[1%] 2xl:w-[32%]">
            <Select value={fromAddress || undefined} onChange={(value) => setFromAddress(value)} placeholder="Откуда" className="w-[49%] 2xl:w-full custom-select" suffixIcon={null}>
              <Option value="tashkent">Ташкент</Option>
              <Option value="samarkand">Самарканд</Option>
            </Select>
            <Select value={toAddress || undefined} onChange={(value) => setToAddress(value)} placeholder="Куда" className="w-[49%] 2xl:w-full custom-select" suffixIcon={null}>
              <Option value="Чимган">Чимган</Option>
              <Option value="uz">Uz</Option>
            </Select>
          </div>
          <div className="flex flex-row gap-[1%] 2xl:w-[32%] 2xl:mt-[2px]">
            <DatePicker
              className="w-[49%] 2xl:w-full"
              placeholder="От"
              value={fromDate ? moment(fromDate) : undefined}

              onOpenChange={(open) => handleOpenChange(open, "from")}
              onChange={(date) => setFromDate(date ? date.format("YYYY-MM-DD") : undefined)}
            />
            <DatePicker
              className="w-[49%] 2xl:w-full"
              placeholder="До"
              value={toDate ? moment(toDate) : undefined}
              onOpenChange={(open) => handleOpenChange(open, "to")}
              onChange={(date) => setToDate(date ? date.format("YYYY-MM-DD") : undefined)}
            />
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
          {/* Other Select elements remain unchanged */}
          <div className="flex flex-row gap-[1%]  2xl:w-[32%]">
            <Select value={priceFrom || undefined} onChange={(value) => setPriceFrom(value)} placeholder="Цена от" className="w-[49%]  2xl:w-full custom-select" suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}>
              <Option value="100">100$</Option>
              <Option value="200">200$</Option>
              <Option value="250">250$</Option>
            </Select>
            <Select
              placeholder="Цена до"
              value={priceTo || undefined}
              className="w-[49%] 2xl:w-full  custom-select"
              suffixIcon={<LuDollarSign className="text-[#7C7C7C]" size={16} />}
              dropdownStyle={{ backgroundColor: "##1AB2A6", color: "#fff" }}
              onChange={(value) => setPriceTo(value)}
            >
              <Option value="350">350$</Option>
              <Option value="600">600$</Option>
            </Select>
          </div>
          <Select value={typeId || undefined} onChange={(value) => setTypeID(value)} placeholder="Тип тура" className="w-full custom-select 2xl:w-[32%]">
            {types.map((type, index) => (
              <Option key={index} className='mb-[5px]' value={type._id}>{type.name[locale]}</Option>
            ))}

          </Select>
          <div className="flex flex-col mdl:flex-row mdl:w-[62%] gap-[1%]">
            <button onClick={handleSearch} className="greenButton font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px]">Поиск</button>
            <button onClick={handleClean} className="mt-[8px] border border-borderColor mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] text-titleDark font-bold p-[16px] font-raleway rounded-[10px] mdl:mt-0">
              Очистить всё
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
