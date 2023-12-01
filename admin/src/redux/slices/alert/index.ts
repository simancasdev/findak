import {PREFIX} from "./helper";
import {RootState} from "interfaces";
import {ShowAlertPayload} from "./types";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<ShowAlertPayload>) => {
      const {message, type, icon, translate = true} = action.payload;
      state["message"] = message;
      state["type"] = type;
      state["icon"] = icon;
      state["translate"] = translate;
      state["show"] = true;
    },
    closeAlert: (state) => {
      state["show"] = false;
      state["message"] = undefined;
      state["type"] = undefined;
      state["icon"] = undefined;
      state["translate"] = true;
    },
  },
});

export const {showAlert, closeAlert} = alertSlice.actions;
export const selectAlertState = (state: RootState) => state.alert;

export default alertSlice.reducer;
