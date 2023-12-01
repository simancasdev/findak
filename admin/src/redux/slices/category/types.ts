import {APIStatus, CategoryModel, List} from "interfaces";

export interface CategorySlice {
  form: Partial<CategoryModel>;
  categories: List<CategoryModel[]>;
  APIStatus: {
    categories: APIStatus;
  };
}
