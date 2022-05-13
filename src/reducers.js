import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { counterSlice } from "./slices/counter"

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    counter: counterSlice.reducer,
});