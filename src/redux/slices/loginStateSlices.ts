import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"

type LoginInfo = {
    login: string,
    profile_image_url: string,
    id: string
}

interface ILoginState{
    authUser: LoginInfo,
    loginState: boolean
    
}

export const fetchLogin = createAsyncThunk('getLogin/fetchLogin', async(token_id: string)=>{
    console.log(token_id)

    const response = await axios.get(
        `https://api.twitch.tv/helix/users`,{
            headers: {
                'Authorization': `Bearer ${token_id}`,
                'Client-Id': CLIENT_ID,
            }
        })
    console.log(response.data.data[0])
    return response.data.data[0] as LoginInfo
})

const initialState: ILoginState = {
    authUser: {
        login: '',
        profile_image_url: '',
        id: ''
    },
    loginState: false
}

export const loginStateSlices = createSlice({
    name: 'getLogin',
    initialState,
    reducers: {
        getLoginState: (state, action: PayloadAction<boolean>)=>{
            state.loginState = action.payload
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchLogin.pending, (state, action) =>{
            state.loginState = false
        })
        builder.addCase(fetchLogin.fulfilled, (state, {payload}) =>{
            state.authUser = 
                {
                    login: payload.login,
                    profile_image_url: payload.profile_image_url,
                    id: payload.id
                }
            
            state.loginState = true


            // state.status = 'suscess'
        })
        builder.addCase(fetchLogin.rejected, (state, action) =>{
            state.loginState = false
            // state.status = 'error'
        })
    }
    // extraReducers: {
    //     [fetchLogin.pending]: (state, action) =>{
    //         state.status = 'loading'
    //     },
    //     [fetchLogin.fulfilled]: (state, action) =>{
    //         console.log(action.payload)
    //         state.loginName = action.payload[0].login
    //         state.loginState = true
    //         state.img = action.payload[0].profile_image_url
    //         state.id = action.payload[0].id

    //         state.status = 'suscess'

    //     },
    //     [fetchLogin.rejected]: (state, action) =>{
    //         state.status = 'error'
    //     },
    // }
})

export const {getLoginState} = loginStateSlices.actions

export default loginStateSlices.reducer