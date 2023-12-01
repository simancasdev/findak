import {Document} from "mongoose";

export interface BaseAttrs {
  id?: string;
  _id?: string;
}

export interface BaseDoc extends Document {
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
