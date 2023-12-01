import {StyleProp, ViewStyle} from "react-native";
import {SearchModel, Style} from "src/interfaces";

export interface Context extends SearchPreviewProps {}

export interface SearchPreviewProps extends Style {
  search: SearchModel;
  avatarRedirection?: boolean;
  bodyStyle?: StyleProp<ViewStyle>;
  descriptionNumeberOfLines?: number;
  onPress?: (searchId: string) => void;
}
