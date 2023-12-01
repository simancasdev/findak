import {Schema} from "mongoose";
import {BadRequestError} from "../errors/bad-request-error";

export const isUserPartOfThis = <T>(
  user_id: T,
  alloweds: Schema.Types.ObjectId[],
  message?: string
): void => {
  const users_allowed: string[] = alloweds.map((user) => JSON.stringify(user));

  // validate if the current user is part of this trade as a buyer or seller
  if (!users_allowed.includes(JSON.stringify(user_id))) {
    throw new BadRequestError(
      message ?? "You are not authorized to do this action"
    );
  }
};
