import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_TRADE_VIRTUALS} from "./virtuals";
import {TradeAttrs, TradeDoc} from "../../interfaces";

export interface TradeModel extends BaseModel<TradeAttrs, TradeDoc> {}

export const TradeSchema = new Schema<TradeDoc>(
  {
    seller_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    buyer_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    conversation_id: {
      type: Schema.Types.ObjectId,
      ref: "conversations",
      required: true,
    },
    rejected_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    offer_id: {
      type: Schema.Types.ObjectId,
      ref: "offers",
      required: true,
    },
    search_id: {
      type: Schema.Types.ObjectId,
      ref: "searches",
      required: true,
    },
    status: {
      type: String,
      enum: ["in_progress", "completed", "rejected"],
      default: "in_progress",
    },
    identifier: {
      type: String,
      required: true,
    },
    approved_by_seller_at: {
      type: Date,
    },
    approved_by_buyer_at: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, trade) {
        trade.id = trade._id;
        delete trade._id;
        delete trade.seller_id;
        delete trade.search_id;
        delete trade.offer_id;
        delete trade.buyer_id;
      },
    },
  }
);

SET_TRADE_VIRTUALS(TradeSchema);
