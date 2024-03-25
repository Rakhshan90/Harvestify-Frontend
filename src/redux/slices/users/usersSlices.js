import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { baseUrl } from "../../../util/baseUrl";

// Register action
export const userRegisterAction = createAsyncThunk('users/register',
    async (user, { rejectWithValue, getState, dispatch }) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const {data} = await axios.post(`${baseUrl}/users/register`, user, config);
            return data;
        } catch (error) {
            // frontend error if any
            if(!error?.response) throw error;
            // server error
            else return rejectWithValue(error?.response?.data);
        }
    });

// Login action
export const userLoginAction = createAsyncThunk('users/login',
    async (user, { rejectWithValue, getState, dispatch }) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const {data} = await axios.post(`${baseUrl}/users/login`, user, config);
            return data;
        } catch (error) {
            // frontend error if any
            if(!error?.response) throw error;
            // server error
            else return rejectWithValue(error?.response?.data);
        }
    });


// get user from local storage and place it into redux store
const userLoginFormStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

// User slices
const usersSlices = createSlice({
    name: 'users',
    initialState: {
        userAuth: userLoginFormStorage,
    },
    // redux's object method
    extraReducers: (builder)=>{
        // Register
        builder.addCase(userRegisterAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(userRegisterAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.registered = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(userRegisterAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
        // Login
        builder.addCase(userLoginAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(userLoginAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.userAuth = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(userLoginAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
    }
});

export default usersSlices.reducer;