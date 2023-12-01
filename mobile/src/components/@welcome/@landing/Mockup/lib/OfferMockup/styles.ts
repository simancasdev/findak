import {WIDTH_SCREEN} from "src/utils";
import {StyleSheet} from "react-native";
import {PALETTE, shadowStyle} from "src/styles";

export const STYLES = StyleSheet.create({
  offer_mockup: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  body: {
    backgroundColor: PALETTE["PRIMARY"],
    padding: 5,
    borderRadius: 5,
    maxWidth: WIDTH_SCREEN / 1.5,
    ...shadowStyle,
  },
  offer_text: {
    fontSize: 13,
    color: PALETTE["WHITE"],
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 100,
    resizeMode: "contain",
  },
});
