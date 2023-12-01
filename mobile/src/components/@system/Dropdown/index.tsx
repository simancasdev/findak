import {Down, Up} from "./svg";
import {useState} from "react";
import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {Keyboard} from "react-native";
import {Margins, Style} from "src/interfaces";
import {Typography, Touchable, Row} from "../../@system";

interface DropdownProps extends Style, Margins {
  label: string;
  icon?: JSX.Element;

  onPress: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  icon,
  label,
  style,
  onPress,
  marginTop,
  marginBottom,
  marginVertical,
}) => {
  const {colors} = useTheme();
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Touchable
      style={[
        STYLES["dropdown"],
        {
          marginTop,
          marginBottom,
          marginVertical,
          borderWidth: 0.5,
          borderColor: colors["BORDER"],
          backgroundColor: colors["BACKGROUND_INPUT"],
        },
        style,
      ]}
      onPress={() => {
        Keyboard.dismiss();
        setPressed(!pressed);
        onPress();
      }}
    >
      <Row
        justifyContent="space-between"
        style={{width: "100%", paddingRight: 10}}
      >
        <Row>
          {icon && icon}
          <Typography style={[STYLES["label"]]}>{label}</Typography>
        </Row>

        {pressed ? (
          <Up color={colors["BORDER"]} />
        ) : (
          <Down color={colors["BORDER"]} />
        )}
      </Row>
    </Touchable>
  );
};
