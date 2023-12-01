import {BottomSheetSlice} from "./types";
import {BottomSheetLayer, SnapPoint} from "src/interfaces";

export const initialSnapPoints: {
  [L in BottomSheetLayer]: [SnapPoint, SnapPoint];
} = {
  main: ["1%", "50%"],
  optional: ["1%", "25%"],
};

export const initialState: BottomSheetSlice = {
  main: {
    show: false,
    view: undefined,
    snapIndex: 0,
    enablePanDownToClose: true,
    snapPoints: initialSnapPoints["main"],
    onBackdrop: undefined,
    showBackdrop: true,
  },
  optional: {
    show: false,
    view: undefined,
    snapIndex: 0,
    enablePanDownToClose: true,
    snapPoints: initialSnapPoints["optional"],
    onBackdrop: undefined,
    showBackdrop: true,
  },
};
