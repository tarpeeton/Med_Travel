"use client"

import { FC, useEffect, useState } from 'react'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

interface IClinickItemMap {
  address: {coords: string[] , title:{ ru: string , uz:string , en: string}} | null | undefined
  phone: string | null | undefined
  telegram: string | null | undefined
  instagram: string | null | undefined
  locale: "ru" | "uz" | "en"
}

const ClinickItemMap: FC<IClinickItemMap> = ({address, phone, telegram, instagram , locale}) => {
  const [mapLoaded, setMapLoaded] = useState(false) // State to ensure the map is loaded once
  const [mapInstance, setMapInstance] = useState<any>(null) // Store the map instance

  useEffect(() => {
    const loadYandexMap = () => {
      if (window.ymaps && !mapLoaded) {
        setMapLoaded(true);
        if (!mapInstance) {
          initializeMap();
        }
        return;
      }

      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.ymaps.ready(() => {
          initializeMap();
        });
      };
      script.onerror = () => {
        console.error("Failed to load Yandex Maps API");
      };
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      if (window.ymaps && address?.coords?.[0]) {
        // Проверяем, что координаты существуют
        const coords = address.coords[0]
          .split(',')
          .map(coord => parseFloat(coord.trim()));
    
        if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
          const [latitude, longitude] = coords;
    
          // Создаём карту
          const map = new window.ymaps.Map('map', {
            center: [latitude, longitude],
            zoom: 17,
            controls: [],
          });
    
          // Создаём метку
          const placemark = new window.ymaps.Placemark(
            [latitude, longitude],
            {
              hintContent: address?.title?.[locale] || 'No title available',
              balloonContent: address?.title?.[locale] || 'No description available',
            },
            {
              iconColor: '#1AB2A6',
            }
          );
    
          // Добавляем метку на карту
          map.geoObjects.add(placemark);
    
          // Сохраняем состояние карты
          setMapInstance(map); // Убедитесь, что setMapInstance определена
          setMapLoaded(true); // Убедитесь, что setMapLoaded определена
        } else {
          console.error('Invalid coordinates:', address.coords[0]);
        }
      } else {
        console.error('Yandex Maps API is not loaded or address coordinates are missing');
      }
    };
    
    if (!mapLoaded) {
      loadYandexMap();
    }
  }, [mapLoaded, mapInstance, address, locale]);

  return (
    <div>
      <div className="flex flex-col">
        {/* Contact Details */}
        <div className="flex flex-col">
          <div>
            <p className="text-[25px] mdl:text-[35px] 2xl:text-[40px] font-bold font-raleway text-titleDark">
              Контакты
            </p>
          </div>
          <div className="flex flex-col 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:mt-[30px]">
            {/* Address */}
            <div className="py-[22px] border-b border-[#D3D3D3] 2xl:w-[40%] 2xl:pr-[20px] 2xl:border-b-0 2xl:border-r 2xl:py-[0]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold ">
                Адрес
              </p>
              <p className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[4px]">
                {address?.title[locale]}
              </p>
            </div>
            {/* Phone */}
            <div className="py-[22px] border-b border-[#D3D3D3] 2xl:pr-[20px] 2xl:border-b-0 2xl:border-r 2xl:py-[0]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold">
                Телефон
              </p>
              <Link href='tel:+998938019101' className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[4px]">
                {phone}
              </Link>
            </div>
            {/* Social Links */}
            <div className="py-[22px] border-b border-[#D3D3D3] 2xl:pr-[20px] 2xl:border-b-0 2xl:border-r 2xl:py-[0]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold cursor-pointer">
                Соц.сети
              </p>
              <Link target="_blank"
                rel="noopener noreferrer" href={`${instagram}`} className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[8px] flex flex-row gap-[8px]">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#F00073] 2xl:w-[35px] 2xl:h-[35px]">
                  <FaInstagram className="text-white" size={20} />
                </div>
                Instagram
              </Link>
            </div>
            <div className="py-[22px] border-b border-[#D3D3D3] 2xl:border-b-0 2xl:py-[0]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold cursor-pointer">
                Соц.сети
              </p>
              <Link target="_blank"
                rel="noopener noreferrer" href={`${telegram}`} className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[8px] flex flex-row gap-[8px]">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#0088CC] 2xl:w-[35px] 2xl:h-[35px]">
                  <FaTelegramPlane className="text-white" size={20} />
                </div>
                Telegram
              </Link>
            </div>
          </div>
        </div>

        {/* Yandex Map */}
        <div className="rounded-[30px] mt-[20px] overflow-hidden w-full mdl:mt-[40px]">
          <div className='h-[300px] mdl:h-[400px] 2xl:h-[500px]'>
            <div id="map" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinickItemMap
