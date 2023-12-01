import {AbstractService} from "..";
import {CityModel, CitySchema} from "../../models";
import {CityAttrs, CityDoc} from "../../interfaces";

class CityService extends AbstractService<CityAttrs, CityDoc, CityModel> {
  constructor() {
    super("City", CitySchema);
  }
}

const service = new CityService();
export {service as CityService};
