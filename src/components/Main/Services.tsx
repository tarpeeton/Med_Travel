"use client"
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'

const Services: FC = () => {
	const sliderRef = useRef<Slider | null>(null)

	const settings = {
		dots: false,
		infinite: true,
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
		<div className='flex flex-col mt-[120px] mx-[16px]'>
			<div className='flex flex-col'>
				<p className='text-[25px] text-black mdl:text-[35px] 2xl:text-[40px] font-bold '>Услуги</p>

				<Slider {...settings} ref={sliderRef}>
					<div className='flex flex-col mt-[25px]'>
						<Image
							src='https://ucarecdn.com/fc24f313-aae2-4923-bf26-76021146aa8f/-/preview/710x644/'
							width={300}
							height={300}
							alt='Туры по Узбекистану'
							className='object-cover w-full'
							loading="lazy"
						/>

						<div className='flex flex-col mt-[25px]'>
							<p className='text-[22px] font-semibold '>Туры по Узбекистану</p>

							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Посетите исторические центры Самарканда, Бухары и Хивы, где каждое здание дышит многовековой историей
							</p>
							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Насладитесь традиционной узбекской кухней и ощутите настоящее гостеприимство местных жителей
							</p>
							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Совместите путешествие с оздоровительными процедурами в лучших санаториях и медицинских центрах
							</p>
							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Мы обеспечиваем комфортные условия проживания, профессиональное сопровождение и безопасность на протяжении всего тура
							</p>
						</div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<button className="w-[50%] mdl:w-[40%] bg-[#1AB2A6] text-white text-[16px] p-[16px] 2xl:w-[20%] rounded-[10px] font-bold font-raleway">
								Найти тур
							</button>
							<div className="flex flex-row gap-[8px]">
								<button
									onClick={handlePrev}
									className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center 2xl:w-[70px] 2xl:h-[70px]"
									aria-label="Previous slide"
								>
									<GrLinkPrevious size={20} className="text-black" />
								</button>

								<button
									onClick={handleNext}
									className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center 2xl:w-[70px] 2xl:h-[70px]"
									aria-label="Next slide"
								>
									<GrLinkNext size={20} className="text-black" />
								</button>
							</div>
						</div>
					</div>
					<div className='flex flex-col mt-[25px]'>
						<Image
							src='https://ucarecdn.com/fc24f313-aae2-4923-bf26-76021146aa8f/-/preview/710x644/'
							width={300}
							height={300}
							alt='Туры по Узбекистану'
							className='object-cover w-full'
							loading="lazy"
						/>

						<div className='flex flex-col mt-[25px]'>
							<p className='text-[22px] font-semibold '>Туры по Узбекистану</p>

							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Посетите исторические центры Самарканда, Бухары и Хивы, где каждое здание дышит многовековой историей
							</p>
							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Насладитесь традиционной узбекской кухней и ощутите настоящее гостеприимство местных жителей
							</p>
							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Совместите путешествие с оздоровительными процедурами в лучших санаториях и медицинских центрах
							</p>
							<p className='text-[15px] font-raleway font-medium text-[#242424] py-[20px] border-b border-[#E8E8E8]'>
								Мы обеспечиваем комфортные условия проживания, профессиональное сопровождение и безопасность на протяжении всего тура
							</p>
						</div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<button className="w-[50%] mdl:w-[40%] bg-[#1AB2A6] text-white text-[16px] p-[16px] 2xl:w-[20%] rounded-[10px] font-bold font-raleway">
								Найти тур
							</button>
							<div className="flex flex-row gap-[8px]">
								<button
									onClick={handlePrev}
									className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center 2xl:w-[70px] 2xl:h-[70px]"
									aria-label="Previous slide"
								>
									<GrLinkPrevious size={20} className="text-black" />
								</button>

								<button
									onClick={handleNext}
									className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center 2xl:w-[70px] 2xl:h-[70px]"
									aria-label="Next slide"
								>
									<GrLinkNext size={20} className="text-black" />
								</button>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default Services
