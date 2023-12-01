import {Menu} from "src/svg";
import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {multitaskIcon} from "./helper";
import {Avatar, Touchable} from "src/components/@system";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {
  toggleDrawer,
  selectAuthState,
  selectLayoutState,
  selectNavigatorState,
} from "src/redux/slices";

interface MultiTaskProps {}

export const MultiTask: React.FC<MultiTaskProps> = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuthState);
  const {drawerOpened} = useAppSelector(selectLayoutState);
  const {viewFromDrawerNavigation} = useAppSelector(selectNavigatorState);
  const MultiTaskIcon = viewFromDrawerNavigation
    ? multitaskIcon[viewFromDrawerNavigation] ?? Menu
    : Menu;

  return (
    <Touchable
      style={STYLES["multi_task"]}
      onPress={() => dispatch(toggleDrawer(!drawerOpened))}
    >
      <Avatar
        size={28}
        src={user["avatar_url"]}
        name={user["first_name"]}
        style={{
          borderWidth: viewFromDrawerNavigation ? 2 : 1.5,
          borderColor: viewFromDrawerNavigation
            ? PALETTE["PRIMARY"]
            : PALETTE["WHITE"],
        }}
      />
      {viewFromDrawerNavigation && (
        <View
          style={STYLES["view_indicator"]}
          children={
            <MultiTaskIcon
              size={12}
              color={PALETTE["WHITE"]}
              strokeWidth={2.5}
            />
          }
        />
      )}
    </Touchable>
  );
};
