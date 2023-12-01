import {TradeModel} from "src/interfaces";

type OrganizerPayload = {
  inProgress: TradeModel[];
  completed: TradeModel[];
  rejected: TradeModel[];
};

export const tradeOrganizer = (list: TradeModel[] = []): OrganizerPayload => {
  const inProgress: TradeModel[] = [];
  const completed: TradeModel[] = [];
  const rejected: TradeModel[] = [];

  list.forEach((trade) => {
    const {status} = trade;
    switch (status) {
      case "in_progress":
        inProgress.push(trade);
        break;
      case "completed":
        completed.push(trade);
        break;
      case "rejected":
        rejected.push(trade);
        break;
    }
  });

  return {inProgress, completed, rejected};
};
