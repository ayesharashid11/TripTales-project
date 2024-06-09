import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../src/slices/blog/blogSlice'
import reviewReducer from '../src/slices/review/reviewSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    reviews: reviewReducer,
  },
});
