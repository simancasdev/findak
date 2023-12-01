import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./initial-state";
import {
  MESSAGES_REDUCER,
  SEND_MESSAGE_REDUCER,
  CONVERSATIONS_REDUCER,
} from "./extra-reducers";

export const messengerSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    MESSAGES_REDUCER(builder);
    SEND_MESSAGE_REDUCER(builder);
    CONVERSATIONS_REDUCER(builder);
  },
});

export * from "./thunks";
export const {} = messengerSlice.actions;
export const selectMessengerState = (state: RootState) => state.messenger;

export default messengerSlice.reducer;
