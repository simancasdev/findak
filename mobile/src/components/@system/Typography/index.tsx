import {useTheme} from "src/hooks";
import {FontWeight, Margins} from "src/interfaces";
import {Platform, Text, TextProps} from "react-native";

type FontFamily =
  | "BebasNeue"
  | "BebasNeue-Regular"
  | "Poppins"
  | "Poppins-Regular";

interface TypographyProps extends TextProps, Margins {
  fontSize?: number;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
}

export const Typography: React.FC<TypographyProps> = ({children, ...props}) => {
  const {colors} = useTheme();

  let {
    style,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    fontSize = 14,
    marginVertical,
    fontWeight = "normal",
    fontFamily = "Poppins",
  } = props;

  if (Platform.OS === "android") {
    switch (fontFamily) {
      case "Poppins":
        fontFamily = "Poppins-Regular";
        break;
      case "BebasNeue":
        fontFamily = "BebasNeue-Regular";
        break;
    }
  }

  return (
    <Text
      {...props}
      style={[
        {
          marginRight,
          marginLeft,
          fontFamily,
          fontSize,
          fontWeight,
          marginBottom,
          marginTop,
          marginVertical,
          color: colors["TEXT"],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
