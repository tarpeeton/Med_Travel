'use client'
import { FC, useState, useEffect, useRef } from 'react'
import Banner from './Banner'
import Sanathory from './Sanathory'
import HowWork from '../Main/HowWork'
import Faq from '../Tours/Faq'
import Form from '../Form/Form'
import Contacts from '../Main/Contacts'
// import { AllSanathoriumGoal, AllSanathoriums } from '@/lib/api'
import useLocale from '@/hooks/useLocale'
import { ISanathoryData } from '@/interface/Sanathory'
import { gsap } from 'gsap'
import { client } from '@/sanity/lib/client'









interface Filters {
  name?: string
  _id?: string
}
export interface ICategory {
  _id: string
  title: { ru: string, uz: string, en: string }
}

const MainSanathorium: FC = () => {
  const [cotegory, setCotegory] = useState<ICategory[]>([])
  const locale = useLocale()
  const [sanathoriums, setSanathoriums] = useState<ISanathoryData[]>([])
  const [sanathoriumNames, setSanathoriumNames] = useState<string[]>([])
  const [filters, setFilters] = useState<Filters>({ name: '', _id: '' })
  const sanathoryRef = useRef<HTMLDivElement>(null) // Ref for GSAP animation
  const [activeButtonDefault, setActiveButtonDefault] = useState<string>('')
  const [filteredData, setFilteredData] = useState<ISanathoryData[]>([])



  // useEffect(() => {
  //   const fetchCotegory = async () => {
  //     try {
  //       const sanathoryCotegoryRes = await client.fetch(`
  //         *[_type == "sanatoriumcategory"]{_id , title}
  //       `)
  //       setCotegory(sanathoryCotegoryRes)

  //       // Set the default active button after categories are fetched
  //       if (sanathoryCotegoryRes.length > 0) {
  //         setActiveButtonDefault(sanathoryCotegoryRes[0].title[locale])
  //       }
  //     } catch (err) {
  //       console.error('Error fetching categories:', err)
  //     }
  //   }

  //   fetchCotegory()
  // }, [locale])

  useEffect(() => {
    setFilteredData(
      sanathoriums.filter((item) =>
        (!filters.name || item.name[locale].includes(filters.name)) &&
        (!filters._id))
      )
    
  }, [filters, sanathoriums, locale])

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const sanathoryRes = await client.fetch(`
          *[_type == "sanatoriums"]{rating , name , homeImage , slug , address}`)

        setSanathoriums(sanathoryRes)
        const names = sanathoryRes.map((item: { name: { ru: string, uz: string, en: string } }) => item.name[locale])
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
      )
    }
  }, [sanathoriums]) // Trigger animation when sanathoriums change

    console.log(filteredData , 'filteredDatafilteredData')
  return (
    <div>


      <Banner Name={sanathoriumNames} cotegory={cotegory}  filters={filters} setFilters={setFilters} />

      <Sanathory data={filteredData}  animation={sanathoryRef} activeButtonDefault={activeButtonDefault} />


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
