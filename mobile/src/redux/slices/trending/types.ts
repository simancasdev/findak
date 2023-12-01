import {APIStatus, CategoryModel, List, SearchModel} from "src/interfaces";

export type SearchesByCategory = {
  searches: SearchModel[];
  category: CategoryModel;
};

export interface SearchSlice {
  trending: List<SearchModel[]>;
  statistics: SearchesByCategory[];
  trendingByCategory: List<SearchModel[]>;
  APIStatus: {
    trending: APIStatus;
    trendingByCategory: APIStatus;
  };
}
