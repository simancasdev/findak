import {BASE_SNAP_POINTS, PREFIX} from "./helper";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {BottomSheetLayer, SnapPoints} from "src/interfaces";
import {initialSnapPoints, initialState} from "./initial-state";
import {RootState, OpenSheetPayload, SnapIndex} from "src/interfaces";

export const bottomSheetSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    openSheet: (state, action: PayloadAction<OpenSheetPayload>) => {
      const {
        view,
        snapPoints,
        onBackdrop,
        layer = "main",
        showBackdrop = true,
        enablePanDownToClose = true,
      } = action.payload;

      state[layer]["snapPoints"] = snapPoints ?? BASE_SNAP_POINTS;
      state[layer]["view"] = view;
      state[layer]["show"] = true;
      state[layer]["onBackdrop"] = onBackdrop;
      state[layer]["showBackdrop"] = showBackdrop;
      state[layer]["enablePanDownToClose"] = enablePanDownToClose;
      state[layer]["snapIndex"] = 1;
    },
    closeSheet: (
      state,
      action: PayloadAction<BottomSheetLayer | undefined>
    ) => {
      const layer = action.payload ?? "main";
      state[layer]["snapIndex"] = 0;
      state[layer]["snapPoints"] = initialSnapPoints[layer];
      state[layer]["enablePanDownToClose"] = true;
      state[layer]["onBackdrop"] = undefined;
      state[layer]["showBackdrop"] = true;
      state[layer]["show"] = false;

      if (layer === "optional") {
        state[layer].view = undefined;
      }
    },
    setSnapIndex: (
      state,
      action: PayloadAction<{snapIndex: SnapIndex; layer: BottomSheetLayer}>
    ) => {
      const {layer, snapIndex} = action.payload;
      state[layer]["snapIndex"] = snapIndex;
    },
    setSnapPoints: (state, action: PayloadAction<SnapPoints>) => {
      state["main"]["snapPoints"] = action.payload;
    },
    setSheetBackdrop: (state, action: PayloadAction<() => void>) => {
      state["main"]["onBackdrop"] = action.payload;
    },
    setSheetView: (
      state,
      action: PayloadAction<{
        view: JSX.Element | undefined;
        layer: BottomSheetLayer;
      }>
    ) => {
      const {layer, view} = action.payload;
      state[layer]["view"] = view;
    },
  },
});

export const {
  openSheet,
  closeSheet,
  setSnapIndex,
  setSheetView,
  setSnapPoints,
  setSheetBackdrop,
} = bottomSheetSlice.actions;
export const selectBottomSheetState = (state: RootState) => state.bottomSheet;

export default bottomSheetSlice.reducer;
