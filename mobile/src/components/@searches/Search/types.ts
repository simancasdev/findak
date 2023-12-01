import {StyleProp, ViewStyle} from "react-native";
import {SearchModel, Style} from "src/interfaces";

export interface Context extends SearchProps {}

export interface SearchProps extends Style {
  search: SearchModel;
  showActions?: boolean;
  showComments?: boolean;
  avatarRedirection?: boolean;
  allowShowMoreBehavior?: boolean;
  footerStyle?: StyleProp<ViewStyle>;
  onPress?: (searchId: string) => void;
}
