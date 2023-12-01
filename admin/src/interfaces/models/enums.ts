export type PaymentType = "premium";

export type StarValue = 1 | 2 | 3 | 4 | 5;

export type PartnerType = "seller" | "buyer";

export type MessageType = "sent" | "received";

export type ConversationType = "trade" | "regular";

export type SearchType = "product" | "service" | "course";

export type ProductStatus = "new" | "used" | "new_or_used";

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

export type OfferStatus =
  | "waiting"
  | "declined"
  | "accepted"
  | "trade_succeed"
  | "rejected_in_trade";

export type SignUpStatus =
  | "set_alert"
  | "completed"
  | "initialized"
  | "set_location";
