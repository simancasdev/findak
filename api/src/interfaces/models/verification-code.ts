import {BaseAttrs, BaseDoc, CodeType} from ".";

export interface VerificationCodeAttrs extends BaseAttrs {
  code: string;
  type: CodeType;
  verified?: boolean;
  phone_number: string;
}

export interface VerificationCodeDoc extends BaseDoc {
  code: string;
  type: CodeType;
  verified?: boolean;
  phone_number: string;
}
