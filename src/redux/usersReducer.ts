import { GET_USER } from './types';

export const userReducer = (state = [], action: any)=>{
    switch(action.type){
        case GET_USER:
            const user = action.data
            return user
        default: return state
    }

} 