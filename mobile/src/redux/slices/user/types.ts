import {APIStatus, List, PeopleFilter, UserModel} from "src/interfaces";

export interface UserSlice {
  user: UserModel;
  people: List<UserModel[]>;
  buildingFilters: PeopleFilter;
  APIStatus: {
    user: APIStatus;
    people: APIStatus;
  };
}
