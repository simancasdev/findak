import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  card: {
    width: 250,
  },
  card_head: {
    width: "100%",
    height: 170,
    position: "relative",
    overflow: "hidden",
    borderRadius: 5,
  },
  card_imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badge_off: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: PALETTE["PRIMARY"],
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  off_label: {
    color: PALETTE["WHITE"],
    fontSize: 12,
    fontWeight: styleOS("600"),
  },
  card_body: {
    marginTop: 10,
  },
  body_label: {
    fontSize: 15,
    fontWeight: styleOS("600"),
  },
  card_description: {
    color: PALETTE["GREY"],
    fontWeight: styleOS("500"),
    marginTop: 5,
  },
});
