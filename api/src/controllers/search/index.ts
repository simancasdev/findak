import {Request, Response} from "express";
import {SearchModel} from "../../models/search";
import {BaseController} from "../base.controller";
import {IError, SearchAttrs, SearchDoc} from "../../interfaces";
import {SearchCommentService, SearchService} from "../../services";

class SearchController extends BaseController<
  SearchAttrs,
  SearchDoc,
  SearchModel
> {
  constructor() {
    super("Search", "/searches", SearchService);

    this.router.get(
      "/",
      async (req: Request, res: Response) => await this.getAll(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.get(
      "/:id",
      async (req: Request, res: Response) => await this.getSearch(req, res)
    );
    this.router.post(
      "/cancel/:id",
      async (req: Request, res: Response) => await this.cancel(req, res)
    );
    this.router.post(
      "/add/comment",
      async (req: Request, res: Response) => await this.addComment(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getAll(req: Request, res: Response) {
    try {
      const searches = await SearchService.getAll(req);
      return res.status(200).send(searches);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const searchCreated = await SearchService.create(req);
      return res.status(200).send(searchCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getSearch(req: Request, res: Response) {
    try {
      const search = await SearchService.getSearch(req);
      return res.status(200).send(search);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async cancel(req: Request, res: Response) {
    try {
      const searchCancelled = await SearchService.cancel(req);
      return res.status(200).send(searchCancelled);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async addComment(req: Request, res: Response) {
    try {
      const commentAdded = await SearchCommentService.addComment(req);
      return res.status(200).send(commentAdded);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new SearchController();
export {controller as SearchController};
