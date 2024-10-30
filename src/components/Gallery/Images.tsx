import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { DataItem } from './Main'
import { urlFor } from '@/sanity/lib/image'

interface IGaller {
  images: DataItem[]
  sliceNumber: number
  LoadMore: () => void
}

interface SingleGalley {
  _type: "image"
  _key: string
  asset: {
    _type: "reference"
    _ref: string
  }
}

const Galler: FC<IGaller> = ({ images, sliceNumber, LoadMore }) => {
  const [gallery, setGallery] = useState<SingleGalley[]>([])

  useEffect(() => {
    // Flatten images array
    const flattenedImages: SingleGalley[] = images.flatMap(item => item.gallery)
    setGallery(flattenedImages)
  }, [images])




  return (
    <div className='flex flex-col gap-[12px] mdl:flex-row mdl:flex-wrap mdl:justify-between mdl:gap-0'>
      {gallery.slice(0, sliceNumber).map((img, index) => (
        <div key={index} className='w-full h-[220px] mdl:w-[49%] mdl:mb-[20px] mdl:h-[280px] 2xl:h-[400px] cursor-pointer'>
          {img?.asset && (
            <Image src={urlFor(img?.asset?._ref).url() || ''} alt='Tour image' width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-[6px]' />
          )}
        </div>
      ))}

      {sliceNumber < gallery.length && (
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
