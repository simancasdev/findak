import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc} from ".";
import {UserModel} from "../../models";

export interface MessageAttrs extends BaseAttrs {
  user_id: UserModel;
  message: string;
  readed: boolean;
  conversation_id: Schema.Types.ObjectId;
}

export interface MessageDoc extends BaseDoc {
  user_id: UserModel;
  message: string;
  readed: boolean;
  conversation_id: Schema.Types.ObjectId;
}
