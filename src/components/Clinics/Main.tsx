"use client"
import { FC, useState, useEffect, useRef } from 'react'
import Banner from './Banner'
import Content from './Content'
import ClinickMap from './ClinicksMap'
import HowWork from '../Main/HowWork'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
import { gsap } from 'gsap'
import { IClinick } from '@/interface/Clinick'







const MainClinics: FC = () => {
    const [clinics, setClinics] = useState<IClinick[]>([]);
    const contentRef = useRef<HTMLDivElement>(null); // Ref for GSAP animation
    const [filteredData , setFilteredData] = useState<IClinick[]>([]) 


    useEffect(() => {
        // GSAP animation for Content component
        if (contentRef.current) {
            gsap.fromTo(contentRef.current, 
                { opacity: 0, x: -90 }, // Start from left off-screen
                { opacity: 1, x: 0, duration: 0.6 } // Slide in and fade in
            );
        }
    }, [clinics]); // Trigger animation when clinics change

    useEffect(() => {
        if (filteredData.length === 0) {
            setFilteredData(clinics);
        }
    }, [clinics]);



    return (
        <div>
            <Banner clinics={clinics} setClinics={setClinics}  setFilteredData={setFilteredData}/>
                <Content clinics={filteredData} animation= {contentRef} />

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
