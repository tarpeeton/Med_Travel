"use client"
import { FC, useState } from "react"
import ConsultationModal from '../Modal/ConsultationSuccess'
import { IFormProps } from "@/interface/IForm"
import { consultation } from "@/lib/api"
import useLocale from '@/hooks/useLocale'




const FloatingLabelInput: FC<IFormProps> = ({ label, type, id, value, onChange, pattern, inputMode, placeholder }) => {
  const [focused, setFocused] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  const handleBlur = () => {
    setFocused(false)
    if (!value) {
      setIsInvalid(true) // Mark input as invalid if no value
    } else {
      setIsInvalid(false)
    }
  }

  const handleFocus = () => setFocused(true)

  return (
    <div className="relative mt-4">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        inputMode={inputMode}
        pattern={pattern}
        className={`block py-2.5 px-0 w-full text-sm mb-[20px] text-gray-900 bg-transparent border-0 border-b-[1px] ${isInvalid ? "border-red-500" : "border-gray-300"
          } appearance-none  dark:border-[#A7A7A7] dark:focus:border-[#1AB2A6] focus:outline-none focus:ring-0 focus:border-[#1AB2A6] peer text-[18px]`}
        placeholder={focused ? placeholder : ""} // Placeholder is required for floating effect
      />
      <label
        htmlFor={id}
        className={`absolute text-sm ${isInvalid ? "text-red-500" : "text-[#A7A7A7]"
          } dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#1AB2A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 2xl:text-[16px]`}
      >
        {label}
      </label>
    </div>
  )
}

// Form component
const Form: FC = () => {
  const locale = useLocale()

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isFormValid, setIsFormValid] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const handleCloseModalVisible = () => setModalVisible(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormValues((prevState) => ({ ...prevState, [id]: value }))
    setIsFormValid(true) // Reset the form validation when user types
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check all inputs for validity
    if (!formValues.name || !formValues.phone || !formValues.email) {
      setIsFormValid(false)
      return
    }

    try {
      // Submit form data to API
      await consultation(formValues.name, formValues.phone, formValues.email)
      setModalVisible(true)
      // Reset form values
      setFormValues({ name: "", phone: "", email: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }


  return (
    <div>
      <div
        className="rounded-[20px] py-[20px] px-[16px] flex flex-col bg-cover bg-center mdl:py-[40px] mdl:px-[30px] 2xl:flex-row 2xl:justify-between 2xl:py-[16px] 2xl:px-[16px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ucarecdn.com/6ed7fa5d-555c-481c-838f-962e2a898a1c/-/preview/1000x667/)`,
        }}
      >
        <div className="2xl:w-[40%] 2xl:mt-[44px] 2xl:ml-[40px]">
          <p className="text-[25px] font-bold font-raleway text-white mdl:text-[45px] mdl:w-[70%] 2xl:w-[100%] 2xl:text-[40px] 4xl:w-[90%] 4xl:text-[50px]">
            {
              locale === 'ru' ? "Заботьтесь о своем здоровье с нами!"
                : locale === 'uz' ? "Salomatligingizni biz bilan asrang!"
                  : "Take care of your health with us!"
            }

          </p>
          <p className="text-[15px] text-white font-medium mt-[12px] mdl:text-[15px] mdl:mt-[15px] 2xl:text-[15px]">
            {
              locale === 'ru' ? "Забронируйте свою консультацию уже сегодня!"
                : locale === 'uz' ? "Bugunoq konsultatsiyangizni bron qiling!"
                  : "Book your consultation today!"
            }

          </p>
        </div>
        <div className="bg-white mt-[20px] rounded-[20px] py-[24px] px-[20px] mdl:px-[30px] mdl:py-[40px] 2xl:w-[50%] 2xl:mt-0">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <FloatingLabelInput
              label={
                locale === 'ru' ? "ФИО"
                  : locale === 'uz' ? "FIO"
                    : "FIO"
              }
              type="text"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder={
                locale === 'ru' ? "например: Rustam"
                  : locale === 'uz' ? "masalan: Rustam"
                    : "for example: Rustam"
              }

            />
            <FloatingLabelInput
              label={
                locale === 'ru' ? "Номер телефона"
                  : locale === 'uz' ? "Telefon raqamingiz"
                    : "Phone number"
              }

              type="tel"
              id="phone"
              value={formValues.phone}
              onChange={handleChange}
              placeholder={
                locale === 'ru' ? "например: +99899 000-00-00"
                  : locale === 'uz' ? "masalan: +99899 000-00-00"
                    : "for example: +99899 000-00-00"
              }
            />

            <FloatingLabelInput
              label="E-mail"
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder={
                locale === 'ru' ? "например: example@gmail.com"
                  : locale === 'uz' ? "masalan: example@gmail.com"
                    : "for example: example@gmail.com"
              }
            />

            {!isFormValid && (
              <p className="text-red-500 mt-2">
                {
                  locale === 'ru' ? "Пожалуйста, заполните все обязательные поля"
                    : locale === 'uz' ? "Iltimos, barcha majburiy maydonlarni to'ldiring"
                      : "Please fill in all required fields"
                }

              </p>
            )}
            <ConsultationModal visible={modalVisible} close={handleCloseModalVisible} />
            <button
              className="bg-green100 text-white rounded-[10px] mt-4 hover:bg-teal-600 p-[16px] text-[14px] font-bold font-raleway mdl:w-[30%] 2xl:w-[40%]"
              type="submit"
            >
              {
                locale === 'ru' ? "Отправить заявку"
                  : locale === 'uz' ? "Ariza yuborish"
                    : "Submit application"
              }

            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form