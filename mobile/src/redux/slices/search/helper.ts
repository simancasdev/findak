import {ExploreFilter, SearchModel, UserModel} from "src/interfaces";

export const PREFIX = "search";

export const buildExploreQuery = (
  filter: ExploreFilter,
  user: UserModel
): string => {
  let queryParams = "";
  const params: string[] = [];

  const {location} = user;
  const {country} = location;
  const {categories, cities, searchType, query} = filter;

  if (!!query.length) params.push(`&query=${query}`);
  if (!!searchType.length) params.push(`&type=${searchType}`);
  if (!!categories.length) params.push(`&categories=${categories.map((category) => category).join(",")}`);
  if (!!cities.length) params.push(`&cities=${cities.map((city) => city).join(",")}`);

  params.push(`&country_id=${country["id"]}`);
  params[0] = params[0].replace("&", "?");
  params.forEach((param) => (queryParams += param));

  return queryParams;
};

// TODO: PASS THIS FILTER TO THE BACKEND SIDE
export const sanitizeSearches = (
  list: SearchModel[],
  userId: string
): SearchModel[] => {
  return list.filter(
    (search) =>
      search["status"] === "created" && search["user"]["id"] !== userId
  );
};
