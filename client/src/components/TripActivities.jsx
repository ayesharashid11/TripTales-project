import React from 'react'
import { FiActivity } from "react-icons/fi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { GiHiking } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiCycling } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { SiJusteat } from "react-icons/si";
import '../screens/styles.css';

const TripActivities = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-5">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <h2 className="text-3xl flex items-center text-emerald-700 font-semibold mt-6">
          <FiActivity className='text-4xl mr-3 text-yellow-500' /> Trip Activities
        </h2>
      </div>
      <div className="md:w-3/4">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          <div className='width-20 flex flex-col items-center mx-2 p-4 '>
            <GiHiking className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2' />
            <p>Hiking</p>
          </div>
          <div className='width-20 flex flex-col items-center mx-2 p-4 '>
            <FaPersonSwimming className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2' />
            <p>Swimming</p>
          </div>
          <div className='width-20 flex flex-col items-center mx-2 p-4 w-[20%]'>
            <GiCycling className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2' />
            <p>Cycling</p>
          </div>
          <div className='width-20 flex flex-col items-center mx-2 p-4 w-[20%]'>
            <GiBoatFishing className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2' />
            <p>Fishing</p>
          </div>
          <div className='width-20 flex flex-col items-center mx-2 p-4 w-[20%]'>
            <SiJusteat className='text-6xl text-white rounded-full bg-emerald-700 p-3 mb-2' />
            <p>Eat</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default TripActivities;
