"use client"
import { FC, useState  , useEffect} from 'react'
import Title from '../ui/title'
import Galler from './Images'
import { client } from '@/sanity/lib/client'
import { IGallery } from '@/interface/Gallery'





const MainGalley: FC = () => {
    const [sliceNumber, setSliceNumber] = useState(10)
    const [size , setSize] = useState(10)
    


    const [gallery, setGallery] = useState<IGallery[]>([])



    useEffect(() => {
        const fetchGallery = async () => {
            try {
                // Fetch data from Sanity using GROQ query
                const data: IGallery[] = await client.fetch(`*[_type == "tourPhotos"]`)
                setGallery(data)
            } catch (error) {
                console.error('Error fetching gallery:', error)
            }
        }
        fetchGallery()
    }, [])




    if (gallery.length <= 0) {
        return null;
    }





    
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