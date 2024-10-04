// src/global.d.ts
interface YMaps {
	Map: new (element: string | HTMLElement, options: YMapOptions) => YMapInstance;
	Placemark: new (
	  coordinates: [number, number], // A tuple for latitude and longitude
	  properties: PlacemarkProperties,
	  options: PlacemarkOptions
	) => PlacemarkInstance;
	ready: (callback: () => void) => void;
  }
  
  interface YMapOptions {
	center: [number, number]; // Tuple representing latitude and longitude
	zoom: number;
	controls: string[]; // Controls that should be added to the map (e.g., 'zoomControl')
  }
  
  interface YMapInstance {
	geoObjects: {
	  add: (placemark: PlacemarkInstance) => void;
	};
  }
  
  interface PlacemarkProperties {
	hintContent: string; // Content that shows when hovering over the placemark
	balloonContent: string; // Content that shows when the placemark is clicked
  }
  
  interface PlacemarkOptions {
	iconColor?: string; // The color of the placemark icon
  }
  
  interface PlacemarkInstance {
	// This is the instance returned when you create a placemark
  }
  
  interface Window {
	ymaps: YMaps; // Define ymaps with a strict type
  }
  