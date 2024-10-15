'use client'
import { FC, useState , useEffect } from 'react'
import Title from '../ui/title'
import Tours from './Tours'
import { Tour } from '@/interface/Tour'


interface AvailableProps {
  tours: Tour[]
  setTypeID: (id: number) => void
  types: { id: number; name: string }[] // Define the structure of types
}
const Available: FC<AvailableProps> = ({ tours, types, setTypeID }) => {
  const [activeTypeID, setActiveTypeID] = useState<number | null>(null); // Local state to track active button

  // Load activeTypeID from localStorage on component mount
  useEffect(() => {
    const storedTypeID = localStorage.getItem('activeTypeID');
    setActiveTypeID(storedTypeID ? parseInt(storedTypeID) : types[0]?.id || null); // Default to the first type if none is stored
  }, [types]);

  const handleTypeChange = (id: number) => {
    setActiveTypeID(id); // Update the local active state
    setTypeID(id); // Call the prop function to update the type in the parent
    localStorage.setItem('activeTypeID', id.toString()); // Store the active ID in localStorage
  };
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
        <Tours tours={tours} />
      </div>
    </div>
  )
}

export default Available