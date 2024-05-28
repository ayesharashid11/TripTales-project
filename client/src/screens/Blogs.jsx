import React from 'react'
import BlogImgCarosl from '../components/BlogImgCarosl';
import { Button } from 'flowbite-react';
import { IoCreateSharp } from "react-icons/io5";
import TripActivities from '../components/TripActivities';
const Blogs = () => {
  return (
    <div className='mt-[8%]'>
      <BlogImgCarosl />
      <div className='flex justify-center items-center p-6'>
        <Button className="text-white bg-emerald-700  rounded-lg text-sm px-4 py-1 text-center">
        <IoCreateSharp className='mr-3 text-xl' /> Create your Blog</Button>
      </div>
      <hr/>
      <TripActivities />
    </div>
  )
}

export default Blogs;

