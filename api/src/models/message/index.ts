import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_MESSAGE_VIRTUALS} from "./virtuals";
import {MessageAttrs, MessageDoc} from "../../interfaces";

export interface MessageModel extends BaseModel<MessageAttrs, MessageDoc> {}

export const MessageSchema = new Schema<MessageDoc>(
  {
    conversation_id: {
      type: Schema.Types.ObjectId,
      ref: "conversations",
      required: true,
    },
    readed: {
      type: Boolean,
      default: false,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, message) {
        message.id = message._id;
        delete message._id;
      },
    },
  }
);

SET_MESSAGE_VIRTUALS(MessageSchema);
