import { FC } from 'react'
import Banner from './Banner'
import Content from './Content'
import ClinickMap from './ClinicksMap'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'

const MainClinics: FC = () => {
    return (
        <div>
            <Banner />
            <Content />

            <ClinickMap />
            <div className='mt-[120px] flex flex-col gap-[120px] 2xl:gap-[200px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
                <HowWork />
                <Form />
                <Contacts />
            </div>
        </div>
    )
}

export default MainClinics