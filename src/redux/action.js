import { AnyAction } from '@reduxjs/toolkit';
import { LOAD_FOLLOW, LOAD_USER } from "./types"


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
                console.log(result.data)
                dispatch({
                    type: LOAD_USER,
                    data: result.data[0]
                })
            })
    }
}

export function loadFollow(user_id, token_id){
    return async dispatch =>{
        fetch(`https://api.twitch.tv/helix/users/follows?from_id=${user_id}`, {
            headers: {
                'client-id': CLIENT_ID,
                'authorization': `Bearer ${token_id}`
            }
        })
        .then(res=>res.json())
        .then(result=>{
            dispatch({
                type: LOAD_FOLLOW,
                data: result.data
            })
        })
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
                    type: LOAD_USER,
                    data: result.data
                })
            })
    }
}