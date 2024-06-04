import React, { useState } from 'react';
import { Label, TextInput, Pagination } from "flowbite-react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import seaview from '../assets/seaview.jpg';
import scene3 from '../assets/scene3.jpg';
import { Button, Card } from "flowbite-react";
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Tours = () => {
  const navigate = useNavigate();
  const featuredTours = [
    {
      id: 1,
      title: "Starlight Sport",
      image: seaview,
      rating: 5,
      price: 599,
      slug: 'starlight-sport',
      company: 'Adventure Co.'
    },
    {
      id: 2,
      title: "Mountain Adventure",
      image: seaview,
      rating: 4,
      price: 799,
      slug: 'mountain-adventure',
      company: 'Mountain Travels'
    },
    {
      id: 3,
      title: "Beach Paradise",
      image: seaview,
      rating: 4,
      price: 699,
      slug: 'beach-paradise',
      company: 'Beach Getaways'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const handleCardClick = (slug) => {
    navigate(`/tours/${slug}`);
  };

  return (
    <div className='mt-[80px]'>
      <div className="relative h-[50vh] w-full bg-cover bg-center">
        <img src={scene3} className="h-full w-full object-cover" alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
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
      </div>
      <div className='flex flex-col md:flex-row m-6'>
        {featuredTours.map(tour => (
          <Card
            key={tour.id}
            className="w-[13rem] m-2 cursor-pointer leading-none"
            imgAlt={tour.title}
            imgSrc={tour.image}
            onClick={() => handleCardClick(tour.slug)}
          >
            {/* <img src={tour.image} alt={tour.title}  /> */}
            <h5 className="md:text-md font-semibold tracking-tight text-gray-900">
              {tour.title}
            </h5>
            <div className="flex items-center">
              {Array(tour.rating).fill().map((_, i) => (
                <IoStarSharp key={i} className="text-yellow-300" />
              ))}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 text-xs font-semibold text-cyan-800">
                {tour.rating}
              </span>
            </div>
            <p className="text-sm text-gray-500">{tour.company}</p>
            <div className="flex items-center justify-between">
              <span className="text-md font-bold text-gray-900">${tour.price}</span>
              <button
                className="rounded-lg p-2 bg-emerald-700 text-center text-sm font-medium text-white hover:bg-cyan-800"
              >
                View
              </button>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap sm:justify-center mb-4">
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
      </div>
    </div>
  );
}

export default Tours;
