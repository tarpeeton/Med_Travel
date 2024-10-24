'use client'
import { FC, useState, useEffect, useRef } from 'react'
import Banner from './Banner'
import Sanathory from './Sanathory'
import HowWork from '../Main/HowWork'
import Faq from '../Tours/Faq'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
import { AllSanathoriumGoal, AllSanathoriums } from '@/lib/api'
import useLocale from '@/hooks/useLocale'
import { ISanathoryData } from '@/interface/Sanathory'
import { gsap } from 'gsap'

interface Filters {
  name?: string;
  goalId?: string;
}
interface ICategory {
  id: string
  name: string
  orderNum: number
  active: boolean
}

const MainSanathorium: FC = () => {
  const [cotegory, setCotegory] = useState<ICategory[]>([])
  const [cotegoryID, setCotegoryID] = useState('0')
  const locale = useLocale()
  const [sanathoriums, setSanathoriums] = useState<ISanathoryData[]>([])
  const [sanathoriumNames, setSanathoriumNames] = useState<string[]>([])

  const [filters, setFilters] = useState<Filters>({ name: '', goalId: '' })
  const sanathoryRef = useRef<HTMLDivElement>(null) // Ref for GSAP animation

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await AllSanathoriumGoal(locale)
        setCotegory(res.data)
      } catch (err) {
        console.error('Error fetching tours:', err)
      }
    }

    fetchTours()
  }, [locale])

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await AllSanathoriums(locale, { ...filters })
        setSanathoriums(res.data)

        // Extract names and set the state
        const names = res.data.map((item: { name: string }) => item.name)
        setSanathoriumNames(names)
      } catch (err) {
        console.error('Error fetching tours:', err)
      }
    }

    fetchTours()
  }, [locale, filters])

  useEffect(() => {
    // GSAP animation for Sanathory cards
    if (sanathoryRef.current) {
      gsap.fromTo(sanathoryRef.current.children, 
        { opacity: 0, x: -100 }, // Start from left off-screen
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.2 } // Slide in and fade in
      );
    }
  }, [sanathoriums]); // Trigger animation when sanathoriums change

  return (
    <div>
      <Banner Name={sanathoriumNames} cotegory={cotegory} setCotegoryID={setCotegoryID} filters={filters} setFilters={setFilters} />
     
        <Sanathory data={sanathoriums} cotegory={cotegory} animation={sanathoryRef} />
      

      <div className='mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] flex flex-col gap-[200px] mt-[200px]'>
        <HowWork />
        <Faq />
        <Form />
        <Contacts />
      </div>
    </div>
  )
}

export default MainSanathorium
