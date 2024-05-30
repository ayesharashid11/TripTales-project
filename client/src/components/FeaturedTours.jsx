// import React from 'react';
// import { Button, Card } from "flowbite-react";
// import { MdOutlineImportantDevices } from "react-icons/md";
// import { IoStarSharp } from "react-icons/io5";
// import scene3 from '../assets/scene3.jpg';
// import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";
// const featuredTours = [
//   {
//     id: 1,
//     title: "Starlight Sport",
//     image: scene3,
//     rating: 5,
//     price: 599
//   },
//   {
//     id: 2,
//     title: "Mountain Adventure",
//     image: scene3,
//     rating: 4,
//     price: 799
//   },
//   {
//     id: 3,
//     title: "Beach Paradise",
//     image: scene3,
//     rating: 4,
//     price: 699
//   },
//   {
//     id: 4,
//     title: "Beach Paradise",
//     image: scene3,
//     rating: 4,
//     price: 699
//   },
//   {
//     id: 5,
//     title: "Beach Paradise",
//     image: scene3,
//     rating: 4,
//     price: 699
// },
// ];

// const FeaturedTours = () => {
//   const responsive = {
//     superLargeDesktop: {
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };
//   return (
//     <div className='p-7'>
//       <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">
//         <MdOutlineImportantDevices className='text-4xl mr-3 text-yellow-500' /> Our Featured Tours
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {featuredTours.map(tour => (
//           <Card
//             key={tour.id}
//             className="w-[17rem]"
//             imgAlt={tour.title}
//             imgSrc={tour.image}
//           >
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900">
//               {tour.title}
//             </h5>
//             <div className="mb-3 mt-1.5 flex items-center">
//               {Array(tour.rating).fill().map((_, i) => (
//                 <IoStarSharp key={i} className="text-yellow-300" />
//               ))}
//               <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
//                 {tour.rating}
//               </span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-md font-bold text-gray-900">${tour.price}</span>
//               <Button
//                 className="rounded-lg bg-emerald-700 p-1 text-center text-sm font-medium text-white hover:bg-cyan-800"
//               >
//                 Book Now
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedTours;

import React from 'react';
import { Button, Card } from "flowbite-react";
import { MdOutlineImportantDevices } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import scene3 from '../assets/scene3.jpg';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

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
  },
  {
    id: 4,
    title: "City Lights",
    image: scene3,
    rating: 4,
    price: 699
  },
  {
    id: 5,
    title: "Nature Escape",
    image: scene3,
    rating: 4,
    price: 699
  },
];

const FeaturedTours = () => {
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
    <div className='p-7'>
      <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">
        <MdOutlineImportantDevices className='text-4xl mr-3 text-yellow-500' /> Our Featured Tours
      </h2>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        autoPlayInterval={1000}
        infinite={true}
      >
        {featuredTours.map(tour => (
          <Card
            key={tour.id}
            className="w-[17rem] mx-2"
            imgAlt={tour.title}
            imgSrc={tour.image}
          >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {tour.title}
            </h5>
            <div className="mb-1 mt-1.5 flex items-center">
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
                className="rounded-lg bg-emerald-700 p-0.5 text-center text-sm font-medium text-white hover:bg-cyan-800"
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedTours;
