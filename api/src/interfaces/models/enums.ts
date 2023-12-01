export type PaymentType = "premium";

export type Stars = 1 | 2 | 3 | 4 | 5;

export type SearchType = "product" | "service" | "course";

export type CodeType = "registration" | "recover_password";

export type ProductStatus = "new" | "used" | "new_or_used";

export type ConversationType = "trade" | "regular" | "product";

export type SearchStatus = "created" | "cancelled" | "finished";

export type TradeStatus = "in_progress" | "completed" | "rejected";

export type UserLevel = "new" | "beginner" | "experienced" | "professional";

export type NotificationType =
  | "offer_accepted"
  | "offer_received"
  | "offer_declined"
  | "trade_rejected"
  | "trade_approved"
  | "trade_completed"
  | "feedback_received";

export type SignUpStatus =
  | "set_alert"
  | "completed"
  | "complete_profile"
  | "set_location"
  | "otp_verification";

export type OfferStatus =
  | "waiting"
  | "declined"
  | "accepted"
  | "trade_succeed"
  | "rejected_in_trade";
