import {Request} from "express";
import {AbstractService, SearchService} from "..";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";
import {SearchCommentModel, SearchCommentSchema} from "../../models";
import {IError, SearchCommentAttrs, SearchCommentDoc} from "../../interfaces";

class SearchCommentService extends AbstractService<
  SearchCommentAttrs,
  SearchCommentDoc,
  SearchCommentModel
> {
  constructor() {
    super("SearchComment", SearchCommentSchema);
  }

  public async addComment(req: Request) {
    const {comment, search_id, by} = req.body;

    try {
      const search = await SearchService.getById(search_id);
      // we check that the search really exists
      if (!search) {
        throw new BadRequestError(BAD_REQUEST_MESSAGES.SEARCH_NOT_EXISTS);
      }

      const newComment: SearchCommentAttrs = {
        comment,
        search_id,
        by,
      };
      return (await this.save(newComment)).populate([{path: "user"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new SearchCommentService();
export {service as SearchCommentService};
