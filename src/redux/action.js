import axios from "axios"
import { GET_USER, LOADER_OFF, LOADER_ON, LOAD_ALL_FOLLOW, LOAD_ON_FOLLOW, LOAD_USER } from "./types"


const CLIENT_ID = "0zuarw2s00p8z3hy0kxcr3q5ufc7gm"
const URL_REDIRECT = "http://localhost:3000"

const AUTHO_LINK = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${URL_REDIRECT}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`


export function loadUser(token_id){
    return async dispatch =>{
        fetch(`https://api.twitch.tv/helix/users`, {
            headers: {
                'client-id': CLIENT_ID,
                'authorization': `Bearer ${token_id}`
            }
        })
            .then(res=>res.json())
            .then(result=> {
                localStorage.setItem('user-id', result.data[0].id)
                dispatch({
                    type: LOAD_USER,
                    data: result.data[0]
                })
            })
    }
}

export function loadingOn(){
    return {
        type: LOADER_ON
    }
}

export function loadingOff(){
    return {
        type: LOADER_OFF
    }
}

export function loadFollow(user_id, token_id){
    return async dispatch =>{
        dispatch(loadingOn())

        // fetch(`https://api.twitch.tv/helix/users/follows?from_id=${user_id}`, {

        axios.get(`https://api.twitch.tv/helix/streams/followed?user_id=${user_id}`,{
            headers: {
                'Authorization': `Bearer ${token_id}`,
                'Client-Id': CLIENT_ID,
            }
        })
        .then((res)=>{
            dispatch(loadingOff())
            dispatch({
                type: LOAD_ON_FOLLOW,
                data: res.data.data
            })
        })
        // fetch(`https://api.twitch.tv/helix/streams/followed?user_id=${user_id}`, {
        //     headers: {
        //         'Authorization': `Bearer ${token_id}`,
        //         'Client-Id': CLIENT_ID,
        //     }
        // })
        // .then(res=>res.json())
        // .then(result=>{
        //     dispatch(loadingOff())
        //     dispatch({
        //         type: LOAD_ON_FOLLOW,
        //         data: result.data
        //     })
        // })
    }
}

export function getUsers(user_id, token_id){

    return async dispatch =>{

        fetch(`https://api.twitch.tv/helix/users?id=${user_id}`, {
            headers: {
                'client-id': CLIENT_ID,
                'authorization': `Bearer ${token_id}`
            }
        })
            .then(res=>res.json())
            .then(result=> {
                dispatch({
                    type: GET_USER,
                    data: result.data[0]
                })
            })
    }
}

export function getAllUsers(user_id, token_id){
    return async dispatch =>{
        dispatch(loadingOn())
        fetch(`https://api.twitch.tv/helix/users/follows?first=100&from_id=${user_id}`, {
            headers: {
                'client-id': CLIENT_ID,
                'authorization': `Bearer ${token_id}`
            }
        })
            .then(res=>res.json())
            .then(result=> {
                dispatch(loadingOff())
                dispatch({
                    type: LOAD_ALL_FOLLOW,
                    data: result.data
                })
            })
    }

}