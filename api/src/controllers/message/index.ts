import {Request, Response} from "express";
import {MessageModel} from "../../models";
import {MessageService} from "../../services";
import {BaseController} from "../base.controller";
import {IError, MessageAttrs, MessageDoc} from "../../interfaces";

class MessageController extends BaseController<
  MessageAttrs,
  MessageDoc,
  MessageModel
> {
  constructor() {
    super("message", "/messages", MessageService);

    this.router.get(
      "/:conversation_id",
      async (req: Request, res: Response) => await this.getAll(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.get(
      "/read/:conversation_id",
      async (req: Request, res: Response) => await this.readMessages(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getAll(req: Request, res: Response) {
    try {
      const messages = await MessageService.getAll(req);
      return res.status(200).send(messages);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const messageCreated = await MessageService.create(req);
      return res.status(200).send(messageCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async readMessages(req: Request, res: Response) {
    try {
      await MessageService.readMessages(req);
      return res.status(200);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new MessageController();
export {controller as MessageController};
