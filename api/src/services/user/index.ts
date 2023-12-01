import {Request} from "express";
import {Pager} from "../../utils";
import {buildUserQuery} from "./helper";
import {BadRequestError} from "../../errors";
import {UserModel, UserSchema} from "../../models";
import {
  IError,
  UserDoc,
  UserAttrs,
  CheckUserAbilityPayload,
} from "../../interfaces";
import {
  OfferService,
  TradeService,
  SearchService,
  MessageService,
  AbstractService,
  ConversationService,
} from "..";

class UserService extends AbstractService<UserAttrs, UserDoc, UserModel> {
  constructor() {
    super("User", UserSchema);
  }

  public async getAll(req: Request) {
    const pager = new Pager(req);
    const {filter} = pager;
    // @ts-expect-error
    const query = buildUserQuery(filter);

    const records = await this.model
      .find(query, null, {
        skip: pager.offset,
        limit: pager.limit,
        sort: pager.sort,
      })
      .populate([
        {path: "city"},
        {path: "country"},
        {path: "feedbacks"},
        {path: "subscription"},
        {path: "preferences_alert_category"},
      ]);

    const total = await this.model.countDocuments(query);

    pager.data = records;
    pager.totalRecord = total;
    return pager.toJson();
  }

  public async getUser(id: string): Promise<UserDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate([
          {path: "city"},
          {path: "offers"},
          {path: "country"},
          {path: "searches"},
          {path: "subscription"},
          {path: "trades_as_buyer"},
          {path: "trades_as_seller"},
          {path: "preferences_alert_category"},
          {path: "products", populate: ["category"]},
          {path: "feedbacks", populate: ["sender", "receiver"]},
        ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async userAbilityChecker({user_id, flow}: CheckUserAbilityPayload) {
    // TODO: these values have to come to the DATABASE
    const SEARCH_LIMIT_BY_REGULAR_USER = 1;
    const OFFER_LIMIT_BY_REGULAR_USER = 1;

    try {
      switch (flow) {
        case "send-offer":
          const offers = await OfferService.model.find({sender_id: user_id});
          if (offers.length >= OFFER_LIMIT_BY_REGULAR_USER) {
            throw new BadRequestError("Offer limit exceeded");
          }
          break;

        case "create-search":
          const searches = await SearchService.model.find({user_id});
          if (searches.length >= SEARCH_LIMIT_BY_REGULAR_USER) {
            throw new BadRequestError("Search limit exceeded");
          }
          break;

        default:
          throw new BadRequestError(`User ability: ${flow} not handled`);
      }

      return {message: `You can publish another: ${flow}`};
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async updateUser(req: Request): Promise<UserDoc | null> {
    try {
      const {id} = req.params;
      return await this.model
        .findByIdAndUpdate(id, req.body, {new: true})
        .populate([
          {path: "city"},
          {path: "offers"},
          {path: "country"},
          {path: "searches"},
          {path: "subscription"},
          {path: "trades_as_buyer"},
          {path: "trades_as_seller"},
          {path: "preferences_alert_category"},
          {path: "feedbacks", populate: ["sender", "receiver"]},
        ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async deleteUser(req: Request) {
    const {id} = req.params;
    try {
      await SearchService.deleteMany({user_id: id});
      await OfferService.deleteMany({sender_id: id});
      await OfferService.deleteMany({receiver_id: id});
      await TradeService.deleteMany({seller_id: id});
      await TradeService.deleteMany({buyer_id: id});
      await ConversationService.deleteMany({buyer_id: id});
      await ConversationService.deleteMany({seller_id: id});
      await MessageService.deleteMany({user_id: id});

      return await this.model.findByIdAndRemove(id);
    } catch (error) {
      console.log("ERROR", error);
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new UserService();
export {service as UserService};
