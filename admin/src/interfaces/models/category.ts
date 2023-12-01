import {BaseModel, SearchType} from ".";

export interface CategoryModel extends BaseModel {
  name: string;
  type: SearchType;
}
