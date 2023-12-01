import {useAppTheme} from "../context";
import {THEME_PALETTE} from "../styles/theme";

export const useTheme = () => {
  const {theme} = useAppTheme();
  const colors = THEME_PALETTE[theme];
  return {colors, theme};
};
