import {Request} from "express";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {CollectionModel, CollectionSchema} from "../../models";
import {IError, CollectionDoc, CollectionAttrs} from "../../interfaces";

class CollectionService extends AbstractService<
  CollectionAttrs,
  CollectionDoc,
  CollectionModel
> {
  constructor() {
    super("Collection", CollectionSchema);
  }

  public async getMyCollection(req: Request) {
    const {current_user_id} = req.currentUser;
    try {
      return await this.model.find({user_id: current_user_id});
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async create(req: Request): Promise<CollectionAttrs> {
    const {current_user_id} = req.currentUser;
    const newCollection: CollectionAttrs = {
      ...req.body,
      user_id: current_user_id,
    };
    try {
      return await this.save(newCollection);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new CollectionService();
export {service as CollectionService};
