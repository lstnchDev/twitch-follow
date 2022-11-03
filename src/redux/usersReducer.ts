import { AnyAction } from '@reduxjs/toolkit';
import { GET_USER } from './types';

interface IState{
        id: number
        img: string,
}

let prevArr: IState[] = []
const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action: AnyAction)=>{
    console.log(state)

    switch(action.type){
        case GET_USER:
            const users = action.data
            prevArr.push({
                id: users.id,
                img: users.profile_image_url
            })

            const filterUsers =  prevArr.filter(prevUser=> prevUser.id !== users.id)
            console.log(filterUsers, users)
            return {
                ...state,
                users: prevArr
            }
        default: return state
    }

} 