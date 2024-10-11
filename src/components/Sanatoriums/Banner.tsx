'use client'
import { FC, useState, useEffect } from 'react'
import TursTitle from '../ui/tursTitle'
import bgSanathorium from '@/public/gallery/bg.jpg'

const suggestions = [
    "Санаторно-курортный комплекс «Тибет»",
    "Санаторно-курортный комплекс «Бухара»",
    "Санаторно-курортный комплекс «Ташкент»",
    "Санаторно-курортный комплекс «Самарканд»",
    "Санаторно-курортный комплекс «Хива»",
]

const Banner: FC = () => {
    const [inputValue, setInputValue] = useState('')
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        // Throttle the suggestion filtering
        const handler = setTimeout(() => {
            if (inputValue) {
                const filtered = suggestions.filter(suggestion =>
                    suggestion.toLowerCase().includes(inputValue.toLowerCase())
                )
                setFilteredSuggestions(filtered)
                setIsDropdownOpen(true)
                console.log('Filtered Suggestions:', filtered) // Log the filtered suggestions
            } else {
                setFilteredSuggestions([])
                setIsDropdownOpen(false)
                console.log('No input, hiding suggestions') // Log when no input
            }
        }, 300) // Adjust the delay as necessary

        return () => clearTimeout(handler)
    }, [inputValue])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion)
        setIsDropdownOpen(false)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${bgSanathorium.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
            className="h-[230px] mdl:h-[240px] 2xl:h-[300px]"
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
            <div className="py-[40px] px-[16px] relative z-[99] mdl:mx-[20px] 2xl:mx-[200px]">
                <TursTitle title="Санатории Узбекистана" />
                <p className="text-white text-[15px] mdl:text-[18px] 2xl:text-[20px] font-semibold font-raleway mt-[8px] mdl:mt-[10px]">
                    Оздоровление и отдых в лучших санаториях Узбекистана
                </p>
            </div>
            <div className="mt-[-20px] bg-white mx-[16px] mdl:mx-[20px] rounded-[20px] py-[25px] px-[20px] relative z-[99] 2xl:mx-[200px] shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
                <form>
                    <input
                        placeholder='Введите название санатория'
                        value={inputValue}
                        onChange={handleInputChange}
                        className='border outline-none w-full focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px]'
                    />
                    <select
                        aria-placeholder='Цель поездки'
                        className='border w-full outline-none focus:border-green100 border-borderColor rounded-[10px] py-[13.5px] px-[16px] mt-[16px]'
                    >
                        <option value="" disabled selected className='bg-[#E8F7F6] text-[#1AB2A6]'>Цель поездки</option>
                        <option value="category1" className='bg-[#E8F7F6] text-[#1AB2A6]'>Лечение</option>
                        <option value="category2" className='bg-[#E8F7F6] text-[#1AB2A6]'>Отдых</option>
                        <option value="category3" className='bg-[#E8F7F6] text-[#1AB2A6]'>Реабилитация</option>
                    </select>
                    {isDropdownOpen && filteredSuggestions.length > 0 && (
                        <div className="absolute z-10 w-[90%] bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
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

                    <button className="greenButton w-full font-bold p-[16px] mdl:w-[35%] mdl:py-[10px] mdl:px-[20px] mt-[25px]">Поиск</button>
                </form>
            </div>
        </div>
    )
}

export default Banner
