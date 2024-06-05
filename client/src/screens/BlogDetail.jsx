import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
    { id: 2, image: scene2, title: 'Blog Title 2', user: 'User 2', date: '2023-05-02', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 1, image: scene1, title: 'Blog Title 1', user: 'User 1', date: '2023-05-01', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 3, image: scene3, title: 'Blog Title 3', user: 'User 3', date: '2023-05-03', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 4, image: scene4, title: 'Blog Title 4', user: 'User 4', date: '2023-05-04', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 5, image: scene5, title: 'Blog Title 5', user: 'User 5', date: '2023-05-05', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 6, image: img7, title: 'Blog Title 6', user: 'User 6', date: '2023-05-06', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 7, image: img8, title: 'Blog Title 7', user: 'User 7', date: '2023-05-07', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 8, image: img9, title: 'Blog Title 8', user: 'User 8', date: '2023-05-08', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
    { id: 9, image: img6, title: 'Blog Title 9', user: 'User 9', date: '2023-05-09', content: "Nestled in the corner of the United States, the Pacific Northwest is a region renowned for its stunning landscapes, vibrant cities, and rich cultural heritage. From the rugged coastline of Oregon to the lush forests of Washington, this area offers an abundance of natural beauty waiting to be explored. One of the hidden gems of this region is the Olympic National Park, a vast wilderness that boasts diverse ecosystems ranging from temperate rainforests to alpine peaks. Hikers can traverse the famous Hoh Rainforest, where moss-draped trees and ferns create an enchanting, otherworldly atmosphere. Wildlife enthusiasts might catch glimpses of Roosevelt elk, black bears, and even the elusive mountain lion." },
];

const BlogDetail = () => {
    const { blogSlug } = useParams();
    const [readMore, setReadMore] = useState(false);
    const blog = blogPosts.find(b => b.title.toLowerCase().replace(/\s+/g, '-') === blogSlug);
    if (!blog) {
        return <div>Blog not found</div>;
    }
    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <div className="relative min-h-screen m-[7%]">
            <div className="relative h-[50vh] w-full">
                <img src={scene3} className="h-full w-full object-cover" alt="Background" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">{blog.title}</h1>
                    <p className="text-md md:text-xl text-white">{blog.user}</p>
                </div>
            </div>
            <div className="mt-7">
                <hr />
                <p>
                    {readMore ? blog.content : `${blog.content.substring(0, 500)}...`}
                    <button
                        className='text-emerald-700 ml-2'
                        onClick={toggleReadMore}
                    >
                        {readMore ? 'Read Less' : 'Read More'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default BlogDetail;
