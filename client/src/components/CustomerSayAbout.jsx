
import React, { useState } from 'react';
import { FaRegGrinStars } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const reviews = [
    {
        id: 1,
        review: "I recently purchased a product from this company and couldn't be happier with my experience. The customer service team was incredibly responsive and helpful, addressing all my questions promptly.",
        name: "Joe Samp",
        role: "Customer",
        rating: 5
    },
    {
        id: 2,
        review: "I recently purchased a product from this company and couldn't be happier with my experience. The product itself exceeded my expectations in terms of quality and performance. Shipping was fast and the item arrived well-packaged.",
        name: "Ann Joes",
        role: "Customer",
        rating: 5
    },
    {
        id: 3,
        review: "The customer service team was incredibly responsive and helpful, addressing all my questions promptly.",
        name: "Joe Samp",
        role: "Customer",
        rating: 5
    },
    {
        id: 4,
        review: "I recently purchased a product from this company and couldn't be happier with my experience. The customer service team was incredibly responsive and helpful, addressing all my questions promptly. The product itself exceeded my expectations in terms of quality and performance. Shipping was fast and the item arrived well-packaged.",
        name: "Joe Samp",
        role: "Customer",
        rating: 5
    }
];
const CustomerSayAbout = () => {
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
    const [expandedReviewId, setExpandedReviewId] = useState(null);
    const toggleReadMore = (id) => {
        setExpandedReviewId(expandedReviewId === id ? null : id);
    };

    return (
        <div className='p-7'>
            <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold mb-4">
                <FaRegGrinStars className='text-4xl mr-3 text-yellow-500' /> Our Customers Reviews
            </h2>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                autoPlayInterval={1000}
                infinite={true}
            >
                {reviews.map(review => (
                    <div key={review.id} className='ml-6 mr-2 bg-emerald-700 text-white p-6 rounded-2xl'>
                        <p>
                            {expandedReviewId === review.id ? review.review : `${review.review.substring(0, 100)}...`}
                            <button 
                                className='text-yellow-300 ml-2'
                                onClick={() => toggleReadMore(review.id)}
                            >
                                {expandedReviewId === review.id ? 'Read Less' : 'Read More'}
                            </button>
                        </p>
                        <p className='font-semibold'>{review.name}</p>
                        <p>{review.role}</p>
                        <div className='flex'>
                            {Array(review.rating).fill().map((_, i) => (
                                <IoStarSharp key={i} className='text-yellow-300' />
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomerSayAbout;
