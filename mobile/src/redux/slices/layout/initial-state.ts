import {LayoutSlice} from "./types";

export const initialState: LayoutSlice = {
  drawerOpened: false,
  statusBarColor: undefined,
  cofetti: {
    fired: false,
  },
  edges: {
    topColor: undefined,
    bottomColor: undefined,
  },
};
