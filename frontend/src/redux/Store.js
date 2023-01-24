import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import filterReducer from './filterSlice'
import loginReducer from './loginSlice'
import expertReducer from './expertSlice'

const persistConfig = {
    key: 'counter',
    storage,
};


const reducers = combineReducers({
    filter: filterReducer,
    login: loginReducer,
    experts: expertReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
// console.log("storer", store); 