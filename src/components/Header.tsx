"use client"
import React, { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher' // Typo correction
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { FaChevronRight } from 'react-icons/fa'




const Header = ({ locale }: { locale: string }) => {
  const [menu, setMenu] = useState(false)
  const [service, setService] = useState(false)
  const [mobileService, setMobileService] = useState(true)


  const toggleMenuOpen = () => setMenu(!menu)
  const toggleServiceOpen = () => setService(!service)
  const toggleMobileService = () => setMobileService(!mobileService)
  return (
    <React.Fragment>
      <div className='flex flex-row justify-between bg-white px-[16px] slg:px-[20px] 2xl:px-[200px] z-[9999]'>
        <a href='/' className='logo flex items-center'>
          <Image src='https://ucarecdn.com/45e7f638-36f8-4bd4-be6a-06401215d636/-/preview/65x65/' alt='Logo ' width={65} height={65} className='object-cover' />
        </a>


        {/* SERVICES */}
        <div className='hidden 2xl:flex 2xl:flex-row 2xl:gap-[70px] z-[9999999]'>
          <a href='/turs' className=' flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            Туры
          </a>
          <a href='/turs' className=' flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            Клиники
          </a>
          <a href='/turs' className=' flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            Санатории
          </a>
          <a href='/turs' className=' flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            Гостиницы
          </a>
        </div>

        <div className='hidden slg:flex slg:items-center  2xl:hidden  z-[999]'>
          <button onClick={toggleServiceOpen} className='rounded-full border-[1.5px] border-[#1AB2A6] text-[#1AB2A6] flex flex-row items-center justify-center py-[10px] px-[16px] gap-[4px] text-[16px] font-semibold'>
            Услуги
            <MdKeyboardArrowDown size={24} />
          </button>
        </div>

        {/* SWITCHER AND HAMBURGER MENU */}
        <div className='flex flex-row items-center gap-[16px] 2xl:gap-[30px]'>
          <div className=''>
            <LanguageSwitcher locale={locale} menu={false} />
          </div>
          <button onClick={toggleMenuOpen}>
            <RxHamburgerMenu size={30} className='text-black' />
          </button>
        </div>
      </div>

      {
        service && (<div>
          <div className='flex flex-col z-[9999999] '>
            <a href='/turs' className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium'>
              Туры
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </a>
            <a href='/turs' className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium'>
              Клиники
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </a>
            <a href='/turs' className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium'>
              Санатории
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </a>
            <a href='/turs' className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center  border-t border-[#E8E8E8] text-[20px] font-medium'>
              Гостиницы
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </a>
          </div>
        </div>)
      }

      {
        menu ? (
          <div className='bg-white absolute top-0 right-0  w-[80%] slg:w-[50%] 2xl:w-[40%] z-[99999999]  h-full '>
            <div className='px-[20px] border-b border-[#E8E8E8]'>
              <div className='flex flex-row justify-between items-center h-[65px] '>
                <LanguageSwitcher locale={locale} menu={true} />
                <button onClick={toggleMenuOpen}>
                  <IoMdClose size={30} className='text-black slg:w-[40px] slg:h-[40px]' />
                </button>

                <div className='hidden 2xl:block w-[1px]' />
              </div>
            </div>


            <div className='flex flex-col px-[20px] mt-[25px]'>
              <button onClick={toggleMobileService} className='flex flex-row items-center gap-[4px] slg:hidden'>
                <p className='text-[#1AB2A6] text-[18px] font-semibold'>Услуги</p>
                <MdKeyboardArrowDown size={28} className={`text-[#1AB2A6] ${mobileService ? "rotate-[180deg]" : ''}`} />
              </button>

              {
                mobileService && (<div className='flex flex-col gap-[20px] text-[18px] font-medium mt-[20px] slg:text-[22px]'>
                  <a href={`${locale}/about`}>
                    О компании
                  </a>
                  <a href='/partners'>
                    Партнеры
                  </a>
                  <a href='/question'>
                    Задать вопрос
                  </a>
                  <a href='/blog'>
                    Блог
                  </a>
                  <a href='/contacts'>
                    Контакты
                  </a>
                </div>)
              }
            </div>

            <div className='flex flex-col gap-[16px] md:gap-[20px] absolute bottom-[40px] z-[9999] left-[20px]'>
              <div className='flex flex-col text-[22px] font-bold slg:text-[28px] slg:font-semibold'>
                <p>Здоровье и отдых в </p>
                <p>одном путешествии!</p>
              </div>
              <div className='w-full mt-[16px]'>
                <a href='/' className="bg-greenButton py-[16px] px-[20px] rounded-[10px] text-[14px] font-bold w-full  mdl:text-[16px] text-white">
                  Начать путешествие
                </a>
              </div>
            </div>
          </div>
        ) : null
      }
    </React.Fragment>

  )
}

export default Header
