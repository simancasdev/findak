import {SearchType} from "interfaces/models";

export type CreateCategoryPayload = {
  name: string;
  type: SearchType;
};
