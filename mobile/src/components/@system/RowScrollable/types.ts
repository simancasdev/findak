import {FlexAlignType, Insets, StyleProp, TextStyle} from "react-native";
import {Children, JustifyContent, Margins, Style} from "src/interfaces";

type TopBar = {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  action?: {
    label: string;
    onPress: () => void;
  };
};

export interface RowScrollableProps
  extends Children<JSX.Element | any[]>,
    Style,
    Margins {
  gap?: number;
  topBar?: TopBar;
  rowHeight: number;
  fullWidth?: boolean;
  contentInset?: Insets;
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContent;
}
