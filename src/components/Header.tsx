"use client"
import React, { useState, useRef, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher' // Typo correction
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from '@/i18n/routing'
import { IoMdClose } from "react-icons/io"
import { FaChevronRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import QuestionModal from './Modal/Question'

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations('Header')
  const [menu, setMenu] = useState(false)
  const [service, setService] = useState(false)
  const [mobileService, setMobileService] = useState(true)
  const [question, setQuestion] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null) // Create a ref for the menu

  const toggleOpenQuestion = () => {
    setQuestion(!question)
    toggleMenuOpen()
    setMenu(false)
  }

  const toggleMenuOpen = () => setMenu(!menu)
  const toggleServiceOpen = () => setService(!service)
  const toggleMobileService = () => setMobileService(!mobileService)

  // Effect to close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <React.Fragment>
      <div className='flex flex-row justify-between bg-[#FFFFFF] px-[16px] slg:px-[20px] 2xl:px-[200px] z-[9999]'>
        <Link href='/' className='logo flex items-center'>
          <Image src={'https://ucarecdn.com/0127b73e-4ec4-47b9-ae5c-a3e603ee4622/-/preview/499x499/'} alt='Logo' width={80} height={80} quality={100} className='object-cover' />
        </Link>

        {/* SERVICES */}
        <div className='hidden 2xl:flex 2xl:flex-row 2xl:gap-[70px] z-[9999999]'>
          <Link href='/tours' className='flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            {t('turs')}
          </Link>
          <Link href='/clinics' className='flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            Клиники
          </Link>
          <Link href='/sanatoriums' className='flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
            Санатории
          </Link>
          <Link href='/hotels' className='flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium font-raleway'>
          Страны и Отели
          </Link>
        </div>

        <div className='hidden slg:flex slg:items-center 2xl:hidden z-[999]'>
          <button onClick={toggleServiceOpen} className='rounded-full border-[1.5px] border-[#1AB2A6] text-[#1AB2A6] flex flex-row items-center justify-center py-[10px] px-[16px] gap-[4px] text-[16px] font-semibold'>
            Услуги
            <MdKeyboardArrowDown size={24} />
          </button>
        </div>

        {/* SWITCHER AND HAMBURGER MENU */}
        <div className='flex flex-row items-center gap-[16px] 2xl:gap-[30px]'>
          <div>
            <LanguageSwitcher locale={locale} menu={false} />
          </div>
          <button onClick={toggleMenuOpen}>
            <RxHamburgerMenu size={30} className='text-black' />
          </button>
        </div>
      </div>

      {service && (
        <div>
          <div className='flex flex-col z-[9999999]'>
            <Link href='/tours' onClick={toggleMenuOpen} className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium hover:text-green100'>
              Туры
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </Link>
            <Link href='/clinics' onClick={toggleMenuOpen} className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium hover:text-green100'>
              Клиники
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </Link>
            <Link href='/sanatoriums' onClick={toggleMenuOpen} className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium hover:text-green100'>
              Санатории
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </Link>
            <Link href='/hotels' onClick={toggleMenuOpen} className='p-[20px] flex flex-row gap-[10px] text-[#242424] items-center border-t border-[#E8E8E8] text-[20px] font-medium hover:text-green100'>
            Страны и Отели
              <FaChevronRight className='text-[#242424] mt-[4px]' size={15} />
            </Link>
          </div>
        </div>
      )}
      <QuestionModal visible={question} close={toggleOpenQuestion} />

      {menu && (
        <div>
          {/* Overlay */}
          <div className='fixed inset-0 bg-black opacity-50 z-[999998]' onClick={toggleMenuOpen} />

          <div ref={menuRef} className='bg-white absolute top-0 right-0 w-[80%] slg:w-[50%] 2xl:w-[40%] z-[99999999] h-full'>
            <div className='px-[20px] border-b border-[#E8E8E8]'>
              <div className='flex flex-row justify-between items-center h-[65px]'>
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

              {mobileService && (
                <div className='flex flex-col gap-[20px] text-[18px] font-medium mt-[20px] slg:text-[22px]'>
                  <Link href='/about' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    О компании
                  </Link>
                  <Link href='/partners' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    Партнеры
                  </Link>
                  <button  onClick={toggleOpenQuestion} className='text-left hover:text-green100 duration-300'>
                    Задать вопрос
                  </button>
                  <Link href='/blog' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    Блог
                  </Link>
                  <Link href='/contacts' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    Контакты
                  </Link>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-[16px] md:gap-[20px] absolute bottom-[40px] z-[9999] left-[20px]'>
              <div className='flex flex-col text-[22px] font-bold slg:text-[28px] slg:font-semibold'>
                <p>Здоровье и отдых в </p>
                <p>одном путешествии!</p>
              </div>
              <div className='w-full mt-[16px]'>
                <Link onClick={toggleMenuOpen} href='/tours' className="bg-greenButton py-[16px] px-[20px] rounded-[10px] text-[14px] font-bold w-full  mdl:text-[16px] text-white">
                  Начать путешествие
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Header
