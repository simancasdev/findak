import {View} from "react-native";
import {SearchFilter} from "./views";
import {SideMenuView} from "src/interfaces";

const views: {[V in SideMenuView]: JSX.Element} = {
  "search-filter": <SearchFilter />,
};

export const loadSideMenuView = (
  variant: SideMenuView | undefined
): JSX.Element => {
  if (typeof variant === "undefined") return <View />;
  return views[variant];
};
