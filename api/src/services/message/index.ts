import {Request} from "express";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {MessageModel, MessageSchema} from "../../models";
import {IError, MessageAttrs, MessageDoc} from "../../interfaces";

class MessageService extends AbstractService<
  MessageAttrs,
  MessageDoc,
  MessageModel
> {
  constructor() {
    super("Message", MessageSchema);
  }

  public async getAll(req: Request) {
    const {conversation_id} = req.params;

    try {
      return await this.model
        .find({conversation_id})
        .populate([{path: "user"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async create(req: Request): Promise<MessageAttrs> {
    const {current_user_id} = req.currentUser;
    const newMessage: MessageAttrs = {
      ...req.body,
      user_id: current_user_id,
    };

    try {
      return (await this.save(newMessage)).populate([{path: "user"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async readMessages(req: Request) {
    const {conversation_id} = req.params;
    const {current_user_id} = req.currentUser;

    try {
      const messages = await this.model.find({conversation_id, readed: false});

      messages.forEach(async (message) => {
        if (
          JSON.stringify(message.user_id) !== JSON.stringify(current_user_id)
        ) {
          message.readed = true;
          await this.update(message._id, message);
        }
      });
      return messages;
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new MessageService();
export {service as MessageService};
