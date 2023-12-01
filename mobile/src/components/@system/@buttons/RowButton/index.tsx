import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {styleOS} from "src/styles";
import {Style} from "src/interfaces";
import {iconBoxColors} from "./helper";
import {Touchable} from "../../Touchable";
import {StyleProp, TextStyle} from "react-native";
import {Row, Typography, Column, IconBox} from "src/components/@system";

export interface RowButtonProps extends Style {
  label: string;
  helperText?: string;
  icon?: JSX.Element;
  labelColor?: string;
  onPress: () => void;
  iconBoxSize?: number;
  iconBoxColor?: string;
  rightIcon?: JSX.Element;
  backgroundColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  helperTextStyle?: StyleProp<TextStyle>;
}

export const RowButton: React.FC<RowButtonProps> = ({
  icon,
  style,
  label,
  onPress,
  rightIcon,
  helperText,
  labelColor,
  labelStyle,
  iconBoxSize,
  iconBoxColor,
  backgroundColor,
  helperTextStyle,
}) => {
  const {colors} = useTheme();

  return (
    <Touchable
      onPress={onPress}
      style={[
        STYLES["row_button"],
        {backgroundColor: backgroundColor ?? colors["HOVER_LIGHT"]},
        style,
      ]}
    >
      <Row fullWidth justifyContent="space-between">
        <Row style={{maxWidth: "90%"}} gap={0}>
          {icon && (
            <IconBox
              icon={icon}
              size={iconBoxSize}
              backgroundColor={
                iconBoxColor ??
                iconBoxColors[Math.floor(Math.random() * iconBoxColors.length)]
              }
            />
          )}
          <Column
            gap={typeof helperText === "undefined" ? 0 : 2}
            alignItems="flex-start"
            style={{marginLeft: 10, flexShrink: 1}}
          >
            <Typography
              fontWeight={styleOS("500")}
              style={[
                {
                  color: labelColor ?? colors["WHITE_BLACK"],
                },
                labelStyle,
              ]}
            >
              {label}
            </Typography>
            {helperText && (
              <Typography
                style={[
                  {
                    fontSize: 12,
                    color: labelColor ?? colors["WHITE_BLACK"],
                    fontWeight: styleOS("400"),
                  },
                  helperTextStyle,
                ]}
              >
                {helperText}
              </Typography>
            )}
          </Column>
        </Row>
        {rightIcon && rightIcon}
      </Row>
    </Touchable>
  );
};
