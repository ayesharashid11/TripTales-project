// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBlogs } from '../slices/blog/blogSlice';

// const BlogDetail = () => {
//   const { blogSlug } = useParams();
//   const [readMore, setReadMore] = useState(false);
//   const dispatch = useDispatch();
//   const { blogs, status } = useSelector((state) => state.blogs);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchBlogs());
//     }
//   }, [status, dispatch]);

//   const blog = blogs.find(b => b.title.toLowerCase().replace(/\s+/g, '-') === blogSlug);
  
//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   const toggleReadMore = () => {
//     setReadMore(!readMore);
//   };

//   return (
//     <div className="relative min-h-screen m-[7%]">
//       <div className="relative h-[60vh] w-full">
//         <img src={'http://localhost:8080/api/uploads/' +  blog.images[0]} className="h-full w-full object-cover rounded-3xl" alt="Background" />
//         <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center rounded-3xl bg-black bg-opacity-50">
//           <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">{blog.title}</h1>
//           <p className="text-md md:text-xl text-gray-300"> by {blog.user.name}  |  {new Date(blog.createdAt).toLocaleDateString()}</p>
//         </div>
//       </div>
//       <div className="mt-7">
//         <hr />
//         <p>
//           {readMore ? blog.content : `${blog.content.substring(0, 500)}...`}
//           <button
//             className='text-emerald-700 ml-2'
//             onClick={toggleReadMore}
//           >
//             {readMore ? 'Read Less' : 'Read More'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../slices/blog/blogSlice';

const BlogDetail = () => {
  const { blogSlug } = useParams();
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  const { blogs, status } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  const blog = blogs.find(b => b.title.toLowerCase().replace(/\s+/g, '-') === blogSlug);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="relative min-h-screen m-[7%]">
      <div className="relative h-[60vh] w-full">
        <img src={'http://localhost:8080/api/uploads/' + blog.images[0]} className="h-full w-full object-cover rounded-3xl" alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center rounded-3xl bg-black bg-opacity-50">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">{blog.title}</h1>
          <p className="text-md md:text-xl text-gray-300"> by {blog.user.name}  |  {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="mt-7">
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: readMore ? blog.content : `${blog.content.substring(0, 500)}...` }}
        />
        <button
          className='text-emerald-700 ml-2'
          onClick={toggleReadMore}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;

