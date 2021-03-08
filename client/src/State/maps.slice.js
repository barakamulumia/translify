import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickup: null,
  destination: null,
  load: 1,
};

const mapsSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    locationUpdated(state, action) {
      const { inputType, details } = action.payload;
      state[inputType] = details;
    },
    loadSelected(state, action) {
      state.load = action.payload;
    },
  },
});

export const { locationUpdated, loadSelected } = mapsSlice.actions;

export const selectDestination = (state) => state.maps.destination;
export const selectPickUp = (state) => state.maps.pickup;
export const selectLoad = (state) => state.maps.load;

export default mapsSlice.reducer;
