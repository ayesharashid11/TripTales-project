import React from 'react';
import { RiArticleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import scene1 from '../assets/scene1.jpg';
import scene2 from '../assets/scene2.jpeg';
import scene5 from '../assets/secne5.jpeg';
import scene4 from '../assets/scene4.jpg';
import scene3 from '../assets/scene3.jpg';
import img7 from '../assets/scene7.jpg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpg';
import img6 from '../assets/img6.jpg';

const blogPosts = [
  { id: 1, image: scene1, title: 'Blog Title 1', user: 'User 1', date: '2023-05-01' },
  { id: 2, image: scene2, title: 'Blog Title 2', user: 'User 2', date: '2023-05-02' },
  { id: 3, image: scene3, title: 'Blog Title 3', user: 'User 3', date: '2023-05-03' },
  { id: 4, image: scene4, title: 'Blog Title 4', user: 'User 4', date: '2023-05-04' },
  { id: 5, image: scene5, title: 'Blog Title 5', user: 'User 5', date: '2023-05-05' },
  { id: 6, image: img7, title: 'Blog Title 6', user: 'User 6', date: '2023-05-06' },
  { id: 7, image: img8, title: 'Blog Title 7', user: 'User 7', date: '2023-05-07' },
  { id: 8, image: img9, title: 'Blog Title 8', user: 'User 8', date: '2023-05-08' },
  { id: 9, image: img6, title: 'Blog Title 9', user: 'User 9', date: '2023-05-09' },
];

const BlogCards = () => {
  return (
    <>
      <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold m-4">
        <RiArticleFill className='text-4xl mr-3 text-yellow-500' />
        Tourist Blogs
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5'>
        {blogPosts.map(post => (
          <Link to={`/blogs/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={post.id} className='relative rounded-lg overflow-hidden'>
            <div className='h-64'>
              <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white'>
              <div className='flex items-center mb-2'>
                <img src={img7} alt={post.user} className='w-8 h-8 rounded-full mr-2' />
                <div>
                  <p className='text-sm font-semibold'>{post.user}</p>
                  <p className='text-xs'>{post.date}</p>
                </div>
              </div>
              <p className='font-bold'>{post.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
