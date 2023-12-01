import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {initialState} from "./initial-state";
import {RecoverPasswordSlice} from "./types";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export const recoverRasswordSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onRecoverChange: (
      state,
      action: PayloadAction<{
        key: keyof RecoverPasswordSlice;
        value: RecoverPasswordSlice[keyof RecoverPasswordSlice];
      }>
    ) => {
      const {key, value} = action.payload;
      state[key] = value;
    },
  },
});

export * from "./thunks";
export const {onRecoverChange} = recoverRasswordSlice.actions;
export const selectRecoverRasswordState = (state: RootState) =>
  state.recoverPassword;

export default recoverRasswordSlice.reducer;
