import {PALETTE} from "src/styles";
import {StyleSheet} from "react-native";

export const STYLES = StyleSheet.create({
  avatar: {
    borderRadius: 100,
  },
  image: {
    borderRadius: 100,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    backgroundColor: PALETTE["PRIMARY"],
  },
});
