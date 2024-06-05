import React from 'react';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import { Button } from "flowbite-react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import scene3 from '../assets/scene3.jpg';
import TourHighlights from '../components/tour-datail/TourHighlights';
import TourGallery from '../components/tour-datail/TourGallery';
import TourBlogs from '../components/tour-datail/TourBlogs';

const tours = {
  'starlight-sport': {
    title: "Starlight Sport",
    image: scene3,
    rating: 5,
    price: 599,
    days: 5,
    company: "Trello",
    email: "trello@giMailShirt.com",
    phone: "345-678-9012",
    description: "Experience the thrill of stargazing and sport combined in our exclusive Starlight Sport tour. Enjoy breathtaking views and activities under the night sky."
  },
  'mountain-adventure': {
    title: "Mountain Adventure",
    image: scene3,
    rating: 4,
    price: 799,
    days: 5,
    company: "Trello",
    email: "trello@giMailShirt.com",
    phone: "345-678-9012",
    description: "Embark on an unforgettable mountain adventure. Explore rugged trails, enjoy scenic views, and experience the beauty of nature like never before."
  },
  'beach-paradise': {
    title: "Beach Paradise",
    image: scene3,
    rating: 4,
    price: 699,
    days: 5,
    company: "Trello",
    email: "trello@giMailShirt.com",
    phone: "345-678-9012",
    description: "Relax and unwind in our Beach Paradise tour. Soak up the sun, enjoy the waves, and indulge in the serene beauty of the beach."
  }
};

const TourDetail = () => {
  const { tourName } = useParams();
  const tour = tours[tourName];
  if (!tour) {
    return <div>Tour not found</div>;
  }
  return (
    <div className='mt-[8%]'>
      <h2 className="text-xl md:text-3xl flex items-center justify-center text-emerald-700 font-semibold m-6">
        <FaPersonWalkingLuggage className='text-4xl mr-3 text-yellow-500' /> Tour Details
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mb-[2%] px-4">
        <div className="w-full md:w-1/2 max-w-md mb-3">
          <img src={tour.image} alt={tour.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-8 max-w-md md:max-w-lg w-full px-4">
          <h1 className="text-2xl font-bold text-center md:text-left">{tour.title}</h1>
          <div className="flex items-center mt-2">
            {Array(tour.rating).fill().map((_, i) => (
              <IoStarSharp key={i} className="text-yellow-300" />
            ))}
            <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
              {tour.rating}
            </span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-2">${tour.price}</div>
          <p><span className='text-lg text-emerald-700 font-medium'>Total Tour Days: </span>{tour.days}</p>
          <p className="mt-2 text-gray-600 text-center md:text-left">{tour.description}</p>
          <div className="flex flex-col md:items-start mt-2 max-w-md md:max-w-xl w-full ">
            <h1 className="text-xl md:text-xl text-emerald-700 font-semibold mt-2">Contact Info</h1>
            <p className='text-gray-500'><span className='font-medium text-yellow-500'>Company Name: </span> {tour.company}</p>
            <hr />
            <p className='text-gray-500'><span className='font-medium text-yellow-500'>Email: </span>{tour.email}</p>
            <hr />
            <p className='text-gray-500'><span className='font-medium text-yellow-500'>Phone No:</span> {tour.phone}</p>
            <hr />
          </div>
        </div>
        <Button className="mt-2 bg-emerald-700 text-white hover:bg-emerald-800 rounded-lg py-1 px-3">
          Book Now
        </Button>
      </div>
      {/* Highlights */}
      <TourHighlights />
      <hr />
      {/* Gallery */}
      <TourGallery />
      {/* Blogs */}
      <TourBlogs />
    </div>
  );
};

export default TourDetail;