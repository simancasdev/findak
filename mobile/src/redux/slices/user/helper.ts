import {PeopleFilter, UserModel} from "src/interfaces";

export const PREFIX = "user";

export const buildPeopleQuery = (
  filter: PeopleFilter,
  user: UserModel
): string => {
  let queryParams = "";
  const params: string[] = [];

  const {location} = user;
  const {country} = location;
  const {categories, searchType} = filter;

  if (!!searchType.length) params.push(`&searchType=${searchType}`);
  if (!!categories.length)
    params.push(
      `&categories=${categories.map((category) => category).join(",")}`
    );

  params.push(`&country_id=${country["id"]}`);
  params[0] = params[0].replace("&", "?");
  params.forEach((param) => (queryParams += param));

  return queryParams;
};

// TODO: PASS THIS FILTER TO THE BACKEND SIDE
export const sanitizeUsers = (
  list: UserModel[],
  userId: string
): UserModel[] => {
  return list.filter((user) => user["id"] !== userId);
};
