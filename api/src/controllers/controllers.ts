import {UserController} from "./user";
import {AuthController} from "./auth";
import {LikeController} from "./like";
import {CityController} from "./city";
import {OfferController} from "./offer";
import {TradeController} from "./trade";
import {SearchController} from "./search";
import {ReportController} from "./report";
import {PaymentController} from "./payment";
import {ProductController} from "./product";
import {MessageController} from "./message";
import {CountryController} from "./country";
import {FeedbackController} from "./feedback";
import {CategoryController} from "./category";
import {CollectionController} from "./collection";
import {SubscriptionController} from "./subscription";
import {NotificationController} from "./notification";
import {ConversationController} from "./conversation";
import {SearchCommentController} from "./search-comment";
import {VerificationCodeController} from "./verification-code";

export const controllers = [
  AuthController,
  CategoryController,
  CityController,
  CollectionController,
  ConversationController,
  CountryController,
  FeedbackController,
  LikeController,
  MessageController,
  NotificationController,
  OfferController,
  PaymentController,
  ProductController,
  ReportController,
  SearchCommentController,
  SearchController,
  SubscriptionController,
  TradeController,
  UserController,
  VerificationCodeController,
];
