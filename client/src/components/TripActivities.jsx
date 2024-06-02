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
      <h2 className="text-xl md:text-3xl flex items-center justify-center text-emerald-700 font-semibold m-6">
        <FiActivity className='text-4xl mr-3 text-yellow-500' /> Trip Activities
      </h2>
      <div className=" flex flex-col md:flex-row m-6 mb-7">
        <div className='flex flex-col items-center justify-center m-2 p-4 border-r-2 border-b-2 hover:border-emerald-700 shadow-lg rounded-lg w-56 border-gray-300'>
          <GiHiking className='text-6xl text-white flex items-center justify-center rounded-full bg-emerald-700 p-3 mb-2' />
          <h1 className='font-medium m-1 text-center'>Hiking</h1>
          <p>Hike through scenic trails and enjoy breathtaking views.</p>
        </div>
        <div className='flex flex-col items-center justify-center m-2 p-4 border-r-2 border-b-2 hover:border-emerald-700 shadow-lg rounded-lg w-56 border-gray-300'>
          <FaPersonSwimming className='text-6xl text-white flex items-center justify-center rounded-full bg-emerald-700 p-3 mb-2'/>
          <h1 className='font-medium m-1 text-center'>Swimming</h1>
          <p>Dive into crystal-clear waters and enjoy refreshing swims.</p>
        </div>
          <div className='flex flex-col items-center justify-center m-2 p-4 border-r-2 border-b-2 hover:border-emerald-700 shadow-lg rounded-lg w-56 border-gray-300'>
          <GiCycling className='text-6xl text-white flex items-center justify-center rounded-full bg-emerald-700 p-3 mb-2'/>
          <h1 className='font-medium m-1 text-center'>Cycling</h1>
          <p>Ride through picturesque trails and enjoy the freedom of cycling.</p>
        </div>
        <div className='flex flex-col items-center justify-center m-2 p-4 border-r-2 border-b-2 hover:border-emerald-700 shadow-lg rounded-lg w-56 border-gray-300'>
          <GiBoatFishing className='text-6xl text-white flex items-center justify-center rounded-full bg-emerald-700 p-3 mb-2' />
          <h1 className='font-medium m-1 text-center'>Fishing</h1>
          <p>Cast your line and catch a variety of fish in serene waters.</p>
        </div>
        <div className= 'flex flex-col items-center justify-center m-2 p-4 border-r-2 border-b-2 hover:border-emerald-700 shadow-lg rounded-lg w-56 border-gray-300'>
          <SiJusteat className='text-6xl text-white flex items-center justify-center rounded-full bg-emerald-700 p-3 mb-2' />
          <h1 className='font-medium m-1 text-center'>Eat</h1>
          <p>Savor the flavors of local cuisine on our culinary tours.</p>
        </div>
      </div>
    </>
  )
}

export default TripActivities;
