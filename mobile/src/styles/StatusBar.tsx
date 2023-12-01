import {StatusBar as Bar} from "react-native";
import {useAppSelector, useTheme} from "../hooks";
import {selectLayoutState} from "../redux/slices";

interface StatusBarProps {}

export const StatusBar: React.FC<StatusBarProps> = () => {
  const {theme} = useTheme();
  const {statusBarColor} = useAppSelector(selectLayoutState);
  return (
    <Bar
      animated={true}
      barStyle={
        statusBarColor ?? theme === "dark" ? "light-content" : "dark-content"
      }
    />
  );
};
