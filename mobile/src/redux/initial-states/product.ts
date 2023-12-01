import {INITIAL_USER} from "./user";
import {BASE_STATE} from "./base.state";
import {INITIAL_CATEGORY} from "./category";
import {ProductModel} from "../../interfaces";
import {INITIAL_COLLECTION} from "./collection";

export const INITIAL_PRODUCT: ProductModel = {
  ...BASE_STATE,
  title: "",
  price: 0,
  discount: 0,
  type: "product",
  description: "",
  references_url: [],
  user_id: "",
  category_id: "",
  collection_id: "",
  likes: [],
  user: INITIAL_USER,
  category: INITIAL_CATEGORY,
  product_collection: INITIAL_COLLECTION,
};
