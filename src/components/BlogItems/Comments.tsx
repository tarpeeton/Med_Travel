import { FC } from 'react'
import Title from '../ui/title'
import { FaUserAlt } from "react-icons/fa"
const Comments: FC = () => {
  return (
    <div className='mt-[120px]'>
      <div className='flex flex-col'>
        <Title title='Комментарии' />
        <div className='flex flex-col mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]'>
          <textarea placeholder='Ваш комментарий' className='py-[16px] px-[20px] border border-borderColor outline-none rounded-[10px]' />
          <button className='greenButton p-[16px] w-[80%] font-bold mt-[12px] mdl:mt-[20px] mdl:w-[25%] 2xl:w-[15%]'>
            Отправить
          </button>
        </div>
        <div className='mt-[50px] mdl:mt-[70px] 2xl:mt-[100px] flex flex-col pb-[30px] mdl:pb-[40px]  border-b border-borderColor'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='w-[45px] mdl:w-[50px] mdl:h-[50px]  flex justify-center items-center h-[45px] bg-[#D1F0ED] rounded-full text-center'>
                <FaUserAlt className='text-green100 flex items-center justify-center' />
              </div>
              <div className='flex flex-col ml-[12px]'>
                <p className='text-[16px] mdl:text-[20px] font-semibold text-titleDark font-raleway'>Rustam</p>
                <p className='text-[14px] mdl:text-[16px] font-medium  text-[#A7A7A7] font-raleway'>19.08.2024</p>
              </div>
            </div>
            <div className='mt-[20px] mdl:mt-[20px]'>
              <p className='text-[15px] mdl:text-[18px] font-raleway font-medium text-titleDark'>
                Lorem ipsum dolor sit amet consectetur. Malesuada ut mauris neque dignissim sit non ac diam cras. Dictumst felis eu volutpat imperdiet cras sed et at nunc. Nulla nisi rhoncus cras proin ac porttitor lectus. Et lacus sed et egestas leo viverra amet nunc. Aliquam dignissim dignissim accumsan ultricies sit in adipiscing. Sit ac feugiat faucibus volutpat quam pulvinar maecenas. Mattis habitant tellus ut auctor. Habitant leo sed ipsum quis duis platea sit arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments