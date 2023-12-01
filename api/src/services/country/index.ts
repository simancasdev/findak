import {AbstractService} from "..";
import {CountryModel, CountrySchema} from "../../models";
import {CountryAttrs, CountryDoc} from "../../interfaces";

class CountryService extends AbstractService<
  CountryAttrs,
  CountryDoc,
  CountryModel
> {
  constructor() {
    super("Country", CountrySchema);
  }
}

const service = new CountryService();
export {service as CountryService};
