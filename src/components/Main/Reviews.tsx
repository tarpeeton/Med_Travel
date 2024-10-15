"use client";
import { FC, useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Image from 'next/image';
import { MdNavigateNext } from "react-icons/md";
import FullReviewsModal from '../Modal/ReviewFull';
import { ReviewProps } from '@/interface/Reviews';
import { reviews } from '@/constants/Reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

const Reviews: FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState<ReviewProps | null>(null);
    const swiperRef = useRef<any>(null); // Ref to access Swiper instance

    // Function to handle the "Читать полностью" click and set the selected review
    const handleReadMore = (review: ReviewProps) => {
        setSelectedReview(review);
        setOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setOpen(false);
        setSelectedReview(null); // Clear selected review when modal is closed
    };

    return (
        <div className='mt-[120px] bg-green100 2xl:pl-[200px]'>
            <div>
                <div className='flex flex-col py-[40px] px-[20px]'>
                    <p className='text-[#FFFFFF] text-[25px] font-bold font-raleway mdl:text-[35px] 2xl:text-[40px]'>Отзывы клиентов</p>

                    <div className='2xl:mt-[40px]'>
                        <Swiper
                            modules={[Navigation]}
                            navigation={false} // Disable default navigation
                            slidesPerView={2}
                            spaceBetween={20}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                },
                                700: {
                                    slidesPerView: 1,
                                },
                                1200: {
                                    slidesPerView: 3.5,
                                },
                            }}
                            className="mySwiper"
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper; // Assign the Swiper instance to the ref
                            }}
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-row gap-[2%]'>
                                        <div className='bg-white rounded-[20px] p-[20px] mt-[20px] mdl:w-[99%] 2xl:w-[99%] 2xl:h-[350px]'>
                                            <div className='flex flex-col'>
                                                <div className='flex flex-row gap-[8px]'>
                                                    <Image src={review.imageUrl} width={50} height={50} alt='User logo' className='rounded-full' />
                                                    <div className='flex flex-col'>
                                                        <p className='text-[16px] text-titleDark mdl:text-[20px] font-semibold'>{review.author}</p>
                                                        <p className='text-[14px] text-[#A7A7A7] font-medium mdl:text-[16px]'>{review.date}</p>
                                                    </div>
                                                </div>
                                                <div className='mt-[20px]'>
                                                    {/* Displaying truncated text if longer than 350 characters */}
                                                    <p className='text-titleDark font-raleway font-medium'>
                                                        {review.text.length > 215 ? review.text.slice(0, 215) + '...' : review.text}
                                                    </p>
                                                </div>
                                                {review.text.length > 215 && (
                                                    <div className='mt-[20px]'>
                                                        <button
                                                            onClick={() => handleReadMore(review)}
                                                            className='text-green100 flex flex-row items-center text-[18px] font-semibold'
                                                        >
                                                            Читать полностью
                                                            <MdNavigateNext size={25} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className='flex justify-end relative items-center mt-[30px]'>
                        <div className="flex flex-row gap-[8px]">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()} // Use custom navigation
                                className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] bg-white 2xl:h-[78px]"
                                aria-label="Previous slide"
                            >
                                <GrLinkPrevious size={20} className="text-black" />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()} // Use custom navigation
                                className="flex border bg-white border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] 2xl:h-[78px]"
                                aria-label="Next slide"
                            >
                                <GrLinkNext size={20} className="text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Pass the selected review to the modal */}
                    {selectedReview && (
                        <FullReviewsModal
                            visible={open}
                            close={handleCloseModal}
                            review={selectedReview} // Pass selected review
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
