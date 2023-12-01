import {APIStatus, List, UserModel} from "interfaces";

export interface CategorySlice {
  users: List<UserModel[]>;
  APIStatus: {
    users: APIStatus;
  };
}
