import {Asset} from "react-native-image-picker";
import {INITIAL_SEARCH} from "src/redux/initial-states";
import {
  UserModel,
  SnapPoints,
  SearchModel,
  CategoryModel,
  NewSearchPayload,
} from "src/interfaces";

export const FINISH_STEP_SNAP_POINTS: {[index: number]: SnapPoints} = {
  0: ["50%", "55%"],
  1: ["80%", "85%"],
  2: ["65%", "70%"],
  3: ["85%", "90%"],
};

export const buildMockSearch = (
  values: NewSearchPayload,
  user: UserModel,
  categories: CategoryModel[]
): SearchModel => {
  if (!values["category_id"].length) return INITIAL_SEARCH;
  const searchPreview: Partial<SearchModel> = {
    user,
    budget: values["budget"],
    description: values["description"],
    // prettier-ignore
    references_url: values["references_url"].map((asset) => (asset as Asset).uri) as string[],
    // prettier-ignore
    category: categories.find((category) => category["id"] === values["category_id"]) as CategoryModel,
  };
  return searchPreview as SearchModel;
};
