import { FC } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";

const FormBlog: FC = () => {
  return (
    <div className='mt-[120px]'>
      <div className='flex flex-col pt-[30px] pb-[20px] px-[20px] bg-green100 rounded-[20px] justify-center  items-center'>
        <div className='w-[75%]'>
          <div>
            <p className='text-white text-[25px] mdl:text-[45px] 2xl:text-[50px] font-raleway  font-bold'>Будьте в курсе всех новостей!</p>
          </div>
          <div className='mt-[8px] mdl:mt-[12px]'>
            <p className='text-white text-[14px] mdl:text-[18px]  font-raleway  font-medium'>Подпишитесь на обновления нашего блога</p>
          </div>
        </div>
        {/* INPUT AND BUTTON */}

        <div className='bg-white rounded-[10px] flex flex-row justify-between p-[4px] h-[50px]  w-full mt-[30px]'>
            <input className='bg-inherit border-none outline-none ml-[8px]' placeholder='E-mail' />
            <div className=' text-white flex items-center justify-center rounded-[10px] bg-green100  mdl:hidden w-[42px] h-[42px]'>
              <MdOutlineNavigateNext   size={25}/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default FormBlog