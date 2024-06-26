import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { SelectedBlogsContext } from '../../context/SelectedBlogsContext'; 
import AttachTourBlog from './AttatchTourBlog'; 

const TourBlogs = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { selectedBlogs, setSelectedBlogs } = useContext(SelectedBlogsContext);

  useEffect(() => {
    const fetchTourBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tours/gettour/${id}`);
        const tourBlogs = response.data.data.tour.blogs;
        setBlogs(tourBlogs);
        setLoading(false);
      } catch (error) {
        setError('Error fetching blogs for tour');
        setLoading(false);
      }
    };

    fetchTourBlogs();
  }, [id]);

  useEffect(() => {
    setBlogs(prevBlogs => [...prevBlogs, ...selectedBlogs]);
  }, [selectedBlogs]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <AttachTourBlog tourId={id} />
      <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
        Tourist Blogs
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5'>
        {blogs.map(post => (
          <Link to={`/blogs/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={post._id} className='relative rounded-lg overflow-hidden'>
            <div className='h-64'>
              <img src={'http://localhost:8080/api/uploads/' + post.images[0]} alt={post.title} className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white'>
              <div className='flex items-center mb-2'>
                <div>
                  <p className='text-sm font-semibold'>{post.user.name}</p>
                  <p className='text-xs'>{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <p className='font-bold'>{post.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TourBlogs;
