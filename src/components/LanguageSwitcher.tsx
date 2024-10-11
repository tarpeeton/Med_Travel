"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiGlobe } from "react-icons/ci"
import { useState } from "react"

// Define the language type
type Language = { code: string; name: string }

const LanguageSwitcher = ({ locale, menu }: { locale: string, menu: boolean }) => {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Define available languages
  const languages: Language[] = [
    { code: "ru", name: "Ру" },
    { code: "uz", name: "Oʻz" },
    { code: "en", name: "Eng" },
  ]

  // Create a function to generate a new URL with the selected locale
  const generateLocalizedPath = (langCode: string) => {
    const segments = pathname.split("/")
    segments[1] = langCode // Replace the locale in the URL
    return segments.join("/")
  }

  // Toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className="relative mt-[4px] w-[50px]">
      {/* Button to toggle dropdown */}
      <button
        id="dropdownDefaultButton"
        className="text-black rounded-lg text-[15px] text-center inline-flex items-center gap-[4px] 2xl:gap-[8px]"
        type="button"
        onClick={toggleDropdown}
      >
        <CiGlobe className={`text-black ${menu ? '2xl:text-[#1AB2A6]' : 'text-black'}`} size={24} />

        <p className={`text-[15px] md:text-[18px] text-black font-medium 
        ${menu ? '2xl:text-[#1AB2A6]' : 'text-black'}`}>
          {locale === "ru" ? "Ру" : locale === "uz" ? "Oʻz" : "Eng"}
        </p>
      </button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div
          id="dropdown"
          className="absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-24  z-[9999]"
        >
          <ul className="py-2">
            {languages.map((lang) => (
              <li key={lang.code} className='text-[15px] slg:text-[18px] font-medium text-black'>
                <Link
                  href={generateLocalizedPath(lang.code)}
                  className="block px-4 py-2 hover:bg-gray-400  dark:hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  {lang.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
