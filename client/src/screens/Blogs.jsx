import React from 'react'
import BlogImgCarosl from '../components/BlogImgCarosl';
import { Button } from 'flowbite-react';

const Blogs = () => {
  return (
    <div className='mt-[8%]'>
    <BlogImgCarosl />
    <Button className="text-white bg-emerald-700  rounded-lg text-sm px-4 py-1 text-center">
    Create your Blog</Button>
    </div>
    )
    }

export default Blogs;

