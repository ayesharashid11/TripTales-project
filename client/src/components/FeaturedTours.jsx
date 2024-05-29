import React from 'react'
import { Card } from "flowbite-react";
import { MdOutlineImportantDevices } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import scene3 from '../assets/scene3.jpg';
const FeaturedTours = () => {
  return (
    <div className='p-7'>
       <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">
            <MdOutlineImportantDevices className='text-4xl mr-3 text-yellow-500'/> Our Featured Tours 
            </h2>

            <Card
      className="max-w-sm"
      imgAlt="  Starlight Sport"
      imgSrc={scene3}
    >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
         Starlight Sport
        </h5>
      <div className="mb-5 mt-2.5 flex items-center">
      <IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-8000">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a
          href="#"
          className="rounded-lg bg-emerald-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800  "
        >
       Book Now
        </a>
      </div>
    </Card>
    </div>
  )
}

export default FeaturedTours

 