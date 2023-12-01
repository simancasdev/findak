import {SearchType} from "../../models";

export type SetAlertPayload = {
  category_id: string;
  type: SearchType;
};
