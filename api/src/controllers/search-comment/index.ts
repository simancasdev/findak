import {SearchCommentModel} from "../../models";
import {BaseController} from "../base.controller";
import {SearchCommentService} from "../../services";
import {IError, SearchCommentAttrs, SearchCommentDoc} from "../../interfaces";

class SearchCommentController extends BaseController<
  SearchCommentAttrs,
  SearchCommentDoc,
  SearchCommentModel
> {
  constructor() {
    super("search-comment", "/search-comment", SearchCommentService);
    super.initializeBaseRoutes();
  }
}

const controller = new SearchCommentController();
export {controller as SearchCommentController};
