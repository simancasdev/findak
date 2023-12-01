import {Request} from "express";
import {BadRequestError} from "../../errors";
import {AbstractService, NotificationService} from "..";
import {FeedbackModel, FeedbackSchema} from "../../models";
import {FeedbackAttrs, FeedbackDoc, IError} from "../../interfaces";

class FeedbackService extends AbstractService<
  FeedbackAttrs,
  FeedbackDoc,
  FeedbackModel
> {
  constructor() {
    super("Feedback", FeedbackSchema);
  }

  public async create(req: Request): Promise<FeedbackAttrs> {
    try {
      const {current_user_id} = req.currentUser;
      const newFeedback: FeedbackAttrs = {
        ...req.body,
        from: current_user_id,
      };
      const feedback = await this.save(newFeedback);

      // create notification
      await NotificationService.create({
        feedback_id: feedback._id,
        type: "feedback_received",
        to: feedback.to,
      });

      return feedback;
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async getFeedbacks(userId: string) {
    try {
      return await this.model.find({to: userId}).populate([{path: "sender"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new FeedbackService();
export {service as FeedbackService};
