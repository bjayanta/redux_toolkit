import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        phone: ""
    },
    reducers: {
        setLogin: (state, action) => {
            state.isAuth = true;
            state.phone = action.payload
        }
    }
});

console.log(authSlice);