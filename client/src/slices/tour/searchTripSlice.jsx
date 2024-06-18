import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchTours = createAsyncThunk('search/searchTours', async (query) => {
  const response = await axios.get(`http://localhost:8080/api/tours/search?query=${query}`);
  return response.data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    tours: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchTours.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = action.payload.data.tours;
      })
      .addCase(searchTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
