import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addReview = createAsyncThunk('reviews/addReview', async ({ review, rating, tourId, userId }, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:8080/api/review/addreview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ review, rating, tourId, userId }),
        });

        const data = await response.json();

        if (!response.ok) {
            return rejectWithValue(data.message || 'Failed to add review');
        }

        return data;
    } catch (error) {
        return rejectWithValue('Something went wrong. Please try again later.');
    }
});

const addReviewSlice = createSlice({
    name: 'addReview',
    initialState: {
        review: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addReview.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.review = action.payload.data.review;
                state.error = null;
            })
            .addCase(addReview.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default addReviewSlice.reducer;
