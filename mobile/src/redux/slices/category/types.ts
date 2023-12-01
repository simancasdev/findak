import {APIStatus, CategoryModel, List} from "src/interfaces";

export interface CategorySlice {
  categories: List<CategoryModel[]>;
  APIStatus: {
    categories: APIStatus;
  };
}
