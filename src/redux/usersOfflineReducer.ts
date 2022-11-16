import { AnyAction } from '@reduxjs/toolkit';
import { LOAD_ALL_FOLLOW } from './types';

interface IState{
        id: number
        img: string,
}

let prevArr: IState[] = []
const initialState = {
    users: []
}

export const usersOfflineReducer = (state = initialState, action: AnyAction)=>{

    switch(action.type){
        case LOAD_ALL_FOLLOW:
            const users = action.data
            console.log(users)
            return {
                ...state,
                users: users
            }
        default: return state
    }

} 