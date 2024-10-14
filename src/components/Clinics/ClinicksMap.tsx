"use client"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Location } from "@/interface/location"
import { clinics } from "@/constants/Main/Map"

const ClinickMap: FC = () => {
    const [mapLoaded, setMapLoaded] = useState(false)
    const [mapInstance, setMapInstance] = useState<any>(null)
    const [activeTab, setActiveTab] = useState("clinics")

    useEffect(() => {
        const handleScroll = () => {
            const mapElement = document.getElementById("mapTUR")
            if (mapElement && mapElement.getBoundingClientRect().top < window.innerHeight) {
                if (!mapLoaded) {
                    loadYandexMap()
                    setMapLoaded(true)
                }
                window.removeEventListener("scroll", handleScroll) // Remove listener after loading
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [mapLoaded])

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

    const updateMarkers = (locations: Location[]) => {
        if (mapInstance) {
            mapInstance.geoObjects.removeAll() // Clear existing markers

            locations.forEach((location) => {
                const balloonContent = `
          <div style="font-family: Raleway, sans-serif;">
            <strong style="font-weight: 600; font-size: 20px; line-height: 25px;">${location.name || "No Name"}</strong>
            <p style="margin: 8px 0; color: #505050; font-weight: 500; font-size: 12px; line-height: 14.09px;">
              ${location.address || location.description || "No Address"}
            </p>
            <a href="${location.url}" style="color: #168CE6; font-weight: 700; font-size: 14px; line-height: 16.44px; text-decoration: none;">
              ${location.link || "Learn More"} &nbsp;&rarr;
            </a>
          </div>
        `

                const placemark = new window.ymaps.Placemark(
                    location.coords,
                    {
                        hintContent: location.name || "No Name",
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

    useEffect(() => {
        if (mapInstance) {
            updateMarkers(clinics)
        }
    }, [mapInstance, activeTab])

    const handleLocationClick = (coords: [number, number]) => {
        if (mapInstance) {
            mapInstance.setCenter(coords, 14, { duration: 300 })

            mapInstance.geoObjects.each((geoObject: any) => {
                const placemarkCoords = geoObject.geometry.getCoordinates()
                if (placemarkCoords.toString() === coords.toString()) {
                    geoObject.balloon.open() // Open the balloon for the corresponding placemark
                }
            })
        }
    }

    const renderLocations = () => {
        const locations = clinics
        return locations.map((location) => (
            <div
                key={location.id}
                className="rounded-[25px] bg-[#F3F7FB] py-[20px] px-[30px] flex flex-col mx-[12px] mb-[20px]"
                onClick={() => handleLocationClick(location.coords)}
                style={{ cursor: "pointer" }}
            >
                <div>
                    <p className="text-[25px] font-raleway font-semibold text-titleDark">
                        {location.name || "No Name"}
                    </p>
                </div>
                <div className="mt-[5px]">
                    <p className="text-[17px] text-[#7C7C7C] font-raleway">
                        {location.address || location.description || "No Address"}
                    </p>
                </div>
                <div className="mt-[5px]">
                    <Link href={location.url} className="flex items-center text-[#168CE6] font-semibold font-raleway">
                        <p className="text-[18px]">{location.link || "Learn More"}</p>
                        <MdNavigateNext size={20} />
                    </Link>
                </div>
            </div>
        ))
    }

    return (
        <div className="mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px] 2xl:mt-[120px]">
            <div className="flex flex-col">
                <div className="mdl:w-[50%]">
                    <p className="text-[25px] font-bold text-titleDark mdl:text-[35px] 2xl:text-[40px] font-raleway">
                        Медицинские клиники Узбекистана
                    </p>
                </div>

                <div className="flex flex-row mt-[20px] mdl:mt-[40px] ">
                    <div className="hidden w-[30%] 2xl:flex 2xl:flex-col bg-white overflow-y-auto 2xl:h-[600px] mr-[10px]">
                        {renderLocations()}
                    </div>

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

export default ClinickMap
