import { FC } from 'react'
import Banner from './Banner'
import Available from './Available'
import Gallery from './Gallery'
import Map from './Maps'
import Faq from './Faq'


const MainTours: FC = () => {
    return (
        <div className='relative'>
            <Banner />
            {/* <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] relative'>
                <Available />
                <Gallery />
                <Map />
                <Faq />
            </div> */}

        </div>
    )
}

export default MainTours