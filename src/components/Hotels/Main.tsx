'use client'
import { FC, useState, useEffect } from 'react'
import Banner from './Banner'
import Hotels from './Hotel'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
import useLocale from '@/hooks/useLocale'
import { IHotel } from '@/interface/Hotel'

import { client } from "@/sanity/lib/client"





const MainHotels: FC = () => {

    const [availableFrom, setAvailableFrom] = useState<string>('');
    const [availableTo, setAvailableTo] = useState<string>('');
    const [adultsSize, setAdultsSize] = useState<number>(0);
    const [childrenSize, setChildrenSize] = useState<number>(0);
    const [priceTo, setPriceTo] = useState<number>(0);
    const [priceFrom, setPriceFrom] = useState<number>(0);

    const [data, setData] = useState<IHotel[]>([]);
    const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);


    // Fetch hotels
    useEffect(() => {
        const fetchAllHotels = async () => {
            try {
                // const res = await AllHotels(locale);
                const resDATA = await client.fetch(
                    `*[_type == "hotels"]`
                  )
                // const hotels = res.data;
                setData(resDATA);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllHotels();
    }, []);

    // Handler for "Поиск" button click
    const handleSearch = () => {
        setIsFilterApplied(true); // Set filter as applied
    };

    const filteredHotels = data
    .filter((hotel) => {
      // Mandatory filters
  
      // Parse hotel and user dates
      const hotelAvailableFrom = new Date(hotel.availableFrom);
      const hotelAvailableTo = new Date(hotel.availableTo);
      const userAvailableFrom = availableFrom ? new Date(availableFrom) : null;
      const userAvailableTo = availableTo ? new Date(availableTo) : null;
  
      // Check availability dates
      if (userAvailableFrom && userAvailableTo) {
        if (
          hotelAvailableFrom > userAvailableFrom ||
          hotelAvailableTo < userAvailableTo
        ) {
          return false; // Hotel is not available in the desired date range
        }
      }
  
      // Check room capacity for adults
      if (adultsSize && hotel.adultsSize < adultsSize) {
        return false; // Not enough capacity for adults
      }
  
      // Check room capacity for children
      if (childrenSize && hotel.childrenSize < childrenSize) {
        return false; // Not enough capacity for children
      }
  
      // Check price range
      if (priceFrom && hotel.price < priceFrom) {
        return false; // Hotel price is below the minimum
      }
  
      if (priceTo && hotel.price > priceTo) {
        return false; // Hotel price is above the maximum
      }
  
      return true; // Hotel passes all mandatory filters
    })
    .map((hotel) => {
      // Scoring for ranking
      let score = 0;
      let totalWeight = 0;
  
      // Price proximity (Weight: 40%)
      if (priceFrom !== 0 && priceTo !== 0) {
        const midPrice = (priceFrom + priceTo) / 2;
        const priceRange = priceTo - priceFrom;
        const priceDifference = Math.abs(hotel.price - midPrice);
        const priceScore = 1 - priceDifference / priceRange;
        score += priceScore * 40;
        totalWeight += 40;
      }
  
      // Date proximity (Weight: 30%)
      if (availableFrom && availableTo) {
        const userStart = new Date(availableFrom).getTime();
        const userEnd = new Date(availableTo).getTime();
        const hotelStart = new Date(hotel.availableFrom).getTime();
        const hotelEnd = new Date(hotel.availableTo).getTime();
  
        const userDuration = userEnd - userStart;
        const hotelDuration = hotelEnd - hotelStart;
        const dateDifference = Math.abs(userDuration - hotelDuration);
        const dateScore = 1 - dateDifference / userDuration;
        score += dateScore * 30;
        totalWeight += 30;
      }
  
      // Adult capacity surplus (Weight: 15%)
      if (adultsSize) {
        const adultSurplus = hotel.adultsSize - adultsSize;
        const adultScore = 1 - adultSurplus / hotel.adultsSize;
        score += adultScore * 15;
        totalWeight += 15;
      }
  
      // Children capacity surplus (Weight: 15%)
      if (childrenSize) {
        const childSurplus = hotel.childrenSize - childrenSize;
        const childScore = 1 - childSurplus / hotel.childrenSize;
        score += childScore * 15;
        totalWeight += 15;
      }
  
      // Normalize the score to a percentage
      const normalizedScore = totalWeight > 0 ? (score / totalWeight) * 100 : 0;
  
      return { ...hotel, score: normalizedScore };
    })
    .sort((a, b) => b.score - a.score); // Sort hotels by highest score
  


    return (
        <div>
            <Banner 
            setAvailableFrom = {setAvailableFrom}
            setAvailableTo = {setAvailableTo}
            setAdultsSize = {setAdultsSize}
            setChildrenSize = {setChildrenSize}
            setPriceFrom={setPriceFrom}
            setPriceTo = {setPriceTo}
            onSearch={handleSearch}
            />
            <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] flex flex-col gap-[120px] mdl:gap-[200px]'>
                <Hotels  data={isFilterApplied ? filteredHotels : data}/>
                <HowWork />
                <Form />
                <Contacts />
            </div>
        </div>
    )
}

export default MainHotels