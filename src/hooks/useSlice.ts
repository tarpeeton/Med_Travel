import { useState } from "react";

const useSlice = (initialSlice: number) => {
  const [sliceNumber, setSliceNumber] = useState(initialSlice);

  const handleSliceNumber = () => {
    setSliceNumber((prev) => prev + initialSlice); 
  };

  return { sliceNumber, handleSliceNumber };
};

export default useSlice;
