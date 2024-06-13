

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button, FileInput, TextInput } from 'flowbite-react';
import 'react-quill/dist/quill.snow.css';
import { IoCreateSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../slices/blog/createBlogSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    files: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleQuillChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error('Please sign in to create a blog.');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    for (const file of formData.files) {
      data.append('files', file);
    }

    try {
      await dispatch(createBlog({ blogData: data, token })).unwrap();
      toast.success('Blog created successfully!');
      navigate('/blogs/:blogSlug'); 
    } catch (error) {
      toast.error('Failed to create blog. Please try again.');
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append('title', title);
  //     formData.append('content', content);
  //     Array.from(files).forEach((file) => {
  //       formData.append('files', file);
  //     });

  //     await axios.post('/api/blogs/createblogs', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     toast.success('Blog published successfully!');
  //   } catch (error) {
  //     toast.error('Failed to publish the blog');
  //   }
  // };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen m-12'>
      <ToastContainer />
      <h1 className='flex items-center justify-center text-3xl my-7 text-emerald-700 font-semibold'>
        <IoCreateSharp className='text-4xl mr-3 text-yellow-500' />
        Create a Blog
      </h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-yellow-400 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*,video/*'
            multiple
            onChange={handleFileChange}
          />
          <Button
            type='button'
            className='text-white bg-emerald-700 rounded-lg text-sm px-4 py-1 text-center'
          >
            Upload Files
          </Button>
        </div>
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          onChange={handleQuillChange}
        />
        <Button
          type='submit'
          className='text-white bg-emerald-700 rounded-lg text-sm px-4 py-1 text-center'
        >
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;
