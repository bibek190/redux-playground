import { createSlice } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const initialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCake--;
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
