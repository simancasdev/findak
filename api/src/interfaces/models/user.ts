import {Schema} from "mongoose";
import {BaseAttrs, BaseDoc, SearchType, SignUpStatus, UserLevel} from ".";

export interface UserAttrs extends BaseAttrs {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  biography: string;
  slogan: string;
  avatar_url: string;
  level: UserLevel;
  phone_number: string;
  cover_url: string;
  sign_up_status: SignUpStatus;
  subscription_id: Schema.Types.ObjectId;
  location: {
    country_id: Schema.Types.ObjectId;
    city_id: Schema.Types.ObjectId;
  };
  preferences: {
    search_alert: {
      type: SearchType;
      category_id: Schema.Types.ObjectId;
    };
  };
}

export interface UserDoc extends BaseDoc {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  biography: string;
  slogan: string;
  avatar_url: string;
  level: UserLevel;
  phone_number: string;
  cover_url: string;
  sign_up_status: SignUpStatus;
  subscription_id: Schema.Types.ObjectId;
  location: {
    country_id: Schema.Types.ObjectId;
    city_id: Schema.Types.ObjectId;
  };
  preferences: {
    search_alert: {
      type: SearchType;
      category_id: Schema.Types.ObjectId;
    };
  };
}
