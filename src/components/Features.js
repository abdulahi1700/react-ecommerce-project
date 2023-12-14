import React from 'react';
import bed from '../assets/bed.png';
import lounch from '../assets/lounch.png';
import chair from '../assets/chair.jpeg';
import living from '../assets/living.png';
function Features() {
  return (
    <div>
      <h1 className=" text-center text-xl"> Features</h1>
      <div className=" grid grid-cols-2  lg:grid-cols-4 gap-14 mt-14 ">
        <div
          className=" flex items-center border-2 border-gray-600 rounded-full py-8 
        px-10 w-40 h-40 space-y flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer"
        >
          <img src={bed} alt="" />
          <h1>Bedroom</h1>
        </div>
        <div
          className=" flex items-center border-2 border-gray-600 rounded-full py-8 
        px-10 w-40 h-40 space-y flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer"
        >
          <img src={chair} alt="" />
          <h1>Chair</h1>
        </div>
        <div
          className=" flex items-center border-2 border-gray-600 rounded-full py-8 
        px-10 w-40 h-40 space-y flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer"
        >
          <img src={lounch} alt="" />
          <h1>Lounch</h1>
        </div>
        <div
          className=" flex items-center border-2 border-gray-600 rounded-full py-8 
        px-10 w-40 h-40 space-y flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer"
        >
          <img src={living} alt="" />
          <h1>Living</h1>
        </div>
      </div>
    </div>
  );
}

export default Features;
