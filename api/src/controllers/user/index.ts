import {Pager} from "../../utils";
import {UserModel} from "../../models";
import {Request, Response} from "express";
import {UserService} from "../../services";
import {BaseController} from "../base.controller";
import {
  IError,
  UserDoc,
  UserAttrs,
  CheckUserAbilityPayload,
} from "../../interfaces";

class UserController extends BaseController<UserAttrs, UserDoc, UserModel> {
  constructor() {
    super("user", "/users", UserService);

    this.router.get(
      "/",
      async (req: Request, res: Response) => await this.getAll(req, res)
    );
    this.router.get(
      "/:id",
      async (req: Request, res: Response) => await this.getUser(req, res)
    );
    this.router.get(
      "/ability/checker",
      async (req: Request, res: Response) =>
        await this.userAbilityChecker(req, res)
    );
    this.router.put(
      "/:id",
      async (req: Request, res: Response) => await this.updateUser(req, res)
    );
    this.router.delete(
      "/:id",
      async (req: Request, res: Response) => await this.deleteUser(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll(req);
      return res.status(200).send(users);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getUser(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const user = await UserService.getUser(id);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async userAbilityChecker(req: Request, res: Response) {
    const {flow} = new Pager(req)["filter"];
    const {current_user_id} = req.currentUser;
    const checkUserAbility: CheckUserAbilityPayload = {
      user_id: current_user_id,
      flow,
    };
    try {
      const approvedMessage = await UserService.userAbilityChecker(
        checkUserAbility
      );
      return res.status(200).send(approvedMessage);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async updateUser(req: Request, res: Response) {
    try {
      const userUpdated = await UserService.updateUser(req);
      return res.status(200).send(userUpdated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async deleteUser(req: Request, res: Response) {
    try {
      const userDeleted = await UserService.deleteUser(req);
      return res.status(200).send(userDeleted);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new UserController();
export {controller as UserController};
