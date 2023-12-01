import {BaseModel} from "..";
import {Schema} from "mongoose";
import {CountryAttrs, CountryDoc} from "../../interfaces";

export interface CountryModel extends BaseModel<CountryAttrs, CountryDoc> {}

export const CountrySchema = new Schema<CountryDoc>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, country) {
        country.id = country._id;
        delete country._id;
      },
    },
  }
);
