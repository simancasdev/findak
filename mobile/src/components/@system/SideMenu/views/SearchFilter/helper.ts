import {CategoryModel, CityModel, UserModel} from "src/interfaces";

export const sanitizeCategories = (list: CategoryModel[], user: UserModel) => {
  const {id: userCategoryId} = user["preferences"]["search_alert"];
  return list.filter((category) => category.id !== userCategoryId);
};

export const sanitizeCities = (list: CityModel[], user: UserModel) => {
  const {id: userCityId} = user["location"]["city"];
  return list.filter((city) => city.id !== userCityId);
};
