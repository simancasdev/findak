import {PREFIX} from "./helper";
import {api} from "src/services";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {NewReportPayload, ReportModel} from "src/interfaces";
import {showAlert, toggleButtonLoader, CREATE_REPORT_LOADER} from "..";

export const createReport = createAsyncThunk(
  `${PREFIX}/create`,
  async (
    payload: NewReportPayload & {onSuccess?: () => void},
    thunkAPI
  ): Promise<ReportModel | undefined> => {
    thunkAPI.dispatch(toggleButtonLoader(CREATE_REPORT_LOADER));
    try {
      const report = await api.Post<ReportModel>("/reports", payload);
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          message: "your_report_has_been_sent_successfully",
        })
      );
      if (typeof payload["onSuccess"] !== "undefined") payload["onSuccess"]();

      return report;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(CREATE_REPORT_LOADER));
    }
  }
);

export const getMyReports = createAsyncThunk(
  `${PREFIX}/get/mine`,
  async (userId: string, thunkAPI): Promise<ReportModel[] | undefined> => {
    try {
      return await api.Get<ReportModel[]>(`/reports/of/${userId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);
