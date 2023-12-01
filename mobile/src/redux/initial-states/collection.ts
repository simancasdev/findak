import {BASE_STATE} from "./base.state";
import {CollectionModel} from "../../interfaces";

export const INITIAL_COLLECTION: CollectionModel = {
  ...BASE_STATE,
  name: "",
  user_id: "",
};
