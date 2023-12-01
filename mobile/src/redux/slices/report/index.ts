import {PREFIX} from "./helper";
import {RootState} from "src/interfaces";
import {SET_API_STATUS} from "../status.api";
import {initialState} from "./initial-state";
import {createSlice} from "@reduxjs/toolkit";
import {createReport, getMyReports} from "./thunks";

export const reportSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReport.fulfilled, (state, action) => {
      const report = action.payload;
      if (typeof report === "undefined") return;

      state["myReports"] = [...state["myReports"], report];
    });

    builder.addCase(getMyReports.fulfilled, (state, action) => {
      const reports = action.payload;
      if (typeof reports === "undefined") {
        state["APIStatus"]["myReports"] = SET_API_STATUS("error");
        return;
      }

      state["myReports"] = reports;
      state["APIStatus"]["myReports"] = SET_API_STATUS("success");
    });
  },
});

export * from "./thunks";
export const {} = reportSlice.actions;
export const selectReportState = (state: RootState) => state.report;

export default reportSlice.reducer;
