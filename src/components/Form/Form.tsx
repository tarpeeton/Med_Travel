"use client"
import { FC, useState } from 'react';
import { IFormProps } from '@/interface/IForm';


const FloatingLabelInput: FC<IFormProps> = ({
  label,
  type,
  id,
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className='relative mt-4'>
      <input
        type={type}
        id={id}
        className={`border-b-2 border-gray-300 w-full py-2 text-[15px] text-titleDark  font-medium font-raleway outline-none bg-transparent transition-all focus:border-teal-500  mb-[12px] ${
          focused || value ? 'pt-6' : ''
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all text-[#A7A7A7] ${
          focused || value ? '-top-3 text-[12px] text-teal-500' : 'top-2'
        }`}
      >
        {label}
      </label>
    </div>
  );
};


const Form: FC = () => {
  return (
    <div className='mx-[16px]'>
      <div
        className='rounded-[20px] py-[20px] px-[16px] flex flex-col bg-cover bg-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ucarecdn.com/2a73c693-f972-4be5-b6ed-a952a2df6045/-/preview/1000x666/)`,
        }}
      >
        <div>
          <p className='text-[25px] font-bold font-raleway text-white'>
            Заботьтесь о своем здоровье с нами!
          </p>
          <p className='text-[15px] text-white font-medium mt-[12px]'>
            Забронируйте свою консультацию уже сегодня!
          </p>
        </div>
		<div className='bg-white mt-[20px] rounded-[20px] py-[24px] px-[20px]'>
      <form className='flex flex-col w-full'>
        <FloatingLabelInput label='ФИО' type='text' id='name' />
        <FloatingLabelInput label='Номер телефона' type='tel' id='phone' />
        <FloatingLabelInput label='E-mail' type='email' id='email' />

        <button
          className='bg-green100 text-white  rounded-[10px] mt-4 hover:bg-teal-600 p-[16px] text-[14px] font-bold font-raleway'
          type='submit'
        >
          Отправить заявку
        </button>
      </form>
      </div>
    </div>
    </div>
  );}


export default Form;
