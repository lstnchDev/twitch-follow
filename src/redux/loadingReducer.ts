import { LOADER_ON, LOADER_OFF } from './types';

const initialState = {
    loading: true
}

export const loadingReducer = (state = initialState, action: any)=>{
    switch(action.type){
        case LOADER_ON:
            return{
                ...state,
                loading: true
            }
        case LOADER_OFF:
            return{
                ...state,
                loading: false
            }
        default: return state
    }
}