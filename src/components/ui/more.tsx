import { FC } from 'react'

interface ISliceProps {
    sliceCounterUp: () => void
}

const LeanMoreButton: FC<ISliceProps> = ({ sliceCounterUp }) => {
    return (
        <div className='w-full text-center mt-[40px] mdl:mt-[60px]'>
            <button onClick={sliceCounterUp} className="bg-greenButton p-[16px] rounded-[10px] text-[18px] font-bold w-[50%] mx-auto 2xl:w-[20%] ">
                <span className='text-[16px] font-bold text-white'>
                    Загрузить еще
                </span>
            </button>
        </div>
    )
}

export default LeanMoreButton