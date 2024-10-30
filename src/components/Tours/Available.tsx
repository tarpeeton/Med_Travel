'use client'
import { FC, useState, useEffect, useRef } from 'react'
import Title from '../ui/title'
import Tours from './Tours'
import { Tour } from '@/interface/Tour'
import { gsap } from 'gsap'

interface AvailableProps {
  tours: Tour[]
  locale: "ru" | "uz" | "en"
  setTypeID: (id: string) => void
  types: { _id: string; name: {ru: string , uz:string , en:string} }[] // Define the structure of types
}

const Available: FC<AvailableProps> = ({ tours, types, setTypeID , locale }) => {
  const [activeTypeID, setActiveTypeID] = useState<string | null>(null) // Local state to track active button
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours) // State for filtered tours
  const toursRef = useRef<HTMLDivElement>(null) // Ref to the tours container for animation
  


  useEffect(() => {
    const storedTypeID = localStorage.getItem('activeTypeID');
    const initialTypeID = storedTypeID || types[0]?._id || ''; 
    setActiveTypeID(initialTypeID);
  }, [types]);




  useEffect(() => {
    
    if (activeTypeID) {
      const filtered = tours.filter(tour => tour.category._ref === activeTypeID); // Assuming tour has a typeId property
      setFilteredTours(filtered)
    } else {
      setFilteredTours(tours) // If no type is selected, show all tours
    }
  }, [activeTypeID, tours]) // Re-run effect when activeTypeID or tours change

  useEffect(() => {
    // GSAP animation for filtered tours
    if (toursRef.current) {
      gsap.fromTo(toursRef.current.children, 
        { opacity: 0, y: 70 }, // Starting state
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.55 } // Ending state
      );
    }
  }, [filteredTours]); // Trigger animation when filtered tours change

  const handleTypeChange = (id: string) => {
    setActiveTypeID(id) // Update the local active state
    setTypeID(id) // Call the prop function to update the type in the parent
    localStorage.setItem('activeTypeID', id.toString()) // Store the active ID in localStorage
  }



  
  return (
    <div className='relative'>
      <div className='flex flex-col'>
        <Title  text={{ru: 'Доступные туры' , uz: "" , en: ""}}  />
        <div className='flex 2xl:w-[30%] flex-row justify-between mt-[20px] mdl:mt-[30px]'>
          {types.map((type) => (
            <button
              key={type._id}
              onClick={() => handleTypeChange(type._id)} // Use the local function to handle state change
              className={`text-[15px] rounded-full font-semibold py-[12px] w-[48%] ${activeTypeID === type._id
                ? 'bg-greenButton text-white'
                : 'border border-borderColor bg-white text-titleDark'
                }`}
            >
              {type.name[locale]}
            </button>
          ))}
        </div>
        <div ref={toursRef}>
          <Tours tours={filteredTours} />
        </div>
      </div>
    </div>
  )
}

export default Available
