import {SearchType} from "../../models";
import {Asset} from "react-native-image-picker";

export type NewSearchPayload = {
  budget: number;
  description: string;
  type: SearchType;
  category_id: string;
  references_url: (Asset | string)[];
  accept_prices_higher_than_my_budget: boolean;
};
