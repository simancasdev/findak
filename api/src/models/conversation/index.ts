import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_CONVERSATION_VIRTUALS} from "./virtuals";
import {ConversationAttrs, ConversationDoc} from "../../interfaces";

export interface ConversationModel
  extends BaseModel<ConversationAttrs, ConversationDoc> {}

export const ConversationSchema = new Schema<ConversationDoc>(
  {
    type: {
      type: String,
      required: true,
      enum: ["trade", "regular", "product"],
    },
    sender_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
    receiver_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, conversation) {
        conversation.id = conversation._id;
        delete conversation._id;
        delete conversation.sender_id;
        delete conversation.receiver_id;
      },
    },
  }
);

SET_CONVERSATION_VIRTUALS(ConversationSchema);
