import jwt from "jsonwebtoken";
import {logger} from "../utils";
import env from "../configuration/env";
import {UserService} from "../services";
import {getUserToken} from "../utils/get-user-token";
import {Request, Response, NextFunction} from "express";
import {BadRequestError} from "../errors/bad-request-error";
import {CityAttrs, CountryAttrs, UserAttrs} from "../interfaces";

export const authorizedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userJWT = getUserToken(req);
    if (!userJWT) throw new BadRequestError("Unauthorized");

    const payload = jwt.verify(userJWT, env.JWT_SECRET!) as UserAttrs & {
      country: CountryAttrs;
      city: CityAttrs;
    };
    const auth_user = await UserService.getById(payload.id!);

    if (!auth_user) throw new BadRequestError("Unidentified User");

    req.currentUser = {...payload, current_user_id: auth_user._id};
    req.session = {userJWT};
  } catch (error) {
    logger.error(error);
    return res.status(401).send({message: "Unidentified User"});
  }

  next();
};
