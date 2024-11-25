"use client"
import Link from 'next/link'
import { FC, useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Location } from '@/interface/location'
import { tours , clinics } from '@/constants/Main/Map'

const Sanatoriums: FC = () => {
	const [mapLoaded, setMapLoaded] = useState(false) 
	const [mapInstance, setMapInstance] = useState<any>(null) 
	const [activeTab, setActiveTab] = useState<"clinics" | "tours">("clinics") 
	const [activeData, setActiveData] = useState<number | null>(null) 



	useEffect(() => {
		const handleScroll = () => {
		  const mapElement = document.getElementById('mapTUR');
		  if (mapElement && mapElement.getBoundingClientRect().top < window.innerHeight) {
			if (!mapLoaded) {
			  loadYandexMap();
			  setMapLoaded(true);
			}
			window.removeEventListener('scroll', handleScroll); // Remove listener after loading
		  }
		};
	  
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	  }, [mapLoaded]);

	  
	// Function to load Yandex Map script and initialize the map
	const loadYandexMap = () => {
		if (typeof window !== "undefined" && !document.getElementById("my-filtered-script")) {
			const script = document.createElement("script")
			script.id = "my-filtered-script"
			script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`
			script.async = true
			script.defer = true
			document.body.appendChild(script)

			script.onload = () => {
				if (window.ymaps) {
					window.ymaps.ready(() => {
						const map = new window.ymaps.Map("mapTUR", {
							center: [41.3112, 69.2797],
							zoom: 12,
							controls: [],
						})
						setMapInstance(map)
					})
				}
			}

			script.onerror = () => {
				console.error("Failed to load Yandex Maps API")
			}
		} else if (window.ymaps && !mapInstance) {
			window.ymaps.ready(() => {
				const map = new window.ymaps.Map("mapTUR", {
					center: [41.3112, 69.2797],
					zoom: 12,
					controls: [],
				})
				setMapInstance(map)
			})
		}
	}

	// Function to update markers on the map
	const updateMarkers = (locations: Location[]) => {
		if (mapInstance) {
			mapInstance.geoObjects.removeAll() // Clear existing markers

			locations.forEach((location) => {
				const balloonContent = `
					<div style="font-family: Raleway, sans-serif;">
						<strong style="font-weight: 600; font-size: 20px; line-height: 25px;">${location.name}</strong>
						<p style="margin: 8px 0; color: #505050; font-weight: 500; font-size: 12px; line-height: 14.09px;">
							${location.address || location.description}
						</p>
						<a href="${location.url}" style="color: #168CE6; font-weight: 700; font-size: 14px; line-height: 16.44px; text-decoration: none;">
							${location.link} &nbsp;&rarr;
						</a>
					</div>
				`

				const placemark = new window.ymaps.Placemark(
					location.coords,
					{
						hintContent: location.name,
						balloonContent: balloonContent,
					},
					{
						iconColor: "#1AB2A6",
					}
				)
				mapInstance.geoObjects.add(placemark) // Add marker to the map
			})
		}
	}

	// Load Yandex Maps API when the component is mounted
	useEffect(() => {
		if (!mapLoaded) {
			loadYandexMap()
			setMapLoaded(true)
		}
	}, [mapLoaded])

	// Update markers whenever the active tab or map instance changes
	useEffect(() => {
		if (mapInstance) {
			updateMarkers(activeTab === "clinics" ? clinics : tours)
		}
	}, [mapInstance, activeTab])

	// Function to render location details based on the active tab
	const handleLocationClick = (id: number, coords: [number, number]) => {
		setActiveData(id)
		if (mapInstance) {
			// Center the map on the clicked location's coordinates
			mapInstance.setCenter(coords, 14, { duration: 300 })

			// Iterate through geoObjects to find the correct placemark and open its balloon
			mapInstance.geoObjects.each((geoObject: any) => {
				const placemarkCoords = geoObject.geometry.getCoordinates()
				if (placemarkCoords.toString() === coords.toString()) {
					geoObject.balloon.open() // Open the balloon for the corresponding placemark
				}
			})
		}
	}

	const renderLocations = () => {
		const locations = activeTab === "clinics" ? clinics : tours
		return locations.map((location) => (
			<div
				key={location.id}
				className={`rounded-[25px]  py-[20px] px-[30px] flex flex-col mx-[12px] mb-[20px] ${
					activeData === location.id ? 'border border-[#168CE6]' : 'bg-[#F3F7FB]'
				}`}
				onClick={() => handleLocationClick(location.id, location.coords)}
				style={{ cursor: 'pointer' }}
			>
				<div>
					<p className='text-[22px] font-raleway font-semibold text-titleDark'>{location.name}</p>
				</div>
				<div className='mt-[5px] 2xl:min-h-[76.5px]'>
					<p className='text-[15px] text-[#7C7C7C] font-raleway'>{location.address || location.description}</p>
				</div>
				<div className='mt-[5px]'>
					<Link href={location.url} className='flex items-center text-[#168CE6] font-semibold font-raleway'>
						<p className='text-[16px]'>{location.link}</p>
						<MdNavigateNext size={20} />
					</Link>
				</div>
			</div>
		))
	}
	return (
		<div className="mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px] 2xl:mt-[120px]">
			<div className="flex flex-col">
				<div className='mdl:w-[50%]'>
					<p className="text-[25px] font-bold text-titleDark mdl:text-[35px] 2xl:text-[40px] font-raleway">
						Туры и медицинские клиники Узбекистана
					</p>
					<div className="flex flex-row justify-between mt-[20px] mdl:mt-[30px]  mdl:w-[80%] 2xl:w-[70%]">
						<button
							className={`font-semibold text-[14px] py-[12px] 2xl:text-[17px] px-[20px] rounded-full ${activeTab === "clinics" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"
								}`}
							onClick={() => setActiveTab("clinics")}
						>
							Медицинские клиники
						</button>
						{/* <button
							className={`font-semibold w-[40%] text-[14px] py-[12px] 2xl:text-[17px] px-[20px] rounded-full ${activeTab === "tours" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"
								}`}
							onClick={() => setActiveTab("tours")}
						>
							Туры
						</button> */}
					</div>
				</div>

				{/* Render clinics or tours based on active tab */}
				<div className="flex flex-row mt-[20px] mdl:mt-[40px] ">
					<div className='hidden w-[30%] 2xl:flex 2xl:flex-col bg-white overflow-y-auto 2xl:h-[600px] mr-[10px]'>
						{renderLocations()}
					</div>

					{/* Yandex Map */}
					<div className="rounded-[30px] overflow-hidden w-full 2xl:w-[70%]">
						<div className="w-full h-[250px] mdl:h-[400px] 2xl:h-[600px] ">
							<div id="mapTUR" className="w-full h-full rounded-[20px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sanatoriums
