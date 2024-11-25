"use client";

import { FC } from "react";
import Script from "next/script"; // Script komponentini import qilish

;
 

const MainBanner: FC = () => {
  const clientId = "145832671cce98f22847de5fbecf6e9090dfc7";

  return (
    <div className="relative">
      {/* Skriptni qo'shish */}
    
      <Script
        src={`//tourvisor.ru/module/init.js?clientId=${clientId}`}
        strategy="afterInteractive"
      />
   <div className="tv-image-slider tv-moduleid-9975743"></div>
    </div>
  );
};

export default MainBanner;
