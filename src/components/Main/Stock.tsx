"use client"
import Image from 'next/image'
import { FC, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
// import Image from 'next/image'
// const sliderRef = useRef<Slider | null>(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
	}

	// const handlePrev = () => {
	// 	if (sliderRef.current) {
	// 		sliderRef.current.slickPrev()
	// 	}
	// }

	// const handleNext = () => {
	// 	if (sliderRef.current) {
	// 		sliderRef.current.slickNext()
	// 	}
	// }


const Stock: FC = () => {
  return (
	<div className='flex flex-col mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px]'>
		<p className='w-[50%] font-bold text-[25px] text-[#242424] mdl:text-[35px] 2xl:text-[40px] mdl:w-full '>Акции и спецпредложения</p>

		<Slider {...settings} className='mt-[20px]'> 
			<div className='w-[40%]'>
				<div className='flex flex-col w-[98%]'>
					<div>
						<Image  src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px]'/>
					</div>
					<div className='flex flex-col mt-[12px] relative'>
						<p className='text-[15px] font-semibold text-[#242424] font-raleway w-[100%] mb-[25px]'>Раннее бронирование скидка 20%</p>
						<p className='text-[#7C7C7C] text-[14px]  absolute bottom-0'>19 августа 2024</p>
					</div>
				</div>
			</div>
			<div className='w-[40%]'>
				<div className='flex flex-col w-[98%]'>
					<div>
						<Image  src='https://ucarecdn.com/e33e3e57-5bb3-4515-a50f-a827afaa3542/-/preview/180x299/' width={180} height={290} alt='Aksii' className='rounded-[20px]'/>
					</div>
					<div className='flex flex-col mt-[12px] relative'>
						<p className='text-[15px] font-semibold text-[#242424] font-raleway w-[100%] mb-[25px]'>Раннее бронирование скидка 20%</p>
						<p className='text-[#7C7C7C] text-[14px]  absolute bottom-0'>19 августа 2024</p>
					</div>
				</div>
			</div>
		</Slider>
	</div>
  );
};

export default Stock;