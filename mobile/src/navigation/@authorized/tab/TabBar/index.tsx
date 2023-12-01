import {Fragment} from "react";
import {STYLES} from "./styles";
import {View} from "react-native";
import {useTheme} from "src/hooks";
import {getTabRoutes} from "./helper";
import {NavItemConfig, Tab} from "src/interfaces";
import {MultiTask, NavItem, SearchButton} from "./lib";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

interface TabBarProps {
  options: BottomTabBarProps;
}

export const TabBar: React.FC<TabBarProps> = ({options}: TabBarProps) => {
  const {state} = options;
  const {colors} = useTheme();
  const tabRoutes = getTabRoutes(state);

  return (
    <Fragment>
      <View
        style={[
          STYLES["tab_links"],
          {
            backgroundColor: colors["BACKGROUND_VIEW"],
            borderTopColor: colors["BORDER"],
          },
        ]}
      >
        {tabRoutes.map((route, key) => {
          const config: NavItemConfig = {
            name: route.name as Tab,
            tabIndex: key,
            isFocused: state.index === key,
          };

          return <NavItem config={config} key={key} />;
        })}
        <MultiTask />
      </View>
      <SearchButton />
    </Fragment>
  );
};
