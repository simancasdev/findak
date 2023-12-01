import {Fragment} from "react";
import {STYLES} from "./styles";
import {CloseDrawer} from "./lib";
import {Column} from "../../@system";
import {Animated} from "react-native";
import {ViewParam} from "src/interfaces";
import {Banner} from "src/components/@premium";
import {useOpenDrawer} from "./hooks/useOpenDrawer";
import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useTheme, useAppSelector, useAppDispatch} from "src/hooks";
import {
  toggleDrawer,
  selectAuthState,
  selectLayoutState,
} from "src/redux/slices";
import {
  Links,
  UserNav,
  Shortcuts,
  ToggleTheme,
} from "src/components/@drawer-menu";

interface DrawerProps {}

export const Drawer: React.FC<DrawerProps> = () => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {translateX} = useOpenDrawer();
  const {bottom, top} = useSafeAreaInsets();
  const {isLogged, isAuthUserPremium} = useAppSelector(selectAuthState);
  const {drawerOpened} = useAppSelector(selectLayoutState);
  const {navigate} = useNavigation<ViewParam<"BecomePremium">>();

  return isLogged ? (
    <Fragment>
      <Animated.ScrollView
        style={[
          STYLES["drawer"],
          {
            paddingTop: top,
            paddingBottom: bottom,
            transform: [{translateX}],
            backgroundColor: colors["BACKGROUND_VIEW"],
          },
        ]}
      >
        <Column gap={2}>
          <UserNav />
          {!isAuthUserPremium && (
            <Banner
              style={STYLES["banner_premium"]}
              onPress={() => {
                dispatch(toggleDrawer(false));
                navigate("BecomePremium");
              }}
            />
          )}
          <Column
            style={[
              STYLES["container"],
              {marginTop: isAuthUserPremium ? 0 : 10},
            ]}
          >
            <Shortcuts />
            <Links />
            <ToggleTheme />
          </Column>
        </Column>
      </Animated.ScrollView>
      {drawerOpened && <CloseDrawer />}
    </Fragment>
  ) : (
    <Fragment />
  );
};
