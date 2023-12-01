import {Request} from "express";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {ProductModel, ProductSchema} from "../../models";
import {ProductAttrs, ProductDoc, IError} from "../../interfaces";

class ProductService extends AbstractService<
  ProductAttrs,
  ProductDoc,
  ProductModel
> {
  constructor() {
    super("Product", ProductSchema);
  }

  public async getMyProducts(req: Request): Promise<ProductAttrs[]> {
    try {
      const {current_user_id} = req.currentUser;
      return await this.model
        .find({user_id: current_user_id})
        .populate([{path: "category"}, {path: "product_collection"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async getProduct(productId: string) {
    try {
      return await this.model
        .findById(productId)
        .populate([
          {path: "user"},
          {path: "likes", populate: [{path: "user"}]},
          {path: "category"},
          {path: "product_collection"},
        ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async create(req: Request): Promise<ProductAttrs> {
    try {
      const {current_user_id} = req.currentUser;
      const newProduct: ProductAttrs = {
        ...req.body,
        user_id: current_user_id,
      };
      return await this.save(newProduct);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new ProductService();
export {service as ProductService};
