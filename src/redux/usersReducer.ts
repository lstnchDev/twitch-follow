import { act } from '@testing-library/react';
import { GET_USER } from './types';

export const usersReducer = (state = [], action: any)=>{
    switch(action.type){
        case GET_USER:
            const users = action.data
            return users
        default: return state
    }

} 