"use client"
import { client } from '@/sanity/lib/client'
import { useState, useEffect } from 'react'
import BannerSanatoriumsItems from '@/components/Sanatoriums/items/banner-item'
import { useParams } from 'next/navigation'
import useLocale from '@/hooks/useLocale'
import { ISanatorium } from '@/interface/sanatorium.interface'
import AllInfoItems from '@/components/Sanatoriums/items/info-item'
import SanathoryGallery from '@/components/Sanatoriums/items/gallery-item'
import SpesialSanathory from '@/components/Sanatoriums/items/spesialization-item'
import ServiceItem from '@/components/Sanatoriums/items/service-item'
import RoomsItems from '@/components/Sanatoriums/items/rooms-item'
import ProggramItem from '@/components/Sanatoriums/items/programm-item'
import PaketsSanathory from '@/components/Sanatoriums/items/pakets-item'
import Reviews from '@/components/Main/Reviews'
import FaqItemSanathory from '@/components/Sanatoriums/items/faq-item'
import SanathoryForm from '@/components/Sanatoriums/items/form-item'
import SanathoryMapItem from '@/components/Sanatoriums/items/map-items'
import SimilarSanathory from '@/components/Sanatoriums/items/similar-item'



const MainSanathoriumItems = () => {
  const {slug} = useParams()
  const locale = useLocale()
  const [slugData , setSlugData] = useState<ISanatorium | null>(null)

  useEffect(() => {
    const fetchClinicsBySlug = async () => {
      try {
        const response = await client.fetch(`
          *[_type == "sanatoriums" && slug.current == $slug][0]
        `, { slug });

        setSlugData(response); // Устанавливаем данные для конкретного slug
      } catch (error) {
        console.error('Error fetching clinic by slug:', error);
      }
    };

    if (slug) {
      fetchClinicsBySlug();
    }
  }, [slug, locale]); // Перезапускаем, если slug или locale изменятс



  return (
    <div className='flex flex-col gap-[120px] mdl:gap-[150px] xl:gap-[200px]'>
      <BannerSanatoriumsItems  name={slugData?.name[locale]} bannerImage={slugData?.bannerImage}/>
      <AllInfoItems 
        name={slugData?.name[locale]} 
        description={slugData?.description} 
        rating={slugData?.rating} 
        adress={slugData?.address} 
        images={slugData?.gallereya ? [slugData.gallereya[0], slugData.gallereya[1]] : []}
      />

      <SanathoryGallery gallereya={slugData?.gallereya} />
      <SpesialSanathory data={slugData?.specializations} />
      <ServiceItem mainServiceImage={slugData?.mainServiceImage} mainServices={slugData?.mainServices} moreServices={slugData?.additionalServices} />

      <RoomsItems data={slugData?.roomTypes} />
      <ProggramItem  data={slugData?.stayProgram}/>
      <PaketsSanathory pakets={slugData?.packages} />
      <Reviews />
      <FaqItemSanathory />
      <SanathoryForm />
      <SanathoryMapItem address={slugData?.address} phone={slugData?.phone} telegram={slugData?.telegram} instagram={slugData?.instagram} />
      <SimilarSanathory />
    </div>
  )
}


export default MainSanathoriumItems