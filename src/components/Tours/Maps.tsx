"use client"

import Link from 'next/link'
import { FC, useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Location } from '@/interface/location'
import { tours, medicalTours } from '@/constants/Coordinates'
import { gsap } from 'gsap'

const Map: FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<"clinics" | "tours">("clinics")
  const [clinicRoutes, setClinicRoutes] = useState<any[]>([])
  const [tourRoutes, setTourRoutes] = useState<any[]>([])

  const fromLocationCoords: [number, number] = [41.351473, 69.289052] // Начальная точка

  const currentLocations = activeTab === "clinics" ? medicalTours : tours

  // Цвета для маршрутов
  const clinicRouteColors = ["#32CD32", "#008000", "#00FF00", "#006400"] // Цвета для клиник
  const tourRouteColors = ["#FF8C00", "#FFA500", "#FF4500", "#FF6347"]  // Цвета для туров

  const loadYandexMap = () => {
    if (typeof window !== "undefined" && !document.getElementById("yandex-map-script")) {
      const script = document.createElement("script")
      script.id = "yandex-map-script"
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`
      script.async = true
      script.defer = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(() => {
            const map = new window.ymaps.Map("yandexMap", {
              center: fromLocationCoords,
              zoom: 6,
              controls: ['typeSelector', 'fullscreenControl'],
            })
            setMapInstance(map)
            createClinicRoutes(map)
            createTourRoutes(map)
          })
        }
      }
    } else if (window.ymaps && !mapInstance) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("yandexMap", {
          center: fromLocationCoords,
          zoom: 6,
          controls: ['typeSelector', 'fullscreenControl'],
        })
        setMapInstance(map)
        createClinicRoutes(map)
        createTourRoutes(map)
      })
    }
  }

  const createClinicRoutes = (map: any) => {
    const routes = medicalTours.map((location, index) => {
      const multiRoute = new window.ymaps.multiRouter.MultiRoute({
        referencePoints: [fromLocationCoords, location.coords],
        params: { routingMode: 'auto' }
      }, {
        boundsAutoApply: true,
        routeActiveStrokeWidth: 7,
        routeActiveStrokeColor: clinicRouteColors[index % clinicRouteColors.length], // Применяем цвета
      })
      map.geoObjects.add(multiRoute)
      return multiRoute
    })
    setClinicRoutes(routes)
  }

  const createTourRoutes = (map: any) => {
    const routes = tours.map((location, index) => {
      const multiRoute = new window.ymaps.multiRouter.MultiRoute({
        referencePoints: [fromLocationCoords, location.coords],
        params: { routingMode: 'auto' }
      }, {
        boundsAutoApply: true,
        routeActiveStrokeWidth: 7,
        routeActiveStrokeColor: tourRouteColors[index % tourRouteColors.length], // Применяем цвета
      })
      map.geoObjects.add(multiRoute)
      return multiRoute
    })
    setTourRoutes(routes)
  }

  const toggleRoutesVisibility = () => {
    // Скрыть или показать маршруты в зависимости от активной вкладки
    clinicRoutes.forEach(route => {
      if (activeTab === "clinics") {
        route.options.set('visible', true)
      } else {
        route.options.set('visible', false)
      }
    })

    tourRoutes.forEach(route => {
      if (activeTab === "tours") {
        route.options.set('visible', true)
      } else {
        route.options.set('visible', false)
      }
    })

    // Анимация переключения вкладок
    gsap.to(".map-container", { opacity: 0, duration: 0.3, onComplete: () => {
      gsap.to(".map-container", { opacity: 1, duration: 0.6 })
    }})
  }

  useEffect(() => {
    if (!mapLoaded) {
      loadYandexMap()
      setMapLoaded(true)
    } else if (mapInstance) {
      toggleRoutesVisibility()
    }
  }, [mapLoaded, activeTab, clinicRoutes, tourRoutes])

  const handleLocationClick = (location: Location) => {
    if (mapInstance) {
      mapInstance.setCenter(location.coords, 14, { duration: 2000 })

      // Анимация для перемещения карты
      gsap.to(mapInstance, { duration: 2, ease: "power2.out", onComplete: () => {
        // Дополнительная анимация после перемещения
        gsap.fromTo(".location-info", { opacity: 0 }, { opacity: 1, duration: 0.8 })
      }})
    }
  }

  const renderLocations = () => {
    return (
      <div>
        {currentLocations.map((location) => (
          <div key={location.id} className='location-info rounded-[25px] bg-[#F3F7FB] py-[20px] px-[30px] flex flex-col mx-[12px] mb-[20px]' onClick={() => handleLocationClick(location)} style={{ cursor: 'pointer' }}>
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
          <div className="flex flex-row justify-between mt-[20px] mdl:mt-[30px] mdl:w-[80%] 2xl:w-[70%] 2xl:justify-normal 2xl:gap-[8px]">
            <button className={`font-semibold text-[14px] py-[12px] px-[20px] rounded-full ${activeTab === "clinics" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"}`} onClick={() => setActiveTab("clinics")}>
            Медицинские туры
            </button>
            <button className={`font-semibold w-[40%] text-[14px] py-[12px] px-[18px] rounded-full ${activeTab === "tours" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"}`} onClick={() => setActiveTab("tours")}>
            Обычные туры
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-[20px] mdl:mt-[40px]">
          <div className='hidden w-[30%] 2xl:flex 2xl:flex-col bg-white overflow-y-auto 2xl:h-[600px] mr-[10px]'>
            {renderLocations()}
          </div>

          <div className="map-container rounded-[30px] overflow-hidden w-full 2xl:w-[70%]">
            <div className="w-full h-[350px] mdl:h-[400px] 2xl:h-[600px]">
              <div id="yandexMap" className="w-full h-full rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
