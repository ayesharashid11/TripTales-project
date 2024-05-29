import React from 'react'
import ReactQuill from 'react-quill';
import {  Button, FileInput, TextInput } from 'flowbite-react';
import 'react-quill/dist/quill.snow.css';
import { IoCreateSharp } from "react-icons/io5";
const CreateBlog = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen m-12'>
      <h1 className=' flex items-center justify-center text-3xl my-7 text-emerald-700 font-semibold'>
      <IoCreateSharp className='text-4xl mr-3  text-yellow-500' />
        Create a Blog</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
          />
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-yellow-400 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*'
          />
          <Button
            type='button'
            className='className="text-white bg-emerald-700  rounded-lg text-sm px-4 py-1 text-center'
          >
           Upload Image
          </Button>
        </div>
        
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
        />
        <Button type='submit'
         className='text-white bg-emerald-700  rounded-lg text-sm px-4 py-1 text-center'>
          Publish
        </Button>
      </form>
      </div>
  )
}

export default CreateBlog
