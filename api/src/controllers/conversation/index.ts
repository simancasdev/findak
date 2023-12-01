import {Request, Response} from "express";
import {ConversationModel} from "../../models";
import {BaseController} from "../base.controller";
import {ConversationService} from "../../services";
import {ConversationAttrs, ConversationDoc, IError} from "../../interfaces";

class ConversationController extends BaseController<
  ConversationAttrs,
  ConversationDoc,
  ConversationModel
> {
  constructor() {
    super("conversation", "/conversations", ConversationService);

    this.router.get(
      "/me",
      async (req: Request, res: Response) =>
        await this.getMyConversations(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getMyConversations(req: Request, res: Response) {
    try {
      const conversations = await ConversationService.getMyConversations(req);
      return res.status(200).send(conversations);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const conversationCreated = await ConversationService.create(req);
      return res.status(200).send(conversationCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new ConversationController();
export {controller as ConversationController};
