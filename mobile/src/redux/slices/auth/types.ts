import {UserModel} from "src/interfaces";

export interface AuthSlice {
  user: UserModel;
  isLogged: boolean;
  authUserId: string;
  authenticating: boolean;
  isAuthUserPremium: boolean;
}
