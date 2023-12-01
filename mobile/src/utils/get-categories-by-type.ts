import {CategoryModel, SearchType} from "../interfaces";

export const getCategoriesByType = (
  categories: CategoryModel[],
  type: SearchType
): CategoryModel[] => {
  return categories?.filter((category) => category.type === type);
};
