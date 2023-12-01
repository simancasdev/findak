import {APIStatus, ReportModel} from "src/interfaces";

export interface ReportSlice {
  myReports: ReportModel[];
  APIStatus: {
    myReports: APIStatus;
  };
}
