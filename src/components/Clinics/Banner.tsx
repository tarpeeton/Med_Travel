'use client';
import { FC, useState, useEffect, useRef , Dispatch , SetStateAction } from 'react';
import TursTitle from '../ui/tursTitle';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import BannerImage from '@/public/klinika/banner.png';
import { allClinick, AllService } from '@/lib/api';
import { useParams } from 'next/navigation';

interface BannerProps {
    clinics: any[];
    setClinics: Dispatch<SetStateAction<any[]>>;
}

const Banner: FC<BannerProps> = ({ clinics, setClinics }) => {

    const { locale } = useParams<{ locale: string | string[] }>();
    const currentLocale = Array.isArray(locale) ? locale[0] : locale || 'en'; // Default to 'en' if locale is undefined
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSuggestionDropdownOpen, setIsSuggestionDropdownOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<{ id: string; name: string }[]>([]); // State for categories
    
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]); // Update to hold objects with id and name
    const dropdownRef = useRef<HTMLDivElement | null>(null);




    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const clinicsData = await allClinick(currentLocale);
                setClinics(clinicsData?.data || []);
            } catch (error) {
                console.error("Error fetching clinics:", error);
            }
        };
        fetchClinics();
    }, [currentLocale]); // Use currentLocale for dependency

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await AllService(currentLocale);
                setCategories(categoriesData.data || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, [currentLocale]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (inputValue) {
                const filtered = clinics
                    .map(clinic => clinic.name)
                    .filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));
                setFilteredSuggestions(filtered);
                setIsSuggestionDropdownOpen(true);
            } else {
                setFilteredSuggestions([]);
                setIsSuggestionDropdownOpen(false);
            }
        }, 400);

        return () => clearTimeout(handler);
    }, [inputValue, clinics]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setIsSuggestionDropdownOpen(false);
    };

    const handleCategorySelect = (category: { id: string; name: string }) => {
        setSelectedCategories((prevSelected) => {
            const isSelected = prevSelected.find(item => item.id === category.id);
            if (isSelected) {
                return prevSelected.filter(item => item.id !== category.id);
            } else {
                return [...prevSelected, category];
            }
        });
    };

    const toggleCategoryDropdown = () => {
        setIsDropdownOpen(prev => !prev);
        setIsSuggestionDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const SearchData = async () => {
        try {
            // Create a comma-separated string of selected service IDs
            const serviceIds = selectedCategories.map(category => category.id).join(',');
    
            // Use inputValue for name or undefined if empty
            const name = inputValue || undefined; 
    
            // Call allClinick with the current locale, name, and serviceIds
            const clinicsData = await allClinick(currentLocale, name, serviceIds);
            
            // Set the clinics state to display in the UI
            setClinics(clinicsData?.data || []);
        } catch (error) {
            console.error("Error searching clinics:", error);
        }
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
                <TursTitle title="Клинки доступные в медицинских турах" />
                <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-medium font-raleway mt-[8px] mdl:mt-[10px]">
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
                    <div className="relative w-full 2xl:w-[40%] mt-[16px] 2xl:mt-0" ref={dropdownRef}>
                        <div
                            onClick={toggleCategoryDropdown}
                            className={`border w-full outline-none flex flex-row items-center justify-between focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px] cursor-pointer ${selectedCategories.length === 0 ? 'text-[#A0AEC0]' : 'text-[#1AB2A6]'}`}
                        >
                            {selectedCategories.length > 0 ? selectedCategories.map(cat => cat.name).join(', ') : 'Цель поездки'}
                            <MdOutlineKeyboardArrowDown size={22} className='text-[#7C7C7C]' />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-[20px] mt-1 max-h-60 overflow-auto">
                                {categories?.map((category) => (
                                    <div
                                        key={category.id}
                                        className="flex items-center py-[15px] px-[12px] cursor-pointer hover:bg-[#E8F7F6] border-b border-borderColor"
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.some(item => item.id === category.id)}
                                            onChange={() => handleCategorySelect(category)}
                                            className="form-checkbox h-4 w-4 accent-[#05a397] border-gray-300 rounded-[8px] focus:ring-0 mr-2"
                                        />
                                        <span className="text-titleDark font-raleway text-[15px] mdl:text-[17px]">{category.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {isSuggestionDropdownOpen && filteredSuggestions.length > 0 && (
                        <div className="absolute z-10 w-[88%] top-[80px] bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto 2xl:w-[40%]">
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

                    <button type='button' onClick={SearchData} className="greenButton 2xl:py-[13.5px] 2xl:w-[17%] w-full 2xl:mt-0 font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] mt-[25px]">Поиск</button>
                </form>
            </div>
        </div>
    );
}

export default Banner;
