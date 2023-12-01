import {STYLES} from "./styles";
import {View} from "react-native";
import {useTheme} from "src/hooks";
import {Style} from "src/interfaces";
import {WIDTH_SCREEN} from "src/utils";
import {
  Row,
  Button,
  Column,
  Touchable,
  Typography,
  ButtonProps,
} from "../../@system";

type BackProps = {
  label: string;
  icon?: JSX.Element;
  textColor?: string;
  helperText?: string;
  onPress?: () => void;
};

interface TopBarProps extends Style {
  back: BackProps;
  action?: ButtonProps & {label: string};
}

export const TopBar: React.FC<TopBarProps> = ({back, action, style}) => {
  const {colors} = useTheme();
  const {label, onPress, icon, helperText, textColor} = back;

  return (
    <View style={[STYLES["top_bar"], {backgroundColor: "transparent"}, style]}>
      <Row
        style={[STYLES["row"], {width: WIDTH_SCREEN / (icon ? 1.5 : 1.4)}]}
        gap={typeof icon !== "undefined" ? 10 : 0}
      >
        {icon && (
          <Touchable onPress={onPress} style={[STYLES["back_button"]]}>
            {icon}
          </Touchable>
        )}
        <Column gap={0}>
          <Typography
            style={[
              STYLES["label"],
              {color: textColor ?? colors["WHITE_BLACK"]},
            ]}
          >
            {label}
          </Typography>
          {helperText && (
            <Typography
              style={[
                STYLES["helperText"],
                {color: textColor ?? colors["WHITE_BLACK"]},
              ]}
            >
              {helperText}
            </Typography>
          )}
        </Column>
      </Row>
      {typeof action !== "undefined" && (
        <Button
          {...action}
          variant="text_only"
          disabled={action["disabled"] ?? false}
        />
      )}
    </View>
  );
};
