import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        fetchReviewsStart(state) {
            state.status = 'loading';
        },
        fetchReviewsSuccess(state, action) {
            state.status = 'succeeded';
            state.reviews = action.payload;
        },
        fetchReviewsFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchReviewsStart, fetchReviewsSuccess, fetchReviewsFailure } = reviewSlice.actions;

export const fetchTourReviews = (tourId) => async (dispatch) => {
    dispatch(fetchReviewsStart());
    try {
        const response = await axios.get(`http://localhost:8080/api/review/tourreview/${tourId}`);
        dispatch(fetchReviewsSuccess(response.data.data.reviews));
    } catch (error) {
        dispatch(fetchReviewsFailure(error.message));
    }
};

export default reviewSlice.reducer;
