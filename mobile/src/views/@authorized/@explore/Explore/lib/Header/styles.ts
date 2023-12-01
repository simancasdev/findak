import {StyleSheet} from "react-native";
import {PALETTE, styleOS} from "src/styles";

export const STYLES = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
  },
  meet_people: {
    padding: 10,
    backgroundColor: PALETTE["PRIMARY"],
    width: "100%",
    borderRadius: 5,
    shadowColor: PALETTE["BLACK"],
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  meet_people_title: {
    fontSize: 16,
    color: PALETTE["WHITE"],
    fontWeight: styleOS("600"),
  },
  meet_people_helper: {
    fontSize: 12,
    color: PALETTE["WHITE"],
  },
  meet_people_image: {
    width: 50,
    height: 50,
  },
});
