"use client"

import Link from 'next/link'
import { FC, useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Tour } from '@/interface/Tour'
import useLocale from '@/hooks/useLocale'
import { formatDate } from '@/hooks/fotmatDate'


interface IMapProps {
  coordinates: Tour[]
  types: { _id: string; name: { ru: string, uz: string, en: string } }[]
}


const Map: FC<IMapProps> = ({ coordinates, types }) => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<string | null>(null)




  useEffect(() => {
    if (types.length > 0) {
      setActiveTab(types[0]._id) // types ning birinchi elementining _id sini o'rnatamiz
    }
  }, [types])



  const locale = useLocale()

  const [data, setData] = useState<Array<{
    fromAddress: { ru: string, uz: string, en: string },
    toAddress: { ru: string, uz: string, en: string },
    price: number,
    fromDate: string,
    toDate: string,
    fromAddressLatitude: number,
    category: string,
    fromAddressLongitude: number,
    toAddressLatitude: number,
    toAddressLongitude: number
  }>>([])




  useEffect(() => {
    const filteredData = coordinates.map((item) => ({
      fromAddress: item.fromAddress,
      toAddress: item.toAddress,
      price: item.price,
      fromDate: item.fromDate,
      toDate: item.toDate,
      fromAddressLatitude: Number(item.fromAddressLatitude),
      fromAddressLongitude: Number(item.fromAddressLongitude),
      toAddressLatitude: Number(item.toAddressLatitude),
      toAddressLongitude: Number(item.toAddressLongitude),
      category: item.category._ref,

    }))
    setData(filteredData)
  }, [coordinates])







  const fromLocationCoords: [number, number] = [41.351473, 69.289052] // Начальная точка



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
            createRoutes()
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
        createRoutes()
      })
    }
  }


  const createRoutes = () => {
    if (!mapInstance || data.length === 0) return

    // Clear existing routes
    mapInstance.geoObjects.removeAll()

    // Filter data based on activeTab (category)
    const filteredData = data.filter(item => item.category === activeTab)

    filteredData.forEach((location, index) => {
      const multiRoute = new window.ymaps.multiRouter.MultiRoute({
        referencePoints: [
          [location.fromAddressLatitude, location.fromAddressLongitude],
          [location.toAddressLatitude, location.toAddressLongitude],
        ],
        params: { routingMode: 'auto' },
      }, {
        boundsAutoApply: true,
        routeActiveStrokeWidth: 7,
      })
      mapInstance.geoObjects.add(multiRoute)
    })
  }

  useEffect(() => {
    if (!mapLoaded) {
      loadYandexMap()
      setMapLoaded(true)
    }
  }, [mapLoaded])

  useEffect(() => {
    if (mapInstance && data.length > 0) {
      createRoutes()
    }
  }, [mapInstance, data, activeTab])




  useEffect(() => {
    if (!mapLoaded) {
      loadYandexMap()
      setMapLoaded(true)
    }
  }, [mapLoaded])

  useEffect(() => {
    if (mapInstance && data.length > 0) {
      createRoutes()
    }
  }, [mapInstance, data, activeTab])


  const renderLocations = () => {
    const filteredData = data.filter(item => item.category === activeTab)
    return (
      <div>
        {filteredData.map((location, index) => (
          <div key={index} className='location-info rounded-[25px] relative 2xl:h-[182px] bg-[#F3F7FB] py-[20px] px-[30px] flex flex-col mx-[12px] mb-[20px]' style={{ cursor: 'pointer' }}>
            <div>
              <p className='text-[20px] font-raleway font-semibold text-titleDark'>{location.fromAddress[locale]} -{location.toAddress[locale]} </p>
            </div>
            <div className='mt-[5px]'>
              <p className='text-[16px] text-[#7C7C7C] font-raleway'>{location.price}$ • {formatDate(location.fromDate)}—{formatDate(location.toDate)}</p>
            </div>
            <div className='mt-[5px] absolute bottom-[20px]'>
              <Link href={location.toAddress[locale]} className='flex items-center text-[#168CE6] font-semibold font-raleway'>
                <p className='text-[17px]'>Подробнее</p>
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
        <div className='xx'>
          <p className="text-[25px] mdl:w-[50%] font-bold text-titleDark mdl:text-[35px] 2xl:text-[40px] font-raleway">
            Туры и медицинские клиники Узбекистана
          </p>
          <div className="flex flex-row justify-between mt-[20px] mdl:mt-[30px] mdl:w-[80%] 2xl:w-[70%] 2xl:justify-normal 2xl:gap-[8px]">
            {types.map((item) => (
              <button
                key={item._id}
                className={`font-semibold 2xl:w-[200px] text-[14px] 2xl:text-[17px] py-[12px] px-[20px] rounded-full ${activeTab === item._id ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"}`}
                onClick={() => setActiveTab(item._id)}
              >
                {item.name[locale]}
              </button>
            ))}
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
