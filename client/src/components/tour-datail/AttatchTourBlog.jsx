// import React, { useState } from 'react';
// import axios from 'axios';

// const AttachTourBlog = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedBlogs, setSelectedBlogs] = useState([]);
//   const [error, setError] = useState('');

//   const handleInputChange = async (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length >= 3) {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/blogs/attach-blogs?q=${value}`);
//         setResults(response.data);
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     } else {
//       setResults([]);
//     }
//   };

//   const handleBlogSelect = (blog) => {
//     if (selectedBlogs.some(selectedBlog => selectedBlog._id === blog._id)) {
//       setError('This blog is already selected.');
//       return;
//     }
//     setSelectedBlogs([...selectedBlogs, blog]);
//     setQuery('');
//     setResults([]);
//     setError('');
//   };

//   return (
//     <div>
//       <p
//         className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'
//         onClick={() => setShowModal(true)}
//       >
//         Attach Tour Blogs
//       </p>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-lg font-medium mb-4">Attach Blogs to Tour</h2>
//             <input
//               type="text"
//               value={query}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-4"
//               placeholder="Search blogs..."
//             />
//             {results.length > 0 && (
//               <div className="border rounded max-h-40 overflow-y-auto">
//                 {results.map((blog) => (
//                   <div
//                     key={blog._id}
//                     className="p-2 cursor-pointer hover:bg-gray-200"
//                     onClick={() => handleBlogSelect(blog)}
//                   >
//                     {blog.title}
//                   </div>
//                 ))}
//               </div>
//             )}
//             {error && (
//               <div className="text-red-500 mb-4">
//                 {error}
//               </div>
//             )}
//             <h3 className="text-md font-medium mt-4">Selected Blogs:</h3>
//             <ul>
//               {selectedBlogs.map((blog) => (
//                 <li key={blog._id}>{blog.title}</li>
//               ))}
//             </ul>
//             <button
//               className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AttachTourBlog;
import React, { useState } from 'react';
import axios from 'axios';

const AttachTourBlog = ({ tourId }) => {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      try {
        const response = await axios.get(`http://localhost:8080/api/blogs/search-blogs?q=${value}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]);
    }
  };

  const handleBlogSelect = (blog) => {
    if (selectedBlogs.some(selectedBlog => selectedBlog._id === blog._id)) {
      setError('This blog is already selected.');
      return;
    }
    setSelectedBlogs([...selectedBlogs, blog]);
    setQuery('');
    setResults([]);
    setError('');
  };

  const handleAttachBlogs = async () => {
    try {
      for (const blog of selectedBlogs) {
        await axios.post(`http://localhost:8080/api/tours/${tourId}`, { // Updated endpoint
          blogId: blog._id
        });
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error attaching blogs to tour:', error);
    }
  };

  return (
    <div>
      <p
        className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'
        onClick={() => setShowModal(true)}
      >
        Attach Tour Blogs
      </p>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-medium mb-4">Attach Blogs to Tour</h2>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-4"
              placeholder="Search blogs..."
            />
            {results.length > 0 && (
              <div className="border rounded max-h-40 overflow-y-auto">
                {results.map((blog) => (
                  <div
                    key={blog._id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleBlogSelect(blog)}
                  >
                    {blog.title}
                  </div>
                ))}
              </div>
            )}
            {error && (
              <div className="text-red-500 mb-4">
                {error}
              </div>
            )}
            <h3 className="text-md font-medium mt-4">Selected Blogs:</h3>
            <ul>
              {selectedBlogs.map((blog) => (
                <li key={blog._id}>{blog.title}</li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button
                className="bg-emerald-700 text-white px-4 py-2 rounded"
                onClick={handleAttachBlogs}
              >
                Attach Blogs
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttachTourBlog;
