import {SearchesByCategory} from "../types";
import {CategoryModel, SearchModel} from "src/interfaces";

export const getStatisticsShape = (
  data: SearchModel[]
): SearchesByCategory[] => {
  const categoryIds: string[] = [];
  const all: SearchesByCategory[] = [];
  const uniqueCategories: CategoryModel[] = [];

  for (let i = 0; i < data.length; i++) {
    const categoryId: string = data[i]["category"]["id"];
    if (!categoryIds.includes(categoryId)) {
      categoryIds.push(data[i]["category"]["id"]);
      uniqueCategories.push(data[i]["category"]);
    }
  }

  for (const category of uniqueCategories) {
    const searchesByCategory = data.filter((search) => {
      return search["category"]["id"] === category["id"];
    });
    const block: SearchesByCategory = {
      category: category,
      searches: searchesByCategory,
    };
    all.push(block);
  }

  return all;
};
