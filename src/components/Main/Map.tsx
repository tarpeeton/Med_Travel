"use client";
import { FC, useEffect, useState } from "react";

interface Location {
  id: number;
  coords: [number, number];
  name: string;
  address?: string;
  description?: string;
  link: string;
  url: string;
}

const Sanatoriums: FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false); // State to ensure the map is loaded once
  const [mapInstance, setMapInstance] = useState<any>(null); // Store the map instance
  const [activeTab, setActiveTab] = useState<"clinics" | "tours">("clinics"); // State for filtering clinics or tours

  // Sample array of locations for clinics
  const clinics: Location[] = [
    {
      id: 1,
      coords: [41.351469, 69.289004],
      name: "Interlab",
      address: "Узбекистан, г. Ташкент, Юнусабадский район, ул Чинобод 10А",
      link: "О клинике",
      url: "#",
    },
    { id: 2, coords: [41.3112, 69.2797], name: "Clinic A", address: "Address A", link: "О клинике", url: "#" },
    { id: 3, coords: [41.3275, 69.2817], name: "Clinic B", address: "Address B", link: "О клинике", url: "#" },
  ];

  // Sample array of locations for tours
  const tours: Location[] = [
    { id: 4, coords: [41.2995, 69.2201], name: "Tour A", description: "Tour Description A", link: "О туре", url: "#" },
    { id: 5, coords: [41.3201, 69.2937], name: "Tour B", description: "Tour Description B", link: "О туре", url: "#" },
    { id: 6, coords: [41.3402, 69.2753], name: "Tour C", description: "Tour Description C", link: "О туре", url: "#" },
  ];

  // Function to load Yandex Map script and initialize the map
  const loadYandexMap = () => {
    // Check if the script is already loaded
    if (!document.getElementById("yandex-map-script")) {
      const script = document.createElement("script");
      script.id = "yandex-map-script";
      // Replace 'YOUR_API_KEY' with your actual Yandex Maps API key
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=5771415d-001f-4699-b102-0fb2f6af965a&lang=ru_RU`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(() => {
            console.log("Yandex Maps API loaded");
            const map = new window.ymaps.Map("mapTUR", {
              center: [41.3112, 69.2797],
              zoom: 12,
              controls: [],
            });
            setMapInstance(map);
          });
        }
      };

      script.onerror = () => {
        console.error("Failed to load Yandex Maps API");
      };
    } else {
      console.log("Yandex Maps API is already loaded.");
      if (window.ymaps && !mapInstance) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map("mapTUR", {
            center: [41.3112, 69.2797],
            zoom: 12,
            controls: [],
          });
          setMapInstance(map);
        });
      }
    }
  };

  // Function to update markers on the map
  const updateMarkers = (locations: Location[]) => {
    if (mapInstance) {
      mapInstance.geoObjects.removeAll(); // Clear existing markers

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
        `;

        const placemark = new window.ymaps.Placemark(
          location.coords,
          {
            hintContent: location.name,
            balloonContent: balloonContent,
          },
          {
            iconColor: "#1AB2A6",
          }
        );
        mapInstance.geoObjects.add(placemark); // Add marker to the map
      });
    }
  };

  // Load Yandex Maps API when the component is mounted
  useEffect(() => {
    if (!mapLoaded) {
      loadYandexMap();
      setMapLoaded(true);
    }
  }, [mapLoaded]);

  // Update markers whenever the active tab or map instance changes
  useEffect(() => {
    if (mapInstance) {
      console.log("Map instance is ready, updating markers...");
      updateMarkers(activeTab === "clinics" ? clinics : tours);
    }
  }, [mapInstance, activeTab]);

  return (
    <div className="mx-[16px] mdl:mx-[20px] 2xl:mx-[200px] mt-[120px] 2xl:mt-[120px]">
      <div className="flex flex-col">
        <div>
          <p className="text-[25px] font-bold text-titleDark mdl:text-[35px] 2xl:text-[40px] font-raleway">
            Туры и медицинские клиники Узбекистана
          </p>
        </div>

        {/* Buttons for switching between clinics and tours */}
        <div className="flex flex-row justify-between mt-[20px] mdl:mt-[30px]">
          <button
            className={`font-semibold text-[15px] py-[12px] px-[20px] rounded-full ${
              activeTab === "clinics" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"
            }`}
            onClick={() => setActiveTab("clinics")}
          >
            Медицинские клиники
          </button>
          <button
            className={`font-semibold text-[15px] py-[12px] px-[20px] rounded-full ${
              activeTab === "tours" ? "bg-green100 text-white" : "border border-[#505050] text-[#505050]"
            }`}
            onClick={() => setActiveTab("tours")}
          >
            Туры
          </button>
        </div>

        {/* Yandex Map */}
        <div className="rounded-[30px] mt-[20px] overflow-hidden w-full mdl:mt-[40px]">
          <div className="w-full h-[250px] mdl:h-[400px] 2xl:h-[600px] rounded-[20px] mt-[20px]">
            <div id="mapTUR" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sanatoriums;
