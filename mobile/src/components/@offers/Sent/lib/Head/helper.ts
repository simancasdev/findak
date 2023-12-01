import {TValue} from "src/languages";
import {OfferStatus, SvgProps} from "src/interfaces";
import {CheckCircle, Hourglass, Stop, Trades} from "src/svg";

type UIStatus = {statusLabel: TValue; Icon: (svg: SvgProps) => JSX.Element};

export const getOfferStatus = (status: OfferStatus): UIStatus => {
  let UI: UIStatus = {statusLabel: "on_hold", Icon: Hourglass};

  switch (status) {
    case "accepted":
      UI.statusLabel = "your_offer_has_been_accepted";
      UI.Icon = CheckCircle;
      break;

    case "trade_succeed":
      UI.statusLabel = "deal_done";
      UI.Icon = Trades;
      break;

    case "rejected_in_trade":
    case "declined":
      UI.statusLabel = "your_offer_has_been_rejected";
      UI.Icon = Stop;
      break;
  }

  return UI;
};
