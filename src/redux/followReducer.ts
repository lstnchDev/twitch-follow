import { LOAD_FOLLOW } from './types';

export const followReducer = (state = [], action: any)=>{
    switch(action.type){
        case LOAD_FOLLOW:
            const followData = action.data
            return followData
        default: return state
    }

} 