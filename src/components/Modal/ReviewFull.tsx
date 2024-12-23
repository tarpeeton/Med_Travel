"use client"
import { FC } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'




interface IReviewFull {
    visible: boolean
    locale: "ru" | "uz" | "en"
    close: () => void
    review: {
        _id: string
        name: string
        createdAt: string // Use createdAt here
        comment: {
            uz: string
            en: string
            ru: string
        }
        image?: {
            _type: 'image'
            asset: {
                _ref: string
                _type: 'reference'
            }
        }
    }
}


const FullReviewsModal: FC<IReviewFull> = ({ visible, close, review, locale }) => {



    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
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
                width={800}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[12px]'>
                        <div className='rounded-full w-[50px] h-[50px] overflow-hidden'>
                            <Image
                                src={
                                    review?.image
                                        ? urlFor(review.image.asset._ref).width(60).height(60).url() // Generates the URL with dimensions
                                        : 'https://ucarecdn.com/30077089-1dac-4769-b282-fba533147b26/-/preview/65x65/'
                                }
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
                                {formatDate(review.createdAt)}
                            </p>
                        </div>
                    </div>
                    <div className='mt-[20px] mdl:mt-[30px]'>
                        <p className='text-[15px] mdl:text-[18px] text-[#242424] font-raleway 2xl:leading-[27px] '>
                            {review.comment[locale]}
                        </p>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default FullReviewsModal
