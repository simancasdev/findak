import {SearchModel} from "src/interfaces";

export const getBarProgress = (
  searchesInCategory: SearchModel[] = [],
  searchTotal: number
): number => {
  return (searchesInCategory.length * 100) / searchTotal;
};
