import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      //Prevent duplicate product from being added.
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        const product = {
        ...action.payload,
        thumbnail: action.payload.thumbnail || action.payload.images?.[0],
        };
       state.items.push(product);
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
