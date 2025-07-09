import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

//Loading cart from local storage
const savedCart = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: savedCart,
    },
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems",JSON.stringify(state.cart.items));
});
