import {memo} from "react";
import {STYLES} from "./styles";
import {Moon, Sun} from "src/svg";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {useAppTheme} from "src/context";
import {Row, Typography} from "../../@system";
import ToggleSwitch from "toggle-switch-react-native";

interface ToggleThemeProps {}

export const ToggleTheme: React.FC<ToggleThemeProps> = memo(() => {
  const {t} = useLang();
  const {toggleTheme, theme} = useAppTheme();
  const isDarkMode = theme === "dark";

  return (
    <Row
      fullWidth
      justifyContent="space-between"
      style={STYLES["toggle_theme"]}
    >
      <Typography>{t("change_findak_Appearance")}</Typography>
      <ToggleSwitch
        size="large"
        circleColor={isDarkMode ? PALETTE["PRIMARY"] : PALETTE["WHITE"]}
        onColor="#24183A"
        offColor="#F1C228"
        isOn={isDarkMode}
        onToggle={() => toggleTheme(isDarkMode ? "light" : "dark")}
        icon={
          isDarkMode ? (
            <Moon color={PALETTE["WHITE"]} />
          ) : (
            <Sun color={PALETTE["PRIMARY"]} />
          )
        }
      />
    </Row>
  );
});
