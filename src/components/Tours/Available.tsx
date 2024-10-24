'use client'
import { FC, useState, useEffect, useRef } from 'react'
import Title from '../ui/title'
import Tours from './Tours'
import { Tour } from '@/interface/Tour'
import { gsap } from 'gsap'

interface AvailableProps {
  tours: Tour[]
  setTypeID: (id: number) => void
  types: { id: number; name: string }[] // Define the structure of types
}

const Available: FC<AvailableProps> = ({ tours, types, setTypeID }) => {
  const [activeTypeID, setActiveTypeID] = useState<number | null>(null) // Local state to track active button
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours) // State for filtered tours
  const toursRef = useRef<HTMLDivElement>(null) // Ref to the tours container for animation

  useEffect(() => {
    const storedTypeID = localStorage.getItem('activeTypeID')
    const initialTypeID = storedTypeID ? parseInt(storedTypeID) : types[0]?.id || null
    setActiveTypeID(initialTypeID)
  }, [types])

  useEffect(() => {
    // Filter tours based on the active type ID
    if (activeTypeID) {
      const filtered = tours.filter(tour => tour.type.id === activeTypeID) // Assuming tour has a typeId property
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

  const handleTypeChange = (id: number) => {
    setActiveTypeID(id) // Update the local active state
    setTypeID(id) // Call the prop function to update the type in the parent
    localStorage.setItem('activeTypeID', id.toString()) // Store the active ID in localStorage
  }

  return (
    <div className='relative'>
      <div className='flex flex-col'>
        <Title title='Доступные туры' />
        <div className='flex 2xl:w-[30%] flex-row justify-between mt-[20px] mdl:mt-[30px]'>
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)} // Use the local function to handle state change
              className={`text-[15px] rounded-full font-semibold py-[12px] w-[48%] ${activeTypeID === type.id
                ? 'bg-greenButton text-white'
                : 'border border-borderColor bg-white text-titleDark'
                }`}
            >
              {type.name}
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
