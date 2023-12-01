import {BaseModel} from "..";
import {Schema} from "mongoose";
import {VerificationCodeAttrs, VerificationCodeDoc} from "../../interfaces";

export interface VerificationCodeModel
  extends BaseModel<VerificationCodeAttrs, VerificationCodeDoc> {}

export const VerificationCodeSchema = new Schema<VerificationCodeDoc>(
  {
    code: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["registration", "recover_password"],
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, verification_code) {
        verification_code.id = verification_code._id;
        delete verification_code._id;
      },
    },
  }
);
