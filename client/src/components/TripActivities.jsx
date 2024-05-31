import React from 'react'
import { FiActivity } from "react-icons/fi";
import { GiHiking } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiCycling } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { SiJusteat } from "react-icons/si";
import '../screens/styles.css';

const TripActivities = () => {
  return (
    <>
      <h2 className="text-xl md:text-3xl flex items-center justify-center text-emerald-700 font-semibold m-4">
        <FiActivity className='text-4xl mr-3 text-yellow-500' /> Trip Activities
      </h2>
      <div className=" flex flex-col md:flex-row m-6">
        <div className='items-center m-2 p-4 border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg w-56'>
          <GiHiking className='text-6xl text-white flex items-center justify-center rounded-full bg-emerald-700 p-3 mb-2 hover:text-yellow-400' />
          <h1 className='font-medium m-1'>Hiking</h1 >
          <p>hike there with ease</p>
        </div>
        <div className='items-center m-2 p-4 border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg  w-56'>
          <FaPersonSwimming className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2  ' />
          <h1 className='font-medium m-1'>Swimming</h1>
        </div>
        <div className='items-center m-2 p-4 border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg w-56'>
          <GiCycling className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2 ' />
          <h1 className='font-medium m-1'>Cycling</h1>
        </div>
        <div className='items-center m-2 p-4  border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg w-56'>
          <GiBoatFishing className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2 ' />
          <h1 className='font-medium m-1'>Fishing</h1>
        </div>
        <div className='items-center m-2 p-4 border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg w-56'>
          <SiJusteat className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2 ' />
          <h1 className='font-medium m-1'>Eat</h1>
        </div>
      </div>
    </>
  )
}

export default TripActivities;
