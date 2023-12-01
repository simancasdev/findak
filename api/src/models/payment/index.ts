import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_PAYMENT_VIRTUALS} from "./virtuals";
import {PaymentAttrs, PaymentDoc} from "../../interfaces";

export interface PaymentModel extends BaseModel<PaymentAttrs, PaymentDoc> {}

export const PaymentSchema = new Schema<PaymentDoc>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    type: {
      type: String,
      enum: ["premium"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, Payment) {
        Payment.id = Payment._id;
      },
    },
  }
);

SET_PAYMENT_VIRTUALS(PaymentSchema);
