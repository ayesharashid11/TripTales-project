import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import scene1 from '../assets/scene1.jpg';
import scene5 from '../assets/secne5.jpeg';
import scene4 from '../assets/scene4.jpg';
import scene3 from '../assets/scene3.jpg';
const BlogImgCarosl = () => {
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
        <div className='mt-[6%]'>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                autoPlayInterval={2000}
                infinite={true}
            >
                <div className='ml-2 mr-2'>
                    <img src={scene1} className='w-[470px] h-[260px]' />
                </div>
                <div className='ml-2 mr-2'>
                    <img src={scene5} className='w-[470px] h-[260px]' />
                </div>
                <div className='ml-2 mr-2'>
                    <img src={scene3} className='w-[470px] h-[260px]' />
                </div>
                <div className='ml-2 mr-2'>
                    <img src={scene4} className='w-[470px] h-[260px]' />
                </div>
            </Carousel>
            
        </div>
    )
}

export default BlogImgCarosl
