import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTourById } from '../slices/tour/tourSlice';
import { IoStarSharp } from 'react-icons/io5';
import { FaPersonWalkingLuggage } from 'react-icons/fa6'
import TourHighlights from '../components/tour-datail/TourHighlights';
import TourBlogs from '../components/tour-datail/TourBlogs';
import TourReview from '../components/tour-datail/TourReview';
import BookNow from '../components/BookNow';
const TourDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tours.tour);
  const status = useSelector((state) => state.tours.status);
  const error = useSelector((state) => state.tours.error);

  useEffect(() => {
    dispatch(fetchTourById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div className='text-yellow-600 text-xl'>Loading...</div>;
  }

  if (status === 'failed') {
    return <div className='text-yellow-600 text-xl'>Error: {error}</div>;
  }

  if (!tour) {
    return <div className='text-yellow-600 text-xl'>Tour not found</div>;
  }

  return (
    <div className='mt-[8%]'>
      <h2 className='text-xl md:text-3xl flex items-center justify-center text-emerald-700 font-semibold m-6'>
        <FaPersonWalkingLuggage className='text-4xl mr-3 text-yellow-500' /> Tour Details
      </h2>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center mb-[2%] px-4'>
        <div className='w-full md:w-1/2 max-w-md mb-3'>
          <img src={'http://localhost:8080/api/uploads/' + tour.image} alt={tour.title} className='w-full rounded-lg shadow-lg' />
        </div>
        <div className='flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-8 max-w-md w-full px-4'>
          <div className='flex '>
            <h1 className='text-2xl font-bold text-center md:text-left'>{tour.title}</h1>
            <div className='flex items-center ml-5'>
              {Array(tour.rating).fill().map((_, i) => (
                <IoStarSharp key={i} className='text-yellow-300' />
              ))}
            </div>
          </div>
          <div className='text-xl font-bold text-gray-900 mt-2'>${tour.price}</div>
          <p><span className='text-lg text-emerald-700 font-medium'>Days: </span>{tour.totalDays}</p>
          <p><span className='text-lg text-emerald-700 font-medium'>Seats: </span>{tour.seats}</p>
          <p className=' text-lg text-emerald-700 font-medium'> Departure Address: </p>
          <p className='mt-2 text-gray-600 text-center md:text-left'>{tour.departureAddress}</p>
          <div className='flex flex-col md:items-start mt-2 max-w-md md:max-w-xl w-full '>
            <h1 className='text-xl md:text-xl text-emerald-700 font-semibold mt-2'>Contact Info</h1>
            <p className='text-gray-500'><span className='font-medium text-yellow-500'>Company Name: </span> {tour.user.companyName}</p>
            <hr />
            <p className='text-gray-500'><span className='font-medium text-yellow-500'>Email: </span>{tour.email}</p>
            <hr />
            <p className='text-gray-500'><span className='font-medium text-yellow-500'>Phone No:</span> {tour.phoneNo}</p>
            <hr />
          </div>
        </div>
        <div>
          {/* <p className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'>Book Now</p> */}
           <BookNow /> 
          <p className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'>Add Review</p>
        </div>
      </div>
      <TourHighlights />
      <hr />
      <TourBlogs />
      <TourReview tourId={id}/>
    </div>
  );
};

export default TourDetail;

