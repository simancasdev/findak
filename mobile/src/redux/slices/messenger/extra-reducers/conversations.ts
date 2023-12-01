import {MessengerSlice} from "../types";
import {addUnreadMessages} from "../helper";
import {getMyConversations} from "../thunks";
import {conversationOrganizer} from "./helper";
import {SET_API_STATUS} from "../../status.api";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";

export const CONVERSATIONS_REDUCER = (
  builder: ActionReducerMapBuilder<MessengerSlice>
) => {
  builder.addCase(getMyConversations.pending, (state) => {
    state["APIStatus"]["conversations"] = SET_API_STATUS("initial");
  });

  builder.addCase(getMyConversations.fulfilled, (state, action) => {
    const payload = action.payload;
    if (typeof payload === "undefined") return;

    const {conversations, authUserId} = payload;
    const {allUnReadMessages, conversationsUpdated} = addUnreadMessages(conversations, authUserId);
    const {tradeConversations, regularConversations, productConversations} = conversationOrganizer(conversationsUpdated);

    state["allUnReadMessages"] = allUnReadMessages;
    state["conversations"]["tradeType"] = tradeConversations;
    state["conversations"]["productType"] = productConversations;
    state["conversations"]["regularType"] = regularConversations;
    state["APIStatus"]["conversations"] = SET_API_STATUS("success");
  });

  builder.addCase(getMyConversations.rejected, (state) => {
    state["APIStatus"]["conversations"] = SET_API_STATUS("error");
  });
};
