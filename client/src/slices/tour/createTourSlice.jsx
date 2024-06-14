import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createTour = createAsyncThunk(
  'tour/createTour',
  async ({ tourData }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/tours/createtour', tourData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      const message = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const tourSlice = createSlice({
  name: 'tour',
  initialState: {
    tour: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTour.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTour.fulfilled, (state, action) => {
        state.loading = false;
        state.tour = action.payload;
        toast.success('Tour created successfully!');
      })
      .addCase(createTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tourSlice.reducer;
