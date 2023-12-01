import {TValue} from "src/languages";
import {SearchType} from "src/interfaces";
import {searchTypeIcon} from "./search-type-icon";

type ExploreShortcut = {image: any; label: TValue; searchType: SearchType};

export const searchTypesOptions: ExploreShortcut[] = [
  {
    image: searchTypeIcon["product"],
    label: "products",
    searchType: "product",
  },
  {
    image: searchTypeIcon["service"],
    label: "services",
    searchType: "service",
  },
  {
    image: searchTypeIcon["course"],
    label: "courses",
    searchType: "course",
  },
];
