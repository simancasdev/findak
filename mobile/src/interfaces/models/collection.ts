import {BaseModel} from "./base";

export interface CollectionModel extends BaseModel {
  name: string;
  user_id: string;
}
