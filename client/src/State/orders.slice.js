import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthAPI, OrderAPI } from "../Api";

const initialState = {
  orders: [],
  status: "idle",
  error: null,
  filter: "in-progress",
  activeOrder: {},
};

const user = AuthAPI.getCurrentUser();

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await OrderAPI.getAllOrders(user.id, user.role);
  return response.data.orders;
});

export const addNewOrder = createAsyncThunk(
  "orders/create",
  async (order_details) => {
    const response = await OrderAPI.addNewOrder(order_details);
    return response.data.order;
  }
);

export const updateOrder = createAsyncThunk("orders/update", async (order) => {
  const update_order_response = await OrderAPI.updateOrder(order);
  if (update_order_response.status === 200) {
    const response = await OrderAPI.getAllOrders(user.id, user.role);
    return response.data.orders;
  }
});

const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    ordersFilterChanged(state, action) {
      state.filter = action.payload;
      state.activeOrder = state.orders.filter(
        (order) => order.status === state.filter
      )[0];
    },
    activeOrderChanged(state, action) {
      state.activeOrder = state.orders.find(
        (order) => order._id === action.payload
      );
    },
  },
  extraReducers: {
    [fetchOrders.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.orders = state.orders.concat(action.payload);
      state.activeOrder = state.orders.filter(
        (order) => order.status === state.filter
      )[0];
    },
    [fetchOrders.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [addNewOrder.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.orders.push(action.payload);
    },
    [updateOrder.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.orders = action.payload;
      state.activeOrder = state.orders.filter(
        (order) => order.status === state.filter
      )[0];
    },
  },
});

export const { ordersFilterChanged, activeOrderChanged } = OrdersSlice.actions;

export const selectOrders = (state) => {
  return state.orders.orders.filter(
    (order) => order.status === state.orders.filter
  );
};

export const selectOrderById = (state, orderId) =>
  state.orders.orders.find((order) => order._id === orderId);

export const selectActiveOrder = (state) => state.orders.activeOrder;

export const selectFilter = (state) => state.orders.filter;
export default OrdersSlice.reducer;
