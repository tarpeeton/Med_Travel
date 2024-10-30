// useTourState.ts
"use client";
import { useState, useEffect } from 'react';
import { Filters } from '@/interface/ToursFilter';
import { Tour } from '@/interface/Tour';
import { client } from "@/sanity/lib/client";
import useLocale from '@/hooks/useLocale';

interface ITypes {
    _id: string;
    name: { ru: string; uz: string; en: string };
}

export const useTourState = () => {
    const locale = useLocale();
    const [data, setData] = useState<Tour[]>([]);
    const [filteredData, setFilteredData] = useState<Tour[]>([]);
    const [types, setTypes] = useState<ITypes[]>([]);
    const [typeId, setTypeID] = useState('');
    const [filters, setFilters] = useState<Filters>({
        fromAddress: '',
        toAddress: '',
        fromDate: undefined,
        toDate: undefined,
        adultSize: 0,
        childrenSize: 0,
        priceFrom: undefined,
        priceTo: undefined,
        typeId: '',
    });

    // MA'LUMOTNI OLISH
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const toursRes = await client.fetch(`*[_type == "tour"]`);
                const res = await client.fetch(`*[_type == "torscotegory"]{_id, name}`);
                setData(toursRes);
                setFilteredData(toursRes); // Dastlab barcha ma'lumotlarni ko'rsatamiz
                setTypes(res);
                setTypeID(res?.[0]._id || '');
            } catch (err) {
                console.error('Error fetching tours:', err);
            }
        };

        fetchTours();
    }, [locale]);

    // FILTRLASH
    useEffect(() => {
        const applyFilters = () => {
            if (Object.values(filters).every(filter => filter === undefined || filter === '')) {
                // Agar filtrlar qo'llanilmagan bo'lsa, barcha ma'lumotlarni qaytaramiz
                setFilteredData(data);
                return;
            }

            const filteredTours = data.filter((tour) => {
                let matches = true;

                // Narxni tekshiramiz
                const tourPrice = Number(tour.price);
                const priceFrom = filters.priceFrom ? Number(filters.priceFrom) : undefined;
                const priceTo = filters.priceTo ? Number(filters.priceTo) : undefined;
                if (priceFrom !== undefined && tourPrice < priceFrom) {
                    matches = false;
                }
                if (priceTo !== undefined && tourPrice > priceTo) {
                    matches = false;
                }

                // Sanalarni tekshiramiz
                const tourStart = new Date(tour.fromDate);
                const tourEnd = new Date(tour.toDate);
                let filterStart = filters.fromDate ? new Date(filters.fromDate) : null;
                let filterEnd = filters.toDate ? new Date(filters.toDate) : null;

                // Agar filter sanalari mavjud bo'lsa va noto'g'ri tartibda bo'lsa, ularni almashtiramiz
                if (filterStart && filterEnd && filterStart > filterEnd) {
                    const temp = filterStart;
                    filterStart = filterEnd;
                    filterEnd = temp;
                }

                // Sanalar kesishishini tekshiramiz
                if (filterStart && tourEnd < filterStart) {
                    matches = false;
                }
                if (filterEnd && tourStart > filterEnd) {
                    matches = false;
                }

                // Kattalar sonini tekshiramiz
                if (filters.adultSize && tour.adultSize < filters.adultSize) {
                    matches = false;
                }

                // Bolalar sonini tekshiramiz
                if (filters.childrenSize && tour.childrenSize < filters.childrenSize) {
                    matches = false;
                }

                // Tur tipini tekshiramiz
                if (filters.typeId && tour.category._ref !== filters.typeId) {
                    matches = false;
                }
                return matches;
            });

            setFilteredData(filteredTours);
        };

        applyFilters();
    }, [filters, data]);

    return {
        data,
        setData, // Agar setData kerak bo'lsa, uni qaytarish kerak
        filteredData,
        setFilteredData, // Agar setFilteredData kerak bo'lsa, uni qaytarish kerak
        types,
        setTypes, // Agar setTypes kerak bo'lsa, uni qaytarish kerak
        typeId,
        setTypeID,
        filters,
        setFilters,
    };
};
