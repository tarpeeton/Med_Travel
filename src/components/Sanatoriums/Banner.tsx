'use client';
import { FC, useState , useRef , useEffect } from 'react';
import TursTitle from '../ui/tursTitle';
import bgSanathorium from '@/public/gallery/bg.jpg';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IFilterProps } from '@/interface/Sanathory';
import useLocale from '@/hooks/useLocale';

const Banner: FC<IFilterProps> = ({ cotegory, setFilters, filters , Name }) => {
    const [inputValue, setInputValue] = useState(filters.name);
    const [_id, setID] = useState('0');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const suggestionsRef = useRef<HTMLDivElement>(null);
   

    // Input o'zgarishlarini boshqarish
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        // Faqat mos keladigan variantlarni filtrlash
        const filteredSuggestions = Name.filter((sanatorium) =>
            sanatorium.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredSuggestions(filteredSuggestions);
        setIsOpen(true); // Tavsiyalar oynasini ko'rsatish
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
        setIsOpen(false);  // Tavsiyalar oynasini yopish
    };

    const handleCategorySelect = (category: string, _id: string) => {
        setSelectedCategory(category);
        setID(_id);
        setIsDropdownOpen(false);
    };

    const setFilterToParrent = () => {
        setFilters({ name: inputValue, _id: _id });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
                setIsOpen(false); // Close suggestions dropdown
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [suggestionsRef]);

    return (
        <div
            style={{
                backgroundImage: `url(${bgSanathorium.src})`,
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
                <TursTitle title="Санатории Узбекистана" />
                <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
                    Оздоровление и отдых в лучших санаториях Узбекистана
                </p>
            </div>

            <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99] 2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
                <div className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between'>
                    <input
                        placeholder="Введите название санатория"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => setIsOpen(true)}
                        className="border outline-none w-full 2xl:w-[42%] focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px]"
                    />

                    {isOpen && filteredSuggestions.length > 0 && (
                        <div ref={suggestionsRef} className="absolute z-10 w-[89%] bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto 2xl:top-[90px] 2xl:w-[40.5%] top-[80px]">
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

                    <div className="relative w-full 2xl:w-[40%] mt-[16px] 2xl:mt-0">
                        <div 
                            onClick={() => setIsDropdownOpen(prev => !prev)} 
                            className={`border w-full outline-none flex flex-row items-center justify-between focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px] cursor-pointer ${!selectedCategory ? 'text-[#A0AEC0]' : 'text-[#1AB2A6]'}`}
                        >
                            {selectedCategory || 'Цель поездки'}
                            <MdOutlineKeyboardArrowDown size={22} className='text-[#7C7C7C]'/>
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
                                {cotegory.map((category) => (
                                    <div
                                        key={category._id}
                                        onClick={() => handleCategorySelect(category.title[locale], category._id)}
                                        className="py-2 px-4 cursor-pointer hover:bg-[#E8F7F6] text-[#1AB2A6]"
                                    >
                                        {category.title[locale]}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button onClick={setFilterToParrent} className="greenButton 2xl:py-[13.5px] 2xl:w-[17%] w-full 2xl:mt-0 font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] mt-[25px]">
                        Поиск
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
