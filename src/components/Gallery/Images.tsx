import {FC} from 'react';
import { StaticImageData } from 'next/image'; // Import StaticImageData
import  Image  from 'next/image';


interface IGaller {
  images: { photo: { url: StaticImageData } }[];
  number: number;
   // Adjusted the type to accept StaticImageData
}

const Galler: FC<IGaller> = ({images , number}) => {
  return (
    <div className='flex flex-col gap-[12px] mdl:flex-row mdl:flex-wrap mdl:justify-between mdl:gap-0'>
        {images.slice(0 , number ).map((img , index) => (
            <div key={index} className='w-full h-[220px] mdl:w-[49%] mdl:mb-[20px] mdl:h-[280px] 2xl:h-[400px] cursor-pointer '>
             <Image src={img.photo.url} alt='sdfsdf'  width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-[6px]'/>
        </div>
        ))}
        
    </div>
  );
};

export default Galler;