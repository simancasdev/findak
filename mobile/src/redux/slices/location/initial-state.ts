import {LocationSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_LIST} from "../../initial-states";

export const initialState: LocationSlice = {
  cities: INITIAL_LIST,
  countries: INITIAL_LIST,
  APIStatus: {
    countries: SET_API_STATUS("initial"),
    cities: SET_API_STATUS("initial"),
  },
};
