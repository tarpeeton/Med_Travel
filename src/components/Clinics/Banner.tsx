'use client'
import { FC, useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import TursTitle from '../ui/tursTitle'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import BannerImage from '@/public/klinika/banner.png'
import { IClinick } from '@/interface/Clinick'
import { client } from '@/sanity/lib/client'
import useLocale from '@/hooks/useLocale'



interface BannerProps {
    clinics: IClinick[]
    setClinics: Dispatch<SetStateAction<IClinick[]>>
    setFilteredData: Dispatch<SetStateAction<IClinick[]>>
}

interface SelectService {
    _id: string,
    name: {
        ru: string,
        uz: string,
        en: string,
    }
}

const Banner: FC<BannerProps> = ({ clinics, setClinics, setFilteredData }) => {
    const locale = useLocale()
    const [inputValue, setInputValue] = useState('')
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isSuggestionDropdownOpen, setIsSuggestionDropdownOpen] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState<SelectService[]>([])
    const [categories, setCategories] = useState<SelectService[]>([])
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const suggestionDropdownRef = useRef<HTMLDivElement | null>(null) // Tavsiyalar uchun yangi ref

    // Tavsiyalarni tanlaganda
    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion)
        setIsSuggestionDropdownOpen(false)
        setIsDropdownOpen(false)
    }


    // FETCH ALL CLINICK
    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const clinickResponse = await client.fetch(`
                    *[_type == "clinic"]{
                      _id,
                      name,
                      address,
                      "services": services[]->{
                        _id,
                        name
                      }
                    }
                `)
                setClinics(clinickResponse)
            } catch (error) {
                console.error("Error fetching clinics:", error)
            }
        }
        fetchClinics()
    }, [locale])

    // FETCH ALL COTEGORIES
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const clinickService = await client.fetch(`
                    *[_type == "service"]{_id , name}
                `)
                setCategories(clinickService || [])
            } catch (error) {
                console.error("Error fetching categories:", error)
            }
        }
        fetchCategories()
    }, [locale])

    // INPUT CHANGER 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        const filteredSuggestions = clinics
            .map(clinic => clinic.name) // Locale ga mos keladigan nomlarni olish
            .filter(name => name.toLowerCase().includes(e.target.value.toLowerCase())) // Filtrlash
        setFilteredSuggestions(filteredSuggestions)
        setIsSuggestionDropdownOpen(true) // Tavsiyalarni ko'rsatish
    }

    // Kotegoriyani Tanlash uchun 
    const handleCategorySelect = (category: SelectService) => {
        setSelectedCategories(prevSelected => {
            const isSelected = prevSelected.some(item => item._id === category._id)
            return isSelected ? prevSelected.filter(item => item._id !== category._id) : [...prevSelected, category]
        })
    }

    const toggleCategoryDropdown = () => {
        setIsDropdownOpen(prev => !prev)
        setIsSuggestionDropdownOpen(false)
    }


    useEffect(() => {
        const handleClickOutsideSuggestion = (event: MouseEvent) => {
            if (suggestionDropdownRef.current && !suggestionDropdownRef.current.contains(event.target as Node)) {
                setIsSuggestionDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutsideSuggestion)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSuggestion)
        }
    }, [suggestionDropdownRef])


    useEffect(() => {
        const handleClickOutsideDropdown = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutsideDropdown)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideDropdown)
        }
    }, [dropdownRef])
    // Klinikalarni filtrlashtirish
    const FilterData = () => {
        const filtered = clinics.filter(clinic => {
            const matchesName = clinic.name.toLowerCase().includes(inputValue.toLowerCase())
            const matchesCategories = selectedCategories.length === 0 ||
                clinic.services.some(service =>
                    selectedCategories.some(selected => selected._id === service._id)
                )
            return matchesName && matchesCategories
        })
        setFilteredData(filtered)
    }


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
                <TursTitle title="Клиники Узбекистана" />
                <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-medium font-raleway mt-[8px] mdl:mt-[10px]">
                    Ваш путь к здоровью через медицинский туризм
                </p>
            </div>
            <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99] 2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
                <form className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between'>
                    <input
                        placeholder='Введите название  клиники'
                        value={inputValue}
                        onChange={handleInputChange}
                        className='border 2xl:w-[42%] outline-none w-full focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px]'
                    />
                    <div className="relative w-full 2xl:w-[40%] mt-[16px] 2xl:mt-0" ref={dropdownRef}>
                        <div
                            onClick={toggleCategoryDropdown}
                            className={`border w-full outline-none flex flex-row items-center justify-between focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px] cursor-pointer ${selectedCategories.length === 0 ? 'text-[#A0AEC0]' : 'text-[#1AB2A6]'}`}
                        >
                            {selectedCategories.length > 0 ? selectedCategories.map(cat => cat.name[locale]).join(', ') : 'консультации специалистов'}
                            <MdOutlineKeyboardArrowDown size={22} className='text-[#7C7C7C]' />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-[20px] mt-1 max-h-60 overflow-auto mdl:rounded-[15px]">
                                {categories.map(category => (
                                    <div
                                        key={category._id}
                                        className="flex items-center py-[15px] px-[12px] cursor-pointer hover:bg-[#E8F7F6] border-b border-borderColor"
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.some(item => item._id === category._id)}
                                            onChange={() => handleCategorySelect(category)}
                                            className="form-checkbox h-4 w-4 accent-[#05a397] border-gray-300 rounded-[8px] focus:ring-0 mr-2 "
                                        />
                                        <span className="text-titleDark font-raleway text-[15px] mdl:text-[17px]">{category.name[locale]}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {isSuggestionDropdownOpen && filteredSuggestions.length > 0 && (
                        <div ref={suggestionDropdownRef} className="absolute z-10 w-[88%] top-[80px] bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto 2xl:w-[40%] 2xl:top-[90px]">
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
                    <button type='button' onClick={FilterData} className="greenButton 2xl:py-[13.5px] 2xl:w-[17%] w-full 2xl:mt-0 font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] mt-[25px]">Поиск</button>
                </form>
            </div>
        </div>
    )
}

export default Banner
