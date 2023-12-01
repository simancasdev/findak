import {SET_API_STATUS} from "../status.api";
import {ReportSlice} from "./types";

export const initialState: ReportSlice = {
  myReports: [],
  APIStatus: {
    myReports: SET_API_STATUS("initial"),
  },
};
