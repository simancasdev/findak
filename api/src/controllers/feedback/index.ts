import {Response, Request} from "express";
import {FeedbackModel} from "../../models";
import {FeedbackService} from "../../services";
import {BaseController} from "../base.controller";
import {FeedbackAttrs, FeedbackDoc, IError} from "../../interfaces";

class FeedbackController extends BaseController<
  FeedbackAttrs,
  FeedbackDoc,
  FeedbackModel
> {
  constructor() {
    super("feedback", "/feedbacks", FeedbackService);

    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.get(
      "/of/:userId",
      async (req: Request, res: Response) => await this.getFeedbacks(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async create(req: Request, res: Response) {
    try {
      const feedback = await FeedbackService.create(req);
      return res.status(200).send(feedback);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getFeedbacks(req: Request, res: Response) {
    const {userId} = req.params;
    try {
      const feedbacks = await FeedbackService.getFeedbacks(userId);
      return res.status(200).send(feedbacks);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new FeedbackController();
export {controller as FeedbackController};
