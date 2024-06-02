import React, { useState } from 'react'
import { Label, TextInput, Pagination } from "flowbite-react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import scene3 from '../assets/scene3.jpg';
import { Button, Card } from "flowbite-react";
import { IoStarSharp } from "react-icons/io5";
const Tours = () => {

  const featuredTours = [
    {
      id: 1,
      title: "Starlight Sport",
      image: scene3,
      rating: 5,
      price: 599
    },
    {
      id: 2,
      title: "Mountain Adventure",
      image: scene3,
      rating: 4,
      price: 799
    },
    {
      id: 3,
      title: "Beach Paradise",
      image: scene3,
      rating: 4,
      price: 699
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  // return (
  //     <>
  //         <div className='mt-[80px]'>
  //             {/* <div className="flex items-center justify-center mt-6 mb-6">
  //                 <form>
  //                     <div className="flex items-center justify-center p-2 border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg w-[365px] space-x-4 ">
  //                         <Label htmlFor="city" className="mb-2 font-medium text-emerald-700 text-lg">
  //                             Location
  //                         </Label>
  //                         <TextInput
  //                             type="text"
  //                             id="city"
  //                             placeholder="Enter your city here"
  //                             className="text-lg flex-grow"
  //                             icon={FaMapLocationDot}
  //                         />
  //                         <FaSearchLocation className="text-5xl p-2 bg-emerald-700 text-white rounded cursor-pointer" />
  //                     </div>
  //                 </form>
  //             </div> */}

  //             <div
  //                 className="flex items-center justify-center h-screen relative"
  //                 style={{
  //                     backgroundImage: `url('../assests/seaview.jpg')`,
  //                     backgroundSize: 'cover',
  //                     backgroundPosition: 'center',
  //                 }}
  //             >
  //                 <div className="absolute inset-0 bg-black opacity-30"></div>
  //                 <div className="relative z-10 w-full max-w-md">
  //                     <form>
  //                         <div className="flex flex-col sm:flex-row items-center justify-center p-4 border-r-2 border-b-2 border-gray-300 shadow-lg rounded-lg bg-white bg-opacity-70 space-y-4 sm:space-y-0 sm:space-x-4">
  //                             <Label htmlFor="city" className="font-medium text-emerald-700 text-lg">
  //                                 Location
  //                             </Label>
  //                             <TextInput
  //                                 type="text"
  //                                 id="city"
  //                                 placeholder="Enter your city here"
  //                                 className="text-lg flex-grow"
  //                                 icon={FaMapLocationDot}
  //                             />
  //                             <FaSearchLocation className="text-5xl p-2 bg-emerald-700 text-white rounded cursor-pointer" />
  //                         </div>
  //                     </form>
  //                 </div>
  //             </div>
  //             <div className='flex flex-col md:flex-row m-6 '>
  //                 {featuredTours.map(tour => (
  //                     <Card
  //                         key={tour.id}
  //                         className="w-[15rem] m-2"
  //                         imgAlt={tour.title}
  //                         imgSrc={tour.image}
  //                     >
  //                         <h5 className="md:text-xl font-semibold tracking-tight text-gray-900">
  //                             {tour.title}
  //                         </h5>
  //                         <div className="mb-1 mt-1 flex items-center">
  //                             {Array(tour.rating).fill().map((_, i) => (
  //                                 <IoStarSharp key={i} className="text-yellow-300" />
  //                             ))}
  //                             <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
  //                                 {tour.rating}
  //                             </span>
  //                         </div>
  //                         <div className="flex items-center justify-between">
  //                             <span className="text-md font-bold text-gray-900">${tour.price}</span>
  //                             <Button
  //                                 className="rounded-lg bg-emerald-700 text-center text-sm font-medium text-white hover:bg-cyan-800"
  //                             >
  //                                 Book Now
  //                             </Button>
  //                         </div>
  //                     </Card>
  //                 ))}
  //             </div>
  //             <div className="flex flex-wrap sm:justify-center">
  //                 <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
  //             </div>
  //         </div>
  //     </>
  // )
  return (
    <div className='mt-[80px]'>
      <div
        className="relative flex items-center justify-center h-[40vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:  "url('../assests/seaview.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 w-full max-w-md p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <form>
            <div className="flex items-center justify-center">
              <Label htmlFor="city" className="font-medium text-emerald-700 text-lg">
                Location
              </Label>
              <TextInput
                type="text"
                id="city"
                placeholder="Enter your city here"
                className="text-lg flex-grow p-4"
                icon={FaMapLocationDot}
              />
              <FaSearchLocation className="text-5xl p-2 bg-emerald-700 text-white rounded cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col md:flex-row m-6 '>
                  {featuredTours.map(tour => (
                    <Card
                        key={tour.id}
                        className="w-[15rem] m-2"
                         imgAlt={tour.title}
                         imgSrc={tour.image}
                    >
                         <h5 className="md:text-xl font-semibold tracking-tight text-gray-900">
                            {tour.title}
                        </h5>
                         <div className="mb-1 mt-1 flex items-center">
                            {Array(tour.rating).fill().map((_, i) => (
                                 <IoStarSharp key={i} className="text-yellow-300" />
                             ))}
                             <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
                                {tour.rating}
                             </span>
                         </div>
                         <div className="flex items-center justify-between">
                             <span className="text-md font-bold text-gray-900">${tour.price}</span>
                            <Button
                                 className="rounded-lg bg-emerald-700 text-center text-sm font-medium text-white hover:bg-cyan-800"
                             >
                                  Book Now</Button>
                        </div>
                      </Card>
                 ))}
              </div>
             <div className="flex flex-wrap sm:justify-center">
                 <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
             </div>
    </div>
  );
}

export default Tours
