import {SearchQuery, SearchParams} from "../../interfaces";

export const buildSearchQuery = ({
  type,
  query,
  cities,
  user_id,
  country_id,
  createdAt,
  categories,
}: {
  [K in SearchParams]: string;
}): SearchQuery => {
  const queryObj: SearchQuery = {};

  if (type) Object.assign(queryObj, {type});
  if (user_id) Object.assign(queryObj, {user_id});
  if (country_id) Object.assign(queryObj, {country_id});
  if (createdAt) Object.assign(queryObj, {createdAt: {$gte: createdAt}});
  if (cities) Object.assign(queryObj, {city_id: {$in: cities.split(",")}});
  if (categories) Object.assign(queryObj, {category_id: {$in: categories.split(",")}});
  if (query) Object.assign(queryObj, {description: {$regex: `${query}`, $options: "i"}});

  return queryObj;
};
