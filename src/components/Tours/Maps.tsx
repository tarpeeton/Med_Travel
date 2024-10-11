"use client"

import Link from 'next/link'
import { FC, useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Location } from '@/interface/location'
import { tours  , medicalTours} from '@/constants/Coordinates'



const Map: FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<"clinics" | "tours">("clinics")
  const [routes, setRoutes] = useState<any[]>([])

  const fromLocationCoords: [number, number] = [41.351473, 69.289052] // Result cardinate

  


  const currentLocations = activeTab === "clinics" ? medicalTours : tours

  const loadYandexMap = () => {
    if (typeof window !== "undefined" && !document.getElementById("yandex-map-script")) {
      const script = document.createElement("script")
      script.id = "yandex-map-script"
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(() => {
            const map = new window.ymaps.Map("mapTUR", {
              center: fromLocationCoords,
              zoom: 6,
              controls: ['typeSelector', 'fullscreenControl'],
            })
            setMapInstance(map)
            createRoutes(currentLocations, map)
          })
        }
      }
    } else if (window.ymaps && !mapInstance) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("mapTUR", {
          center: fromLocationCoords,
          zoom: 6,
          controls: ['typeSelector', 'fullscreenControl'],
        })
        setMapInstance(map)
        createRoutes(currentLocations, map)
      })
    }
  }

  const createRoutes = (locations: Location[], map: any) => {
    if (map && window.ymaps) {
      // Remove any existing routes
      routes.forEach(route => map.geoObjects.remove(route))
      setRoutes([])

      // Define specific colors for each route
      const routeColors = [
        "#1AB2A6", // Samarkand to Tashkent
        "#FF9F81", // Samarkand to Bukhara
        "#87CEEB", // Samarkand to Khiva
        "#FF8C00", // Samarkand to Andijan
        "#32CD32",  // Samarkand to Navoi
        "#168CE6",  // Samarkand to Navoi
        "#9281FF",  // Samarkand to Navoi
      ]

      // Create and add new routes for each location
      const newRoutes = locations.map((location, index) => {
        const color = routeColors[index % routeColors.length] // Assign a color based on the index

        const multiRoute = new window.ymaps.multiRouter.MultiRoute({
          referencePoints: [
            fromLocationCoords,
            location.coords
          ],
          params: { routingMode: 'auto' }
        }, {
          boundsAutoApply: true,
          routeActiveStrokeWidth: 4,
          routeActiveStrokeColor: color, // Set the route color
        })

        map.geoObjects.add(multiRoute)
        return multiRoute
      })

      setRoutes(newRoutes)
    }
  }

  useEffect(() => {
    if (!mapLoaded) {
      loadYandexMap()
      setMapLoaded(true)
    } else if (mapInstance) {
      createRoutes(currentLocations, mapInstance)
    }
  }, [mapLoaded, activeTab])

  const handleLocationClick = (location: Location) => {
    if (mapInstance) {
      mapInstance.setCenter(location.coords, 14, { duration: 300 })
      createRoutes([location], mapInstance) // Create only the selected route
    }
  }

  const renderLocations = () => {
    return (
      <div>
        {currentLocations.map((location) => (
          <div key={location.id} className='rounded-[25px] bg-[#F3F7FB] py-[20px] px-[30px] flex flex-col mx-[12px] mb-[20px]' onClick={() => handleLocationClick(location)} style={{ cursor: 'pointer' }}>
            <div>
              <p className='text-[20px] font-raleway font-semibold text-titleDark'>{location.name}</p>
            </div>
            <div className='mt-[5px]'>
              <p className='text-[16px] text-[#7C7C7C] font-raleway'>{location.address || location.description}</p>
            </div>
            <div className='mt-[5px]'>
              <Link href={location.url} className='flex items-center text-[#168CE6] font-semibold font-raleway'>
                <p className='text-[17px]'>{location.link}</p>
                <MdNavigateNext size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className='mdl:w-[50%]'>
          <p className="text-[25px] font-bold text-titleDark mdl:text-[35px] 2xl:text-[40px] font-raleway">
            Туры и медицинские клиники Узбекистана
          </p>
          <div className="flex flex-row justify-between mt-[20px] mdl:mt-[30px] mdl:w-[80%] 2xl:w-[70%]">
            <button className={`font-semibold text-[14px] py-[12px] px-[20px] rounded-full ${activeTab === "clinics" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"}`} onClick={() => setActiveTab("clinics")}>
              Медицинские клиники
            </button>
            <button className={`font-semibold w-[40%] text-[14px] py-[12px] px-[18px] rounded-full ${activeTab === "tours" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"}`} onClick={() => setActiveTab("tours")}>
              Туры
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-[20px] mdl:mt-[40px]">
          <div className='hidden w-[30%] 2xl:flex 2xl:flex-col bg-white overflow-y-auto 2xl:h-[600px] mr-[10px]'>
            {renderLocations()}
          </div>

          <div className="rounded-[30px] overflow-hidden w-full 2xl:w-[70%]">
            <div className="w-full h-[350px] mdl:h-[400px] 2xl:h-[600px]">
              <div id="mapTUR" className="w-full h-full rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
