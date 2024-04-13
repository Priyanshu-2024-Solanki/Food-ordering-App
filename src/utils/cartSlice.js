import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      // console.log(action.payload);
      state.item = state.item.filter((i , index) => index!==action.payload);
    },
    clearCart: (state) => {
      state.item.length = 0; // state = [] this will work
      // we can do this instead return { items : [] }
      // RTK says either mutate the state or return
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
