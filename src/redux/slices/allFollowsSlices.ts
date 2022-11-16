import { Status } from './../../consts/variableConsts';
import { IApiIds } from '../../components/@types/assets';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"

const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"

interface IAllFollows{
    items: AllFollowsItem[],
    status: Status
}
type AllFollowsItem = {
    to_id: string,
    to_name: string, 
    followed_at: string,
}
export const fetchAllFollows = createAsyncThunk('allFollows/fetchAllFollows', async(params: IApiIds)=>{

    const {user_id, token_id} = params

    const response = await axios.get(
        `https://api.twitch.tv/helix/users/follows?first=100&from_id=${user_id}`,{
            headers: {
                'Authorization': `Bearer ${token_id}`,
                'Client-Id': CLIENT_ID,
            }
        })
    return response.data.data as AllFollowsItem[]
})

const initialState: IAllFollows = {
    items: [],
    status: Status.LOADING,
}

export const allFollowsSlices = createSlice({
    name: 'allFollows',
    initialState: initialState,
    reducers: {
        getAllFollows: (state, action: PayloadAction<AllFollowsItem>) =>{
            state.items = [
                ...state.items,
                action.payload
            ]
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchAllFollows.pending, (state, action) =>{
            state.status = Status.LOADING
        })
        builder.addCase(fetchAllFollows.fulfilled, (state, {payload}) =>{
            state.items = payload
            state.status = Status.SUSCESS
        })
        builder.addCase(fetchAllFollows.rejected, (state, action) =>{
            state.status = Status.ERROR
        })
    }
})

export const {getAllFollows} = allFollowsSlices.actions

export default allFollowsSlices.reducer