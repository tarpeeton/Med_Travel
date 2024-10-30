'use client'
import { FC, useEffect, useState, RefObject } from 'react'
import Title from '../ui/title'
import useSlice from '@/hooks/useSlice'
import LeanMoreButton from '../ui/more'
import { IClinick } from '@/interface/Clinick'
import useLocale from '@/hooks/useLocale'


interface BannerContent {
  clinics: IClinick[]
  animation: RefObject<HTMLDivElement>
}

const Content: FC<BannerContent> = ({ clinics, animation }) => {
  const { sliceNumber, handleSliceNumber } = useSlice(10)
  const [loading, setLoading] = useState(true)
  const [serviceVison, setServiceVision] = useState(4)
  const handleAllServiceVision = () => setServiceVision(Number.MAX_SAFE_INTEGER)
  const locale = useLocale()

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 600) // Simulate a data fetch

    return () => clearTimeout(timeout)
  }, [clinics])

  return (
    <div className='mt-[310px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] 2xl:mt-[160px]'>
      <Title text={{ ru: 'Доступные клиники', uz: "", en: "" }} />

      <div className='flex flex-col mt-[25px] mdl:mt-[35px] w-full 2xl:mt-[50px] mdl:flex-row mdl:flex-wrap mdl:justify-between' ref={animation}>
        {clinics.length > 0 ? (
          clinics.map((data, index) => {

            return (
              <div key={index} className='rounded-[15px] mdl:rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)] py-[20px] px-[16px] mdl:py-[30px] mdl:px-[24px] mdl:w-[49%] mb-[20px] mdl:mb-[30px] 2xl:mb-[40px] 2xl:w-[32%] cursor-pointer'>
                <div>
                  <p className='text-[18px] mdl:text-[22px] 2xl:text-[25px] font-bold font-raleway'>{data.name}</p>
                  <p className='text-[14px] mdl:text-[17px] 2xl:text-[18px] mt-[8px] mdl:mt-[9px] text-[#7C7C7C] font-medium font-raleway'>{data.address[locale]}</p>
                </div>
                <div className='flex flex-row flex-wrap mt-[20px] mdl:mt-[21px] 2xl:mt-[30px] gap-[8px]'>
                  {data.services.slice(0, serviceVison).map((ser, index) => (
                    <p key={index} className='bg-[#E8F7F6] text-[#1AB2A6] rounded-[5px] py-[8px] px-[12px] text-center font-semibold mdl:text-[16px] 2xl:text-[16.5px]'>
                      {ser.name[locale]}
                    </p>
                  ))}

                  {serviceVison < data.services.length && (
                    <button onClick={handleAllServiceVision} className='bg-[#1AB2A6] text-white rounded-[5px] py-[8px] px-[30px] text-center font-semibold mdl:text-[16px] 2xl:text-[16.5px]'>
                      Все услуги
                    </button>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <p className='text-[15px] text-[#7C7C7C] mdl:text-[18px] 2xl:text-[19px] font-semibold font-raleway'>
            Ничего не найдено. Попробуйте изменить параметры фильтра
          </p>
        )
        }
      </div>

      {!loading && sliceNumber < (clinics.length || 0) && (
        <LeanMoreButton sliceCounterUp={handleSliceNumber} aria-label="Load more clinics" />
      )}

    </div>
  )
}

export default Content
