"use client";

import { FC, useEffect, useState } from 'react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';

const Contacts: FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false); // State to ensure the map is loaded once
  const [mapInstance, setMapInstance] = useState<any>(null); // Store the map instance

  useEffect(() => {
    const loadYandexMap = () => {
      // Check if the script is already loaded
      if (window.ymaps && !mapLoaded) {
        setMapLoaded(true);
        if (!mapInstance) {
          initializeMap();
        }
        return;
      }

      // Load the Yandex Maps script
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`;
      script.async = true;
      script.defer = true
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
      // Check if Yandex Maps API is loaded and ready
      if (window.ymaps) {
        const map = new window.ymaps.Map('map', {
          center: [41.351469, 69.289004],
          zoom: 17,
          controls: [],
        });

        const placemark = new window.ymaps.Placemark(
          [41.351469, 69.289004],
          {
            hintContent: 'Ташкент',
            balloonContent: 'Чинобод 2, метро Шахристан',
          },
          {
            iconColor: '#1AB2A6',
          }
        );

        map.geoObjects.add(placemark);
        setMapInstance(map); // Store the map instance
        setMapLoaded(true);
      } else {
        console.error("Yandex Maps API is not available.");
      }
    };

    // Load the map if it's not loaded
    if (!mapLoaded) {
      loadYandexMap();
    }
  }, [mapLoaded, mapInstance]);

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
                Ташкент, Юнусабадский район, ул. Чинобод 2. Ориентир метро Шахристан
              </p>
            </div>
            {/* Phone */}
            <div className="py-[22px] border-b border-[#D3D3D3] 2xl:pr-[20px] 2xl:border-b-0 2xl:border-r 2xl:py-[0]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold">
                Телефон
              </p>
              <Link href='tel:+998938019101' className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[4px]">
                +998 (93) 801 91 01
              </Link>
            </div>
            {/* Social Links */}
            <div className="py-[22px] border-b border-[#D3D3D3] 2xl:pr-[20px] 2xl:border-b-0 2xl:border-r 2xl:py-[0]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold cursor-pointer">
                Соц.сети
              </p>
              <Link href="/instagram" className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[8px] flex flex-row gap-[8px]">
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
              <Link href="/telegram" className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[8px] flex flex-row gap-[8px]">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#0088CC] 2xl:w-[35px] 2xl:h-[35px]">
                  <FaTelegramPlane className="text-white"  size={20}/>
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
  );
};

export default Contacts;
