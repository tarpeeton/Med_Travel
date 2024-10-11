import { Location } from '@/interface/location'


export const tours: Location[] = [
    { id: 1, name: "Ташкент - Самарканд", description: "550$ - 19.08.2024 — 31.08.2024", coords: [39.6542, 66.9597], url: "/tours/samarkand", link: "Подробнее" },  // Samarkand
    { id: 2, name: "Бухара - Ташкент", description: "650$ - 19.08.2024 — 31.08.2024", coords: [41.2995, 69.2401], url: "/tours/tashkent", link: "Подробнее" },  // Tashkent
    { id: 3, name: "Андижон - Самарканд", description: "750$ - 19.08.2024 — 31.08.2024", coords: [40.7821, 72.3442], url: "/tours/samarkand", link: "Подробнее" },  // Andijan to Samarkand
    { id: 4, name: "Нavoий - Казахстан (Астана)", description: "850$ - 19.08.2024 — 31.08.2024", coords: [51.1694, 71.4491], url: "/tours/astana", link: "Подробнее" },  // Navoi to Astana, Kazakhstan
    { id: 5, name: "Намаган - Тошкент", description: "500$ - 19.08.2024 — 31.08.2024", coords: [41.0053, 71.6726], url: "/tours/tashkent", link: "Подробнее" },  // Namangan to Tashkent
    { id: 6, name: "Фарғона - Самарканд", description: "620$ - 19.08.2024 — 31.08.2024", coords: [40.3894, 71.7843], url: "/tours/samarkand", link: "Подробнее" },  // Fergana to Samarkand
  ]


  export const medicalTours: Location[] = [
    { id: 1, name: "Медицинский тур в Бухару", description: "Бухара, Узбекистан", coords: [39.7749, 64.4281], url: "/tours/bukhara", link: "Подробнее" }, // Bukhara
    { id: 2, name: "Медицинский тур в Хиву", description: "Хива, Узбекистан", coords: [41.3785, 60.3630], url: "/tours/khiva", link: "Подробнее" },  // Khiva
    { id: 3, name: "Медицинский тур в Самарканд", description: "Самарканд, Узбекистан", coords: [39.6542, 66.9597], url: "/tours/samarkand", link: "Подробнее" },  // Samarkand
    { id: 4, name: "Медицинский тур в Ташкент", description: "Ташкент, Узбекистан", coords: [41.2995, 69.2401], url: "/tours/tashkent", link: "Подробнее" },  // Tashkent
    { id: 5, name: "Медицинский тур в Андижон", description: "Андижон, Узбекистан", coords: [40.7821, 72.3442], url: "/tours/andijan", link: "Подробнее" }  // Andijan
  ]
