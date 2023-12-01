import {Request} from "express";

export const getUserToken = (req: Request): string | undefined => {
  return req["headers"]["authorization"]?.split(" ")[1];
};
