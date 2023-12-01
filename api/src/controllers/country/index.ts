import {CountryModel} from "../../models";
import {CountryService} from "../../services";
import {BaseController} from "../base.controller";
import {CountryAttrs, CountryDoc} from "../../interfaces";

class CountryController extends BaseController<
  CountryAttrs,
  CountryDoc,
  CountryModel
> {
  constructor() {
    super("country", "/countries", CountryService);
    super.initializeBaseRoutes();
  }
}

const controller = new CountryController();
export {controller as CountryController};
