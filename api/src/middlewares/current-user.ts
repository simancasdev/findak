import jwt from "jsonwebtoken";
import env from "../configuration/env";
import {getUserToken} from "../utils/get-user-token";
import {Request, Response, NextFunction} from "express";
import {CityAttrs, CountryAttrs, UserAttrs} from "../interfaces";

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userJWT = getUserToken(req);
  if (userJWT) {
    const payload = jwt.verify(
      userJWT as string,
      env.JWT_SECRET!
    ) as UserAttrs & {city: CityAttrs; country: CountryAttrs};
    req.currentUser = {...payload, current_user_id: payload.id as string};
  }

  next();
};
