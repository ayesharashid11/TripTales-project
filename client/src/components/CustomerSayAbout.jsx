import React, { useEffect, useState } from 'react';
import { FaRegGrinStars } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllReviews } from '../slices/review/reviewSlice';

const CustomerSayAbout = () => {
    const dispatch = useDispatch();
    const { reviews, status, error } = useSelector((state) => state.reviews);
    const [expandedReviewId, setExpandedReviewId] = useState(null);

    useEffect(() => {
        dispatch(fetchAllReviews());
    }, [dispatch]);

    const toggleReadMore = (id) => {
        setExpandedReviewId(expandedReviewId === id ? null : id);
    };

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
                <FaRegGrinStars className='text-4xl mr-3 text-yellow-500' /> Our Customers Reviews
            </h2>
            {status === 'loading' && <p className='text-center text-yellow-400 text-xl'>Loading...</p>}
            {status === 'failed' && <p className='text-center text-red-500 text-xl'>{error}</p>}
            {status === 'succeeded' && (
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    infinite={true}
                >
                    {reviews.map(review => (
                        <div key={review._id} className='bg-emerald-700 text-white p-6 rounded-2xl mx-2'>
                            <div className='flex items-center mb-4'>
                                <div>
                                    <p className='font-semibold'>{review.user.name}</p>
                                    <div className='flex'>
                                        {Array(review.rating).fill().map((_, i) => (
                                            <IoStarSharp key={i} className='text-yellow-300' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p>
                                {expandedReviewId === review._id ? review.review : `${review.review.substring(0, 100)}...`}
                                <button
                                    className='text-yellow-300 ml-2'
                                    onClick={() => toggleReadMore(review._id)}
                                >
                                    {expandedReviewId === review._id ? 'Read Less' : 'Read More'}
                                </button>
                            </p>
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default CustomerSayAbout;
