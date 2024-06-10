import React from 'react';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import { Button } from "flowbite-react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import scene3 from '../assets/scene3.jpg';
import TourHighlights from '../components/tour-datail/TourHighlights';
import TourGallery from '../components/tour-datail/TourGallery';
import TourBlogs from '../components/tour-datail/TourBlogs';
import RelatedTourGallery from '../components/tour-datail/RelatedTourGallery';
import TourReview from '../components/tour-datail/TourReview';

const tours = {
  'starlight-sport': {
    title: "Starlight Sport",
    seats: 6,
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
    seats: 3,
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
    seats: 7,
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
        <div className="w-full md:w-1/2 max-w-lg mb-3">
          <img src={tour.image} alt={tour.title} className="w-full rounded-lg shadow-lg" />
          {/* <RelatedTourGallery /> */}
        </div>
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-8 max-w-md  w-full px-4">
          <div className=' flex '><h1 className="text-2xl font-bold text-center md:text-left">{tour.title}</h1>
            <div className="flex items-center ml-5">
              {Array(tour.rating).fill().map((_, i) => (
                <IoStarSharp key={i} className="text-yellow-300" />
              ))}
            </div>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-2">${tour.price}</div>
          <p><span className='text-lg  text-emerald-700 font-medium'>Days: </span>{tour.days}</p>
          <p><span className='text-lg text-emerald-700 font-medium'>  Seats: </span>{tour.seats}</p>
          <p className="mt-2 text-gray-600 text-center md:text-left">{tour.departureAddress}</p>

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
        <p className="text-emerald-700   text-md font-medium cursor-pointer hover:text-emerald-300  ">Book Now</p>
        <p className="text-emerald-700  text-md font-medium cursor-pointer hover:text-emerald-300 ">Add Review</p>
      </div>
      {/* Highlights */}
      <TourHighlights />
      <hr />
      {/* Gallery */}
      {/* <TourGallery /> */}
      <TourBlogs />
      <TourReview />
    </div>
  );
};

export default TourDetail;
