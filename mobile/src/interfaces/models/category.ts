import {TValue} from "src/languages";
import {BaseModel, SearchType} from ".";

export interface CategoryModel extends BaseModel {
  name: TValue;
  type: SearchType;
}
