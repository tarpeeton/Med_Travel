"use client"
import AllInfoClinick from '@/components/Clinics/items/AllInfo'
import BannerClinicsItems from '@/components/Clinics/items/Banner'
import ClinickGallery from '@/components/Clinics/items/gallery'
import useLocale from '@/hooks/useLocale'
import { client } from '@/sanity/lib/client'
import { useState , useEffect } from 'react'
import {ClinicDataInterface , GallereyaClinikc} from '@/interface/clinicks.interface'
import SpesialClinick from '@/components/Clinics/items/spesial'
import SeriveAndLechenya from '@/components/Clinics/items/service'

const MainClinicsItems = () => {
  const [data , setData] = useState<ClinicDataInterface[] | []>([])
  const locale = useLocale()


  useEffect(() => {
    const fetchClinics = async () => {
        try {
            const clinickResponse = await client.fetch(`
                *[_type == "clinicks"]`)
            // setClinics(clinickResponse)
              console.log(clinickResponse , 'clinickResponseclinickResponseclinickResponse')
              setData(clinickResponse)
        } catch (error) {
            console.error("Error fetching clinics:", error)
        }
    }
    fetchClinics()
}, [locale])

  return (
    <div className='flex flex-col gap-[120px] mdl:gap-[150px] xl:gap-[200px]'>
      <BannerClinicsItems />
      <AllInfoClinick />
      {data.length > 0 && <ClinickGallery gallereya={data[0].gallereya} />}
      {data.length > 0 && <SpesialClinick  specionizedclicnick={data[0].specionizedclicnick}/> }
       <SeriveAndLechenya serviceForLecheniye={data[0]?.serviceForLecheniye}/>
    </div>
  )
}


export default MainClinicsItems