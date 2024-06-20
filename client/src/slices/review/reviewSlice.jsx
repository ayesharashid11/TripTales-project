import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTourReviews = createAsyncThunk('reviews/fetchTourReviews', async (tourId) => {
  const response = await axios.get(`http://localhost:8080/api/review/tourreview/${tourId}`);
  return response.data.data.reviews;
});
export const fetchAllReviews = createAsyncThunk('reviews/fetchAllReviews', async () => {
  const response = await axios.get('http://localhost:8080/api/review/getallreviews');
  return response.data.data.reviews;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTourReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(fetchTourReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAllReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(fetchAllReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;
