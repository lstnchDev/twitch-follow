import { useDispatch } from 'react-redux';
import { type } from 'os';
import { combineReducers } from "redux";
import { usersOfflineReducer } from '../usersOfflineReducer';
import { configureStore } from '@reduxjs/toolkit';
import onlineFollowsSlice from '../slices/onlineFollowsSlices'
import { userReducer } from "../userReducer";
import { usersReducer } from "../usersReducer";
import { loadingReducer } from "../loadingReducer";
import imgFollowsSlice from '../slices/imgFollowsSlices'
import allFollowsSlices from '../slices/allFollowsSlices'
import loginStateSlices from '../slices/loginStateSlices'

// const reducer = combineReducers({
//     user: userReducer,
//     follow: followReducer,
//     users: usersReducer,
//     loading: loadingReducer,
//     allFollow: usersOfflineReducer,
//   })
  const reducer = combineReducers({
    usersOfflineReducer,
    user: userReducer,
    // follow: followReducer,
    users: usersReducer,
    loading: loadingReducer,
    allFollow: usersOfflineReducer,

  })
export const store = configureStore({
  reducer: {
    onlineFollowsSlice,
    imgFollowsSlice,
    allFollowsSlices,
    loginStateSlices,
   }
  }
)
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

