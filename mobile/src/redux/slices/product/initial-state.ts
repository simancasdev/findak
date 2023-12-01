import {ProductSlice} from "./types";
import {SET_API_STATUS} from "../status.api";
import {INITIAL_PRODUCT} from "src/redux/initial-states";

export const initialState: ProductSlice = {
  product: INITIAL_PRODUCT,
  APIStatus: {
    product: SET_API_STATUS("initial"),
  },
};
