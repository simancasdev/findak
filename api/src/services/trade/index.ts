import {Request} from "express";
import {Pager, isUserPartOfThis} from "../../utils";
import {TradeModel, TradeSchema} from "../../models";
import {IError, TradeAttrs, TradeDoc} from "../../interfaces";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";
import {
  UserService,
  OfferService,
  SearchService,
  AbstractService,
  NotificationService,
} from "..";

class TradeService extends AbstractService<TradeAttrs, TradeDoc, TradeModel> {
  constructor() {
    super("Trade", TradeSchema);
  }

  public async getAll(req: Request) {
    const pager = new Pager(req);
    const {current_user_id} = req.currentUser;
    const query = {
      $or: [{seller_id: current_user_id}, {buyer_id: current_user_id}],
    };

    try {
      const records = await this.model
        .find(query)
        .populate([
          {path: "seller"},
          {path: "buyer"},
          {path: "offer"},
          {path: "search"},
        ]);

      const total = await this.model.countDocuments(query);

      pager.data = records;
      pager.totalRecord = total;
      return pager.toJson();
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async getTrade(tradeId: string): Promise<TradeDoc | null> {
    try {
      return await this.model.findById(tradeId).populate([
        {path: "buyer", populate: [{path: "country"}, {path: "city"}]},
        {path: "seller", populate: [{path: "country"}, {path: "city"}]},
        {
          path: "offer",
          populate: [
            {path: "sender"},
            {path: "search", populate: [{path: "user"}]},
          ],
        },
        {
          path: "search",
          populate: [{path: "user"}, {path: "city"}, {path: "country"}],
        },
      ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async approved(req: Request) {
    const {trade_id} = req.params;
    const {current_user_id} = req.currentUser;

    try {
      let trade = await this.getById(trade_id);
      const {seller_id, buyer_id, offer_id, search_id} = trade;
      let partner;

      // check if user can continue
      isUserPartOfThis(
        current_user_id,
        [seller_id, buyer_id],
        BAD_REQUEST_MESSAGES["ONLY_BUYER_OR_SELLER_CAN_APPROVE"]
      );

      // who approved this trade
      if (JSON.stringify(current_user_id) === JSON.stringify(seller_id)) {
        trade.approved_by_seller_at = new Date();
        partner = await UserService.getById(buyer_id);

        // notify buyer that seller has approved the transaction
        await NotificationService.create({
          trade_id: trade._id,
          type: "trade_approved",
          to: buyer_id,
        });
      } else {
        trade.approved_by_buyer_at = new Date();
        partner = await UserService.getById(seller_id);

        // notify seller that buyer has approved the transaction
        await NotificationService.create({
          trade_id: trade._id,
          type: "trade_approved",
          to: seller_id,
        });
      }

      // if both dates exists that means that the trade is completed
      if (trade.approved_by_buyer_at && trade.approved_by_seller_at) {
        trade.status = "completed";

        // update search doc
        let search = await SearchService.getById(search_id);
        search.status = "finished";

        // update offer doc
        let offer = await OfferService.getById(offer_id);
        offer.status = "trade_succeed";

        await OfferService.update(offer_id, offer);
        await SearchService.update(search_id, search);

        // create notification for buyer and seller
        await NotificationService.create({
          trade_id: trade._id,
          type: "trade_completed",
          to: seller_id,
        });
        await NotificationService.create({
          trade_id: trade._id,
          type: "trade_completed",
          to: buyer_id,
        });
      }

      const {_id} = await this.update(trade_id, trade);
      const tradeUpdated = await this.getTrade(_id);

      return {trade: tradeUpdated, partner};
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async decline(req: Request) {
    const {trade_id} = req.params;
    const {current_user_id} = req.currentUser;
    try {
      let trade = await this.getById(trade_id);
      const {buyer_id, seller_id, offer_id} = trade;

      // check if user can continue
      isUserPartOfThis(
        current_user_id,
        [seller_id, buyer_id],
        "Only buyer or seller can decline this trade"
      );

      // update the trade doc
      trade.status = "rejected";
      trade.rejected_by = current_user_id;
      const {_id} = await this.update(trade_id, trade);

      // update the offer doc
      let offer = await OfferService.getById(offer_id);
      offer.status = "rejected_in_trade";
      await OfferService.update(offer_id, offer);

      // create notification
      const to =
        JSON.stringify(seller_id) === JSON.stringify(current_user_id)
          ? buyer_id
          : seller_id;

      await NotificationService.create({
        to,
        trade_id: _id,
        type: "trade_rejected",
      });

      return await this.getTrade(_id);
    } catch (error) {
      console.log(error);
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new TradeService();
export {service as TradeService};
