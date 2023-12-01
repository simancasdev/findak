import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_FEEDBACK_VIRTUALS} from "./virtuals";
import {FeedbackAttrs, FeedbackDoc} from "../../interfaces";

export interface FeedbackModel extends BaseModel<FeedbackAttrs, FeedbackDoc> {}

export const FeedbackSchema = new Schema<FeedbackDoc>(
  {
    to: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    feedback: {
      type: String,
      default: "comment_not_provided",
    },
    stars: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, feedback) {
        feedback.id = feedback._id;
        feedback.from = feedback.sender;
        feedback.to = feedback.receiver;
        delete feedback._id;
        delete feedback.sender;
        delete feedback.receiver;
      },
    },
  }
);

SET_FEEDBACK_VIRTUALS(FeedbackSchema);
