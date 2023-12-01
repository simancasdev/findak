import {BaseModel} from ".";

export interface CityModel extends BaseModel {
  name: string;
  country_id: string;
}
