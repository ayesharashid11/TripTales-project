// src/screens/TourDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import scene3 from '../assets/scene3.jpg';
import { Button } from "flowbite-react";
import './TourDetail.css';

const TourDetail = () => {
  const { tourName } = useParams();

  const tours = {
    'starlight-sport': {
      title: "Starlight Sport",
      image: scene3,
      rating: 5,
      price: 599,
      description: "Experience the thrill of stargazing and sport combined in our exclusive Starlight Sport tour. Enjoy breathtaking views and activities under the night sky."
    },
    'mountain-adventure': {
      title: "Mountain Adventure",
      image: scene3,
      rating: 4,
      price: 799,
      description: "Embark on an unforgettable mountain adventure. Explore rugged trails, enjoy scenic views, and experience the beauty of nature like never before."
    },
    'beach-paradise': {
      title: "Beach Paradise",
      image: scene3,
      rating: 4,
      price: 699,
      description: "Relax and unwind in our Beach Paradise tour. Soak up the sun, enjoy the waves, and indulge in the serene beauty of the beach."
    }
  };

  const tour = tours[tourName];

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="tour-detail-container ">
      <div className="tour-detail-image-container">
        <img src={tour.image} alt={tour.title} className="tour-detail-image" />
      </div>
      <div className="tour-detail-info">
        <h1 className="tour-detail-title">{tour.title}</h1>
        <div className="tour-detail-rating">
          {Array(tour.rating).fill().map((_, i) => (
            <IoStarSharp key={i} className="text-yellow-300" />
          ))}
          <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
            {tour.rating}
          </span>
        </div>
        <div className="tour-detail-price">${tour.price}</div>
        <p className="tour-detail-description">{tour.description}</p>
        <Button className="tour-detail-button">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default TourDetail;
