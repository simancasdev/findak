import {TValue} from "src/languages";
import {searchTypeIcon} from "src/utils";
import {SearchType} from "src/interfaces";

type SearchTypeBox = {image: any; label: TValue; searchType: SearchType};

export const searchTypes: SearchTypeBox[] = [
  {
    image: searchTypeIcon["product"],
    label: "product",
    searchType: "product",
  },
  {
    image: searchTypeIcon["service"],
    label: "service",
    searchType: "service",
  },
  {
    image: searchTypeIcon["course"],
    label: "course",
    searchType: "course",
  },
];
