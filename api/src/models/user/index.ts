import {BaseModel} from "..";
import {Schema} from "mongoose";
import {SET_PRE_USER} from "./pre-schema";
import {SET_USER_VIRTUALS} from "./virtuals";
import {UserAttrs, UserDoc} from "../../interfaces";

export interface UserModel extends BaseModel<UserAttrs, UserDoc> {}

export const UserSchema = new Schema<UserDoc>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    biography: {
      type: String,
    },
    slogan: {
      type: String,
    },
    avatar_url: {
      type: String,
    },
    cover_url: {
      type: String,
    },
    subscription_id: {
      type: Schema.Types.ObjectId,
      ref: "subscriptions",
    },
    level: {
      type: String,
      enum: ["new", "beginner", "experienced", "professional"],
      default: "new",
    },
    sign_up_status: {
      type: String,
      default: "otp_verification",
      enum: [
        "set_alert",
        "set_location",
        "otp_verification",
        "complete_profile",
      ],
    },
    phone_number: {
      type: String,
    },
    location: {
      _id: false,
      city_id: {
        type: Schema.Types.ObjectId,
        ref: "cities",
      },
      country_id: {
        type: Schema.Types.ObjectId,
        ref: "countries",
      },
    },
    preferences: {
      _id: false,
      search_alert: {
        _id: false,
        type: {
          type: String,
          enum: ["product", "service"],
        },
        category_id: {
          type: Schema.Types.ObjectId,
          ref: "categories",
        },
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform(_, user) {
        user.id = user._id;
        user.location = {country: user.country, city: user.city};
        user.preferences = {search_alert: user.preferences_alert_category};

        if (user.trades_as_buyer && user.trades_as_seller) {
          user.trades = [...user.trades_as_buyer, ...user.trades_as_seller];
        } else {
          user.trades = [];
        }

        delete user.password;
        delete user.trades_as_buyer;
        delete user.trades_as_seller;
        delete user.preferences_alert_category;
      },
    },
  }
);

SET_PRE_USER(UserSchema);
SET_USER_VIRTUALS(UserSchema);
