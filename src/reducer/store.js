const { configureStore } = require("@reduxjs/toolkit");
import loginUserDataReducer from '../reducer/slices/loginUserSlice'
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:persistedReducer, composeWithDevTools
})
export const persistor = persistStore(store);