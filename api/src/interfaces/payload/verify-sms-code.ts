import {CodeType} from "../models";

export type VerifySMSCodePayload = {
  code: string;
  user_id: string;
  type: CodeType;
  phone_number: string;
};
