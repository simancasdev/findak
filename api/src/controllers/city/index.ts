import {CityModel} from "../../models";
import {CityService} from "../../services";
import {BaseController} from "../base.controller";
import {CityAttrs, CityDoc} from "../../interfaces";

class CityController extends BaseController<CityAttrs, CityDoc, CityModel> {
  constructor() {
    super("city", "/cities", CityService);
    super.initializeBaseRoutes();
  }
}

const controller = new CityController();
export {controller as CityController};
