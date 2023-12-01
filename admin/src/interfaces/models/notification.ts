import {
  BaseModel,
  OfferModel,
  TradeModel,
  FeedbackModel,
  NotificationType,
} from ".";

export interface NotificationModel extends BaseModel {
  to: string;
  readed: boolean;
  type: NotificationType;
  offer?: OfferModel;
  trade?: TradeModel;
  feedback?: FeedbackModel;
}
