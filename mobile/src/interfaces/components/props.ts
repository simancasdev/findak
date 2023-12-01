import {StyleProp, ViewStyle} from "react-native";

export interface Children<T = JSX.Element | JSX.Element[]> {
  children: T;
}

export interface Style<T = ViewStyle> {
  style?: StyleProp<T>;
}

export interface Margins {
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginVertical?: number;
}
