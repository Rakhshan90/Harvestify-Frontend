import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../util/baseUrl";


// reset auction actions to redirect
const resetCreateAuctionAction = createAction('auctions/reset-create');


// fetch all auctions action
export const fetchAuctionsAction = createAsyncThunk('auctions/fetchAuctions',
    async (query, {rejectWithValue, getState, dispatch}) => {
        // const {location, category} = query;
        // config 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.get(`${baseUrl}/auctions`, config);
        return data;
    });

// create auctions action
export const createAuctionAction = createAsyncThunk('auctions/create',
    async (auction, {rejectWithValue, getState, dispatch}) => {
        const user = getState()?.users;
        const {userAuth} = user;
        // config 
        const config = {
            headers: {
                Authorization : `Bearer ${userAuth?.token}`
            }
        }
        const {data} = await axios.post(`${baseUrl}/auctions/create`, auction, config);
        // dispatch reset create auction action to redirect
        dispatch(resetCreateAuctionAction());
        return data;
    });

// auction slices
const auctionSlices = createSlice({
    name: 'auctions',
    initialState: {},
    extraReducers: (builder)=>{
        // fetch auctions
        builder.addCase(fetchAuctionsAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchAuctionsAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.auctions = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(fetchAuctionsAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
        // create auction
        builder.addCase(createAuctionAction.pending, (state, action)=>{
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(resetCreateAuctionAction(), (state, action)=>{
            state.isCreated = true;
        })
        builder.addCase(createAuctionAction.fulfilled, (state, action)=>{
            state.loading = false;
            state.auction = action?.payload;
            state.isCreated = false;
            state.appErr = undefined;
            state.serverErr = undefined;
        });
        builder.addCase(createAuctionAction.rejected, (state, action)=>{
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
        });
        
    }
})

export default auctionSlices.reducer;