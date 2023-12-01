import {Request, Response} from "express";
import {SubscriptionModel} from "../../models";
import {BaseController} from "../base.controller";
import {SubscriptionService} from "../../services";
import {IError, SubscriptionAttrs, SubscriptionDoc} from "../../interfaces";

class SubscriptionController extends BaseController<
  SubscriptionAttrs,
  SubscriptionDoc,
  SubscriptionModel
> {
  constructor() {
    super("Subscription", "/subscriptions", SubscriptionService);

    this.router.post(
      "/become/premium",
      async (req: Request, res: Response) => await this.becomePremium(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async becomePremium(req: Request, res: Response) {
    const {user_id} = req.body;
    try {
      const subscription = await SubscriptionService.becomePremium({
        user_id,
      });
      return res.status(200).send(subscription);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new SubscriptionController();
export {controller as SubscriptionController};
