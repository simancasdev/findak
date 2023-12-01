import {Response, Request} from "express";
import {CollectionModel} from "../../models";
import {CollectionService} from "../../services";
import {BaseController} from "../base.controller";
import {IError, CollectionAttrs, CollectionDoc} from "../../interfaces";

class CollectionController extends BaseController<
  CollectionAttrs,
  CollectionDoc,
  CollectionModel
> {
  constructor() {
    super("collection", "/collections", CollectionService);

    this.router.get(
      "/me",
      async (req: Request, res: Response) =>
        await this.getMyCollection(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getMyCollection(req: Request, res: Response) {
    try {
      const collectionCreated = await CollectionService.getMyCollection(req);
      return res.status(200).send(collectionCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const collectionCreated = await CollectionService.create(req);
      return res.status(200).send(collectionCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new CollectionController();
export {controller as CollectionController};
