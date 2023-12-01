import {Request} from "express";
import {UserDoc} from "../interfaces";

class Pager {
  public page: number;
  public limit: number;
  public offset: number;
  public sort: {[key: string]: number} = {};
  public search: string;
  public filter: {[key: string]: any} = {};
  public totalRecord = 0;
  public totalPages = 0;
  public data: any[] = [];
  public userId?: string;
  public user?: UserDoc;

  constructor(req: Request) {
    this.page = parseInt((req.query.page as string) || "1");
    this.limit = parseInt((req.query.limit as string) || "100");
    this.offset = this.page < 1 ? 0 : (this.page - 1) * this.limit;
    let sortQeury = (req.query.sort as string) || "";
    this.search = (req.query.search as string) || "";

    // @ts-ignore
    this.user = req.currentUser;
    // this.userId = req.currentUser?.id;

    for (const key in req.query) {
      if (Object.getOwnPropertyNames(this).includes(key)) {
        continue;
      }
      let value = req.query[key] as string;
      if (key.indexOf(":") > 0) {
        let [k, q] = key.split(":");
        switch (q) {
          case "in":
            this.filter[k] = {$in: value.split(",")};
            break;
          default:
            this.filter[k] = value;
            break;
        }
      } else {
        this.filter[key] = value;
      }
    }

    if (sortQeury) {
      sortQeury.split(",").forEach((sq) => {
        if (sq.indexOf(":") < 0) {
          this.sort[sq] = 1;
        } else {
          let splat = sq.split(":");
          this.sort[splat[0]] = splat[1] === "asc" ? 1 : -1;
        }
      });
    }
  }

  public toJson() {
    return {
      offset: this.offset,
      limit: this.limit,
      currentPage: this.page,
      totalPages: Math.ceil(this.totalRecord / this.limit),
      totalRecord: this.totalRecord,
      search: this.search,
      data: this.data,
    };
  }
}

export {Pager};
