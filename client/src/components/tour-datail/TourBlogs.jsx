import React from 'react'
import { Link } from 'react-router-dom';
import scene1 from '../../assets/scene1.jpg';
import scene2 from '../../assets/scene2.jpeg';
import scene3 from '../../assets/scene3.jpg';
import img7 from '../../assets/scene7.jpg';

const blogPosts = [
    { id: 1, image: scene1, title: 'Blog Title 1', user: 'User 1', date: '2023-05-01' },
    { id: 2, image: scene2, title: 'Blog Title 2', user: 'User 2', date: '2023-05-02' },
    { id: 3, image: scene3, title: 'Blog Title 3', user: 'User 3', date: '2023-05-03' },
];

const TourBlogs = () => {
    return (
        <div>
            <h2 className="text-xl md:text-2xl flex items-center justify-center text-emerald-700 font-semibold m-6">
                Tourist Blogs
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5'>
                {blogPosts.map(post => (
                    <Link to={`/blogs/${post.title.toLowerCase().replace(/\s+/g, '-')}`} key={post.id} className='relative rounded-lg overflow-hidden'>
                        <div className='h-64'>
                            <img src={post.image} alt={post.title} className='w-full h-full object-cover' />
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white'>
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
        </div>
    );
};

export default TourBlogs;
