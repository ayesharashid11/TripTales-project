import React from 'react'
// import BlogImgCarosl from '../components/BlogImgCarosl';
import { Button } from 'flowbite-react';
import { IoCreateSharp } from "react-icons/io5";
import TripActivities from '../components/TripActivities';
import UserBlogs from '../components/UserBlogs';
import { Link } from 'react-router-dom';
import scene1 from '../assets/scene1.jpg';
const Blogs = () => {
  return (
    <div className='mt-[4%]'>
      {/* <BlogImgCarosl /> */}
      <div className="relative h-[70vh] w-full bg-cover bg-center">
        <img src={scene1} className="h-full w-full object-cover" alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
        {/* <div className="relative z-10 w-full max-w-md p-4 bg-white bg-opacity-70 rounded-lg shadow-lg"> */}
        <div className='flex justify-center items-center p-6'>
        <Link to="/createblogs">
          <Button className="text-white font-medium rounded-lg text-sm px-4 py-1 text-center">
            <IoCreateSharp className='mr-3 text-xl' /> Create your Blog</Button>
        </Link>
      {/* </div> */}
        </div>
        </div>
      </div>



   
      <hr />
      <TripActivities /><hr />
      <UserBlogs />
    </div>
  )
}

export default Blogs;

