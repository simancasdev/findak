import {Fragment} from "react";
import {STYLES} from "./styles";
import {Typography, Touchable} from "../..";
import {useAppSelector, useTheme} from "src/hooks";
import {selectLoaderState} from "src/redux/slices";
import {DialogButtonAction, LoaderLayer} from "src/interfaces";
import {ActivityIndicator, TouchableOpacityProps} from "react-native";

export interface DialogButtonProps
  extends TouchableOpacityProps,
    Omit<DialogButtonAction, "onPress">,
    LoaderLayer {}

export const DialogButton: React.FC<DialogButtonProps> = ({...props}) => {
  const {
    icon,
    label,
    style,
    loaderId,
    labelStyle,
    loaderColor,
    type = "primary",
  } = props;

  const {colors} = useTheme();
  const {buttonLoaderIds} = useAppSelector(selectLoaderState);
  const loading = !!loaderId && buttonLoaderIds.includes(loaderId);

  return (
    <Touchable
      {...props}
      disabled={loading}
      style={[STYLES["button"], STYLES[`button_${type}`], style]}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor ?? colors["WHITE_BLACK"]} />
      ) : (
        <Fragment>
          {icon && icon}
          <Typography
            style={[
              STYLES["label"],
              STYLES[`label_${type}`],
              labelStyle,
              {marginLeft: icon ? 5 : undefined},
            ]}
          >
            {label}
          </Typography>
        </Fragment>
      )}
    </Touchable>
  );
};
