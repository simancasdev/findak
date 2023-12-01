import {OfferQuery, OfferParams} from "../../interfaces";

export const buildOfferQuery = ({
  search_id,
  sender_id,
  receiver_id,
  statuses,
}: {
  [K in OfferParams]: string;
}): OfferQuery => {
  const query: OfferQuery = {};

  if (search_id) Object.assign(query, {search_id});
  if (sender_id) Object.assign(query, {sender_id});
  if (receiver_id) Object.assign(query, {receiver_id});
  if (statuses) Object.assign(query, {city_id: {$in: statuses.split(",")}});

  return query;
};
