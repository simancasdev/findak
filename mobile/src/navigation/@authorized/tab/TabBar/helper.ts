import {RootStackParamList} from "src/interfaces";
import {ParamListBase, TabNavigationState} from "@react-navigation/native";

const ROUTE_ON_TAB_ONLY: (keyof RootStackParamList)[] = [
  "Home",
  "Explore",
  "Inbox",
];

export const getTabRoutes = (
  state: TabNavigationState<ParamListBase>
): TabNavigationState<ParamListBase>["routes"] => {
  return state.routes.filter((route) =>
    ROUTE_ON_TAB_ONLY.includes(route.name as keyof RootStackParamList)
  );
};
