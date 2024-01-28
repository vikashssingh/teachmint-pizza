import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "./slices/orderSlice";

// Configure the Redux store 
export const store = configureStore({
  reducer: {
    // reducer for the 'orders' slice
    orders: OrderReducer,
  },
});
