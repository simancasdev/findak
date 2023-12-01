import {useCallback} from "react";
import {useNavigation} from "@react-navigation/native";
import {NotificationModel, ViewParam} from "src/interfaces";

export const useNotificationAction = (): {
  onPress: (notification: NotificationModel) => void;
} => {
  const {navigate} = useNavigation<ViewParam<"Offer" | "Trade">>();
  const onPress = useCallback((notification: NotificationModel) => {
    const {trade, offer, feedback, type} = notification;
    switch (type) {
      case "feedback_received":
        break;
      case "offer_accepted":
      case "offer_declined":
      case "offer_received":
        navigate("Offer", {offerId: offer!["id"]});
        break;
      case "trade_approved":
      case "trade_completed":
      case "trade_rejected":
        navigate("Trade", {tradeId: trade!["id"]});
        break;

      default:
        throw new Error(`Notification type: ${type} not handled`);
    }
  }, []);

  return {onPress};
};
