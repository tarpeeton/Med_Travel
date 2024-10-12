import {Location} from '../../interface/location'
export const clinics: Location[] = [
    {
        id: 1,
        coords: [41.351469, 69.289004],
        name: "Interlab",
        address: "Узбекистан, г. Ташкент, Юнусабадский район, ул Чинобод 10А",
        link: "О клинике",
        url: "#",
    },
    {
        id: 2,
        coords: [41.3112, 69.2797],
        name: "Clinic A",
        address: "Узбекистан, г. Ташкент, район A",
        link: "О клинике",
        url: "#",
    },
    {
        id: 3,
        coords: [41.3275, 69.2817],
        name: "Clinic B",
        address: "Узбекистан, г. Ташкент, район B",
        link: "О клинике",
        url: "#",
    },
]

// Sample array of locations for tours
export const tours: Location[] = [
    { id: 4, coords: [41.2995, 69.2201], name: "Tour A", description: "Tour Description A", link: "О туре", url: "#" },
    { id: 5, coords: [41.3201, 69.2937], name: "Tour B", description: "Tour Description B", link: "О туре", url: "#" },
    { id: 6, coords: [41.3402, 69.2753], name: "Tour C", description: "Tour Description C", link: "О туре", url: "#" },
]
