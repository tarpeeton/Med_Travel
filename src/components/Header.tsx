"use client"
import React, { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'; // Typo correction
import Image from 'next/image';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";

const Header = ({ locale }: { locale: string }) => {
  const [menu , setMenu] = useState(false)
  const [service , setService] = useState(false)

  const toggleMenuOpen = () => setMenu(!menu)
  const toggleServiceOpen = () => setService(!service)

  return (
    <React.Fragment>
    <div className='flex flex-row justify-between bg-white px-[16px]'>
        <Link href='/' className='logo flex items-center'>
          <Image  src='https://ucarecdn.com/45e7f638-36f8-4bd4-be6a-06401215d636/-/preview/65x65/' alt='Logo '  width={65} height={65} className='object-cover' />
        </Link>
        {/* SERVICES */}

    <div className='hidden md:flex md:items-center '>
       <button onClick={toggleServiceOpen} className='rounded-full border-[1.5px] border-[#1AB2A6] text-[#1AB2A6] flex flex-row items-center justify-center py-[10px] px-[16px] gap-[4px] text-[16px] font-semibold'>
            Услуги
            <MdKeyboardArrowDown  size={24}/>
       </button>
    </div>

        {/* SWITCHER AND HAMBURGER MENU */}
        <div className='flex flex-row items-center gap-[16px]'>
            <div className=''>
              <LanguageSwitcher locale={locale} />
            </div>
            <button onClick={toggleMenuOpen}>
              <RxHamburgerMenu size={30} className='text-black'/>
            </button>
        </div>
    </div>
    

    {
      menu ? (
        <div className='bg-white absolute top-0 right-0 z-50 w-[80%] '>
          <div className='px-[20px] border-b border-[#E8E8E8]'>
          <div className='flex flex-row justify-between items-center h-[65px] '>
            <LanguageSwitcher locale={locale} />
            <button onClick={toggleMenuOpen}>
            <IoMdClose size={30} className='text-black'/>
              </button>
          </div>
          </div>
         

          <div className='flex flex-col '>

          </div>
        </div>
      ) : null
    }
    </React.Fragment>
    
  );
};

export default Header;
