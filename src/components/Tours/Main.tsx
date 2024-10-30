"use client"

import { FC, useState, useEffect } from 'react'
import Banner from './Banner'
import Available from './Available'
import Gallery from './Gallery'
import Map from './Maps'
import Faq from './Faq'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
import useLocale from '@/hooks/useLocale'
import { Filters } from '@/interface/ToursFilter'
import { client } from "@/sanity/lib/client";
import { Tour } from '@/interface/Tour'



interface ITypes {
    _id: string
    name: {ru: string , uz: string , en: string}
}


const MainTours: FC = () => {
    const locale = useLocale()
    const [data, setData] = useState<Tour[] | []>([])
    const [types, setTypes] = useState<ITypes[]>([])
    const [typeId, setTypeID] = useState('')
    const [isRefresh, setIsRefresh] = useState(false)


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
    })



    useEffect(() => {
        const fetchTours = async () => {
            try {
                const toursRes = await client.fetch(
                    `*[_type == "tour"]`
            ) 

                console.log(toursRes , "TUR RES")
                const res = await client.fetch(
                    `*[_type == "torscotegory"]
                    {_id, name}`
            ) 
                setData(toursRes)
                setTypes(res)
                setTypeID(res?.[0]._id)
            } catch (err) {
                console.error('Error fetching tours:', err)
            } 
        }

        fetchTours()
    }, [locale, filters, isRefresh])

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
                
                        <Available tours={data} locale={locale}  types={types} setTypeID={setTypeID} />
                        <Gallery/>
                        <Map />
                        <HowWork />
                        <Faq />
                        <Form />
                        <Contacts />
            </div>
        </div>
    )
}

export default MainTours
