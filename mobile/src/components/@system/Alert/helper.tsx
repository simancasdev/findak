import {View} from "react-native";
import {PALETTE} from "src/styles";
import {CheckCircle, X} from "src/svg";
import {AlertType, SvgProps} from "src/interfaces";

export const ALERT_ICON_SIZE = 16;

const icons: {[T in AlertType]: (svg: SvgProps) => JSX.Element} = {
  error: X,
  success: CheckCircle,
};

export const getDefaultIcon = (type: AlertType | undefined): JSX.Element => {
  if (typeof type === "undefined") return <View />;
  const Icon = icons[type];
  return <Icon size={ALERT_ICON_SIZE} color={PALETTE["WHITE"]} />;
};
