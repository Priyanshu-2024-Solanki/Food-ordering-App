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
      let toDel = [];
      toDel.push(action.payload);
      console.log(toDel[0]);
      const delState = [];
      state.item.forEach((item , index)=>{
        if(index !== toDel[0]) delState.push(item);
      })
      toDel.length = 0;
      return { item: delState };
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
