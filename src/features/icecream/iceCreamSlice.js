import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducer: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
