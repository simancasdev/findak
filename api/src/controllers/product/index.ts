import {Response, Request} from "express";
import {ProductModel} from "../../models";
import {ProductService} from "../../services";
import {BaseController} from "../base.controller";
import {ProductAttrs, ProductDoc, IError} from "../../interfaces";

class ProductController extends BaseController<
  ProductAttrs,
  ProductDoc,
  ProductModel
> {
  constructor() {
    super("product", "/products", ProductService);

    this.router.get(
      "/me",
      async (req: Request, res: Response) => await this.getMyProducts(req, res)
    );
    this.router.get(
      "/:id",
      async (req: Request, res: Response) => await this.getProduct(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getMyProducts(req: Request, res: Response) {
    try {
      const myProducts = await ProductService.getMyProducts(req);
      return res.status(200).send(myProducts);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getProduct(req: Request, res: Response) {
    const {id} = req.params;
    try {
      const myProducts = await ProductService.getProduct(id);
      return res.status(200).send(myProducts);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const created = await ProductService.create(req);
      return res.status(200).send(created);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new ProductController();
export {controller as ProductController};
