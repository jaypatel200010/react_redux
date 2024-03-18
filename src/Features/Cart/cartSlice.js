import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    number: 0,
    name: "Jaykumar Patel",
  },
  reducers: {
    change: (state) => {
      return { ...state, name: "Patel Jaykumar" };
    },

    plus: (state) => {
      return { ...state, number: state.number + 1 };
    },
    minus: (state) => {
      state.number -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { plus, minus, change } = cartSlice.actions;

export default cartSlice.reducer;
