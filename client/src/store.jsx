import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../src/slices/blog/blogSlice'
import reviewReducer from '../src/slices/review/reviewSlice'
import authReducer from'../src/slices/auth/authSlice'
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    reviews: reviewReducer,
   auth:  authReducer,
    
  },
});

