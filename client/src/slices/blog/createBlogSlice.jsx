import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createBlog = createAsyncThunk(
  'blog/createBlog',
  async ({ blogData }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      blogData.userId = auth.user._id; 
      const response = await axios.post('http://localhost:8080/api/blogs/createblogs', blogData, {
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

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blog: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
        toast.success('Blog created successfully!');
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
