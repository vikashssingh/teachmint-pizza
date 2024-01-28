import { createSlice } from "@reduxjs/toolkit";

// Initial state for the order slice
const initialState = {
  orders: [],
};

// Create the order slice using createSlice from @reduxjs/toolkit
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // Reducer to add a new order to the state
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    // Reducer to cancel an order based on its ID
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },

    // Reducer to update the status of an order based on its ID
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.status = newStatus;
      }
    },

    // Reducer to update the end time of an order based on its ID
    updateOrderEndTime: (state, action) => {
      const { orderId, newEndTime } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.endTime = newEndTime;
      }
    },

    // Reducer to update the elapsed time of an order based on its ID
    updateOrderElapsedTime: (state, action) => {
      const { orderId, newElapsedTime } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.elapsedTime = newElapsedTime;
      }
    },
  },
});

// Export the action creators and reducer from the slice
export const {
  addOrder,
  cancelOrder,
  updateOrderStatus,
  updateOrderEndTime,
  updateOrderElapsedTime,
} = orderSlice.actions;

// Export the reducer for use in the Redux store
export default orderSlice.reducer;
