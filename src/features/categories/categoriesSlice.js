import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from '../../utils/constants.js';
import axios from 'axios';

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, thunlAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`);
            return res.date;
        } catch(err) {
            console.log(err);
            return thunlAPI.rejectWithValue(err);
        }
    }
    )

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export default categoriesSlice.reducer;