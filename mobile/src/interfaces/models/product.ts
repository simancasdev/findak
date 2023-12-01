import {
  UserModel,
  LikeModel,
  BaseModel,
  SearchType,
  CategoryModel,
  CollectionModel,
} from ".";

export interface ProductModel extends BaseModel {
  title: string;
  price: number;
  user: UserModel;
  user_id: string;
  discount: number;
  type: SearchType;
  likes: LikeModel[];
  description: string;
  category_id: string;
  collection_id: string;
  category: CategoryModel;
  references_url: string[];
  product_collection: CollectionModel;
}
