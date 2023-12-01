import {Pager} from "../utils";
import {BaseModel} from "../models";
import {AbstractService} from "../services";
import {authorizedUser} from "../middlewares";
import {BaseAttrs, BaseDoc} from "../interfaces";
import express, {Request, Response} from "express";

export abstract class BaseController<
  A extends BaseAttrs,
  D extends BaseDoc,
  M extends BaseModel<A, D>
> {
  public router = express.Router();
  constructor(
    public name: string,
    public uri: string,
    protected service: AbstractService<A, D, M>,
    authenticated: boolean = true
  ) {
    if (authenticated) {
      this.router.use(authorizedUser);
    }
  }

  protected initializeBaseRoutes() {
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.save(req, res)
    );
    this.router.get(
      "/:id",
      async (req: Request, res: Response) => await this.getById(req, res)
    );
    this.router.get(
      "",
      async (req: Request, res: Response) => await this.list(req, res)
    );
    this.router.put(
      "/:id",
      async (req: Request, res: Response) => await this.update(req, res)
    );
    this.router.delete(
      "/:id",
      async (req: Request, res: Response) => await this.delete(req, res)
    );
  }

  public async save(req: Request, res: Response) {
    const body = req.body as A;
    const result = await this.service.save(body);
    return res.status(201).send(result);
  }

  public async getById(req: Request, res: Response) {
    const {id} = req.params;
    const result = await this.service.getById(id);
    return res.status(200).send(result);
  }

  public async list(req: Request, res: Response) {
    const pager = new Pager(req);
    const records = await this.service.list(pager);
    return res.status(200).send(records);
  }

  public async update(req: Request, res: Response) {
    const {id} = req.params;

    try {
      const body = req.body as A;
      const updated = await this.service.update(id, body);
      return res.status(200).send(updated);
    } catch (error) {
      return res.status(400).send({message: error});
    }
  }

  public async delete(req: Request, res: Response) {
    const {id} = req.params;
    try {
      const deleted = await this.service.deleteOne(id);
      return res.status(200).send(deleted);
    } catch (error) {
      return res.status(400).send({message: error});
    }
  }
}
