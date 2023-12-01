import {BaseModel, UserModel} from ".";

export interface SearchCommentModel extends BaseModel {
  comment: string;
  search_id: string;
  user: UserModel;
}
