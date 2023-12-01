import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_OFFER_VIRTUALS} from "./virtuals";
import {OfferAttrs, OfferDoc} from "../../interfaces";

export interface OfferModel extends BaseModel<OfferAttrs, OfferDoc> {}

export const OfferSchema = new Schema<OfferDoc>(
  {
    sender_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    receiver_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    search_id: {
      type: Schema.Types.ObjectId,
      ref: "searches",
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
      default: "waiting",
      enum: [
        "waiting",
        "declined",
        "accepted",
        "trade_succeed",
        "rejected_in_trade",
      ],
    },
    references_url: {
      type: [String],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, offer) {
        offer.id = offer._id;
        delete offer._id;
        delete offer.sender_id;
        delete offer.receiver_id;
        delete offer.search_id;
      },
    },
  }
);

SET_OFFER_VIRTUALS(OfferSchema);
