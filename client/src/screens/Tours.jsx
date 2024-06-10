import React, { useState } from 'react';
import {Pagination, Card } from "flowbite-react";
import seaview from '../assets/seaview.jpg';
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import '../screens/styles.css';
import SearchTour from '../components/SearchTour';

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
   <SearchTour />
      <div className='flex flex-col md:flex-row m-6'>
        {featuredTours.map(tour => (
          <Card
            key={tour.id}
            className=" w-[14rem] m-2 cursor-pointer leading-none"
            imgAlt={tour.title}
            imgSrc={tour.image}
            onClick={() => handleCardClick(tour.slug)}
          >
              <h5 className=" md:text-md font-semibold tracking-tight text-gray-900">
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
                <p>{tour.days}Days</p>
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
