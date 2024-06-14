import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTourReviews } from '../../slices/review/reviewSlice';
import { IoStarSharp } from "react-icons/io5";

const TourReview = ({ tourId }) => {
  const [expandedReviewId, setExpandedReviewId] = useState(null);
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (tourId) {
      dispatch(fetchTourReviews(tourId));
    }
  }, [dispatch, tourId]);

  const toggleReadMore = (id) => {
    setExpandedReviewId(expandedReviewId === id ? null : id);
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
        Tour Reviews
      </h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      <div className="space-y-6 m-4">
        {reviews.map(review => (
          <div key={review._id} className='bg-white text-black border-2 border-emerald-700 p-4 rounded-2xl shadow-lg'>
            <div className='flex items-center mb-3'>
              <img src={review.user.avatar || "https://via.placeholder.com/150"} alt={review.user.name} className='w-8 h-8 rounded-full mr-3' />
              <div>
                <p className='font-semibold'>{review.user.name}</p>
                <div className='flex'>
                  {Array(review.rating).fill().map((_, i) => (
                    <IoStarSharp key={i} className='text-yellow-300' />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm">
              {expandedReviewId === review._id ? review.review : `${review.review.substring(0, 100)}...`}
              <button
                className='text-emerald-700 ml-2'
                onClick={() => toggleReadMore(review._id)}
              >
                {expandedReviewId === review._id ? 'Read Less' : 'Read More'}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourReview;
