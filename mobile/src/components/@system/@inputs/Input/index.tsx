import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {styleOS} from "src/styles";
import {Typography, Column} from "src/components/@system";
import {StyleProp, TextInput, TextInputProps, ViewStyle} from "react-native";

export interface InputProps extends TextInputProps {
  headText?: string;
  helperText?: string;
  placeholderTextColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    style,
    headText,
    helperText,
    containerStyle,
    editable = true,
    placeholderTextColor,
    keyboardType = "default",
  } = props;
  const {colors, theme} = useTheme();

  return (
    <Column style={[{width: "100%"}, containerStyle]}>
      {headText && (
        <Typography fontWeight={styleOS("500")} fontSize={12} marginBottom={2}>
          {headText}
        </Typography>
      )}
      <TextInput
        {...props}
        keyboardAppearance={theme}
        keyboardType={keyboardType}
        placeholderTextColor={
          placeholderTextColor ?? colors["INPUT_PLACEHOLDER"]
        }
        style={[
          STYLES["input"],
          {
            borderWidth: 0.5,
            borderColor: colors["BORDER"],
            backgroundColor: colors["BACKGROUND_INPUT"],
            color: editable
              ? colors["WHITE_BLACK"]
              : colors["TEXT_INPUT_DISABLE"],
          },
          style,
        ]}
      />
      {helperText && (
        <Typography fontWeight={styleOS("400")} fontSize={12} marginTop={2}>
          {helperText}
        </Typography>
      )}
    </Column>
  );
};
