import {SearchSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_LIST} from "../../initial-states";

export const initialState: SearchSlice = {
  trendingByCategory: INITIAL_LIST,
  trending: INITIAL_LIST,
  statistics: [],
  APIStatus: {
    trendingByCategory: SET_API_STATUS("initial"),
    trending: SET_API_STATUS("initial"),
  },
};
