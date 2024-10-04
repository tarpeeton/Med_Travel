"use client";
import { FC, useState } from "react";
import { IFormProps } from "@/interface/IForm";

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

  return (
    <div className="relative mt-4">
      <input
        type={type}
        id={id}
        className={`border-b-2 w-full py-2 text-[15px] text-titleDark font-medium font-raleway outline-none bg-transparent transition-all 2xl:text-[18px] mb-[15px] mdl:text-[15px] mdl:mb-[20px] ${
          focused || value ? "pt-6" : ""
        } ${isInvalid ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-teal-500"}`}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        required={true}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all ${
          focused || value
            ? "text-[12px] text-teal-500 mdl:text-[14px] -top-3"
            : "text-[#A7A7A7] top-2"
        } ${isInvalid ? "text-red-500" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};

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
    <div className="mx-[16px] 2xl:mx-[200px]">
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
        <div className="bg-white mt-[20px] rounded-[20px] py-[24px] px-[20px]  mdl:px-[30px] mdl:py-[40px] 2xl:w-[50%] 2xl:mt-0 ">
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
