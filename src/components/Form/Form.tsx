"use client";
import { FC, useState } from "react";
import { IFormProps } from "@/interface/IForm";

// FloatingLabelInput component
const FloatingLabelInput: FC<IFormProps> = ({ label, type, id }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleBlur = () => {
    setFocused(false);
    if (!value) {
      setIsInvalid(true); // Mark input as invalid if no value
    } else {
      setIsInvalid(false);
    }
  };

  const handleFocus = () => setFocused(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsInvalid(false); // Reset invalid state when user types
  };

  return (
    <div className="relative mt-4">
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`block py-2.5 px-0 w-full text-sm mb-[20px] text-gray-900 bg-transparent border-0 border-b-[1px] ${
          isInvalid ? "border-red-500" : "border-gray-300"
        } appearance-none  dark:border-[#A7A7A7] dark:focus:border-[#1AB2A6] focus:outline-none focus:ring-0 focus:border-[#1AB2A6] peer text-[18px]`}
        placeholder=" " // Placeholder is required for floating effect
      />
      <label
        htmlFor={id}
        className={`absolute text-sm ${
          isInvalid ? "text-red-500" : "text-[#A7A7A7]"
        } dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#1AB2A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 2xl:text-[16px]`}
      >
        {label}
      </label>
     
    </div>
  );
};

// Form component
const Form: FC = () => {
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check all inputs for validity
    const inputs = document.querySelectorAll("input");
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });

    if (!isValid) {
      setIsFormValid(false); // If any input is invalid, show the error state
    } else {
      setIsFormValid(true);
      // Handle form submission logic
      console.log("Form submitted!");
    }
  };

  return (
    <div className="mx-[16px] 2xl:mx-[200px] mt-[120px]">
      <div
        className="rounded-[20px] py-[20px] px-[16px] flex flex-col bg-cover bg-center mdl:py-[40px] mdl:px-[30px] 2xl:flex-row 2xl:justify-between 2xl:py-[16px] 2xl:px-[16px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ucarecdn.com/2a73c693-f972-4be5-b6ed-a952a2df6045/-/preview/1000x666/)`,
        }}
      >
        <div className="2xl:w-[40%] 2xl:mt-[44px] 2xl:ml-[40px]">
          <p className="text-[25px] font-bold font-raleway text-white mdl:text-[45px] mdl:w-[70%] 2xl:w-[100%] 2xl:text-[40px] 4xl:w-[90%] 4xl:text-[50px]">
            Заботьтесь о своем здоровье с нами!
          </p>
          <p className="text-[15px] text-white font-medium mt-[12px] mdl:text-[15px] mdl:mt-[15px] 2xl:text-[15px]">
            Забронируйте свою консультацию уже сегодня!
          </p>
        </div>
        <div className="bg-white mt-[20px] rounded-[20px] py-[24px] px-[20px] mdl:px-[30px] mdl:py-[40px] 2xl:w-[50%] 2xl:mt-0">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <FloatingLabelInput label="ФИО" type="text" id="name" />
            <FloatingLabelInput label="Номер телефона" type="tel" id="phone" />
            <FloatingLabelInput label="E-mail" type="email" id="email" />

            {!isFormValid && (
              <p className="text-red-500 mt-2">
                Пожалуйста, заполните все обязательные поля
              </p>
            )}

            <button
              className="bg-green100 text-white rounded-[10px] mt-4 hover:bg-teal-600 p-[16px] text-[14px] font-bold font-raleway mdl:w-[30%] 2xl:w-[40%]"
              type="submit"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
