import {PALETTE} from "src/styles";
import {CheckCircle, Pending, X} from "src/svg";
import {OfferStatus, SvgProps} from "src/interfaces";

export const iconStatus: {
  [S in OfferStatus]: (props: SvgProps) => JSX.Element;
} = {
  accepted: CheckCircle,
  declined: X,
  rejected_in_trade: X,
  trade_succeed: CheckCircle,
  waiting: Pending,
};

export const iconStatusColor: {[S in OfferStatus]: string} = {
  accepted: PALETTE["PRIMARY"],
  declined: PALETTE["ERROR"],
  rejected_in_trade: PALETTE["ERROR"],
  trade_succeed: PALETTE["SECONDARY"],
  waiting: PALETTE["STAR"],
};
