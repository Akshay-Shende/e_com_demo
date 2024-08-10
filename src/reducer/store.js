const { configureStore } = require("@reduxjs/toolkit");
import loginUserDataReducer from '../reducer/slices/loginUserSlice'
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore({
    reducer:{
      loginUserData : loginUserDataReducer
      
    },    composeWithDevTools
})