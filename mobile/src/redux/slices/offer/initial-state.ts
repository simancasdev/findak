import {OfferSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_OFFER} from "src/redux/initial-states";

export const initialState: OfferSlice = {
  offer: INITIAL_OFFER,
  received: {
    waiting: [],
    accepted: [],
    declined: [],
  },
  sent: {
    waiting: [],
    accepted: [],
    declined: [],
  },
  APIStatus: {
    sent: SET_API_STATUS("initial"),
    offer: SET_API_STATUS("initial"),
    received: SET_API_STATUS("initial"),
  },
};
