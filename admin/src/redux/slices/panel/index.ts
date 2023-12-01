import {PREFIX} from "./helper";
import {RootState} from "interfaces";
import {ShowPanelPayload} from "./types";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export const panelSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    openPanel: (state, action: PayloadAction<ShowPanelPayload>) => {
      const {component, type} = action.payload;
      state["show"] = true;
      state["type"] = type;
      state["component"] = component;
    },
    closePanel: (state) => {
      state["show"] = false;
      state["type"] = undefined;
      state["component"] = undefined;
    },
  },
});

export const {openPanel, closePanel} = panelSlice.actions;
export const selectPanelState = (state: RootState) => state.panel;

export default panelSlice.reducer;
