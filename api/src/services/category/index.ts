import {AbstractService} from "..";
import {CategoryModel, CategorySchema} from "../../models";
import {CategoryAttrs, CategoryDoc} from "../../interfaces";

class CategoryService extends AbstractService<
  CategoryAttrs,
  CategoryDoc,
  CategoryModel
> {
  constructor() {
    super("Category", CategorySchema);
  }
}

const service = new CategoryService();
export {service as CategoryService};
