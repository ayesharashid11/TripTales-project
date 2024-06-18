import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTours, setPage } from '../slices/tour/tourSlice';
import { Pagination, Card } from 'flowbite-react';
import { IoStarSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import '../screens/styles.css';
import SearchTour from '../components/SearchTour';

const Tours = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tours, status, error, page } = useSelector((state) => state.tours);

  useEffect(() => {
    dispatch(fetchTours(page));
  }, [dispatch, page]);

  const handleCardClick = (id) => {
    navigate(`/tours/${id}`);
  };
  
  const onPageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className='mt-[80px]'>
      <SearchTour />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      <div className='flex flex-col md:flex-row m-6'>
        {tours.map((tour) => (
          <Card
            key={tour._id}
            className='w-[14rem] m-2 cursor-pointer leading-none'
            imgAlt={tour.tourName}
            imgSrc={'http://localhost:8080/api/uploads/' + tour.image}
            onClick={() => handleCardClick(tour._id)}
          >
            <h5 className='md:text-md font-semibold tracking-tight text-gray-900'>{tour.tourName}</h5>
            <div className='flex items-center'>
              {Array(tour.rating).fill().map((_, i) => (
                <IoStarSharp key={i} className='text-yellow-300' />
              ))}
              <span className='ml-3 mr-2 rounded bg-cyan-100 px-2.5 text-xs font-semibold text-cyan-800'>
                {tour.rating}
              </span>
            </div>
            <p className='text-sm text-gray-500'>{tour.user.companyName}</p>
            <div className='flex items-center justify-between'>
              <span className='text-md font-bold text-gray-900'>${tour.price}</span>
              <p>{tour.totalDays} Days</p>
            </div>
          </Card>
        ))}
      </div>
      <div className='flex flex-wrap sm:justify-center mb-4'>
        <Pagination currentPage={page} totalPages={10} onPageChange={onPageChange} showIcons />
      </div>
    </div>
  );
};

export default Tours;