"use client"
import { FC, useState  , useEffect} from 'react'
import Title from '../ui/title'
import Galler from './Images'
import { client } from '@/sanity/lib/client'




export interface DataItem {
    gallery: {
        _type: "image";
        _key: string;
        asset: {
            _type: "reference";
            _ref: string;
        };
    }[];
}


const MainGalley: FC = () => {
    const [sliceNumber, setSliceNumber] = useState(10)
    const [size , setSize] = useState(10)
    const [gallery, setGallery] = useState<DataItem[] | []>([])
    


    useEffect(() => {
        const fetchTours = async () => {
            try {
                const toursRes = await client.fetch(`*[_type == "tour"]{gallery}`)
                setGallery(toursRes)
            } catch (err) {
                console.error('Error fetching tours:', err)
            }
        }

        fetchTours()
    }, [])








    
    const toggleSliceNumber = () => {
        setSliceNumber((prev) => prev + 10)
    }
    const toggleSizeNumber = () => {
        setSize((prev) => prev + 20)
    }

    const LoadMore = () => {
        toggleSliceNumber(),
        toggleSizeNumber()
    }
    return (
        <div className='flex flex-col mt-[20px] mdl:mt-[40px] 2xl:mt-[60px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
            <div>
                <Title  text={{ru: 'Фотографии из туров' , uz: "" , en: ""}} />
                <p className='text-[#7C7C7C] text-[15px] mdl:text-[18px] 2xl:text-[20px]  font-raleway font-medium'>Часть незабываемых моментов с туров</p>
            </div>
            <div className='mt-[20px] mdl:mt-[40px]'>
                <Galler images={gallery}  sliceNumber={sliceNumber} LoadMore={LoadMore} />
            </div>
          
        </div>
    )
}

export default MainGalley