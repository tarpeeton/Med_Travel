import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { IGallery } from '@/interface/Gallery'

interface IGaller {
  images: IGallery[]
  sliceNumber: number
  LoadMore: () => void
}



const Galler: FC<IGaller> = ({ images, sliceNumber, LoadMore }) => {




  return (
    <div className='flex flex-col gap-[12px] mdl:flex-row mdl:flex-wrap mdl:justify-between mdl:gap-0'>
      {images.slice(0, sliceNumber).map((img, index) => (
        <div key={index} className='w-full h-[220px] mdl:w-[49%] mdl:mb-[20px] mdl:h-[280px] 2xl:h-[400px] cursor-pointer'>
          {img?.photo.asset && (
            <Image src={urlFor(img?.photo.asset?._ref).url() || ''} alt='Tour image' width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-[6px]' />
          )}
        </div>
      ))}

      {sliceNumber < images.length && (
        <div className='w-full flex justify-center items-center mt-[20px] mdl:mt-[70px]'>
          <button
            onClick={LoadMore}
            className='bg-green100 text-white font-semibold w-[60%] mdl:w-[30%] 3xl:w-[20%] text-[14px] mdl:text-[16px] py-[15px] px-[20px] rounded-[10px]'
          >
            Загрузить еще
          </button>
        </div>
      )}

    </div>
  )
}

export default Galler
