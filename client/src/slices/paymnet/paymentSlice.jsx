import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const pay = createAsyncThunk('payment/pay', async ({ userId, tourId, mobileNumber }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/payment/pay/${tourId}`, {
      userId,
      mobileNumber,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    response: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(pay.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
      })
      .addCase(pay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default paymentSlice.reducer;
