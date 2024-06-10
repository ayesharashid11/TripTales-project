import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (page = 1) => {
  const response = await axios.get(`http://localhost:8080/api/blogs/getblogs?page=${page}`);
  return response.data;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    status: 'idle',
    error: null,
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload.data.blogs;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
