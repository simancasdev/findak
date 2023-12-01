import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {RootState, OpenSideMenuPayload} from "src/interfaces";

export const sideMenuSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    openSideMenu: (state, action: PayloadAction<OpenSideMenuPayload>) => {
      const {view} = action.payload;
      state["view"] = view;
      state["show"] = true;
    },
    closeSideMenu: (state) => {
      state["view"] = undefined;
      state["show"] = false;
    },
  },
});

export const {openSideMenu, closeSideMenu} = sideMenuSlice.actions;
export const selectSideMenuState = (state: RootState) => state.sideMenu;

export default sideMenuSlice.reducer;
