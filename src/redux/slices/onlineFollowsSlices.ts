import { Status } from './../../consts/variableConsts';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"
import { IApiIds } from "../../components/@types/assets";

const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"

 interface IOnlineFollows{
    items: OnlineFollowsItem[],
    status: Status
}

type OnlineFollowsItem = {
    user_id: string,
    user_name: string, 
    title: string,
    type: string,
    viewer_count: string,               
    game_name: string,
}

export const fetchOnlineFollows = createAsyncThunk('onlineFollows/fetchOnlineFollows', async(params: IApiIds)=>{

    const {user_id, token_id} = params
    const response = await axios.get(
        `https://api.twitch.tv/helix/streams/followed?user_id=${user_id}`,{
            headers: {
                'Authorization': `Bearer ${token_id}`,
                'Client-Id': CLIENT_ID,
            }
        })
    console.log(response.data.data)
    return response.data.data as OnlineFollowsItem[]
})



const initialState: IOnlineFollows = {
    items: [],
    status: Status.LOADING,
}

export const onlineFollowsSlice = createSlice({
    name: 'onlineFollows',
    initialState: initialState,
    reducers: {
        getOnlineFollows: (state, action: PayloadAction<OnlineFollowsItem[]>) =>{
            state.items = action.payload
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchOnlineFollows.pending, (state, action) =>{
            state.status = Status.LOADING
        })
        builder.addCase(fetchOnlineFollows.fulfilled, (state, action) =>{
            state.items = action.payload
            state.status = Status.SUSCESS
        })
        builder.addCase(fetchOnlineFollows.rejected, (state, action) =>{
            state.status = Status.ERROR
        })
    }
})

export const {getOnlineFollows} = onlineFollowsSlice.actions

export default onlineFollowsSlice.reducer