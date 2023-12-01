import {Platform} from "react-native";

export const styleOS = <T>(iosStyle?: T, androidStyle?: T) => {
  return Platform.OS === "ios" ? iosStyle : androidStyle;
};
