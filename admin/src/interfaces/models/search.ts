import {
  BaseModel,
  UserModel,
  CityModel,
  SearchType,
  OfferModel,
  CountryModel,
  SearchStatus,
  CategoryModel,
  ProductStatus,
  SearchCommentModel,
} from ".";

export interface SearchModel extends BaseModel {
  budget: number;
  user: UserModel;
  type: SearchType;
  description: string;
  offers: OfferModel[];
  status: SearchStatus;
  category: CategoryModel;
  references_url?: string[];
  product_status: ProductStatus;
  comments: SearchCommentModel[];
  accept_prices_higher_than_my_budget: boolean;
  location: {
    country: CountryModel;
    city: CityModel;
  };
}
