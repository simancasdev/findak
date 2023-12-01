import {SubscriptionModel} from "src/interfaces";

export const isPremium = (
  subscription: SubscriptionModel | null | undefined
): boolean => {
  if (!subscription) return false;
  return !subscription.expired;
};
