import {PREFIX} from "./helper";
import {TValue} from "src/languages";
import {initialState} from "./initial-state";
import {ButtonLoaderId, RootState} from "src/interfaces";
import {PayloadAction, createSlice, current} from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    toggleButtonLoader: (state, action: PayloadAction<ButtonLoaderId>) => {
      const buttonId = action.payload;
      const {buttonLoaderIds} = current(state);
      if (buttonLoaderIds.includes(buttonId)) {
        // prettier-ignore
        state["buttonLoaderIds"] = buttonLoaderIds.filter((prevButtonId) => prevButtonId !== buttonId);
        return;
      }
      state["buttonLoaderIds"] = [...buttonLoaderIds, buttonId];
    },
    showScreenLoader: (
      state,
      action: PayloadAction<{show: boolean; message?: TValue}>
    ) => {
      const {show, message} = action.payload;
      state["showScreenLoader"]["show"] = show;
      state["showScreenLoader"]["message"] = message;
    },
    showOverlapAuthenticatingScreen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state["showOverlapAuthenticatingScreen"] = action.payload;
    },
  },
});

export const {
  showScreenLoader,
  toggleButtonLoader,
  showOverlapAuthenticatingScreen,
} = loaderSlice.actions;

export const selectLoaderState = (state: RootState) => state.loader;
export default loaderSlice.reducer;
export * from "./static-button-loaders";
