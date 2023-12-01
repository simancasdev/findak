import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {FindakLogo} from "src/svg";
import {Row, Typography} from "..";
import {selectLoaderState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {ActivityIndicator, Image, View} from "react-native";

interface ScreenLoaderProps {}

export const ScreenLoader: React.FC<ScreenLoaderProps> = () => {
  const {t} = useLang();
  const {colors, theme} = useTheme();
  const {showScreenLoader, showOverlapAuthenticatingScreen} =
    useAppSelector(selectLoaderState);
  const {show, message} = showScreenLoader;

  return show ? (
    <View
      style={[
        STYLES["screen_loader"],
        {backgroundColor: colors["SCREEN_LOADER"]},
      ]}
    >
      <ActivityIndicator color={PALETTE["PRIMARY"]} size={"large"} />
      {message && (
        <Typography marginTop={5} fontSize={13}>
          {t(message)}
        </Typography>
      )}
    </View>
  ) : showOverlapAuthenticatingScreen ? (
    <View
      style={[
        STYLES["screen_loader"],
        {backgroundColor: colors["BACKGROUND_VIEW"]},
      ]}
    >
      <FindakLogo
        width={120}
        color={theme === "dark" ? PALETTE["WHITE"] : PALETTE["PRIMARY"]}
      />
      <Row style={STYLES["powered_by"]}>
        <Image
          style={STYLES["st_isotype"]}
          source={require("src/images/png/simancas-technology.png")}
        />
        <Typography style={STYLES["powered_by_st"]}>
          Powered by Simancas Technology
        </Typography>
      </Row>
    </View>
  ) : null;
};
