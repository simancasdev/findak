import {CategoryModel} from "../../models";
import {CategoryService} from "../../services";
import {BaseController} from "../base.controller";
import {CategoryAttrs, CategoryDoc} from "../../interfaces";

class CategoryController extends BaseController<
  CategoryAttrs,
  CategoryDoc,
  CategoryModel
> {
  constructor() {
    super("category", "/categories", CategoryService);
    super.initializeBaseRoutes();
  }
}

const controller = new CategoryController();
export {controller as CategoryController};
