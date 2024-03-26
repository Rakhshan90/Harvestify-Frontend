import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../util/baseUrl";
import axios from 'axios';

// create product action
export const createProductAction = createAsyncThunk('products/create',
    async (product, {rejectWithValue, getState, dispatch}) => {
        const user = getState()?.users;
        const {userAuth} = user;
        // config
        const config = {
            headers: {
                Authorization: `Bearer ${userAuth?.token}`
            }
        }
        try {
            const {data} = await axios.post(`${baseUrl}/products/create`, product, config);
            return data;
        } catch (error) {
            // frontend error if any
            if(!error?.response) throw error;
            // server error
            else return rejectWithValue(error?.response?.data);
        }
    });

// fetch products action
export const fetchProductsAction = createAsyncThunk('products/fetchProducts',
    async (products, {rejectWithValue, getState, dispatch}) => {
        const user = getState()?.users;
        const {userAuth} = user;
        // config
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.get(`${baseUrl}/products`, config);
            return data;
        } catch (error) {
            // frontend error if any
            if(!error?.response) throw error;
            // server error
            else return rejectWithValue(error?.response?.data);
        }
    });

// fetch single product action
export const fetchProductAction = createAsyncThunk('products/fetchProduct',
    async (id, {rejectWithValue, getState, dispatch}) => {
        const user = getState()?.users;
        const {userAuth} = user;
        // config
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.get(`${baseUrl}/products/${id}`, config);
            return data;
        } catch (error) {
            // frontend error if any
            if(!error?.response) throw error;
            // server error
            else return rejectWithValue(error?.response?.data);
        }
    });

// product slices
const productSlices = createSlice({
    name: 'products',
    initialState: {},
    extraReducers: (builder)=>{
        // create product
        builder.addCase(createProductAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(createProductAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.product = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(createProductAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
        // fetch all the product
        builder.addCase(fetchProductsAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchProductsAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchProductsAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
        // fetch single product detail
        builder.addCase(fetchProductAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchProductAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.product = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchProductAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
    }
});

export default productSlices.reducer;