"use client"
import { FC, useRef, useState, useEffect } from "react"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'
import useLocale from '@/hooks/useLocale'
import { MdNavigateNext } from "react-icons/md"
import FullReviewsModal from '../Modal/ReviewFull'
import { ReviewProps } from '@/interface/Reviews'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import { client } from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image'









const Reviews: FC = () => {
    const [open, setOpen] = useState(false)
    const locale = useLocale()
    const [selectedReview, setSelectedReview] = useState<ReviewProps | null>(null)
    const swiperRef = useRef<any>(null)
    const [reviews, setReviews] = useState<ReviewProps[] | []>([])
    const [loading, setLoading] = useState(true) // State for loading

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

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true) // Start loading
            try {
                const res = await client.fetch(
                    `*[_type == "review"]
                        {_id,createdAt,name,comment,image}`
                ) // Change to your desired language
                setReviews(res) // Ensure you set the data correctly
            } catch (error) {
                console.error("Error fetching reviews:", error)
            } finally {
                setLoading(false) // End loading
            }
        }
        fetchReviews()
    }, [locale]) // Added locale to the dependency array

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    }



    return (
        <div className='mt-[120px] bg-green100 2xl:pl-[200px]'>
            <div>
                <div className='flex flex-col py-[40px] px-[20px]'>
                    <p className='text-[#FFFFFF] text-[24px] font-bold font-raleway mdl:text-[35px] 2xl:text-[35px]'>
                        {
                            locale === 'ru' ? "Отзывы людей, воспользовавшихся нашими услугами."
                                : locale === 'uz' ? "Bizning xizmatlarimizdan foydalangan odamlarning fikrlari."
                                    : "Reviews from people who used our services."
                        }

                    </p>

                    <div className='2xl:mt-[40px]'>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={false} // Disable default navigation
                            slidesPerView={1}
                            spaceBetween={20}
                            loop={true}
                            speed={720}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                },
                                800: {
                                    slidesPerView: 1.7,
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
                                swiperRef.current = swiper // Assign the Swiper instance to the ref
                            }}
                        >
                            {loading ? ( // Conditional rendering for loading state
                                <SwiperSlide>
                                    <div className='flex flex-row gap-[2%] cursor-default'>
                                        <div className='bg-gray-200 w-full mdl:w-[48%] rounded-[20px] p-[20px] mt-[20px]  2xl:w-[31%] 2xl:h-[350px] animate-pulse'>
                                            <div className='flex flex-col'>
                                                <div className='flex flex-row gap-[8px]'>
                                                    <div className='w-[50px] h-[50px] rounded-full bg-gray-300' />
                                                    <div className='flex flex-col'>
                                                        <div className='h-[20px] w-[100px] bg-gray-300 rounded' />
                                                        <div className='h-[15px] w-[80px] bg-gray-300 rounded mt-[8px]' />
                                                    </div>
                                                </div>
                                                <div className='mt-[20px]'>
                                                    <div className='h-[16px] w-[100%] bg-gray-300 rounded' />
                                                    <div className='h-[16px] w-[100%] bg-gray-300 rounded mt-[8px]' />
                                                    <div className='h-[16px] w-[100%] bg-gray-300 rounded mt-[8px]' />
                                                    <div className='h-[16px] w-[100%] bg-gray-300 rounded mt-[8px]' />
                                                    <div className='h-[16px] w-[90%] bg-gray-300 rounded mt-[8px]' />
                                                    <div className='h-[16px] w-[80%] bg-gray-300 rounded mt-[8px]' />
                                                    <div className='h-[16px] w-[80%] bg-gray-300 rounded mt-[8px]' />
                                                    <div className='h-[16px] w-[70%] bg-gray-300 rounded mt-[8px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ) : (
                                reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='flex flex-row gap-[2%] cursor-pointer'>
                                            <div className='bg-white rounded-[20px] p-[20px] mt-[20px] mdl:w-[99%] 2xl:w-[99%] 2xl:h-[350px]'>
                                                <div className='flex flex-col h-[320px]'>
                                                    <div className='flex flex-row gap-[8px]'>

                                                        <Image
                                                            src={
                                                                review.image
                                                                    ? urlFor(review.image.asset._ref).width(50).height(50).url()
                                                                    : 'https://ucarecdn.com/30077089-1dac-4769-b282-fba533147b26/-/preview/65x65/'
                                                            }
                                                            width={50}
                                                            height={50}
                                                            alt='User logo'
                                                            className='rounded-full'
                                                        />
                                                        <div className='flex flex-col'>
                                                            <p className='text-[16px] text-titleDark mdl:text-[20px] font-semibold'>{review.name}</p>
                                                            <p className='text-[14px] text-[#A7A7A7] font-medium mdl:text-[16px]'>{formatDate(review.createdAt)}</p>
                                                        </div>
                                                    </div>
                                                    <div className='mt-[20px]'>
                                                        <p className='text-titleDark font-raleway font-medium'>
                                                            {review.comment[locale].length > 215 ? review.comment[locale].slice(0, 215) + '...' : review.comment[locale]}
                                                        </p>
                                                    </div>
                                                    {review.comment[locale].length > 215 && (
                                                        <div className='mt-[20px] slg:absolute slg:bottom-[30px]'>
                                                            <button
                                                                onClick={() => handleReadMore(review)}
                                                                className='text-green100 flex flex-row items-center text-[18px] font-semibold group transition-all duration-400'
                                                            >
                                                                Читать полностью
                                                                <MdNavigateNext size={25} className=' mt-[3px] transition-transform duration-300 group-hover:translate-x-[5px]' />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            )}
                        </Swiper>
                    </div>

                    {reviews?.length > 1 && (
                        <div className='flex justify-end relative items-center mt-[30px]'>
                            <div className="flex flex-row gap-[8px]">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()} // Use custom navigation
                                    className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] bg-white 2xl:h-[78px]"
                                    aria-label="Previous slide"
                                >
                                    <GrLinkPrevious className="text-black w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]" />
                                </button>

                                <button
                                    onClick={() => swiperRef.current?.slideNext()} // Use custom navigation
                                    className="flex border bg-white border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] 2xl:h-[78px]"
                                    aria-label="Next slide"
                                >
                                    <GrLinkNext className="text-black w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]" />
                                </button>
                            </div>
                        </div>
                    )}
                    {selectedReview && (
                        <FullReviewsModal
                            visible={open}
                            locale={locale}
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
