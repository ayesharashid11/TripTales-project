import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../screens/styles.css';
import { FaRegGrinStars } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
const CustomerSayAbout = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
            <FaRegGrinStars className='text-4xl mr-3 text-yellow-500'/> Our Customers Reviews 
            </h2>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                autoPlayInterval={1000}
                infinite={true}
            >
                <div className='ml-6 mr-2 bg-emerald-700 text-white p-6 rounded-2xl'>
                    <p>I recently purchased a product from this company and couldn't be happier with my experience. The customer service team was incredibly responsive and helpful, addressing all my questions promptly. </p>
                    <p className='font-semibold'>Joe Samp</p>
                    <p>Cutomer</p>
                    <div className='flex'>
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    </div>
                </div>
                <div className='ml-6 mr-2  bg-emerald-700 text-white p-6 rounded-2xl' >
                    <p>I recently purchased a product from this company and couldn't be happier with my experience. The product itself exceeded my expectations in terms of quality and performance. Shipping was fast and the item arrived well-packaged. </p>
                    <p className='font-semibold'>Ann Joes</p>
                    <p>Cutomer</p>
                    <div className='flex'>
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    </div>
                </div>
                <div className='ml-6 mr-2  bg-emerald-700 text-white p-6 rounded-2xl'>
                    <p>The customer service team was incredibly responsive and helpful, addressing all my questions promptly. </p>
                    <p className='font-semibold'>Joe Samp</p>
                    <p>Cutomer</p>
                    <div className='flex'>
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    </div>
                </div>
                <div className='ml-6 mr-2  bg-emerald-700 text-white p-6 rounded-2xl'>
                    <p>I recently purchased a product from this company and couldn't be happier with my experience. The customer service team was incredibly responsive and helpful, addressing all my questions promptly. The product itself exceeded my expectations in terms of quality and performance. Shipping was fast and the item arrived well-packaged.</p>
                    <p className='font-semibold'>Joe Samp</p>
                    <p>Cutomer</p>
                    <div className='flex'>
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    <IoStarSharp className='text-yellow-300' />
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default CustomerSayAbout
