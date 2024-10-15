"use client"
import { FC } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import Image from 'next/image'
import SuccesImage from '@/public/success.png'



interface IReviewFull {
    visible: boolean,
    close: () => void,

}

const ConsultationModal: FC<IReviewFull> = ({ visible, close }) => {

    return (
        <div>
            <Modal
                open={visible}
                footer={null}
                onCancel={close} // Using the close function
                centered
                closeIcon={<IoClose size={25} />}
                className="custom-modal z-[999999]"
                width={400}
            >
                <div className='py-[30px] px-[20px] justify-center items-center w-full'>
                    <div className='w-[70px] h-[70px] mdl:w-[80px] mdl:h-[80px] mx-auto '>
                        <Image src={SuccesImage} alt='Succes Image' width={70} height={70} quality={100} className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col gap-[8px] mt-[20px] mx-auto text-center'>
                        <p className='text-[25px] mdl:text-[25px] 2xl:text-[]  font-bold text-titleDark'>Заявка отправлена!</p>
                        <p className='text-[14px] w-[70%] mx-auto 2xl:w-full mdl:text-[17px] 2xl:text-[16px] text-center  font-medium text-[#7C7C7C]'>Мы свяжемся с вами в скором времени</p>
                    </div>
                    <button onClick={close} className='greenButton font-bold mdl:w-[80%] mdl:mx-auto font-raleway w-full p-[16px] mt-[30px] mdl:mt-[40px] 2xl:w-[80%]'>
                         Ок
                    </button>
                </div>
            </Modal>

        </div>
    )
}

export default ConsultationModal
