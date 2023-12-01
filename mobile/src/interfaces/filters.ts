import {SearchType} from "./models";
import {AutoComplete} from "./helpers";

export type ExploreFilter = {
  query: string;
  cities: string[];
  categories: string[];
  searchType: AutoComplete<SearchType>;
};

export type PeopleFilter = {
  categories: string[];
  searchType: SearchType;
};
