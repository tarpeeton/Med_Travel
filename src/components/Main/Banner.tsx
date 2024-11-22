"use client";

import { FC } from "react";
import Script from "next/script"; // Script komponentini import qilish

;
 

const MainBanner: FC = () => {
  const clientId = "145340d2c41ddb0af95a6a10d7be041cbc229a";

  return (
    <div className="relative">
      {/* Skriptni qo'shish */}
    
      <Script
        src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
        strategy="afterInteractive"
      />
   <div className="tv-image-slider tv-moduleid-9975728"></div>
     
    </div>
  );
};

export default MainBanner;
