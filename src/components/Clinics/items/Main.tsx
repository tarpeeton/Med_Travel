"use client"
import AllInfoClinick from '@/components/Clinics/items/AllInfo'
import BannerClinicsItems from '@/components/Clinics/items/Banner'
import ClinickGallery from '@/components/Clinics/items/gallery'
import useLocale from '@/hooks/useLocale'
import { client } from '@/sanity/lib/client'
import { useState, useEffect } from 'react'
import { ClinicDataInterface } from '@/interface/clinicks.interface'
import SpesialClinick from '@/components/Clinics/items/spesial'
import SeriveAndLechenya from '@/components/Clinics/items/service'
import Doctors from '@/components/Clinics/items/doctors'
import Pakets from '@/components/Clinics/items/pakets'
import Reviews from '@/components/Main/Reviews'
import Faq from '@/components/Tours/Faq'
import ClinicsForm from './clinickForm'
import ClinickItemMap from '@/components/Clinics/items/ClinickMap'
import SmilarClinick from '@/components/Clinics/items/similar'
import { useParams } from 'next/navigation'


const MainClinicsItems = () => {
  const {slug} = useParams() 
  const [data, setData] = useState<ClinicDataInterface[] | []>([])
  const [slugData , setSlugData] = useState<ClinicDataInterface | null>(null)
  const locale = useLocale()


  useEffect(() => {
    const fetchClinicsBySlug = async () => {
      try {
        const response = await client.fetch(`
          *[_type == "clinicks" && slug.current == $slug][0]
        `, { slug });

        setSlugData(response); // Устанавливаем данные для конкретного slug
      } catch (error) {
        console.error('Error fetching clinic by slug:', error);
      }
    };

    if (slug) {
      fetchClinicsBySlug();
    }
  }, [slug, locale]); // Перезапускаем, если slug или locale изменятся


  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const clinickResponse = await client.fetch(`
                *[_type == "clinicks"]`)
        setData(clinickResponse)
      } catch (error) {
        console.error("Error fetching clinics:", error)
      }
    }
    fetchClinics()
  }, [locale])


  console.log(slugData, 'slugData')

  return (
    <div className='flex flex-col gap-[120px] mdl:gap-[150px] xl:gap-[200px]'>
      <BannerClinicsItems  name={slugData?.name} bannerImage={slugData?.bannerImage}/>

      <AllInfoClinick name={slugData?.name} adress={slugData?.address} description={slugData?.description}
      rating={slugData?.rating} />

      {data.length > 0 && <ClinickGallery gallereya={slugData?.gallereya} />}
      {data.length > 0 && <SpesialClinick specionizedclicnick={slugData?.specionizedclicnick} />}
      <SeriveAndLechenya serviceForLecheniye={slugData?.serviceForLecheniye} />\
      <Doctors doctors={slugData?.doctors} />
      {data.length > 0 && (
        <Pakets pakets={slugData?.pakets} locale={locale} />
      )}
      <Reviews />
      <div className='mx-[16px] slg:mx-[20px] 2xl:mx-[200px]'>
        <Faq />

      </div>
      <div className='mx-[16px] slg:mx-[20px] 2xl:mx-[200px]'>
        <ClinicsForm />

      </div>
      <div className='mx-[16px] slg:mx-[20px] 2xl:mx-[200px]'>
      <ClinickItemMap  locale={locale} address={slugData?.address} phone={slugData?.phone} telegram={slugData?.telegram} instagram={slugData?.instagram} />
      </div>
      <SmilarClinick data={data} />
    </div>
  )
}


export default MainClinicsItems