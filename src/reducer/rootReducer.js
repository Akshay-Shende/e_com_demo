import { combineReducers } from '@reduxjs/toolkit';
import loginUserDataReducer from '../reducer/slices/loginUserSlice'

const rootReducer = combineReducers({
    loginUserData : loginUserDataReducer
});

export default rootReducer;