"use client"
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'; // Typo correction
import Image from 'next/image';

import { RxHamburgerMenu } from "react-icons/rx";


const Header = ({ locale }: { locale: string }) => {

  const [menu , setMenu] = useState(false)
  const toggleMenuOpen = () => setMenu(!menu)

  return (
    <div className='flex flex-row justify-between bg-white px-[16px]'>
        <div className='logo flex items-center'>
          <Image  src='https://ucarecdn.com/45e7f638-36f8-4bd4-be6a-06401215d636/-/preview/65x65/' alt='Logo '  width={65} height={65} className='object-cover' />
        </div>
        <div className='flex flex-row items-center gap-[16px]'>
            <div className=''>
              <LanguageSwitcher locale={locale} />
            </div>
            <button onClick={toggleMenuOpen}>
              <RxHamburgerMenu size={25} className='text-black'/>
            </button>
        </div>
    </div>
  );
};

export default Header;
