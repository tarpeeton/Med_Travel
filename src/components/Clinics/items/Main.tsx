"use client"
import AllInfoClinick from '@/components/Clinics/items/AllInfo'
import BannerClinicsItems from '@/components/Clinics/items/Banner'
import ClinickGallery from '@/components/Clinics/items/gallery'
import useLocale from '@/hooks/useLocale'
import { client } from '@/sanity/lib/client'
import { useState, useEffect } from 'react'
import { ClinicDataInterface, GallereyaClinikc } from '@/interface/clinicks.interface'
import SpesialClinick from '@/components/Clinics/items/spesial'
import SeriveAndLechenya from '@/components/Clinics/items/service'
import Doctors from '@/components/Clinics/items/doctors'
import Pakets from '@/components/Clinics/items/pakets'
import Reviews from '@/components/Main/Reviews'
import Faq from '@/components/Tours/Faq'
import ClinicsForm from './clinickForm'
import ClinickItemMap from '@/components/Clinics/items/ClinickMap'
import SmilarClinick from '@/components/Clinics/items/similar'


const MainClinicsItems = () => {
  const [data, setData] = useState<ClinicDataInterface[] | []>([])
  const locale = useLocale()


  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const clinickResponse = await client.fetch(`
                *[_type == "clinicks"]`)
        // setClinics(clinickResponse)
        console.log(clinickResponse, 'clinickResponseclinickResponseclinickResponse')
        setData(clinickResponse)
      } catch (error) {
        console.error("Error fetching clinics:", error)
      }
    }
    fetchClinics()
  }, [locale])
  console.log(data, "RESPONSE DATA")

  return (
    <div className='flex flex-col gap-[120px] mdl:gap-[150px] xl:gap-[200px]'>
      <BannerClinicsItems />
      <AllInfoClinick />
      {data.length > 0 && <ClinickGallery gallereya={data[0].gallereya} />}
      {data.length > 0 && <SpesialClinick specionizedclicnick={data[0].specionizedclicnick} />}
      <SeriveAndLechenya serviceForLecheniye={data[0]?.serviceForLecheniye} />\
      <Doctors doctors={data[0]?.doctors} />
      {data.length > 0 && (
        <Pakets pakets={data[0]?.pakets} locale={locale} />
      )}
      <Reviews />
      <div className='mx-[16px] slg:mx-[20px] 2xl:mx-[200px]'>
        <Faq />

      </div>
      <div className='mx-[16px] slg:mx-[20px] 2xl:mx-[200px]'>
        <ClinicsForm />

      </div>
      <div className='mx-[16px] slg:mx-[20px] 2xl:mx-[200px]'>
      <ClinickItemMap  locale={locale} address={data[0]?.address} phone={data[0]?.phone} telegram={data[0]?.telegram} instagram={data[0]?.instagram} />
      </div>
      <SmilarClinick data={data} />
    </div>
  )
}


export default MainClinicsItems