// Search ~ query
export type SearchParams =
  | "categories"
  | "country_id"
  | "cities"
  | "createdAt"
  | "type"
  | "query"
  | "user_id";

export type SearchQuery = {[K in SearchParams]?: string};

// Offer ~ query
export type OfferParams =
  | "sender_id"
  | "receiver_id"
  | "search_id"
  | "statuses";

export type OfferQuery = {[K in OfferParams]?: string};

// User ~ query
export type UserParams = "country_id" | "categories" | "searchType";

export type UserQuery = {[K in UserParams]?: string};
