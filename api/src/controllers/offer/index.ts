import {OfferModel} from "../../models";
import {Response, Request} from "express";
import {OfferService} from "../../services";
import {BaseController} from "../base.controller";
import {IError, OfferAttrs, OfferDoc} from "../../interfaces";

class OfferController extends BaseController<OfferAttrs, OfferDoc, OfferModel> {
  constructor() {
    super("offer", "/offers", OfferService);

    this.router.get(
      "/",
      async (req: Request, res: Response) => await this.getAll(req, res)
    );
    this.router.get(
      "/:id",
      async (req: Request, res: Response) => await this.getOffer(req, res)
    );
    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.post(
      "/accept/:offer_id",
      async (req: Request, res: Response) => await this.accept(req, res)
    );
    this.router.post(
      "/decline/:offer_id",
      async (req: Request, res: Response) => await this.decline(req, res)
    );
    this.router.delete(
      "/:offer_id",
      async (req: Request, res: Response) => await this.deleteOffer(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async getAll(req: Request, res: Response) {
    try {
      const offers = await OfferService.getAll(req);
      return res.status(200).send(offers);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getOffer(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const offer = await OfferService.getOffer(id);
      return res.status(200).send(offer);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async create(req: Request, res: Response) {
    try {
      const offerCreated = await OfferService.create(req);
      return res.status(200).send(offerCreated);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async accept(req: Request, res: Response) {
    try {
      const offerAccepted = await OfferService.accept(req);
      return res.status(200).send(offerAccepted);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async decline(req: Request, res: Response) {
    try {
      const offerDeclined = await OfferService.decline(req);
      return res.status(200).send(offerDeclined);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async deleteOffer(req: Request, res: Response) {
    try {
      const offerDeleted = await OfferService.deleteOffer(req);
      return res.status(200).send(offerDeleted);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new OfferController();
export {controller as OfferController};
