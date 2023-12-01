import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {RootState, OpenDialogPayload, DialogUIProps} from "src/interfaces";

export const dialogSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<OpenDialogPayload>) => {
      const {view, actions, UIProps} = action.payload;
      state["view"] = view;
      // @ts-expect-error
      state["actions"] = actions;
      state["UIProps"] = UIProps;
      state["show"] = true;
    },
    closeDialog: (state) => {
      state["view"] = undefined;
      state["actions"] = [];
      state["UIProps"] = {} as DialogUIProps;
      state["show"] = false;
    },
  },
});

export const {openDialog, closeDialog} = dialogSlice.actions;
export const selectDialogState = (state: RootState) => state.dialog;

export default dialogSlice.reducer;
