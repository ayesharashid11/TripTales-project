
import React, { useState } from 'react';
import { IoStarSharp } from "react-icons/io5";

const reviews = [
    {
        id: 1,
        review: "I recently purchased a product from this company and couldn't be happier with my experience. The customer service team was incredibly responsive and helpful, addressing all my questions promptly.",
        name: "Joe Samp",
        role: "Customer",
        rating: 5,
        avatar: "https://via.placeholder.com/150"  // Placeholder image for avatar
    },
    {
        id: 2,
        review: "I recently purchased a product from this company and couldn't be happier with my experience. The product itself exceeded my expectations in terms of quality and performance. Shipping was fast and the item arrived well-packaged.",
        name: "Ann Joes",
        role: "Customer",
        rating: 5,
        avatar: "https://via.placeholder.com/150"  // Placeholder image for avatar
    },
    {
        id: 3,
        review: "The customer service team was incredibly responsive and helpful, addressing all my questions promptly.",
        name: "Joe Samp",
        role: "Customer",
        rating: 5,
        avatar: "https://via.placeholder.com/150"  // Placeholder image for avatar
    },
    {
        id: 4,
        review: "I recently purchased a product from this company and couldn't be happier with my experience. The customer service team was incredibly responsive and helpful, addressing all my questions promptly. The product itself exceeded my expectations in terms of quality and performance. Shipping was fast and the item arrived well-packaged.",
        name: "Joe Samp",
        role: "Customer",
        rating: 5,
        avatar: "https://via.placeholder.com/150"  // Placeholder image for avatar
    }
];

const TourReview = () => {
    const [expandedReviewId, setExpandedReviewId] = useState(null);
    const toggleReadMore = (id) => {
        setExpandedReviewId(expandedReviewId === id ? null : id);
    };

    return (
        <div>
            <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
                Tour Reviews
            </h2>
            <div className="space-y-6 m-4">
                {reviews.map(review => (
                    <div key={review.id} className='bg-white text-black border-2 border-emerald-700 p-4 rounded-2xl shadow-lg'>
                        <div className='flex items-center mb-3'>
                            <img src={review.avatar} alt={review.name} className='w-8 h-8 rounded-full mr-4' />
                            <div>
                                <p className='font-semibold'>{review.name}</p>
                                <div className='flex'>
                                    {Array(review.rating).fill().map((_, i) => (
                                        <IoStarSharp key={i} className='text-yellow-300' />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm">
                            {expandedReviewId === review.id ? review.review : `${review.review.substring(0, 100)}...`}
                            <button
                                className='text-emerald-700 ml-2'
                                onClick={() => toggleReadMore(review.id)}
                            >
                                {expandedReviewId === review.id ? 'Read Less' : 'Read More'}
                            </button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourReview;
