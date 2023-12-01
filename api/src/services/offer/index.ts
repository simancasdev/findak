import {Request} from "express";
import {ObjectId} from "mongoose";
import {v4 as uuidv4} from "uuid";
import {buildOfferQuery} from "./helper";
import {Pager, isUserPartOfThis} from "../../utils";
import {OfferModel, OfferSchema} from "../../models";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";
import {
  TradeService,
  AbstractService,
  ConversationService,
  NotificationService,
} from "..";
import {
  IError,
  OfferDoc,
  TradeDoc,
  TradeAttrs,
  OfferAttrs,
  ConversationAttrs,
} from "../../interfaces";

class OfferService extends AbstractService<OfferAttrs, OfferDoc, OfferModel> {
  constructor() {
    super("Offer", OfferSchema);
  }

  public async getAll(req: Request) {
    const pager = new Pager(req);
    const {filter} = pager;
    // @ts-expect-error
    const query = buildOfferQuery(filter);

    const records = await this.model
      .find(query, null, {
        skip: pager.offset,
        limit: pager.limit,
        sort: pager.sort,
      })
      .populate([
        {path: "sender"},
        {path: "receiver"},
        {path: "search", populate: [{path: "user"}, {path: "category"}]},
      ]);

    const total = await this.model.countDocuments(query);

    pager.data = records;
    pager.totalRecord = total;
    return pager.toJson();
  }

  public async getOffer(offerId: string) {
    try {
      return await this.model.findById(offerId).populate([
        {path: "sender", populate: [{path: "country"}, {path: "city"}]},
        {path: "receiver", populate: [{path: "country"}, {path: "city"}]},
        {
          path: "search",
          populate: [{path: "user"}],
        },
      ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async create(req: Request): Promise<OfferAttrs> {
    const {current_user_id} = req.currentUser;
    const newOffer: OfferAttrs = {
      ...req.body,
      sender_id: current_user_id,
    };

    try {
      const offer = await this.save(newOffer);

      // create notification
      await NotificationService.create({
        offer_id: offer._id,
        type: "offer_received",
        to: offer.receiver_id,
      });
      return offer;
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async accept(req: Request) {
    const {offer_id} = req.params;
    const {current_user_id} = req.currentUser;

    try {
      let offer = await this.getById(offer_id);
      const {receiver_id, sender_id, search_id} = offer;

      // check if user can continue
      isUserPartOfThis(
        current_user_id,
        [receiver_id],
        BAD_REQUEST_MESSAGES["ONLY_RECEIVER_CAN_ACCEPT_OFFER"]
      );

      // update the offer status: accepted
      offer.status = "accepted";
      const offerUpdated = (await this.update(offer_id, offer)).populate([
        {path: "search"},
        {path: "sender"},
        {path: "receiver"},
      ]);

      // create new conversation doc
      const newConversation: ConversationAttrs = {
        sender_id,
        receiver_id: current_user_id,
        type: "trade",
      };
      const {id: conversationId} = await ConversationService.save(
        newConversation
      );

      // create the trade doc
      const newTrade: TradeAttrs = {
        search_id,
        seller_id: sender_id,
        identifier: uuidv4(),
        status: "in_progress",
        buyer_id: current_user_id,
        conversation_id: conversationId,
        offer_id: offer_id as unknown as ObjectId,
      };
      const tradeCreated = await TradeService.save(newTrade);

      // create notification
      await NotificationService.create({
        offer_id: offer._id,
        type: "offer_accepted",
        to: offer.sender_id,
      });

      return {offer: offerUpdated, trade: tradeCreated};
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async decline(req: Request): Promise<OfferAttrs> {
    const {offer_id} = req.params;
    const {current_user_id} = req.currentUser;

    try {
      let offer = await this.getById(offer_id);
      const {receiver_id} = offer;

      // check if user can continue
      isUserPartOfThis(
        current_user_id,
        [receiver_id],
        BAD_REQUEST_MESSAGES["ONLY_RECEIVER_CAN_DECLINE_OFFER"]
      );

      // update the offer status: accepted
      offer.status = "declined";

      const offerDeclined = (await this.update(offer_id, offer)).populate([
        {path: "search"},
        {path: "sender"},
        {path: "receiver"},
      ]);

      // create notification
      await NotificationService.create({
        offer_id: offer._id,
        type: "offer_declined",
        to: offer.sender_id,
      });

      return offerDeclined;
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async deleteOffer(req: Request) {
    const {offer_id} = req.params;

    try {
      const trade = await TradeService.getOne<TradeDoc>({offer_id});
      if (trade) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["ERROR_ON_TRY_TO_CANCEL_IN_PROGRESS_OFFER"]
        );
      }
      return await this.model.findByIdAndRemove(offer_id);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new OfferService();
export {service as OfferService};
