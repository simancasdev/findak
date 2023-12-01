import jwt from "jsonwebtoken";
import env from "../../configuration/env";
import {Request, Response} from "express";
import {AuthService} from "../../services";
import {UserModel} from "../../models/user";
import {BaseController} from "../base.controller";
import {IError, UserAttrs, UserDoc} from "../../interfaces";

class AuthController extends BaseController<UserAttrs, UserDoc, UserModel> {
  constructor() {
    super("User", "/auth", AuthService, false);

    this.router.post(
      "/sign-up",
      async (req: Request, res: Response) => await this.signUp(req, res)
    );
    this.router.post(
      "/login",
      async (req: Request, res: Response) => await this.login(req, res)
    );
    this.router.get(
      "/authenticate",
      async (req: Request, res: Response) => await this.authenticate(req, res)
    );
    this.router.post(
      "/forgot/password",
      async (req: Request, res: Response) => await this.forgotPassword(req, res)
    );
    this.router.post(
      "/reset/password",
      async (req: Request, res: Response) => await this.resetPassword(req, res)
    );
  }

  private async signUp(req: Request, res: Response) {
    try {
      const user = await AuthService.signUp(req.body as UserAttrs);
      const userJwt = jwt.sign(user, env.JWT_SECRET!);
      req.session = {
        userJwt: userJwt,
      };

      return res.status(201).send({...user, token: userJwt});
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async login(req: Request, res: Response) {
    try {
      const {email, password} = req.body;
      const user = await AuthService.login(email, password);
      const userJwt = jwt.sign(user, env.JWT_SECRET!);
      req.session = {userJwt};

      return res.status(200).send({...user, token: userJwt});
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async authenticate(req: Request, res: Response) {
    try {
      const user = await AuthService.authenticate(req);
      const userJwt = jwt.sign(user, env.JWT_SECRET!);
      return res.status(200).send({user, token: userJwt});
    } catch (error) {
      return res.status(401).send({message: "User not authorized"});
    }
  }

  private async forgotPassword(req: Request, res: Response) {
    const {email} = req.body;
    try {
      const user = await AuthService.forgotPassword(email);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async resetPassword(req: Request, res: Response) {
    const {password, email} = req.body;
    try {
      const userUpdated = await AuthService.resetPassword(password, email);
      return res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new AuthController();
export {controller as AuthController};
