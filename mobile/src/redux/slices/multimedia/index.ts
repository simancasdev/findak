import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {RootState, OpenMultimediaPayload} from "src/interfaces";

export const multimediaSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    openMultimedia: (state, action: PayloadAction<OpenMultimediaPayload>) => {
      const {sources, initialSource, UIProps} = action.payload;
      state["UIProps"] = UIProps;
      state["sources"] = sources;
      state["activeIndex"] = initialSource
        ? sources?.findIndex((src) => src === initialSource)
        : 0;
      state["show"] = true;
    },
    onChangeMultimediaIndex: (state, action: PayloadAction<number>) => {
      state["activeIndex"] = action.payload;
    },
    closeMultimedia: (state) => {
      state["sources"] = [];
      state["activeIndex"] = 0;
      state["show"] = false;
    },
  },
});

export const {openMultimedia, closeMultimedia, onChangeMultimediaIndex} =
  multimediaSlice.actions;
export const selectMultimediaState = (state: RootState) => state.multimedia;

export default multimediaSlice.reducer;
