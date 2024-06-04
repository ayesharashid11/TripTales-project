import React from 'react';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import scene3 from '../assets/scene3.jpg';
import { Button } from "flowbite-react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

const TourDetail = () => {
  const { tourName } = useParams();

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
      company: "Trello",
      email: "trello@giMailShirt.com",
      phone: "345-678-9012",
      days: 5,
      description: "Relax and unwind in our Beach Paradise tour. Soak up the sun, enjoy the waves, and indulge in the serene beauty of the beach."
    }
  };

  const tour = tours[tourName];

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className='mt-[8%]'>
      <h2 className="text-xl md:text-3xl flex items-center justify-center text-emerald-700 font-semibold m-6">
        <FaPersonWalkingLuggage className='text-4xl mr-3 text-yellow-500' /> Tour Details
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center  mb-[2%] px-4">
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
          <p> <span className=' text-lg text-emerald-700 font-medium'>Total Tour Days: </span>{tour.days}</p>
          <p className="mt-2 text-gray-600 text-center md:text-left">{tour.description}</p>
          <Button className="mt-4 bg-emerald-700 text-white hover:bg-emerald-800 rounded-lg py-2 px-4">
            Book Now
          </Button>
        </div>
        <div lassName="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-8 max-w-md md:max-w-xl w-full px-4">
          <h1 className="text-xl md:text-xl flex items-center justify-center text-emerald-700 font-semibold m-2">Contact Info</h1>
          <p className='text-gray-500'><span className='font-medium text-yellow-500'>Comapny Name: </span> <br/>{tour.company}</p><hr/>
          <p className='text-gray-500'><span className='font-medium text-yellow-500'>Email: </span><br/>{tour.email}</p><hr/>
          <p className='text-gray-500'><span className='font-medium text-yellow-500'>Phone No:</span> <br/> {tour.phone}</p><hr/>
        </div>
      </div>
      <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
        Highlights
      </h2>
      <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg text-gray-700 mt-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Nighttime Hiking</h3>
            <p>
              Experience the thrill of hiking under the stars, guided by expert mountaineers who ensure your safety and enrich your adventure with fascinating stories and facts about the terrain and the cosmos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Stargazing Sessions</h3>
            <p>
              Set up camp in picturesque locations and enjoy guided stargazing sessions with high-powered telescopes. Learn about constellations, planets, and deep-sky objects from our knowledgeable guides.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Luxury Camping</h3>
            <p>
              Stay in luxurious, well-equipped tents that provide the comfort of a hotel room in the heart of nature. Enjoy gourmet meals prepared by our chefs, featuring local and organic ingredients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Adventure Sports</h3>
            <p>
              Engage in a variety of daytime adventure sports, including rock climbing, mountain biking, and kayaking. Our professional instructors ensure a fun and safe experience for all skill levels.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Photography Workshops</h3>
            <p>
              Capture the beauty of the night sky and the stunning landscapes with our professional photography workshops. Perfect for both novice and experienced photographers.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2 text-emerald-700">What’s Included:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expert guides and instructors for all activities.</li>
            <li>High-quality camping equipment and gear.</li>
            <li>All meals and beverages, including gourmet dinners and breakfast under the stars.</li>
            <li>Transfers to and from the starting point.</li>
            <li>Safety equipment and first aid support.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2 text-emerald-700">What to Bring:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comfortable hiking shoes and clothing suitable for outdoor activities.</li>
            <li>A warm jacket for the nighttime activities.</li>
            <li>A sense of adventure and curiosity!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
