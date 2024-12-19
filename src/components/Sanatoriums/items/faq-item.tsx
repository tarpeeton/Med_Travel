"use client"
import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import Title from '../../ui/title'

import { faqData } from '@/constants/Faq'
import useLocale from '@/hooks/useLocale'


interface ArrowProps {
  isOpen: boolean
}

const Arrow: React.FC<ArrowProps> = ({ isOpen }) => (
  <>
    {isOpen ? (
      <IoIosArrowUp className='2xl:text-[26px]' />
    ) : (
      <IoIosArrowDown className='2xl:text-[26px]' />
    )}
  </>
)

const FaqItemSanathory: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const locale = useLocale()
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full px-[16px] mdl:px-[20px] 2xl:px-[200px] ">
      <Title  text={{ru: 'Часто задаваемые вопросы' , uz: "Ko‘p so‘raladigan savollar" , en: "Frequently Asked Questions"}} />
      <div className='mt-[30px] mdl:mt-[40px] 2xl:mt-[50px]'>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full flex justify-between items-start text-left p-4 text-lg transition-all duration-500 ${openIndex === index ? 'text-[#1AB2A6]' : 'text-black'}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className={`text-[20px] font-raleway font-medium mdx:text-[26px] xl:text-[25px] max-mdx:max-w-[80%] transition-all duration-100`}>
                {item.question[locale]}
              </span>
              <span className={`flex-shrink-0 w-[35px] h-[35px] mdl:w-[40px] mdl:h-[40px] 2xl:w-[50px] 2xl:h-[50px] flex items-center justify-center rounded-full border transition-all duration-200 ${openIndex === index ? 'border-[#1AB2A6] text-[#1AB2A6]' : 'border-titleDark text-black'}`}>
                <Arrow isOpen={openIndex === index} />
              </span>
            </button>
            <div className={`border-b border-[#E1E1E1] overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
              <p className="p-4 text-[15px] mdx:text-[16px] font-raleway text-[#505050]">{item.answer[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqItemSanathory
