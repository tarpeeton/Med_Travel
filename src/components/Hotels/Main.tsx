'use client'
import { FC, useState, useEffect } from 'react'
import Banner from './Banner'
import Hotels from './Hotel'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
import useLocale from '@/hooks/useLocale'
import { AllHotels } from '@/lib/api'



export interface IHotel {
    id: number;
    name: string;
    location: string;
    service: { id: number, name: string, orderNum: number, active: boolean  , icon: {id: number , url: string}}[];
    price: number;
    availableFrom: string;
    availableTo: string;
    photo: { id: number, url: string }
    adultsSize: 2,
    childrenSize: 2,
    orderNum: 0,
    active: true
    score?: number,
    rating?: number,

}

const MainHotels: FC = () => {
    const locale = useLocale();

    // States for filter criteria
    const [availableFrom, setAvailableFrom] = useState<string>('');
    const [availableTo, setAvailableTo] = useState<string>('');
    const [adultsSize, setAdultsSize] = useState<number>(0);
    const [childrenSize, setChildrenSize] = useState<number>(0);
    const [priceTo, setPriceTo] = useState<number>(0);
    const [priceFrom, setPriceFrom] = useState<number>(0);

    // State for hotels data and filter flag
    const [data, setData] = useState<IHotel[]>([]);
    const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);


    // Fetch hotels
    useEffect(() => {
        const fetchAllHotels = async () => {
            try {
                const res = await AllHotels(locale);
                const hotels = res.data;
                setData(hotels);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllHotels();
    }, [locale]);

    // Handler for "Поиск" button click
    const handleSearch = () => {
        setIsFilterApplied(true); // Set filter as applied
    };

    const filteredHotels = data
        .map((hotel) => {
            // Calculate the "match score" for each hotel based on the number of matched criteria
            let score = 0;

            // Match price range
            const matchesPrice = priceFrom && priceTo ? hotel.price >= priceFrom && hotel.price <= priceTo : true;
            if (matchesPrice) {
                score += 2; // Give higher weight for price match
            }

            // Match available dates
            const matchesDateFrom = availableFrom ? new Date(hotel.availableFrom) >= new Date(availableFrom) : true;
            const matchesDateTo = availableTo ? new Date(hotel.availableTo) <= new Date(availableTo) : true;
            if (matchesDateFrom && matchesDateTo) {
                score += 3; // Give highest weight for date match
            }

            // Match adults size
            const matchesAdults = adultsSize ? hotel.adultsSize >= adultsSize : true;
            if (matchesAdults) {
                score += 1; // Lower weight for number of adults match
            }

            // Match children size
            const matchesChildren = childrenSize ? hotel.childrenSize >= childrenSize : true;
            if (matchesChildren) {
                score += 1; // Lower weight for number of children match
            }

            // Return hotel with its score for ranking
            return { ...hotel, score };
        })
        .filter((hotel) => hotel.score > 0) // Only keep hotels that have at least some matching criteria
        .sort((a, b) => b.score - a.score); // Sort by the best matches (highest score)



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