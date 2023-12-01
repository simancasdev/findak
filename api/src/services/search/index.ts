import {Request} from "express";
import {Pager} from "../../utils";
import {buildSearchQuery} from "./helper";
import {SearchModel, SearchSchema} from "../../models";
import {AbstractService, OfferService, TradeService} from "..";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";
import {
  IError,
  OfferDoc,
  TradeDoc,
  SearchDoc,
  SearchAttrs,
} from "../../interfaces";

class SearchService extends AbstractService<
  SearchAttrs,
  SearchDoc,
  SearchModel
> {
  constructor() {
    super("Search", SearchSchema);
  }

  public async getAll(req: Request) {
    const pager = new Pager(req);
    const {filter} = pager;
    // @ts-expect-error
    const query = buildSearchQuery(filter);

    const records = await this.model
      .find(query, null, {
        skip: pager.offset,
        limit: pager.limit,
        sort: pager.sort,
      })
      .populate([
        {path: "city"},
        {path: "country"},
        {path: "category"},
        {path: "comments", populate: [{path: "user"}]},
        {path: "user", populate: [{path: "subscription"}]},
      ]);

    const total = await this.model.countDocuments(query);

    pager.data = records;
    pager.totalRecord = total;
    return pager.toJson();
  }

  public async create(req: Request): Promise<SearchDoc> {
    const {location, current_user_id, city, country} = req.currentUser;

    if (!location) {
      throw new BadRequestError(
        BAD_REQUEST_MESSAGES["SET_YOUR_LOCATION_TO_CREATE_SEARCH"]
      );
    }

    const searchAttrs: SearchAttrs = {
      ...req.body,
      city_id: city.id,
      country_id: country.id,
      user_id: current_user_id,
    };

    try {
      return await this.save(searchAttrs);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async getSearch(req: Request): Promise<SearchDoc | null> {
    const {id} = req.params;
    try {
      return await this.model.findById(id).populate([
        {path: "category"},
        {path: "country"},
        {path: "city"},
        {path: "comments", populate: [{path: "user"}]},
        {
          path: "user",
          populate: [{path: "feedbacks"}, {path: "city"}, {path: "country"}],
        },
        {
          path: "offers",
          populate: [{path: "sender", populate: ["city", "country"]}],
        },
      ]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async cancel(req: Request): Promise<SearchDoc | null> {
    const {id} = req.params;
    try {
      let search = await this.getById(id);
      const {_id} = search;
      const trade = await TradeService.getOne<TradeDoc>({search_id: _id});
      if (trade) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["ERROR_ON_TRY_TO_CANCEL_IN_PROGRESS_SEARCH"]
        );
      }
      await OfferService.updateMany<OfferDoc>(
        {search_id: id},
        {status: "declined"}
      );
      search.status = "cancelled";
      return await this.update(id, search);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new SearchService();
export {service as SearchService};
