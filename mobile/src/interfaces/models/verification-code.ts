import {BaseModel, CodeType} from ".";

export interface VerificationCodeModel extends BaseModel {
  code: string;
  type: CodeType;
  verified?: boolean;
  phone_number: string;
}
