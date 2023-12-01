import {UserModel} from "../../models";

export type UpdateUserPayload = {
  user: Partial<UserModel>;
  redirectTo?: string;
  callback?: () => void;
};
