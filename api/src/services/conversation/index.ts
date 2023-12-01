import {Request} from "express";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {ConversationModel, ConversationSchema} from "../../models";
import {ConversationAttrs, ConversationDoc, IError} from "../../interfaces";

class ConversationService extends AbstractService<
  ConversationAttrs,
  ConversationDoc,
  ConversationModel
> {
  constructor() {
    super("Conversation", ConversationSchema);
  }

  public async getMyConversations(req: Request) {
    const {current_user_id} = req.currentUser;
    const query = {
      $or: [{sender_id: current_user_id}, {receiver_id: current_user_id}],
    };
    try {
      return await this.model
        .find(query)
        .populate([
          {path: "sender"},
          {path: "product"},
          {path: "receiver"},
          {path: "messages", populate: [{path: "user"}]},
        ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async create(req: Request) {
    const {receiver_id, type, sender_id, product_id} = req.body;
    const newConversation: ConversationAttrs = {
      type,
      sender_id,
      product_id,
      receiver_id,
    };

    try {
      // first, we check if there is a conversation
      const conversation = await this.getOne(
        {
          product_id,
          sender_id: {$in: [sender_id, receiver_id]},
          receiver_id: {$in: [sender_id, receiver_id]},
          type: {$in: ["regular", "product"]},
        },
        [{path: "sender"}, {path: "receiver"}, {path: "product"}]
      );
      if (conversation) return conversation;

      // if there's not a previous conversation then we create it
      return (await this.save(newConversation)).populate([
        {path: "sender"},
        {path: "product"},
        {path: "receiver"},
      ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new ConversationService();
export {service as ConversationService};
