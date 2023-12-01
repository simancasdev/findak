import {LikeModel} from "../../models";
import {Response, Request} from "express";
import {LikeService} from "../../services";
import {BaseController} from "../base.controller";
import {LikeAttrs, LikeDoc, IError} from "../../interfaces";

class LikeController extends BaseController<LikeAttrs, LikeDoc, LikeModel> {
  constructor() {
    super("like", "/likes", LikeService);

    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.delete(
      "/:product_id",
      async (req: Request, res: Response) =>
        await this.deleteProductLike(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async create(req: Request, res: Response) {
    try {
      const liked = await LikeService.create(req);
      return res.status(200).send(liked);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async deleteProductLike(req: Request, res: Response) {
    const {product_id} = req.params;
    try {
      const deleted = await LikeService.deleteProductLike(product_id);
      return res.status(200).send(deleted);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new LikeController();
export {controller as LikeController};
