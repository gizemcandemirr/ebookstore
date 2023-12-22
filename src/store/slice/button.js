import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    activeButton: "Popular",
  },
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});
export const selectActiveButton = (state) => state.button.activeButton;

export const {  setActiveButton } = buttonSlice.actions;
export default buttonSlice.reducer;
