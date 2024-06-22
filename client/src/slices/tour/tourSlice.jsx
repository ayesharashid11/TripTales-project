import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTours = createAsyncThunk(
  'tours/fetchTours',
  async (page = 1) => {
    const response = await axios.get(`http://localhost:8080/api/tours/getalltours?page=${page}`);
    return response.data;
  }
);
// export const fetchTours = createAsyncThunk(
//   'tours/fetchTours',
//   async ({ page = 1, query = '' } = {}) => {
//     const response = await axios.get(`http://localhost:8080/api/tours/getalltours`, {
//       params: { page, query },
//     });
//     return response.data;
//   }
// );

export const fetchTourById = createAsyncThunk('tours/fetchTourById', async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/tours/gettour/${id}`);
    return response.data.data.tour;
  } catch (error) {
    throw Error(error.response.data.message || 'Failed to fetch tour');
  }
});

export const searchTours = createAsyncThunk(
  'tours/searchTours',
  async ({ query, page = 1 }) => {
    const response = await axios.get(`http://localhost:8080/api/tours/search?query=${query}`);
    return response.data;
  }
);
const tourSlice = createSlice({
  name: 'tours',
  initialState: {
    tours: [],
    tour: null,
    status: 'idle',
    error: null,
    page: 1,
    totalPages: 1,
    isSearchMode: false,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearchMode(state, action) {
      state.isSearchMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = action.payload.data.tours;
        state.totalPages = action.payload.data.totalPages;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    
        builder.addCase(fetchTourById.pending, (state) => {
        state.status = 'loading';
      })
      builder.addCase(fetchTourById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tour = action.payload;
      })
      builder.addCase(fetchTourById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(searchTours.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = action.payload.data.tours;
        state.totalPages = action.payload.data.totalPages;
      })
      .addCase(searchTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectAllTours = (state) => state.tour.tours;
export const selectTour = (state) => state.tour.tour;
export const selectStatus = (state) => state.tour.status;
export const selectError = (state) => state.tour.error;
export const selectIsSearchMode = (state) => state.tours.isSearchMode;

export const { setPage, setSearchMode } = tourSlice.actions;
export default tourSlice.reducer;
