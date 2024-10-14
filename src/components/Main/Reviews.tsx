"use client"
import { FC, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'
import { MdNavigateNext } from "react-icons/md"
import FullReviewsModal from '../Modal/ReviewFull'

interface ReviewProps {
    author: string
    date: string
    text: string
    imageUrl: string
}

const Reviews: FC = () => {
    const sliderRef = useRef<Slider | null>(null)
    const [open, setOpen] = useState(false)
    const [selectedReview, setSelectedReview] = useState<ReviewProps | null>(null)

    const reviews: ReviewProps[] = [
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение! Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        {
            author: 'Иванов Иван',
            date: '19.08.2024',
            text: 'Мы с семьей недавно вернулись из тура по Узбекистану, и это было незабываемое путешествие! Все было организовано на высшем уровне — от комфортного проживания до увлекательных экскурсий. Особенно понравилось, что наши пожелания учитывались на каждом этапе поездки. Благодарим за отличный сервис и душевное отношение!',
            imageUrl: 'https://ucarecdn.com/0d421291-2b4e-4a6c-a5d8-6293e75da8e7/-/preview/200x200/',
        },
        // Add more reviews as needed
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    }

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    // Function to handle the "Читать полностью" click and set the selected review
    const handleReadMore = (review: ReviewProps) => {
        setSelectedReview(review)
        setOpen(true)
    }

    // Function to close the modal
    const handleCloseModal = () => {
        setOpen(false)
        setSelectedReview(null) // Clear selected review when modal is closed
    }

    return (
        <div className='mt-[120px] bg-green100 2xl:pl-[200px]'>
            <div>
                <div className='flex flex-col py-[40px] px-[20px]'>
                    <p className='text-[#FFFFFF] text-[25px] font-bold font-raleway mdl:text-[35px] 2xl:text-[40px]'>Отзывы клиентов</p>

                    <div>
                        <Slider {...settings} ref={sliderRef}>
                            {reviews.map((review, index) => (
                                <div className='flex flex-row gap-[2%]' key={index}>
                                    <div className='bg-white rounded-[20px] p-[20px] mt-[20px] mdl:w-[99%] 2xl:w-[99%] 2xl:h-[424px]'>
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
                                                    {review.text.length > 315 ? review.text.slice(0, 315) + '...' : review.text}
                                                </p>
                                            </div>
                                            {review.text.length > 315 && (
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
                            ))}
                        </Slider>
                    </div>

                    <div className='flex justify-end items-center mt-[30px]'>
                        <div className="flex flex-row gap-[8px]">
                            <button
                                onClick={handlePrev}
                                className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] bg-white 2xl:h-[78px]"
                                aria-label="Previous slide"
                            >
                                <GrLinkPrevious size={20} className="text-black" />
                            </button>

                            <button
                                onClick={handleNext}
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
    )
}

export default Reviews
