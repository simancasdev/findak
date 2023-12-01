import {
  BaseModel,
  CategoryModel,
  CityModel,
  CountryModel,
  FeedbackModel,
  OfferModel,
  ProductModel,
  SearchModel,
  SignUpStatus,
  SubscriptionModel,
  TradeModel,
  UserLevel,
} from ".";

export interface UserModel extends BaseModel {
  first_name: string;
  last_name: string;
  email: string;
  slogan: string;
  biography: string;
  avatar_url: string;
  level: UserLevel;
  phone_number: string;
  cover_url: string;
  password: string | undefined;
  sign_up_status: SignUpStatus;
  offers: OfferModel[];
  trades: TradeModel[];
  feedbacks: FeedbackModel[];
  searches: SearchModel[];
  subscription_id?: string;
  products: ProductModel[];
  subscription?: SubscriptionModel | null;
  location: {
    country: CountryModel;
    city: CityModel;
  };
  preferences: {
    search_alert: CategoryModel;
  };
  // TODO: We already are receiving this properties on the location object
  // we need to remove it from the backend payload
  country: CountryModel;
  city: CityModel;
}
