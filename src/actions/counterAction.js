import { counterSlice } from "../slices/counter";

const {actions: counter } = counterSlice;

export const incrementAction = () => dispatch => {
    dispatch(counter.increment());
}

export const decrementAction = () => dispatch => {
    dispatch(counter.decrement());
}