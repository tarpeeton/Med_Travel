"use client"
import { FC , useEffect  , useCallback} from 'react'
import Banner from './Banner'
import Available from './Available'
import Gallery from './Gallery'
import Map from './Maps'
import Faq from './Faq'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
import useLocale from '@/hooks/useLocale'
import { client } from "@/sanity/lib/client"
import { useTourState } from '@/hooks/useTourState'
import { Tour } from '@/interface/Tour'


interface IMianTours {
    initialData: Tour[]
}




const MainTours: FC = () => {
    const locale = useLocale()
    const {
        data,
        setData,
        filteredData,
        setFilteredData,
        types,
        setTypes,
        setTypeID,
        filters,
        setFilters,
    } = useTourState()



    // MA'LUMOTNI OLISH
    const fetchTours = useCallback(async () => {
        try {
            const toursRes = await client.fetch(`*[_type == "tour"]`);
            const typesRes = await client.fetch(`*[_type == "torscotegory"]{_id, name}`);
            setData(toursRes);
            setFilteredData(toursRes); // Initially show all data
            setTypes(typesRes);
            setTypeID(typesRes?.[0]._id || '');
        } catch (err) {
            console.error('Error fetching tours:', err);
        }
    }, [setData, setFilteredData, setTypes, setTypeID]);

    useEffect(() => {
        fetchTours(); // Run once on mount
    }, [fetchTours]);

    // FILTRLASH
    useEffect(() => {
        const applyFilters = () => {
            if (Object.values(filters).every(filter => filter === undefined || filter === '')) {
                // Agar filtrlar qo'llanilmagan bo'lsa, barcha ma'lumotlarni qaytaramiz
                setFilteredData(data)
                return
            }

            const filteredTours = data.filter((tour) => {
                let matches = true

                // Narxni tekshiramiz
                const tourPrice = Number(tour.price)
                const priceFrom = filters.priceFrom ? Number(filters.priceFrom) : undefined
                const priceTo = filters.priceTo ? Number(filters.priceTo) : undefined
                if (priceFrom !== undefined && tourPrice < priceFrom) {
                    matches = false
                }
                if (priceTo !== undefined && tourPrice > priceTo) {
                    matches = false
                }

                // Sanalarni tekshiramiz
                const tourStart = new Date(tour.fromDate)
                const tourEnd = new Date(tour.toDate)
                let filterStart = filters.fromDate ? new Date(filters.fromDate) : null
                let filterEnd = filters.toDate ? new Date(filters.toDate) : null

                // Agar filter sanalari mavjud bo'lsa va noto'g'ri tartibda bo'lsa, ularni almashtiramiz
                if (filterStart && filterEnd && filterStart > filterEnd) {
                    const temp = filterStart
                    filterStart = filterEnd
                    filterEnd = temp
                }

                // Sanalar kesishishini tekshiramiz
                if (filterStart && tourEnd < filterStart) {
                    matches = false
                }
                if (filterEnd && tourStart > filterEnd) {
                    matches = false
                }

                // Kattalar sonini tekshiramiz
                if (filters.adultSize && tour.adultSize < filters.adultSize) {
                    matches = false
                }

                // Bolalar sonini tekshiramiz
                if (filters.childrenSize && tour.childrenSize < filters.childrenSize) {
                    matches = false
                }

                // Tur tipini tekshiramiz
                if (filters.typeId && tour.category._ref !== filters.typeId) {
                    matches = false
                }
                return matches
            })

            setFilteredData(filteredTours)
        }
        applyFilters()
    }, [filters, data])



    return (
        <div className='relative'>
            <Banner
                setFilters={setFilters}
                filters={filters}
                types={types}
                locale={locale}
            />
            <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] relative mt-[420px] mdl:mt-[370px] 2xl:mt-[180px] flex flex-col gap-[120px] mdl:gap-[180px]'>
                <Available tours={filteredData} locale={locale} types={types} setTypeID={setTypeID} />
                <Gallery data={filteredData} />
                <Map  coordinates={data} types={types}/>
                <HowWork />
                <Faq />
                <Form />
                <Contacts />
            </div>
        </div>
    )
}

export default MainTours