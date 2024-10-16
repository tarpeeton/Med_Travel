"use client";

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
import { AllTours, AllTypes } from '@/lib/api';
import { Tour, ApiResponse } from '@/interface/Tour';
import Spinner from '../Spinner';
import { Filters } from '@/interface/ToursFilter';


interface ITypes {
    id: number;
    name: string;
}


const MainTours: FC = () => {
    const locale = useLocale();
    const [data, setData] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [types, setTypes] = useState<ITypes[]>([]);
    const [typeId, setTypeID] = useState(0);
    const [isRefresh , setIsRefresh] = useState(false)

    const [filters, setFilters] = useState<Filters>({
        fromAddress: '',
        toAddress: '',
        fromDate: undefined,
        toDate: undefined,
        adultSize: 0,
        childrenSize: 0,
        priceFrom: undefined,
        priceTo: undefined,
        typeId: typeId
    });

    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true);
                const res: ApiResponse = await AllTours(locale, {
                    ...filters
                });
                const typeRes = await AllTypes(locale);
                setData(res.data);
                setTypes(typeRes.data);
            } catch (err) {
                console.error('Error fetching tours:', err);
                setError('Failed to fetch tours');
            } finally {
                setLoading(false);
            }
        }

        fetchTours();
    }, [locale, filters , isRefresh]);

    return (
        <div className='relative'>
            <Banner 
                setFilters={setFilters} 
                filters={filters} 
                types={types}
                setIsRefresh={setIsRefresh}
            />
            <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] relative mt-[420px] mdl:mt-[370px] 2xl:mt-[180px] flex flex-col gap-[120px] mdl:gap-[180px]'>
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        <Available tours={data} types={types}   setTypeID={setTypeID}  />
                        {/* <Gallery tours={data} /> */}
                        <Map />
                        <HowWork />
                        <Faq />
                        <Form />
                        <Contacts />
                    </>
                )}
            </div>
        </div>
    );
}

export default MainTours;
