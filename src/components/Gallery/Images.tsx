import {FC} from 'react';
import  Image  from 'next/image';


interface IGaller {
  images: { id: number , url: string}[];
  sliceNumber: number
}

const Galler: FC<IGaller> = ({images , sliceNumber }) => {
  return (
    <div className='flex flex-col gap-[12px] mdl:flex-row mdl:flex-wrap mdl:justify-between mdl:gap-0'>
        {images.slice(0, sliceNumber).map((img) => ( // Use slice instead of splice
        <div key={img.id} className='w-full h-[220px] mdl:w-[49%] mdl:mb-[20px] mdl:h-[280px] 2xl:h-[400px] cursor-pointer'>
          <Image src={img.url} alt='Tour image' width={1000} height={1000} quality={100} className='w-full h-full object-cover rounded-[6px]' />
        </div>
      ))}
    </div>
  );
};

export default Galler;