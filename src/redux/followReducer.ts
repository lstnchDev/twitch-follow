import { AnyAction } from '@reduxjs/toolkit';
import { type } from 'os';
import { LOAD_FOLLOW } from './types';

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
        case LOAD_FOLLOW:
            const followData = action.data
            console.log(followData)
            const width = 200
            const height = 200

            usersOnline.push({
                id: followData.id,
                name: followData.user_name,
                img: followData.thumbnail_url,
                type: followData.type
            })
            console.log(usersOnline)

            return {
                followData         
               }
        default: return state
    }

} 