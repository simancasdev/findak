import {Children, Style} from "src/interfaces";
import {Insets, StyleProp, ViewStyle} from "react-native";

export type ScreenRefreshControl = {
  refreshing: boolean;
  onRefresh: () => void;
  tintColor?: string;
  backgroundColor?: string;
};

export interface ScreenProps extends Children<any>, Style {
  title?: string;
  header?: JSX.Element;
  contentInset?: Insets;
  onScreenMounted?: () => void;
  onScreenUnMount?: () => void;
  headStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  refreshControl?: ScreenRefreshControl;
}
