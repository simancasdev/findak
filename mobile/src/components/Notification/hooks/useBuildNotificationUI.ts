import {useLang} from "src/hooks";
import {NotificationModel, UserModel} from "src/interfaces";

type NotificationUI = {
  icon: any;
  title: string;
  message: string;
  from: UserModel;
};

export const useBuildNotificationUI = (
  notification: NotificationModel
): NotificationUI => {
  const {t} = useLang();
  let title: string = "";
  let message: string = "";
  let icon: any = undefined;
  let from = {} as UserModel;

  const {trade, offer, feedback, to, type} = notification;

  if (feedback) from = feedback["from"];
  if (trade)
    from = trade["seller"]["id"] === to ? trade["buyer"] : trade["seller"];
  if (offer)
    from = offer["sender"]["id"] === to ? offer["receiver"] : offer["sender"];

  const userFullName = `${from["first_name"]} ${from["last_name"]}`;

  switch (type) {
    case "feedback_received":
      title = userFullName;
      message = `${t("sent_you_a_feedback")} "${feedback!["feedback"].slice(
        0,
        20
      )}..."`;
      icon = require("src/images/png/speaker.png");
      break;

    case "offer_accepted":
      title = userFullName;
      message = `${t("has_accepted_your_offer")} "${offer!["description"].slice(
        0,
        20
      )}..."`;
      break;

    case "offer_received":
      title = t("you_have_received_an_offer");
      message = `${from["first_name"]} ${t("has_sent_you_an_offer")} "${
        offer!["description"]
      }"`;
      break;

    case "offer_declined":
      title = userFullName;
      message = `${t("has_declined_your_offer")} "${offer!["description"]}"`;
      break;

    case "trade_approved":
      title = userFullName;
      message = `${t("has_approved_the_deal")} ✔`;
      break;

    case "trade_completed":
      title = t("trade_completed_successfully");
      message = t("congratulations_one_more_deal_completed");
      icon = require("src/images/png/high-five.png");
      break;

    case "trade_rejected":
      title = `${from["first_name"]} ${from["last_name"]}`;
      message = t("have_rejected_the_deal_that_was_in_progress");
      break;

    default:
      throw new Error(`Notification type: ${type} is not supported`);
  }

  return {from, message, title, icon};
};
