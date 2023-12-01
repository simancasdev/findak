import {initialState} from "./initial-state";
import {DRAWER_ROUTES, PREFIX} from "./helper";
import {RootStackParamList, RootState} from "src/interfaces";
import {PayloadAction, createSlice, current} from "@reduxjs/toolkit";

export const navigatorSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    go: (
      state,
      action: PayloadAction<{
        onNavigated?: () => void;
        route: keyof RootStackParamList;
        params?: RootStackParamList[keyof RootStackParamList];
      }>
    ) => {
      const {route, params, onNavigated} = action.payload;
      state["to"] = route;
      state["params"] = params;
      state["onNavigated"] = onNavigated;
    },
    cleanNavigator: (state) => {
      state["to"] = undefined;
      state["params"] = undefined;
    },
    onChangeCurrentView: (
      state,
      action: PayloadAction<keyof RootStackParamList>
    ) => {
      const {currentView: previousView} = current(state);
      const currentView = action.payload;
      state["currentView"] = currentView;
      state["previousView"] = previousView;
      state["viewFromDrawerNavigation"] = DRAWER_ROUTES.includes(currentView)
        ? currentView
        : undefined;
    },
  },
});

export const {go, cleanNavigator, onChangeCurrentView} = navigatorSlice.actions;
export const selectNavigatorState = (state: RootState) => state.navigator;

export default navigatorSlice.reducer;
