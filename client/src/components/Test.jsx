import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hill1 from '../assets/hill1.png';
import tree from '../assets/tree.png';
import leaf from '../assets/leaf.png';
export default function Test() {
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
    <div className='mt-[20%]'>
      <Carousel responsive={responsive}>
  <div>
    <img src={hill1}/>
  </div>
  <div><img src={leaf}/></div>
  <div>src={tree}</div>
  
</Carousel>;
    </div>
  )
}
