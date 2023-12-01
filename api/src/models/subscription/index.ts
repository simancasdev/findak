import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_SUBSCRIPTION_VIRTUALS} from "./virtuals";
import {SubscriptionAttrs, SubscriptionDoc} from "../../interfaces";

export interface SubscriptionModel
  extends BaseModel<SubscriptionAttrs, SubscriptionDoc> {}

export const SubscriptionSchema = new Schema<SubscriptionDoc>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    expired: {
      type: Boolean,
      default: false,
    },
    expireAt: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, subscription) {
        subscription.id = subscription._id;
      },
    },
  }
);

SET_SUBSCRIPTION_VIRTUALS(SubscriptionSchema);
