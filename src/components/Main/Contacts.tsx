"use client";

import { FC, useEffect } from 'react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';

const Contacts: FC = () => {
	useEffect(() => {
		const loadYandexMap = () => {
		  if ((window as any).ymaps) { // Cast window to any
			return; // Avoid reloading the map if already initialized
		  }
	  
		  const script = document.createElement('script');
		  script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
		  script.async = true;
		  document.body.appendChild(script);
	  
		  script.onload = () => {
			(window as any).ymaps.ready(() => { // Again cast window to any here
			  const map = new (window as any).ymaps.Map('map', {
				center: [41.351469, 69.289004],
				zoom: 17,
				controls: [],
			  });
	  
			  const placemark = new (window as any).ymaps.Placemark(
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
			});
		  };
		};
	  
		loadYandexMap();
	  }, []);
	  

  return (
    <div>
      <div className="flex flex-col mx-[16px]">
        {/* Contact Details */}
        <div className="flex flex-col">
          <div>
            <p className="text-[25px] mdl:text-[35px] 2xl:text-[40px] font-bold font-raleway text-titleDark">
              Контакты
            </p>
          </div>
          <div className="flex flex-col">
            {/* Address */}
            <div className="py-[22px] border-b border-[#D3D3D3]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold">
                Адрес
              </p>
              <p className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[4px]">
                Ташкент, Юнусабадский район, ул. Чинобод 2. Ориентир метро Шахристан
              </p>
            </div>
            {/* Phone */}
            <div className="py-[22px] border-b border-[#D3D3D3]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold">
                Телефон
              </p>
              <p className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[4px]">
                +998 (93) 801 91 01
              </p>
            </div>
            {/* Social Links */}
            <div className="py-[22px] border-b border-[#D3D3D3]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold cursor-pointer">
                Соц.сети
              </p>
              <Link href="/instagram" className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[8px] flex flex-row gap-[8px]">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#F00073]">
                  <FaInstagram className="text-white" />
                </div>
                Instagram
              </Link>
            </div>
            <div className="py-[22px] border-b border-[#D3D3D3]">
              <p className="text-[12px] mdl:text-[17px] text-titleDark40 font-raleway font-semibold cursor-pointer">
                Соц.сети
              </p>
              <Link href="/telegram" className="text-[18px] mdl:text-[22px] text-titleDark font-medium font-raleway mt-[8px] flex flex-row gap-[8px]">
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#0088CC]">
                  <FaTelegramPlane className="text-white" />
                </div>
                Telegram
              </Link>
            </div>
          </div>
        </div>

        {/* Yandex Map */}
        <div className="rounded-[30px] mt-[20px] overflow-hidden w-full ">
          <div id="map" className="w-full h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
