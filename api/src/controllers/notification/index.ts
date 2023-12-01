import {Request, Response} from "express";
import {NotificationModel} from "../../models";
import {NotificationService} from "../../services";
import {BaseController} from "../base.controller";
import {IError, NotificationAttrs, NotificationDoc} from "../../interfaces";

class NotificationController extends BaseController<
  NotificationAttrs,
  NotificationDoc,
  NotificationModel
> {
  constructor() {
    super("notification", "/notifications", NotificationService);

    this.router.get(
      "/me",
      async (req: Request, res: Response) => await this.getAll(req, res)
    );
    this.router.get(
      "/read",
      async (req: Request, res: Response) => await this.read(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getAll(req: Request, res: Response) {
    try {
      const notifications = await NotificationService.getAll(req);
      return res.status(200).send(notifications);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async read(req: Request, res: Response) {
    try {
      await NotificationService.read(req);
      return res.status(200);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const notificationCreated = await NotificationService.create(req.body);
      return res.status(200).send(notificationCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new NotificationController();
export {controller as NotificationController};
