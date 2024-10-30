"use client"

import { FC, useState, useEffect } from 'react';
import Banner from './Banner';
import Available from './Available';
import Gallery from './Gallery';
import Map from './Maps';
import Faq from './Faq';
import HowWork from '../Main/HowWork';
import Form from '../Form/Form';
import Contacts from '../Main/Contacts';
import useLocale from '@/hooks/useLocale';
import { Filters } from '@/interface/ToursFilter';
import { client } from "@/sanity/lib/client";
import { Tour } from '@/interface/Tour';

interface ITypes {
    _id: string;
    name: { ru: string; uz: string; en: string };
}

const MainTours: FC = () => {
    const locale = useLocale();
    const [data, setData] = useState<Tour[]>([]);
    const [filteredData, setFilteredData] = useState<Tour[]>([]);
    const [types, setTypes] = useState<ITypes[]>([]);
    const [typeId, setTypeID] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);

    const [filters, setFilters] = useState<Filters>({
        fromAddress: '',
        toAddress: '',
        fromDate: undefined,
        toDate: undefined,
        adultSize: 0,
        childrenSize: 0,
        priceFrom: undefined,
        priceTo: undefined,
        typeId: typeId,
    });



        console.log(filteredData , "FILTereD DATA")

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const toursRes = await client.fetch(`*[_type == "tour"]`);
                const res = await client.fetch(`*[_type == "torscotegory"]{_id, name}`);
                setData(toursRes);
                setFilteredData(toursRes); // Default to showing all data initially
                setTypes(res);
                setTypeID(res?.[0]._id || '');
            } catch (err) {
                console.error('Error fetching tours:', err);
            }
        };

        fetchTours();
    }, [locale]);

    useEffect(() => {
        const applyFilters = () => {
            if (Object.values(filters).every(filter => filter === undefined || filter === '')) {
                // Если фильтры не применяются, возвращаем все данные по умолчанию
                setFilteredData(data);
                return;
            }
    
            const filteredHotels = data
                .map((tour) => {
                    let score = 0;
    
                    // Match price range
                    const matchesPrice = 
                        (filters.priceFrom === undefined || tour.price >= filters.priceFrom) &&
                        (filters.priceTo === undefined || tour.price <= filters.priceTo);
                    if (matchesPrice) {
                        score += 2; // Высший вес за совпадение цены
                    }
    
                    // Match available dates range
                    const matchesDateFrom = filters.fromDate 
                        ? new Date(tour.fromDate) >= new Date(filters.fromDate) 
                        : true;
                    const matchesDateTo = filters.toDate 
                        ? new Date(tour.toDate) <= new Date(filters.toDate) 
                        : true;
                    const matchesDateRange = matchesDateFrom && matchesDateTo;
                    if (matchesDateRange) {
                        score += 3; // Высший вес за совпадение по дате
                    }
    
                    // Match adults size
                    const matchesAdults = filters.adultSize 
                        ? tour.adultSize >= filters.adultSize 
                        : true;
                    if (matchesAdults) {
                        score += 1; // Низший вес за совпадение по количеству взрослых
                    }
    
                    // Match children size
                    const matchesChildren = filters.childrenSize 
                        ? tour.childrenSize >= filters.childrenSize 
                        : true;
                    if (matchesChildren) {
                        score += 1; // Низший вес за совпадение по количеству детей
                    }
    
                    // Match typeId if provided
                    const matchesType = filters.typeId ? tour.category._ref === filters.typeId : true;
                    if (matchesType) {
                        score += 1; // Низший вес за совпадение по типу
                    }
    
                    // Возвращаем тур с результатом, если он имеет ненулевой score
                    return score > 0 ? { ...tour, score } : null;
                })
                .filter((tour) => tour !== null) // Сохраняем только туры с ненулевым score
                .sort((a, b) => (b?.score || 0) - (a?.score || 0)); // Сортируем туры по score в порядке убывания
    
            // Если ничего не найдено, возвращаем пустой массив
            setFilteredData(filteredHotels.length > 0 ? filteredHotels : []);
        };
    
        applyFilters(); // Вызываем функцию фильтрации
    }, [filters, data]);
    

    return (
        <div className='relative'>
            <Banner
                setFilters={setFilters}
                filters={filters}
                types={types}
                setIsRefresh={setIsRefresh}
                locale={locale}
            />
            <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] relative mt-[420px] mdl:mt-[370px] 2xl:mt-[180px] flex flex-col gap-[120px] mdl:gap-[180px]'>
                <Available tours={filteredData} locale={locale} types={types} setTypeID={setTypeID} />
                <Gallery />
                <Map />
                <HowWork />
                <Faq />
                <Form />
                <Contacts />
            </div>
        </div>
    );
};

export default MainTours;
