import env from "./env";
import mongoose from "mongoose";
import {logger} from "../utils";

export const db = async (): Promise<void> => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.set("toJSON", {virtuals: true});
    await mongoose.connect(env["DATABASE"]["URL"]);

    logger.info("✅ Connected to database");
  } catch (error) {
    logger.fatal(error);
  }
};
