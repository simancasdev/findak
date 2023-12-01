import {Request} from "express";
import {Pager} from "../../utils";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {NotificationModel, NotificationSchema} from "../../models";
import {IError, NotificationAttrs, NotificationDoc} from "../../interfaces";

class NotificationService extends AbstractService<
  NotificationAttrs,
  NotificationDoc,
  NotificationModel
> {
  constructor() {
    super("Notification", NotificationSchema);
  }

  public async getAll(req: Request) {
    const {current_user_id} = req.currentUser;
    const pager = new Pager(req);

    const query: Partial<NotificationAttrs> = {to: current_user_id};

    const records = await this.model
      .find(query, null, {
        skip: pager.offset,
        limit: pager.limit,
        sort: pager.sort,
      })
      .populate([
        {path: "feedback", populate: [{path: "sender"}]},
        {path: "trade", populate: [{path: "buyer"}, {path: "seller"}]},
        {path: "offer", populate: [{path: "sender"}, {path: "receiver"}]},
      ]);

    const total = await this.model.countDocuments(query);

    pager.data = records;
    pager.totalRecord = total;
    return pager.toJson();
  }

  public async read(req: Request) {
    const {current_user_id} = req.currentUser;
    try {
      return await this.updateMany({to: current_user_id}, {readed: true});
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async create(payload: Omit<NotificationAttrs, "readed">) {
    try {
      return await this.save({...payload, readed: false});
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new NotificationService();
export {service as NotificationService};
