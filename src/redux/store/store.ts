import { useDispatch } from 'react-redux';
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import onlineFollowsSlice from '../slices/onlineFollowsSlices'
import imgFollowsSlice from '../slices/imgFollowsSlices'
import allFollowsSlices from '../slices/allFollowsSlices'
import loginStateSlices from '../slices/loginStateSlices'



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

