import {BASE_STATE} from "./base.state";
import {CategoryModel} from "../../interfaces";

export const INITIAL_CATEGORY: CategoryModel = {
  ...BASE_STATE,
  name: "",
  type: "product",
};
