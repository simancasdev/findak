import {CategorySlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_LIST} from "../../initial-states";

export const initialState: CategorySlice = {
  users: INITIAL_LIST,
  APIStatus: {
    users: SET_API_STATUS("initial"),
  },
};
