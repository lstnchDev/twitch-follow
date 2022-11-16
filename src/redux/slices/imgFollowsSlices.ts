import { Status } from './../../consts/variableConsts';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"
import { IApiIds } from "../../components/@types/assets";

const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"

type ImgInfo = {
    id: string,
    profile_image_url: string,

}

interface IImgFollow{
    follows: ImgInfo[],
    status: Status
}

export const fetchImgFollows = createAsyncThunk('imgFollows/fetchimgFollows', async(params: IApiIds)=>{
    const {user_id, token_id} = params
    const response = await axios.get(
        `https://api.twitch.tv/helix/users?id=${user_id}`,{
            headers: {
                'Authorization': `Bearer ${token_id}`,
                'Client-Id': CLIENT_ID,
            }
        })
    return response.data.data[0] as ImgInfo
})

const initialState: IImgFollow = {
    follows: [],
    status: Status.LOADING,
}
export const imgFollowsSlice = createSlice({
    name: 'imgFollows',
    initialState,
    reducers: {
        getImgFollows: (state, action: PayloadAction<ImgInfo>) =>{
            state.follows = [
                ...state.follows,
                {
                    id: action.payload.id,
                    profile_image_url: action.payload.profile_image_url
                }
            ]

        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchImgFollows.pending, (state, action) =>{
            state.status = Status.LOADING
        })
        builder.addCase(fetchImgFollows.fulfilled, (state, {payload}) =>{
            state.follows = [
                ...state.follows,
                {
                    id: payload.id ,
                    profile_image_url: payload.profile_image_url
                }
            ]
            state.status = Status.SUSCESS
        })
        builder.addCase(fetchImgFollows.rejected, (state, action) =>{
            state.status = Status.ERROR
        })
    }

})

export const {getImgFollows} = imgFollowsSlice.actions

export default imgFollowsSlice.reducer