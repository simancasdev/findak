import {Request} from "express";
import {logger, PswManager} from "../../utils";
import {UserModel, UserSchema} from "../../models";
import {AbstractService, VerificationCodeService} from "..";
import {IError, UserAttrs, UserDoc} from "../../interfaces";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";

class AuthService extends AbstractService<UserAttrs, UserDoc, UserModel> {
  constructor() {
    super("User", UserSchema);
  }

  public async signUp(attrs: UserAttrs) {
    try {
      const {email} = attrs;
      let user = await this.getOne<UserDoc>({email});
      if (!user) {
        user = await this.save(attrs);
        logger.info("New user created: " + user.email);
      } else {
        throw new BadRequestError("You are already registered");
      }

      return user.toJSON();
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async login(email: string, password: string) {
    try {
      const existingUser = await this.model
        .findOne({email})
        .populate([
          {path: "city"},
          {path: "offers"},
          {path: "country"},
          {path: "searches"},
          {path: "subscription"},
          {path: "trades_as_buyer"},
          {path: "trades_as_seller"},
          {path: "preferences_alert_category"},
          {path: "feedbacks", populate: ["sender", "receiver"]},
        ]);
      if (!existingUser) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["INVALID_EMAIL_OR_PASSWORD"]
        );
      }

      const passwordMatch = await PswManager.compare(
        existingUser.password,
        password
      );
      if (!passwordMatch) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["INVALID_EMAIL_OR_PASSWORD"]
        );
      }

      return existingUser.toJSON();
    } catch (error) {
      throw new Error((error as IError).message);
    }
  }

  public async authenticate(req: Request) {
    try {
      const currentUser = req.currentUser;
      const {id} = currentUser;

      const userAuthorized = await this.model
        .findById(id)
        .populate([
          {path: "city"},
          {path: "offers"},
          {path: "country"},
          {path: "searches"},
          {path: "subscription"},
          {path: "trades_as_seller"},
          {path: "trades_as_buyer"},
          {path: "preferences_alert_category"},
          {path: "feedbacks", populate: ["sender", "receiver"]},
        ]);

      if (!userAuthorized) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["AUTHENTICATION_FAILED"]
        );
      }

      return userAuthorized?.toJSON();
    } catch (error) {
      throw new Error((error as IError).message);
    }
  }

  public async forgotPassword(email: string) {
    try {
      const user = await this.getOne<UserAttrs>({email});
      if (!user) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES["USER_NOT_FOUND_CHECK_YOUR_EMAIL"]
        );
      }
      const {phone_number} = user;
      await VerificationCodeService.sendSMS(phone_number, "recover_password");
      return user;
    } catch (error) {
      throw new Error((error as IError).message);
    }
  }

  public async resetPassword(password: string, email: string) {
    try {
      let user = await this.getOne<UserDoc>({email});
      if (user) {
        user.password = await PswManager.toHash(password);
        const userUpdated = await this.update(user?._id, user);
        return userUpdated;
      }
    } catch (error) {
      throw new Error((error as IError).message);
    }
  }
}

const service = new AuthService();
export {service as AuthService};
