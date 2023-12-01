import {SearchModel} from "src/interfaces";

export const searchesFiltered = (
  data: SearchModel[],
  query: string
): SearchModel[] => {
  const regex = new RegExp(query, "i");
  return data.filter(({description}) => description.match(regex));
};
