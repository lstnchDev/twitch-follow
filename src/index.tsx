import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {combineReducers} from 'redux';
import { userReducer } from './redux/userReducer';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { followReducer } from './redux/followReducer';
import { usersReducer } from './redux/usersReducer';
import { loadingReducer } from './redux/loadingReducer';

const reducer = combineReducers({
  user: userReducer,
  follow: followReducer,
  users: usersReducer,
  loading: loadingReducer
})

const store = configureStore({reducer})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

