"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import Title from '../ui/title'

const faqData = [
  {
    question: "Какие достопримечательности включены в туры по Узбекистану?",
    answer: "В туры по Узбекистану обычно включены ключевые достопримечательности, такие как древний Самарканд с его знаменитым Регистаном и мавзолеем Гур-Эмир, историческая Бухара с крепостью Арк и медресе Мири-Араб, а также живописная Хива с её уникальным старым городом Ичан-Кала. Также туристы могут посетить современный Ташкент с его старинными мечетями и базарами, а также родину Амира Тимура — Шахрисабз, где находится дворец Ак-Сарай и другие памятники великого завоевателя"
  },
  {
    question: "Какие документы необходимы для въезда в Узбекистан?",
    answer: "faq_answer_2"
  },
  {
    question: "Какое время года лучше всего подходит для путешествия по Узбекистану?",
    answer: "faq_answer_3"
  },
  {
    question: "Предусмотрены ли туры с гидом на русском/английском языке?",
    answer: "faq_answer_4"
  },
  {
    question: "Включена ли стоимость авиабилетов в цену тура?",
    answer: "faq_answer_4"
  }
]

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

const Faq: React.FC = () => {
  const t = useTranslations('investmentsDubai.PopularReviews')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full mt-[120px] mdl:mt-[180px] 2xl:mt-[200px]">
      <Title title='Часто задаваемые вопросы' />
      <div className='mt-[30px] mdl:mt-[40px] 2xl:mt-[50px]'>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full flex justify-between items-start text-left p-4 text-lg transition-all duration-700 ${openIndex === index ? 'text-[#1AB2A6]' : 'text-black'}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className={`text-[22px] font-raleway font-medium mdx:text-[26px] xl:text-[30px] max-mdx:max-w-[80%] transition-all duration-1000`}>
                {item.question}
              </span>
              <span className={`flex-shrink-0 w-[35px] h-[35px] mdl:w-[40px] mdl:h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'border-[#1AB2A6] text-[#1AB2A6]' : 'border-titleDark text-black'}`}>
                <Arrow isOpen={openIndex === index} />
              </span>
            </button>
            <div className={`border-b border-[#E1E1E1] overflow-hidden transition-all duration-600 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
              <p className="p-4 text-[15px] mdx:text-[20px] font-raleway text-[#505050]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
