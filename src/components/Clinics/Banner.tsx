'use client'
import { FC, useState, useEffect, useRef } from 'react'
import TursTitle from '../ui/tursTitle'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import BannerImage from '@/public/klinika/banner.png'

const suggestions = [
    "Interlab",
    "Intermed",
    "Isebarg",
    "i jem",
    "I leem",
]

const Category = [
    "Анализы",
    "УЗИ-обследование",
    "ЭЭГ",
    "ЭКГ",
    "Консультации специлаистов",
    "Все услуги",
]

const Banner: FC = () => {
    const [inputValue, setInputValue] = useState('') // input qiymatini state'da saqlash
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]) // input orqali filter qilingan tavsiyalar
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) // kategoriyalar uchun dropdown ochiqmi yoki yo'q
    const [isSuggestionDropdownOpen, setIsSuggestionDropdownOpen] = useState(false) // tavsiyalar uchun dropdown ochiqmi yoki yo'q
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]) // tanlangan kategoriyalar

    const dropdownRef = useRef<HTMLDivElement | null>(null) // dropdown tashqarisida klik qilishni tekshirish uchun

    useEffect(() => {
        const handler = setTimeout(() => {
            if (inputValue) {
                const filtered = suggestions.filter(suggestion =>
                    suggestion.toLowerCase().includes(inputValue.toLowerCase())
                )
                setFilteredSuggestions(filtered)
                setIsSuggestionDropdownOpen(true) // tavsiyalarni ochish
                setIsDropdownOpen(false) // kategoriyalarni dropdown yopish
            } else {
                setFilteredSuggestions([])
                setIsSuggestionDropdownOpen(false)
            }
        }, 300)

        return () => clearTimeout(handler)
    }, [inputValue])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value) // input qiymatini yangilash
    }

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion) // tanlangan tavsiyani inputga kiritish
        setIsSuggestionDropdownOpen(false) // tavsiyalar dropdownini yopish
    }

    const handleCategorySelect = (category: string) => {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(category)) {
                // agar kategoriya allaqachon tanlangan bo'lsa, uni o'chirish
                return prevSelected.filter(item => item !== category)
            } else {
                // kategoriya tanlash
                return [...prevSelected, category]
            }
        })
    }

    const toggleCategoryDropdown = () => {
        setIsDropdownOpen(prev => !prev) // kategoriyalar dropdownini ochish yoki yopish
        setIsSuggestionDropdownOpen(false) // tavsiyalarni yopish
    }

    // Dropdown tashqarisida klik bo'lsa, dropdownni yopish
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    return (
        <div
            style={{
                backgroundImage: `url(${BannerImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
            className="h-[230px] mdl:h-[240px] 2xl:h-[330px]"
        >
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10,
                }}
            ></div>
            <div className="py-[40px] 2xl:py-[80px] px-[16px] relative z-[99] mdl:mx-[20px] 2xl:mx-[200px]">
                <TursTitle title="Клинки доступные в медицинских турах" />
                <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
                    Ваш путь к здоровью через медицинский туризм
                </p>
            </div>
            <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99] 2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
                <form className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between'>
                    <input
                        placeholder='Введите название санатория'
                        value={inputValue}
                        onChange={handleInputChange}
                        className='border 2xl:w-[42%] outline-none w-full focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px]'
                    />

                    {/* FILTER UCHUN DROPWON */}
                    <div className="relative w-full 2xl:w-[40%] mt-[16px] 2xl:mt-0" ref={dropdownRef}>
                        <div
                            onClick={toggleCategoryDropdown}
                            className={`border w-full outline-none flex flex-row items-center justify-between focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px] cursor-pointer ${selectedCategories.length === 0 ? 'text-[#A0AEC0]' : 'text-[#1AB2A6]'}`}
                        >
                            {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'Цель поездки'}
                            <MdOutlineKeyboardArrowDown size={22} className='text-[#7C7C7C]' />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-[20px] mt-1 max-h-60 overflow-auto">
                                {Category.map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center py-[15px] px-[12px]  cursor-pointer hover:bg-[#E8F7F6] border-b border-borderColor"
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategorySelect(category)}
                                            className="form-checkbox h-4 w-4  accent-[#05a397]  border-gray-300 rounded-[8px] focus:ring-0 mr-2"
                                        />
                                        <span className="text-titleDark font-raleway text-[15px] mdl:text-[17px]">{category}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* KIRITILIYOTKAN MALUMOT BORMI YOQMI TEKSHIRUVCHI */}
                    {isSuggestionDropdownOpen && filteredSuggestions.length > 0 && (
                        <div className="absolute z-10 w-[88%] top-[80px] bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto  2xl:w-[40%]">
                            {filteredSuggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="py-2 px-4 cursor-pointer hover:bg-[#E8F7F6] text-[#1AB2A6]"
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}

                    <button className="greenButton 2xl:py-[13.5px] 2xl:w-[17%] w-full 2xl:mt-0 font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] mt-[25px]">Поиск</button>
                </form>
            </div>
        </div>
    )
}

export default Banner
