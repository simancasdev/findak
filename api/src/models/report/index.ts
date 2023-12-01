import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_REPORT_VIRTUALS} from "./virtuals";
import {ReportAttrs, ReportDoc} from "../../interfaces";

export interface ReportModel extends BaseModel<ReportAttrs, ReportDoc> {}

export const ReportSchema = new Schema<ReportDoc>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    description: {
      type: String,
    },
    reason: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, report) {
        report.id = report._id;
      },
    },
  }
);

SET_REPORT_VIRTUALS(ReportSchema);
