import {CategorySlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_LIST} from "../../initial-states";

export const initialState: CategorySlice = {
  form: {
    id: undefined,
  },
  categories: INITIAL_LIST,
  APIStatus: {
    categories: SET_API_STATUS("initial"),
  },
};
