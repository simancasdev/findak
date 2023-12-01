import {BaseModel} from "../models";
import {logger, Pager} from "../utils";
import mongoose, {FilterQuery, Schema} from "mongoose";
import {BaseAttrs, BaseDoc, IError} from "../interfaces";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../errors";

abstract class AbstractService<
  A extends BaseAttrs,
  D extends BaseDoc,
  M extends BaseModel<A, D>
> {
  public model;

  constructor(protected name: string, protected schema: Schema<D>) {
    schema.statics.build = (attrs: A) => new this.model(attrs);
    this.model = mongoose.model<D, M>(name, schema);
  }

  public getModel() {
    return this.model;
  }

  public async save(attr: A) {
    try {
      const record = this.model.build({
        ...attr,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      return await record.save();
    } catch (exception) {
      logger.error(exception);
      throw new BadRequestError(
        BAD_REQUEST_MESSAGES["UNABLE_TO_CREATE"] + this.name
      );
    }
  }

  public async getById<T>(id: T, populate: any = "") {
    try {
      const record = await this.model.findById(id).populate(populate);
      if (!record) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["UNABLE_TO_FIND"] + this.name
        );
      }
      return record;
    } catch (exception) {
      throw new BadRequestError(this.name + BAD_REQUEST_MESSAGES["NOT_FOUND"]);
    }
  }

  public async getOne<T>(params: {}, populate: any[] = []) {
    try {
      return await this.model.findOne<T>(params).populate(populate);
    } catch (exception) {
      throw new BadRequestError(this.name + BAD_REQUEST_MESSAGES["NOT_FOUND"]);
    }
  }

  public async list(pager: Pager, populate: any = "") {
    const records = await this.model
      .find(pager.filter as any, null, {
        skip: pager.offset,
        limit: pager.limit,
        sort: pager.sort,
      })
      .populate(populate)
      .exec();

    const total = await this.model.countDocuments(pager.filter as any);
    pager.data = records;
    pager.totalRecord = total;
    return pager.toJson();
  }

  public async update<T>(id: T, attr: A, populate: any = "") {
    try {
      const updated = await this.model
        .findByIdAndUpdate(id, {...attr, updatedAt: Date.now()} as any, {
          new: true,
        })
        .populate(populate)
        .exec();
      if (!updated) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["FAILED_TO_UPDATE"] + this.name
        );
      }
      return updated;
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async updateMany<T>(query: FilterQuery<T>, values: {}) {
    try {
      return await this.model.updateMany<T>(query, values);
    } catch (exception) {
      throw new BadRequestError(this.name + BAD_REQUEST_MESSAGES["NOT_FOUND"]);
    }
  }

  public async deleteMany(query: any) {
    try {
      return await this.model.deleteMany(query);
    } catch (exception) {
      throw new BadRequestError(this.name + BAD_REQUEST_MESSAGES["NOT_FOUND"]);
    }
  }

  public async deleteOne<T>(id: T) {
    try {
      const deleted = await this.model.findById(id);
      if (!deleted) {
        throw new BadRequestError(
          this.name + BAD_REQUEST_MESSAGES["NOT_FOUND"]
        );
      }
      await this.model.deleteOne(deleted as any);
      return deleted;
    } catch (error) {
      throw new BadRequestError(this.name + BAD_REQUEST_MESSAGES["NOT_FOUND"]);
    }
  }
}

export {AbstractService};
