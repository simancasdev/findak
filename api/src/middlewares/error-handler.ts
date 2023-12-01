import {logger} from "../utils";
import {CustomError} from "../errors/custom-error";
import {Request, Response, NextFunction} from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({errors: err.serializeErrors()});
  }
  logger.error(err);

  res.status(500).send({
    errors: [{message: "Internal server error"}],
  });
};
