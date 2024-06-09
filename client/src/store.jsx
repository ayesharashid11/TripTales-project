// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../src/slices/blog/blogSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
