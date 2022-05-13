import { authSlice } from "../slices/authSlice";

const { actions: slice } = authSlice

// login action
export const loginAction = (phone) => dispatch => {
    dispatch(slice.setLogin(phone));
}

