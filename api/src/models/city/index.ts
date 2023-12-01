import {BaseModel} from "..";
import {Schema} from "mongoose";
import {CityAttrs, CityDoc} from "../../interfaces";

export interface CityModel extends BaseModel<CityAttrs, CityDoc> {}

export const CitySchema = new Schema<CityDoc>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    country_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, city) {
        city.id = city._id;
        delete city._id;
      },
    },
  }
);
