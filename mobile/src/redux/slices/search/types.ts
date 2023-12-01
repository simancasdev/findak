import {APIStatus, ExploreFilter, List, SearchModel} from "src/interfaces";

export interface SearchSlice {
  search: SearchModel;
  alerts: List<SearchModel[]>;
  explore: List<SearchModel[]>;
  searches: List<SearchModel[]>;
  filtersApplied: ExploreFilter;
  buildingFilters: ExploreFilter;
  APIStatus: {
    alerts: APIStatus;
    search: APIStatus;
    explore: APIStatus;
    searches: APIStatus;
  };
}
