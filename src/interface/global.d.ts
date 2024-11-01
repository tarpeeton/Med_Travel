// src/global.d.ts

interface YMaps {
	Map: new (element: string | HTMLElement, options: YMapOptions) => YMapInstance;
	Placemark: new (
	  coordinates: [number, number],
	  properties: PlacemarkProperties,
	  options: PlacemarkOptions
	) => PlacemarkInstance;
	ready: (callback: () => void) => void;

	// Добавляем multiRouter для поддержки маршрутов
	multiRouter: {
		MultiRoute: new (options: MultiRouteOptions, params: MultiRouteParams) => MultiRouteInstance;
	};
}

interface YMapOptions {
	center: [number, number];
	zoom: number;
	controls: string[];
}

interface YMapInstance {
	geoObjects: {
	  add: (object: PlacemarkInstance | MultiRouteInstance) => void;
	};
}

interface PlacemarkProperties {
	hintContent: string;
	balloonContent: string;
}

interface PlacemarkOptions {
	iconColor?: string;
}



interface MultiRouteOptions {
	referencePoints: [number, number][];
	params?: {
		routingMode?: 'auto' | 'masstransit' | 'bicycle' | 'pedestrian';
	};
}

interface MultiRouteParams {
	boundsAutoApply?: boolean;
	routeActiveStrokeWidth?: number;
	routeActiveStrokeColor?: string;
}

interface MultiRouteInstance {
	// Instance of a multiRouter route
	options: {
		set: (key: string, value: any) => void;
	};
}

interface Window {
	ymaps: YMaps;
}
