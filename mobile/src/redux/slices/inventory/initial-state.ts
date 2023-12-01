import {InventorySlice} from "./types";
import {SET_API_STATUS} from "../status.api";

export const initialState: InventorySlice = {
  myProducts: [],
  myCollection: [],
  productsByCollection: [],
  APIStatus: {
    myProducts: SET_API_STATUS("initial"),
    myCollection: SET_API_STATUS("initial"),
  },
};
