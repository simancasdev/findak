import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_SEARCH_COMMENT_VIRTUALS} from "./virtuals";
import {SearchCommentAttrs, SearchCommentDoc} from "../../interfaces";

export interface SearchCommentModel
  extends BaseModel<SearchCommentAttrs, SearchCommentDoc> {}

export const SearchCommentSchema = new Schema<SearchCommentDoc>(
  {
    search_id: {
      type: Schema.Types.ObjectId,
      ref: "searches",
      required: true,
    },
    comment: {
      type: String,
      require: true,
    },
    by: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, search_comment) {
        search_comment.id = search_comment._id;
        delete search_comment._id;
        delete search_comment.by;
      },
    },
  }
);

SET_SEARCH_COMMENT_VIRTUALS(SearchCommentSchema);
