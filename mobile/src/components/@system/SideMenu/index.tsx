import {X} from "src/svg";
import {Fragment} from "react";
import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {Animated} from "react-native";
import {useShowSideMenu} from "./hooks";
import {loadSideMenuView} from "./load-side-menu-views";
import {IconBox, Row, Touchable, Typography} from "../../@system";
import {closeSideMenu, selectSideMenuState} from "src/redux/slices";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";

interface SideMenuProps {}

export const SideMenu: React.FC<SideMenuProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {translateX} = useShowSideMenu();
  const {show, view} = useAppSelector(selectSideMenuState);

  return (
    <Fragment>
      {show && (
        <Touchable
          onPress={() => dispatch(closeSideMenu())}
          style={STYLES["side_menu"]}
        />
      )}
      <Animated.View
        style={[
          STYLES["side_container"],
          {backgroundColor: colors["BACKGROUND_VIEW"]},
          {transform: [{translateX}]},
        ]}
      >
        <Row marginBottom={5}>
          <IconBox
            size={30}
            icon={<X color={colors["WHITE_BLACK"]} />}
            onPress={() => dispatch(closeSideMenu())}
          />
          <Typography fontWeight={styleOS("500")} fontSize={18}>
            {t("filter_searches")}
          </Typography>
        </Row>
        {loadSideMenuView(view)}
      </Animated.View>
    </Fragment>
  );
};
