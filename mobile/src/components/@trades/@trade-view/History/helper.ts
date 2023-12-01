import {t} from "i18next";
import moment from "moment";
import {compareIds} from "src/utils";
import {TradeModel, UserModel} from "src/interfaces";

export const getHistoryMessages = (trade: TradeModel, authUserId: string) => {
  const {approved_by_buyer_at, approved_by_seller_at, buyer, seller} = trade;

  const rejectedByUser: UserModel = compareIds([seller["id"], authUserId])
    ? seller
    : buyer;

  const buyerBoughtMessage =
    approved_by_buyer_at &&
    `${buyer["first_name"]} ${t("has_approved_the_transaction")} — ${moment(
      approved_by_buyer_at
    ).fromNow()}`;

  const sellerBoughtMessage =
    approved_by_seller_at &&
    `${seller["first_name"]} ${t("has_approved_the_transaction")} — ${moment(
      approved_by_seller_at
    ).fromNow()}`;

  const rejectedByUserMessage = `${t("deal_rejected_by")} ${
    rejectedByUser["first_name"]
  }`;

  return {
    buyerBoughtMessage,
    sellerBoughtMessage,
    rejectedByUserMessage,
  };
};
