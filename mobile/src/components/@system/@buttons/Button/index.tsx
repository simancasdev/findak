import {Fragment} from "react";
import {STYLES} from "./styles";
import {Touchable} from "../../Touchable";
import {Typography} from "src/components/@system";
import {selectLoaderState} from "src/redux/slices";
import {useAppSelector, useTheme} from "src/hooks";
import {FontWeight, JustifyContent, LoaderLayer} from "src/interfaces";
import {
  StyleProp,
  TextStyle,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps, LoaderLayer {
  label: string;
  icon?: JSX.Element;
  labelColor?: string;
  fontWeight?: FontWeight;
  justifyContent?: JustifyContent;
  variant?: "filled" | "text_only";
  labelStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  const {
    style,
    icon,
    label,
    loaderId,
    labelColor,
    labelStyle,
    loaderColor,
    disabled = false,
    fontWeight = "500",
    variant = "filled",
    justifyContent = "center",
  } = props;

  const {colors} = useTheme();
  const disableVariant = disabled ? "disabled" : "enabled";
  const {buttonLoaderIds} = useAppSelector(selectLoaderState);
  const loading = !!loaderId && buttonLoaderIds.includes(loaderId);

  return (
    <Touchable
      {...props}
      disabled={disabled || loading}
      style={[
        STYLES["button"],
        STYLES[`button_${variant}`],
        STYLES[disableVariant],
        {
          width: variant === "filled" ? "100%" : "auto",
          justifyContent,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor ?? colors["WHITE_BLACK"]} />
      ) : (
        <Fragment>
          {icon && icon}
          <Typography
            style={[
              STYLES["label"],
              {
                fontWeight,
                marginLeft: typeof icon === "undefined" ? 0 : 10,
                color: labelColor ?? colors["TEXT"],
              },
              STYLES[`label_${variant}`],
              STYLES[`label_${disableVariant}`],
              labelStyle,
            ]}
          >
            {label}
          </Typography>
        </Fragment>
      )}
    </Touchable>
  );
};
