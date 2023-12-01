import {PREFIX} from "./helper";
import {initialState} from "./initial-state";
import {INITIAL_USER} from "src/redux/initial-states";
import {PeopleFilter, RootState} from "src/interfaces";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {USERS_REDUCER, USER_REDUCER} from "./extra-reducers";

export const userSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    onChangePeopleFilter: (
      state,
      action: PayloadAction<Partial<PeopleFilter>>
    ) => {
      state["buildingFilters"] = {
        ...state["buildingFilters"],
        ...action.payload,
      };
    },
    resetProfile: (state) => {
      state["user"] = INITIAL_USER;
    },
  },
  extraReducers: (builder) => {
    USERS_REDUCER(builder);
    USER_REDUCER(builder);
  },
});

export * from "./thunks";
export const selectUserState = (state: RootState) => state.user;
export const {onChangePeopleFilter, resetProfile} = userSlice.actions;

export default userSlice.reducer;
