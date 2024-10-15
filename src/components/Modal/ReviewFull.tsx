"use client"
import { FC } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import Image from 'next/image'

interface IReviewFull {
    visible: boolean
    close: () => void
    review: {
        name: string
        date: string
        text: string
        photo: { // Adjusted to match the incoming data
            id: number // Include the id if needed
            url: string
        }
        orderNum: number
    }
}

const FullReviewsModal: FC<IReviewFull> = ({ visible, close, review }) => {

    return (
        <div>
            <Modal
                open={visible}
                footer={null}
                onCancel={close} // Using the close function
                centered
                closeIcon={<IoClose size={25} />}
                className="custom-modal z-[999999]"
                width={800}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[12px]'>
                        <div className='rounded-full w-[50px] h-[50px] overflow-hidden'>
                            <Image
                                src={review?.photo?.url || 'https://ucarecdn.com/30077089-1dac-4769-b282-fba533147b26/-/preview/65x65/'}
                                width={60}
                                height={60}
                                alt='User logo'
                                className='rounded-full object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className='text-[16px] mdl:text-[20px] text-titleDark font-raleway font-semibold'>
                                {review.name}
                            </p>
                            <p className='text-[14px] mdl:text-[16px] text-[#A7A7A7] font-medium font-raleway'>
                                {review.date}
                            </p>
                        </div>
                    </div>
                    <div className='mt-[20px] mdl:mt-[30px]'>
                        <p className='text-[15px] mdl:text-[18px] text-[#242424] font-raleway 2xl:leading-[27px] '>
                            {review.text}
                        </p>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default FullReviewsModal
