import {NavigatorSlice} from "./types";

export const initialState: NavigatorSlice = {
  to: undefined,
  params: undefined,
  onNavigated: undefined,
  currentView: "Landing",
  previousView: "Landing",
  viewFromDrawerNavigation: undefined,
};
