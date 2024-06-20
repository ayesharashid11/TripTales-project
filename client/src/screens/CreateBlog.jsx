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

export default function CreateBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
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

    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('user', user._id); 
    for (const file of formData.files) {
      data.append('files', file);
    }

    try {
      await dispatch(createBlog({ blogData: data })).unwrap();
      toast.success('Blog created successfully!');
      navigate('/blogs');
    } catch (error) {
      toast.error('Failed to create blog. Please try again.');
    }
  };

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
             <FileInput
            type='file'
            accept='image/*,video/*'
            multiple
            onChange={handleFileChange}
          />
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
}
