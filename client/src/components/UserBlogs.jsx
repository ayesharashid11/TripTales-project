
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../slices/blog/blogSlice';
import { RiArticleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import img8 from '../assets/img8.jpeg';
import { Pagination } from "flowbite-react";

const BlogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs(currentPage));
  }, [currentPage, dispatch]);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <h2 className="text-3xl flex items-center justify-center text-emerald-700 font-semibold m-4">
        <RiArticleFill className='text-4xl mr-3 text-yellow-500' />
        Tourist Blogs
      </h2>
      {status === 'loading' && <p className='text-center text-yellow-400 text-xl'>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5'>
        {blogs.map((post) => (
          <Link to={`/blogs/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={post._id} className='relative rounded-lg overflow-hidden'>
            <div className='h-64'>
              <img src={'http://localhost:8080/api/uploads/' +  post.images[0]} alt={post.title} className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white'>
              {post.user && (
                <div className='flex items-center mb-2'>
                  <img src={img8} alt={post.user.name} className='w-8 h-8 rounded-full mr-2' />
                  <div>
                    <p className='text-sm font-semibold'>{post.user.name}</p>
                    <p className='text-xs'>{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              )}
              <p className='font-bold'>{post.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap sm:justify-center mb-4">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} showIcons />
      </div>
    </>
  );
};

export default BlogCards;
