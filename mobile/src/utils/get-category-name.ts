import {TValue} from "src/languages";
import {CategoryModel} from "../interfaces";

export const getCategoryName = (
  list: CategoryModel[] = [],
  categoryId: string
): TValue => {
  return list.find((location) => location.id === categoryId)?.name!;
};
