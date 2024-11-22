"use client"
import { FC, useState, useEffect, Dispatch, SetStateAction } from "react"
import TursTitle from "../ui/tursTitle"
import TursBg from "@/public/tours/banner.png"
import { DatePicker, Select } from "antd"
import { LuDollarSign } from "react-icons/lu"
const { Option } = Select
import { Filters } from '@/interface/ToursFilter'
import moment from "moment"; // Import moment

import Script from 'next/script'


interface BannerProps {
  setFilters: (filters: Filters) => void // Ota komponentdan keladigan funksiya
  filters: Filters
  types: { _id: string; name: {ru: string , uz:string , en:string} }[] 
  locale: "ru" | "uz" | "en",
}


const handleOpenChange = (open: boolean, type: "from" | "to") => {
  if (open) {
    console.log(`Opening ${type} date picker`)
  } else {
    console.log(`Closing ${type} date picker`)
  }
}

const Banner: FC<BannerProps> = ({ setFilters, filters, types  , locale }) => {
  const clientId = "145832671cce98f22847de5fbecf6e9090dfc7";

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
      <div className="tv-search-form tv-moduleid-9968196"></div>
      <Script
        src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
        strategy="afterInteractive"
      />
      </div>
    </div>
  )
}

export default Banner