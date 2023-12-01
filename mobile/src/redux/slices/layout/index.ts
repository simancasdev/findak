import {PREFIX} from "./helper";
import {StatusBarStyle} from "react-native";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {RootState, SetEdgesColorPayload} from "src/interfaces";

export const layoutSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    setEdgesColor: (state, action: PayloadAction<SetEdgesColorPayload>) => {
      const {topColor, bottomColor} = action.payload;
      state["edges"] = {
        ...state["edges"],
        topColor,
        bottomColor,
      };
    },
    setStatusBarColor: (state, action: PayloadAction<StatusBarStyle>) => {
      state["statusBarColor"] = action.payload;
    },
    resetLayoutColors: (state) => {
      state["edges"] = {topColor: undefined, bottomColor: undefined};
      state["statusBarColor"] = undefined;
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state["drawerOpened"] = action.payload;
    },
    shootConfetti: (state, action: PayloadAction<boolean>) => {
      state["cofetti"]["fired"] = action.payload;
    },
  },
});

export const {
  toggleDrawer,
  setEdgesColor,
  shootConfetti,
  setStatusBarColor,
  resetLayoutColors,
} = layoutSlice.actions;
export const selectLayoutState = (state: RootState) => state.layout;

export default layoutSlice.reducer;
