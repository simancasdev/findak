import {BaseModel} from "..";
import {Schema} from "mongoose";
import {CategoryAttrs, CategoryDoc} from "../../interfaces";

export interface CategoryModel extends BaseModel<CategoryAttrs, CategoryDoc> {}

export const CategorySchema = new Schema<CategoryDoc>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["product", "service", "course"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, category) {
        category.id = category._id;
        delete category._id;
      },
    },
  }
);
