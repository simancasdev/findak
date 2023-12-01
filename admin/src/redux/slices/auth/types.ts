import {UserModel} from "interfaces";

export interface AuthSlice {
  user: UserModel;
  isLogged: boolean;
  authenticating: boolean;
}
