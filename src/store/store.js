import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    empty: (state) => {
      state.value = [];
    },
    filter: (state, action) => {
      state.value = state.value.filter((item, i) => i !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: {cart: cartSlice.reducer} });
export default store;


