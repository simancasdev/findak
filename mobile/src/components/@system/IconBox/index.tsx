import {STYLES} from "./styles";
import {Touchable, Typography} from "../";
import {LoaderLayer, Style} from "src/interfaces";
import {useButtonLoader, useTheme} from "src/hooks";
import {ActivityIndicator, View} from "react-native";

interface IconBoxProps extends Style, LoaderLayer {
  size?: number;
  icon: JSX.Element;
  disabled?: boolean;
  onPress?: () => void;
  borderRadius?: number;
  indicatorNumber?: number;
  backgroundColor?: string;
}

const MAX_INDICATOR_NUMBER = 99;

export const IconBox: React.FC<IconBoxProps> = ({
  icon,
  style,
  onPress,
  disabled,
  loaderId,
  size = 25,
  loaderColor,
  borderRadius = 5,
  backgroundColor,
  indicatorNumber,
}) => {
  const {colors} = useTheme();
  const isLoading = useButtonLoader(loaderId);
  const shortIndicator =
    indicatorNumber && indicatorNumber > MAX_INDICATOR_NUMBER;
  const isDisabled = disabled ?? typeof onPress === "undefined";

  return (
    <Touchable
      onPress={onPress}
      disabled={isDisabled || isLoading}
      style={[
        {
          width: size,
          height: size,
          borderRadius,
          backgroundColor: backgroundColor ?? colors["HOVER_LIGHT"],
        },
        STYLES["icon_box"],
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={loaderColor ?? colors["WHITE_BLACK"]} />
      ) : (
        icon
      )}
      {typeof indicatorNumber !== "undefined" && indicatorNumber !== 0 && (
        <View style={STYLES["indicator"]}>
          <Typography
            style={[
              STYLES["indicator_number"],
              {
                fontSize: shortIndicator ? 8.5 : 12,
              },
            ]}
          >
            {shortIndicator ? `+99` : indicatorNumber}
          </Typography>
        </View>
      )}
    </Touchable>
  );
};
