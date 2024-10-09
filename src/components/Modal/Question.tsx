"use client"
import { FC, useState } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import Title from '../ui/title'

interface IShareModal {
    visible: boolean  // 'visible' as a boolean
    close: () => void // 'close' as a function to close the modal
}

const QuestionModal: FC<IShareModal> = ({ visible, close }) => {

    return (
        <div>
            <Modal
                open={visible}
                footer={null}
                onCancel={close} // Using the close function
                centered
                closeIcon={<IoClose size={25} />}
                className="custom-modal z-[999999]"
            >
                <div className="flex flex-col">
                    <Title title='Задать вопрос' />
                    <p className='mt-[4px] text-[14px] mdl:text-[17px]  text-[#7C7C7C] font-raleway'>
                        Мы свяжемся с вами в скором времени
                    </p>
                    <div>
                        <form className='flex flex-col'>
                            <input placeholder='ФИО *' className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none  border border-borderColor focus:border-green100 font-raleway text-titleDark" />
                            <input placeholder='Номер телефона *' className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none  border border-borderColor focus:border-green100 font-raleway text-titleDark" />
                            <input placeholder='E-mail' className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none   border border-borderColor focus:border-green100 font-raleway text-titleDark" />
                            <input placeholder='Ваш вопрос' className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none  border border-borderColor  focus:border-green100 font-raleway text-titleDark" />
                            <button className='greenButton mt-[30px] font-bold font-raleway text-white greenButton p-[16px]'>Отправить</button>
                        </form>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default QuestionModal
