'use client'

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
import { AllTours  , AllTypes} from '@/lib/api'
import { Tour , ApiResponse } from '@/interface/Tour'

interface ITypes {
    id:number,
    name: string
}



const MainTours: FC = () => {
    const locale = useLocale()
    const [data, setData] = useState<Tour[]>([])  // Apply Tour[] as the type for data
    const [loading, setLoading] = useState(true) // Add loading state
    const [error, setError] = useState<string | null>(null) // Add error state
    const [types , setTypes] = useState<ITypes[]>([])
    const [typeID , setTypeID] = useState(2)

    useEffect(() => {
        const fetchTours = async () => {
            try {
                setLoading(true) // Start loading
                const res: ApiResponse = await AllTours(locale , { typeId: typeID })
                const typeRes = await AllTypes(locale)
                setData(res.data) // Assign the data array to state
                setTypes(typeRes.data)
            } catch (err) {
                console.error('Error fetching tours:', err)
                setError('Failed to fetch tours')
            } finally {
                setLoading(false) // End loading
            }
        }

        fetchTours()
    }, [locale  , typeID]) // Rerun when locale changes

    return (
        <div className='relative'>
            <Banner />
            <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] relative mt-[420px] mdl:mt-[370px] 2xl:mt-[180px] flex flex-col gap-[120px] mdl:gap-[180px]'>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        {/* You can pass data as props to Available and Gallery */}
                        <Available tours={data} types={types} setTypeID={setTypeID} />
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
    )
}

export default MainTours
