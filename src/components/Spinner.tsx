// Spinner.tsx
import React from 'react';
import Image from 'next/image';
import SpinnerGif from '@/public/loader.gif'; // Ensure this path is correct

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Image src={SpinnerGif.src} alt="Loading..." width={800} height={600} quality={100} className='w-full h-full' />
    </div>
  );
};

export default Spinner;
