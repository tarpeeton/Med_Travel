"use client"
import { FC, useState } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import Title from '../ui/title'
import SuccessModal from './SuccesModal'
import { question } from '@/lib/api'

interface IShareModal {
    visible: boolean  // 'visible' as a boolean
    close: () => void
     // 'close' as a function to close the modal
}

const QuestionModal: FC<IShareModal> = ({ visible, close }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [userQuestion, setUserQuestion] = useState('')
    const [isSuccessVisible, setIsSuccessVisible] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await question(name, phone, email, userQuestion) // Call the API with form data
            close() // Close the question modal
            setIsSuccessVisible(true) // Show success modal
        } catch (error) {
            console.error("Error submitting the question:", error)
        }
    }

    const closeSuccessModal = () => {
        setIsSuccessVisible(false) // Close the success modal
    }
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
                    <Title  text={{ru: 'Задать вопрос' , uz: "" , en: ""}} />
                    <p className='mt-[4px] text-[14px] mdl:text-[17px]  text-[#7C7C7C] font-raleway'>
                        Мы свяжемся с вами в скором времени
                    </p>
                    <div>
                        <form className='flex flex-col'>
                            <input placeholder='ФИО *' className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none  border border-borderColor focus:border-green100 font-raleway text-titleDark" onChange={(e) => setName(e.target.value)} />
                            <input placeholder='Номер телефона *' onChange={(e) =>  setPhone(e.target.value)} className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none  border border-borderColor focus:border-green100 font-raleway text-titleDark" />
                            <input placeholder='E-mail' className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none   border border-borderColor focus:border-green100 font-raleway text-titleDark"  onChange={(e) => setEmail(e.target.value)} />
                            <input placeholder='Ваш вопрос' onChange={(e) => setUserQuestion(e.target.value)} className="rounded-[10px] py-[13.5px] px-[20px] mdl:py-[16px]  mt-[12px] mdl:mt-[16px] 2xl:mt-[20px] outline-none  border border-borderColor  focus:border-green100 font-raleway text-titleDark" />
                            <button type='button' onClick={handleSubmit}  className='greenButton mt-[30px] font-bold font-raleway text-white greenButton p-[16px]'>Отправить</button>
                        </form>
                    </div>
                </div>
            </Modal>
            <SuccessModal visible={isSuccessVisible} close={closeSuccessModal} />
        </div>
    )
}

export default QuestionModal
