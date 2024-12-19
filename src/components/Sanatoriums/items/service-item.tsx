"use client"
import { FC, useState, useEffect } from 'react'
import useLocale from '@/hooks/useLocale'
import { urlFor } from '@/sanity/lib/image'
import { ISanityImage, IService } from '@/interface/sanatorium.interface'
import Image from 'next/image'

interface IServiceItemProps {
  mainServiceImage: ISanityImage | null | undefined;
  mainServices: IService[] | null | undefined;
  moreServices: IService[] | null | undefined;
}

interface ISelectedService {
  title: { ru: string, uz: string, en: string }
  id: string
}

const ServiceItem: FC<IServiceItemProps> = ({ mainServiceImage, mainServices, moreServices }) => {
  const locale = useLocale()
  const [selectedService, setSelectedService] = useState<ISelectedService | null>(null);
  const [filteredData, setFilteredData] = useState<IService[]>([])
  const [sliceNumber, setSliceNumber] = useState(3)

  const handleChangeSelectedService = (item: { ru: string, uz: string, en: string }, id: string) => {
    setSelectedService({
      title: item,
      id: id
    })
    // Reset slice number when changing tabs
    setSliceNumber(3)
  }

  const handleSliceChange = () => {
    if (sliceNumber >= filteredData.length) {
      setSliceNumber(3)
    } else {
      setSliceNumber(prev => prev + 3)
    }
  }

  useEffect(() => {
    // Set initial data
    if (!selectedService) {
      setFilteredData(mainServices || [])
      return
    }

    // Handle tab changes
    if (selectedService?.id === 'main-services') {
      setFilteredData(mainServices || [])
    } else if (selectedService?.id === 'dop-services') {
      setFilteredData(moreServices || [])
    }
  }, [selectedService, mainServices, moreServices])

  // Set initial selected service
  useEffect(() => {
    if (!selectedService && mainServices?.length) {
      handleChangeSelectedService(
        { ru: 'Основные услуги', uz: 'Asosiy xizmatlar', en: 'Main Services' },
        'main-services'
      )
    }
  }, [])

  return (
    <div className='w-full px-[16px] mdl:px-[20px] 2xl:px-[200px]'>
      <h4 className='text-[25px] font-bold font-raleway mdl:text-[35px] 2xl:text-[40px] text-titleDark mb-[20px] mdl:mb-[40px]'>
        {locale === 'ru' ? 'Услуги и процедуры' : locale === 'uz' ? 'Xizmatlar va proseduralar' : 'Services'}
      </h4>
      <div className='flex flex-col 2xl:flex-row'>
        <div className='w-full h-[250px] mdl:h-[467px] 2xl:w-[50%]'>
          {mainServiceImage?.asset?._ref && (
            <Image
              src={urlFor(mainServiceImage.asset._ref).url()}
              alt="Service Image"
              className='object-cover rounded-[20px] w-full h-full'
              width={1000}
              height={1000}
              quality={100}
            />
          )}
        </div>
        {/* TEXT INFO FILTER */}
        <div className='mt-[20px] mdl:mt-[40px] 2xl:mt-[0] 2xl:ml-[40px] flex-1'>
          <div className='w-full'>
            <div className='flex flex-row gap-[50px] mdl:justify-between mdl:gap-0 w-full border-b-[4px] border-b-[#D3D3D3]'>
              <div className='relative'>
                <button
                  onClick={() => handleChangeSelectedService({ ru: 'Основные услуги', uz: 'Asosiy xizmatlar', en: 'Main Services' }, 'main-services')}
                  className={`text-[22px] 2xl:text-[22px]  mdl:text-[30px] font-bold text-left font-raleway ${selectedService?.id === 'main-services' || !selectedService ? 'text-titleDark' : 'text-[#505050]'} pb-[16px] w-full`}
                >
                  {locale === 'ru' ? "Основные услуги" : locale === 'uz' ? "Asosiy xizmatlar" : "Main Services"}
                </button>
                {(selectedService?.id === 'main-services' || !selectedService) && (
                  <div className='absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#1AB2A6]'></div>
                )}
              </div>
              <div className='relative'>
                <button
                  onClick={() => handleChangeSelectedService({ ru: 'Дополнительные услуги', uz: 'Qoshimcha xizmatlar', en: 'Additional Services' }, 'dop-services')}
                  className={`text-[22px] 2xl:text-[22px] mdl:text-[30px] font-bold text-left font-raleway ${selectedService?.id === 'dop-services' ? 'text-titleDark' : 'text-[#505050]'} pb-[16px] w-full`}
                >
                  {locale === 'ru' ? "Дополнительные услуги" : locale === 'uz' ? "Qoshimcha xizmatlar" : "Additional Services"}
                </button>
                {selectedService?.id === 'dop-services' && (
                  <div className='absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#1AB2A6]'></div>
                )}
              </div>
            </div>
            <div className='mt-[16px] flex flex-col mdl:mt-[20px] 2xl:mt-[40px]'>
              {filteredData?.slice(0, sliceNumber).map((item, index) => (
                <div key={index} className='flex border-y border-y-[#D1F0ED] flex-row gap-[16px] items-center py-[12px] mdl:py-[20px] 2xl:py-[28px]'>
                  <p className='text-[22px] text-[#1AB2A6] 2xl:text-[22px] font-raleway font-bold mdl:text-[30px]'>{String(index + 1).padStart(2, '0')}</p>
                  <p className='text-[22px] 2xl:text-[22px] mdl:text-[30px] text-[#505050] font-bold'>
                    {item.title[locale]}
                  </p>
                </div>
              ))}
              {filteredData.length > 3 && (
                <button onClick={handleSliceChange} className='mt-[16px] greenButton font-bold py-[12px] px-[24px] w-[60%] mdl:w-[193px] 2xl:mt-[40px]'>
                  {sliceNumber >= filteredData.length
                    ? (locale === 'ru' ? "Показать меньше" : locale === 'uz' ? "Kamroq ko'rsatish" : "Show less")
                    : (locale === 'ru' ? "Cмотреть далее" : locale === 'uz' ? "Ko'proq ko'rsatish" : "See more")
                  }
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem;