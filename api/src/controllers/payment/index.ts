import {PaymentModel} from "../../models";
import {Request, Response} from "express";
import {PaymentService} from "../../services";
import {BaseController} from "../base.controller";
import {IError, PaymentAttrs, PaymentDoc} from "../../interfaces";

class PaymentController extends BaseController<
  PaymentAttrs,
  PaymentDoc,
  PaymentModel
> {
  constructor() {
    super("Payment", "/payments", PaymentService);

    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.post(
      "/sheet/config",
      async (req: Request, res: Response) => await this.sheet(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async create(req: Request, res: Response) {
    const {user_id, payment_type, amount} = req.body;
    try {
      const sheetConfig = await PaymentService.create({
        user_id,
        payment_type,
        amount,
      });
      return res.status(200).send(sheetConfig);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async sheet(req: Request, res: Response) {
    const {amount} = req.body;
    try {
      const sheetConfig = await PaymentService.sheetConfig({amount});
      return res.status(200).send(sheetConfig);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new PaymentController();
export {controller as PaymentController};
