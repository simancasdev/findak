import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {RootState, OpenPopUpPayload} from "src/interfaces";

export const popUpSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    openPopUp: (state, action: PayloadAction<OpenPopUpPayload>) => {
      const {view} = action.payload;
      state["view"] = view;
    },
    closePopUp: (state) => {
      state["view"] = undefined;
    },
  },
});

export const {openPopUp, closePopUp} = popUpSlice.actions;
export const selectPopUpState = (state: RootState) => state.popUp;

export default popUpSlice.reducer;
