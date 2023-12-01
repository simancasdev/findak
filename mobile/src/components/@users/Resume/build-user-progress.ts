import {getCompletedTrades, getEffectiveness} from "src/utils";
import {
  UserModel,
  OfferModel,
  OfferStatus,
  SearchModel,
  SearchStatus,
  ProgressBoxValue,
} from "src/interfaces";

export type UserData = Pick<UserModel, "offers" | "searches" | "trades">;

export const buildUserProgress = ({
  offers,
  trades,
  searches,
}: UserData): ProgressBoxValue[] => {
  const completedTrades = getCompletedTrades(trades);
  // prettier-ignore
  const searchEffectiveness = getEffectiveness<SearchModel, SearchStatus>(searches, "status", "finished");
  // prettier-ignore
  const offerEffectiveness = getEffectiveness<OfferModel, OfferStatus>(offers, "status", "trade_succeed");

  return [
    {
      useCircularProgress: true,
      value: searchEffectiveness,
      title: "search_efficiency",
      helperText: "completed_searches",
      valueLabel: `${searchEffectiveness}%`,
    },
    {
      value: offerEffectiveness,
      useCircularProgress: true,
      title: "bid_efficiency",
      valueLabel: `${offerEffectiveness}%`,
      helperText: "index_of_completed_offers",
    },
    // {
    //   value: searches.length,
    //   title: "searches_performed",
    // },
    // {
    //   value: offers.length,
    //   title: "sent_title",
    // },
    // {
    //   value: completedTrades,
    //   title: "completed_deals",
    // },
  ];
};
