import { createSlice } from "@reduxjs/toolkit";
//importamos

const initialState = {
  counter: 10,
};
// valor inicial

export const counterSlice = createSlice({
  name: "counter", // nombre
  initialState, // valor inicial
  reducers: {
    // reducers
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
    reset: (state) => {
      state.counter = initialState.counter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementBy, decrement, reset } =
  counterSlice.actions;
