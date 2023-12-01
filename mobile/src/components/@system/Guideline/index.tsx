import {styleOS} from "src/styles";
import {Typography, Row} from "../../@system";
import {StyleProp, TextStyle} from "react-native";
import {Children, Margins, Style} from "src/interfaces";

interface GuidelineProps extends Children<any>, Style, Margins {
  fontSize?: number;
  icon?: JSX.Element;
  labelStyle?: StyleProp<TextStyle>;
}

export const Guideline: React.FC<GuidelineProps> = ({
  icon,
  style,
  children,
  marginTop,
  labelStyle,
  marginBottom,
  marginVertical,
  fontSize = 12.5,
}) => {
  return (
    <Row
      gap={typeof icon === "undefined" ? 0 : 5}
      style={[{marginBottom, marginTop, marginVertical}, style]}
    >
      {icon && icon}
      <Typography
        style={labelStyle}
        fontSize={fontSize}
        fontWeight={styleOS("400")}
      >
        {children}
      </Typography>
    </Row>
  );
};
