import {UserSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {
  INITIAL_LIST,
  INITIAL_USER,
  INITIAL_PEOPLE_FILTER,
} from "../../initial-states";

export const initialState: UserSlice = {
  user: INITIAL_USER,
  people: INITIAL_LIST,
  buildingFilters: INITIAL_PEOPLE_FILTER,
  APIStatus: {
    user: SET_API_STATUS("initial"),
    people: SET_API_STATUS("initial"),
  },
};
