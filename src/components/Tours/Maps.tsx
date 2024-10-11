"use client"

import Link from 'next/link'
import { FC, useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Location } from '@/interface/location'




const Map: FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false) 
  const [mapInstance, setMapInstance] = useState<any>(null) 
  const [activeTab, setActiveTab] = useState<"clinics" | "tours">("clinics")
  const [route, setRoute] = useState<any>(null)

  // Predefined "from" and "to" locations
  const fromLocation = "Семарганд" // Samarkand
  const toLocation = "Ташкент"    // Tashkent


  // Define tours data
  const medicalTours: Location[] = [
    {
      id: 1,
      name: "Тур в Бухару",
      address: "Бухара, Узбекистан",
      description: "Описание тура в Бухару",
      coords: [39.7684, 64.4281],
      url: "/tours/bukhara",
      link: "Подробнее"
    },
    {
      id: 2,
      name: "Тур в Хиву",
      address: "Хива, Узбекистан",
      description: "Описание тура в Хиву",
      coords: [41.4672, 60.6383],
      url: "/tours/khiva",
      link: "Подробнее"
    },
    // Add more tours as needed
  ]
  const tours: Location[] = [
    {
      id: 1,
      name: "Тур в Бухару",
      address: "Бухара, Узбекистан",
      description: "Описание тура в Бухару",
      coords: [39.7684, 64.4281],
      url: "/tours/bukhara",
      link: "Подробнее"
    },
    {
      id: 2,
      name: "Тур в Хиву",
      address: "Хива, Узбекистан",
      description: "Описание тура в Хиву",
      coords: [41.4672, 60.6383],
      url: "/tours/khiva",
      link: "Подробнее"
    },
    // Add more tours as needed
  ]


  // Combine clinics and tours data for easier handling
  const fromToData = activeTab === "clinics" ? medicalTours : tours

  // Function to load Yandex Map script and initialize the map
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
              center: [41.3112, 69.2797], // Initial center (Tashkent)
              zoom: 12,
              controls: ['zoomControl', 'searchControl'], // Add desired controls
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
          controls: ['zoomControl', 'searchControl'],
        })
        setMapInstance(map)
      })
    }
  }

  // Function to create a route between two points
  const createRoute = (from: string, to: string) => {
    if (mapInstance && window.ymaps) {
      // Remove existing route if any
      if (route) {
        mapInstance.geoObjects.remove(route)
      }

      const multiRoute = new window.ymaps.multiRouter.MultiRoute({
        referencePoints: [
          from,
          to
        ],
        params: {
          routingMode: 'auto', // or 'masstransit', 'pedestrian'
        }
      }, {
        boundsAutoApply: true,
        routeActiveStrokeWidth: 4, // Customize as needed
      })

      mapInstance.geoObjects.add(multiRoute)
      setRoute(multiRoute)
    }
  }

  // Function to update markers on the map
  const updateMarkers = (locations: Location[]) => {
    if (mapInstance && window.ymaps) {
      // Clear existing geoObjects except the route
      mapInstance.geoObjects.each((geoObject: any) => {
        if (geoObject !== route) {
          mapInstance.geoObjects.remove(geoObject)
        }
      })

      // Add new placemarks
      locations.forEach((location) => {
        const placemark = new window.ymaps.Placemark(location.coords, {
          balloonContent: `
            <div>
              <h3>${location.name}</h3>
              <p>${location.address || location.description}</p>
              <a href="${location.url}" class="text-blue-500">Подробнее</a>
            </div>
          `
        }, {
          preset: 'islands#icon',
          iconColor: '#0095b6'
        })

        mapInstance.geoObjects.add(placemark)
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
      updateMarkers(fromToData)
    }
  }, [mapInstance, activeTab])

  // Create route when map instance is ready
  useEffect(() => {
    if (mapInstance) {
      createRoute(fromLocation, toLocation)
    }
  }, [mapInstance])

  // Function to handle location click
  const handleLocationClick = (coords: [number, number]) => {
    if (mapInstance) {
      // Center the map on the clicked location's coordinates
      mapInstance.setCenter(coords, 14, { duration: 300 })

      // Iterate through geoObjects to find the correct placemark and open its balloon
      mapInstance.geoObjects.each((geoObject: any) => {
        const placemarkCoords = geoObject.geometry.getCoordinates()
        if (placemarkCoords.toString() === coords.toString()) {
          geoObject.balloon.open()
        }
      })
    }
  }

  // Function to render location details based on the active tab
  const renderLocations = () => {
    return (
      <div>
        {/* Fixed Text: From Tashkent to Samarqand */}
      
        {/* List of Locations */}
        {fromToData.map((location) => (
          <div
            key={location.id}
            className='rounded-[25px] bg-[#F3F7FB] py-[20px] px-[30px] flex flex-col mx-[12px] mb-[20px]'
            onClick={() => handleLocationClick(location.coords)}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <p className='text-[25px] font-raleway font-semibold text-titleDark'>{location.name}</p>
            </div>
            <div className='mt-[5px]'>
              <p className='text-[17px] text-[#7C7C7C] font-raleway'>{location.address || location.description}</p>
            </div>
            <div className='mt-[5px]'>
              <Link href={location.url} className='flex items-center text-[#168CE6] font-semibold font-raleway'>
                <p className='text-[18px]'>{location.link}</p>
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
            <button
              className={`font-semibold text-[15px] py-[12px] px-[20px] rounded-full ${
                activeTab === "clinics" 
                  ? "bg-green100 text-white" 
                  : "border border-[#505050] text-[#505050] 2xl:text-[17px]"
              }`}
              onClick={() => setActiveTab("clinics")}
            >
              Медицинские клиники
            </button>
            <button
              className={`font-semibold w-[40%] text-[15px] py-[12px] px-[20px] rounded-full ${
                activeTab === "tours" 
                  ? "bg-green100 text-white" 
                  : "border border-[#505050] text-[#505050] 2xl:text-[17px]"
              }`}
              onClick={() => setActiveTab("tours")}
            >
              Туры
            </button>
          </div>
        </div>

        {/* Render clinics or tours based on active tab */}
        <div className="flex flex-row mt-[20px] mdl:mt-[40px]">
          {/* Sidebar for Locations */}
          <div className='hidden w-[30%] 2xl:flex 2xl:flex-col bg-white overflow-y-auto 2xl:h-[600px] mr-[10px]'>
            {renderLocations()}
          </div>

          {/* Yandex Map */}
          <div className="rounded-[30px] overflow-hidden w-full 2xl:w-[70%]">
            <div className="w-full h-[250px] mdl:h-[400px] 2xl:h-[600px]">
              <div id="mapTUR" className="w-full h-full rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
