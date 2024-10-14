import { FC } from 'react'
import Banner from './Banner'
import Hotels from './Hotel'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'


const MainHotels: FC = () => {
    return (
        <div>
            <Banner />

            <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] flex flex-col gap-[120px] mdl:gap-[200px]'>
                <Hotels />
                <HowWork />
                <Form />
                <Contacts />
            </div>
        </div>
    )
}

export default MainHotels