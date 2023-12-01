import {Request} from "express";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {LikeModel, LikeSchema} from "../../models";
import {LikeAttrs, LikeDoc, IError} from "../../interfaces";

class LikeService extends AbstractService<LikeAttrs, LikeDoc, LikeModel> {
  constructor() {
    super("Like", LikeSchema);
  }

  public async create(req: Request) {
    const {current_user_id} = req.currentUser;
    const {productId} = req.body;
    const newLike: LikeAttrs = {
      product_id: productId,
      user_id: current_user_id,
    };

    try {
      return (await this.save(newLike)).populate([{path: "user"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async deleteProductLike(product_id: string) {
    try {
      return this.model.findOneAndDelete({product_id});
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new LikeService();
export {service as LikeService};
