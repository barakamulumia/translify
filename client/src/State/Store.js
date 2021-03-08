import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders.slice";
import mapsReducer from "./maps.slice";

export default configureStore({
  reducer: {
    orders: ordersReducer,
    maps: mapsReducer,
  },
});
