import {styleOS} from "./styleOS";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const shadowStyle = {
  shadowColor: "#171717",
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: styleOS(0.2, 10),
  shadowRadius: 3,
  elevation: styleOS(0, 10),
};
