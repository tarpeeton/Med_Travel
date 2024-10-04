"use client"
import { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'
import { MdNavigateNext } from "react-icons/md"
import Link from 'next/link'



const Tours: FC = () => {
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
				breakpoint: 1024, // Tablet size and below
				settings: {
					slidesToShow: 2, // Show 1 card for tablet and below
				},
			},
			{
				breakpoint: 700, // Tablet size and below
				settings: {
					slidesToShow: 1, // Show 1 card for tablet and below
				},
			},
			{
				breakpoint: 1200, // Larger than tablet (desktop)
				settings: {
					slidesToShow: 3, // Show 2 cards for larger screens
				},
			},
		],
	}
	return (

		<div className='mt-[120px] mx-[16px] 2xl:ml-[200px]'>
			<div className='flex flex-col'>
				<p className='text-titleDark font-bold font-raleway text-[25px] w-[70%] mdl:text-[35px] 2xl:text-[40px] slg:w-[50%] 2xl:w-[40%]'>Зарубежные туры и санатории</p>
				<div className='flex flex-row gap-[4px] mt-[20px] 2xl:mt-[30px]'>
					<button className='py-[12px] px-[20px] bg-green100 text-white text-center flex items-center justify-center rounded-full font-raleway text-[15px]'>Туры</button>
					<button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-borderColor  rounded-full font-raleway text-[15px]'>Санатории</button>
				</div>
				<div className='mt-[16px] mdl:mt-[20px]'>
					<Slider {...settings}>
						<div>
							<div
								className='rounded-[20px] w-full flex flex-col justify-between bg-cover bg-center min-h-[240px] py-[20px] px-[16px] mdl:h-[350px] mdl:w-[98%] mdl:pb-[25px]'
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://ucarecdn.com/6d71b6d7-76d1-4d48-9928-291425f5723b/-/preview/1000x625/')`
								  }}
							>
								<div>
									<button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-white rounded-full font-raleway text-[15px] text-white'>
									Чехия
									</button>
								</div>
								<div>
									<p className='text-white text-[22px] mdl:text-[25px] 2xl:text-[30px] font-bold'>Карловы Вары</p>
								</div>
							</div>
						</div>
						<div>
							<div
								className='rounded-[20px] w-full flex flex-col justify-between bg-cover bg-center min-h-[240px] py-[20px] px-[16px] mdl:h-[350px] mdl:w-[98%]'
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://ucarecdn.com/6d71b6d7-76d1-4d48-9928-291425f5723b/-/preview/1000x625/')`
								  }}
							>
								<div>
									<button className='py-[12px] px-[20px] text-center flex items-center justify-center border border-white rounded-full font-raleway text-[15px] text-white'>
										Санатории
									</button>
								</div>
								<div>
									<p className='text-white text-[22px] mdl:text-[25px] 2xl:text-[30px] font-bold'>Карловы Вары</p>
								</div>
							</div>
						</div>
						
					</Slider>

				</div>
				<div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[50px] 2xl:justify-around'>
					<Link href='/turs' className='w-[70%] mdl:w-[40%] 2xl:w-[15%] bg-green100 text-white text-[14px] font-bold font-raleway text-center rounded-[10px] p-[16px] 2xl:ml-[80px]'>
						Все туры
					</Link>
					<div />
				</div>
			</div>
		</div>
	)
}

export default Tours