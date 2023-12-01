import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_COLLECTION_VIRTUALS} from "./virtuals";
import {CollectionAttrs, CollectionDoc} from "../../interfaces";

export interface CollectionModel
  extends BaseModel<CollectionAttrs, CollectionDoc> {}

export const CollectionSchema = new Schema<CollectionDoc>(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, collection) {
        collection.id = collection._id;
      },
    },
  }
);

SET_COLLECTION_VIRTUALS(CollectionSchema);
