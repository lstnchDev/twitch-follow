import { LOAD_USER } from './types';

export const userReducer = (state = [], action: any)=>{
    switch(action.type){
        case LOAD_USER:
            const user = action.data
            return user
    }

} 