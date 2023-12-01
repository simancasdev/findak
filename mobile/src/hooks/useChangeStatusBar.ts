import {PALETTE} from "../styles";
import {StatusBarStyle} from "react-native";
import {
  useAppDispatch,
  useEffectWhenLeave,
  useEffectWhenIsFocused,
  useTheme,
} from ".";
import {
  setEdgesColor,
  setStatusBarColor,
  resetLayoutColors,
} from "../redux/slices";

type ChangeStatusBarProps = {
  topEdgeColor: string;
  bottomEdgeColor: string;
  statusBar?: StatusBarStyle;
};

export const useChangeStatusBar = (
  props: ChangeStatusBarProps = {
    statusBar: "light-content",
    topEdgeColor: PALETTE["PRIMARY"],
    bottomEdgeColor: PALETTE["TRANSPARENT"],
  }
): void => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {
    statusBar,
    topEdgeColor,
    bottomEdgeColor = colors["BACKGROUND_VIEW"],
  } = props;

  useEffectWhenIsFocused(() => {
    dispatch(setStatusBarColor(statusBar ?? "light-content"));
    dispatch(
      setEdgesColor({topColor: topEdgeColor, bottomColor: bottomEdgeColor})
    );
  }, []);

  useEffectWhenLeave(() => {
    dispatch(resetLayoutColors());
  }, []);
};
