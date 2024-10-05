"use client"
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'
import ServiceImage from '@/public/serviceBanner.jpg'

const Services: FC = () => {
	const sliderRef = useRef<Slider | null>(null)

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
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

	return (
		<div className='flex flex-col mt-[120px] mx-[16px] mdl:mx-[20px] 2xl:mx-[200px]'>
			<div className='flex flex-col'>
				<p className='text-[25px] text-black mdl:text-[35px] 2xl:text-[40px] font-bold '>Услуги</p>

				<Slider {...settings} ref={sliderRef}>
					<div className='flex flex-col mt-[25px] mdl:mt-[30px] px-[5px]'>
						<div className='2xl:flex 2xl:flex-row 2xl:gap-[40px]'>
							<Image
								src={ServiceImage}
								width={2000}
								height={1365}
								alt='Туры по Узбекистану'
								className='object-cover w-full 2xl:w-[50%] rounded-[20px]'
								loading="lazy"
								quality={100}
							/>
							<div className='flex flex-col mt-[25px] mdl:mt-[30px] 2xl:w-[50%] 2xl:mt-0'>
								<p className='text-[22px] font-semibold  2xl:text-[30px] mdl:w-[20%] 2xl:w-[30%] mdl:text-[30px]'>Туры по Узбекистану</p>

								<p className='mdl:py-[25px] text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8] 2xl:py-[30px] mdl:text-[16px]'>
									Посетите исторические центры Самарканда, Бухары и Хивы, где каждое здание дышит многовековой историей
								</p>
								<p className='mdl:py-[25px] text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8] 2xl:py-[30px] mdl:text-[16px]'>
									Насладитесь традиционной узбекской кухней и ощутите настоящее гостеприимство местных жителей
								</p>
								<p className='mdl:py-[25px] text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8] 2xl:py-[30px] mdl:text-[16px]'>
									Совместите путешествие с оздоровительными процедурами в лучших санаториях и медицинских центрах
								</p>
								<p className='mdl:py-[25px] text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8] 2xl:py-[30px] mdl:text-[16px]'>
									Мы обеспечиваем комфортные условия проживания, профессиональное сопровождение и безопасность на протяжении всего тура
								</p>
								<div className="flex flex-row items-center justify-between mt-[30px]">
									<button className="w-[50%] mdl:w-[30%] bg-[#1AB2A6] text-white text-[16px] p-[16px] 2xl:w-[40%] rounded-[10px] font-bold font-raleway">
										Найти тур
									</button>
									<div className="flex flex-row gap-[8px]">
										<button
											onClick={handlePrev}
											className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center  mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] 2xl:h-[78px]"
											aria-label="Previous slide"
										>
											<GrLinkPrevious size={20} className="text-black" />
										</button>

										<button
											onClick={handleNext}
											className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px]  2xl:w-[78px] 2xl:h-[78px]"
											aria-label="Next slide"
										>
											<GrLinkNext size={20} className="text-black" />
										</button>
									</div>
								</div>
							</div>

						</div>

					</div>

				</Slider>
			</div>
		</div>
	)
}

export default Services
