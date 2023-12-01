import {IError} from "../../interfaces";
import {TradeModel} from "../../models";
import {Request, Response} from "express";
import {TradeService} from "../../services";
import {BaseController} from "../base.controller";
import {TradeAttrs, TradeDoc} from "../../interfaces";

class TradeController extends BaseController<TradeAttrs, TradeDoc, TradeModel> {
  constructor() {
    super("Trade", "/trades", TradeService);

    this.router.get(
      "/",
      async (req: Request, res: Response) => await this.getAll(req, res)
    );
    this.router.get(
      "/:id",
      async (req: Request, res: Response) => await this.getTrade(req, res)
    );
    this.router.post(
      "/approved/:trade_id",
      async (req: Request, res: Response) => await this.approved(req, res)
    );
    this.router.post(
      "/decline/:trade_id",
      async (req: Request, res: Response) => await this.decline(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getAll(req: Request, res: Response) {
    try {
      const trades = await TradeService.getAll(req);
      return res.status(200).send(trades);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getTrade(req: Request, res: Response) {
    const {id} = req.params;
    try {
      const trade = await TradeService.getTrade(id);
      return res.status(200).send(trade);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async approved(req: Request, res: Response) {
    try {
      const tradeApproved = await TradeService.approved(req);
      return res.status(200).send(tradeApproved);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async decline(req: Request, res: Response) {
    try {
      const tradeDeclined = await TradeService.decline(req);
      return res.status(200).send(tradeDeclined);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new TradeController();
export {controller as TradeController};
