import { AnyAction } from '@reduxjs/toolkit';
import { type } from 'os';
import { useSelector } from 'react-redux';
import { LOAD_ON_FOLLOW } from './types';

interface IFollowOnline{
    id: number,
    name: string, 
    img: string,
    type: string
}

const initialState = {
    users: []
}

let usersOnline: IFollowOnline[] = []
export const followReducer = (state = initialState, action: AnyAction)=>{
    switch(action.type){
        case LOAD_ON_FOLLOW:
            const followData = action.data

            usersOnline.push({
                id: followData.id,
                name: followData.user_name,
                img: followData.thumbnail_url,
                type: followData.type
            })

            return {
                followData         
               }
        default: return state
    }

} 