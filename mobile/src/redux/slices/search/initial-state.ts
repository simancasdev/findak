import {SearchSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {
  INITIAL_LIST,
  INITIAL_SEARCH,
  INITIAL_SEARCHES_FILTER,
} from "../../initial-states";

export const initialState: SearchSlice = {
  searches: INITIAL_LIST,
  alerts: INITIAL_LIST,
  explore: INITIAL_LIST,
  search: INITIAL_SEARCH,
  buildingFilters: INITIAL_SEARCHES_FILTER,
  filtersApplied: INITIAL_SEARCHES_FILTER,
  APIStatus: {
    searches: SET_API_STATUS("initial"),
    alerts: SET_API_STATUS("initial"),
    search: SET_API_STATUS("initial"),
    explore: SET_API_STATUS("initial"),
  },
};
