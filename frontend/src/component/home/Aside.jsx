import React from 'react';
import images from "../../assets/schoolimg.jpg"

const Aside = () => {
  return (
    <div className='h-screen w-[30%] max-sm:h-48 max-sm:w-full 
     flex flex-col justify-around items-center  max-sm:flex-row bg-gray-400'>
      <div className=" max-sm:w-44 mt-20 max-sm:mt-4 ">      
        <img src={images} alt="school image" className='rounded-full w-36 h-36 ' />
      </div>
      <div className='text-white text-lg font-bold  flex flex-col gap-6 items-center  max-sm:mt-1'>
        <p>School Name</p>
        <p>States name</p>
        <p>Place</p>
      </div>

    </div>
  )
}

export default Aside