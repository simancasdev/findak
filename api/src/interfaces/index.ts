import {UserAttrs} from ".";
import {CityAttrs, CountryAttrs} from "./models";

declare global {
  namespace Express {
    interface Request {
      session: any;
      files: any;
      currentUser: UserAttrs & {
        city: CityAttrs;
        current_user_id: any;
        country: CountryAttrs;
      };
    }
  }
}

export * from "./error";
export * from "./models";
export * from "./payload";
export * from "./query-params";
