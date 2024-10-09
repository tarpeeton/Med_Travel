"use client"
import { FC , useState } from 'react'
import Image from 'next/image'
import Vector from '@/public/blog/Vector.png'
import ShareModal from '../Modal/Share'


const Share: FC = () => {
    const [modal , setModal] = useState(false)

    const shareModalSwitcher = () => setModal(!modal)

    return (
        <div className='bg-green100 rounded-[20px] flex flex-col relative mt-[60px] mdl:mt-[100px] 2xl:mt-[120px] overflow-hidden'>
            <div className='flex flex-col  my-[30px] mdl:my-[60px] mdl:w-[90%] mx-auto w-[80%]'>
                <div className='mdl:w-[80%]'>
                    <p className='text-white font-bold text-[25px] mdl:text-[45px] 2xl:text-[50px]'>
                        Поделитесь этой новостью!
                    </p>
                    <p className='text-white mt-[8px] mdl:mt-[12px] font-medium text-[15px] mdl:text-[18px]  mdl:w-[80%] 2xl:w-[70%]'>
                        Отправьте эту новость вашим родным, друзьям, знакомым, которым это может быть интересно и полезно
                    </p>
                </div>
                <div className='w-[70%] mt-[30px] mdl:w-[35%] 2xl:w-[20%]'>
                    <button onClick={() => shareModalSwitcher()} className='rounded-[10px] bg-white p-[16px] flex items-center justify-center text-center text-green100 font-bold w-full'>
                        Поделиться
                    </button>
                </div>
            </div>
        <ShareModal visible={modal} close={shareModalSwitcher}/>
            <div className='absolute mdl:bottom-0 w-[80px]  top-[5px] right-[10px] h-[80px] mdl:w-[220px]  mdl:top-auto  mdl:h-[220px] mdl:right-[-45px] 2xl:w-[250px] 2xl:h-[250px]'> 
                <Image  src={Vector} alt='Vector' width={600} height={400} quality={100} className='object-contain'/>
            </div>
        </div>
    )
}

export default Share