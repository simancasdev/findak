import {Schema} from "mongoose";
import {PswManager} from "../../utils";

export const SET_PRE_USER = (schema: Schema): void => {
  schema.pre("save", async function (done) {
    if (this.isModified("password")) {
      const hashed = await PswManager.toHash(this.get("password"));
      this.set("password", hashed);
    }
    done();
  });
};
