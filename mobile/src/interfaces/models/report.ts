import {BaseModel, UserModel} from ".";

export interface ReportModel extends BaseModel {
  reason: string;
  user: UserModel;
  description: string;
}
