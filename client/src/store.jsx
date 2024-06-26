import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../src/slices/blog/blogSlice'
import reviewReducer from '../src/slices/review/reviewSlice'
import authReducer from '../src/slices/auth/authSlice'
import createblogReducer from '../src/slices/blog/createBlogSlice'
import tourReducer from '../src/slices/tour/tourSlice'
import paymentReducer from '../src/slices/paymnet/paymentSlice'
import addReviewReducer from '../src/slices/review/addReviewSlice'
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    reviews: reviewReducer,
    auth: authReducer,
    blog: createblogReducer,
    tours: tourReducer,
    payment: paymentReducer,
    addReview: addReviewReducer,
  },
});

