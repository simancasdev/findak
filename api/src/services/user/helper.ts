import {UserQuery, UserParams} from "../../interfaces";

export const buildUserQuery = ({
  categories,
  searchType,
  country_id,
}: {
  [K in UserParams]: string;
}): UserQuery => {
  const queryObj: UserQuery = {};
  
  if (country_id) Object.assign(queryObj, {"location.country_id": country_id});
  if (searchType) Object.assign(queryObj, {"preferences.search_alert.type": searchType});
  if (categories) Object.assign(queryObj, {"preferences.search_alert.category_id": {$in: categories.split(",")}});

  return queryObj;
};
