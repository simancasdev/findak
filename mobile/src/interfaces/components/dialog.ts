import {LoaderLayer} from "../button-loader";
import {StyleProp, TextStyle, ViewStyle} from "react-native";

export type DialogButtonType = "primary" | "secondary";

export type DialogUIProps = {
  showCloseButton: boolean;
};

export interface DialogButtonAction extends LoaderLayer {
  label: string;
  icon?: JSX.Element;
  onPress?: () => void;
  type?: DialogButtonType;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export type OpenDialogPayload = {
  view?: JSX.Element;
  actions: DialogButtonAction[];
  UIProps?: DialogUIProps;
};
