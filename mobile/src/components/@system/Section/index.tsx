import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {StyleProp, ViewStyle} from "react-native";
import {Column, Container, Row, Typography} from "..";
import {Children, Margins, Style} from "src/interfaces";

export interface SectionProps extends Children, Style, Margins {
  gap?: number;
  title?: string;
  icon?: JSX.Element;
  helperText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Section: React.FC<SectionProps> = ({
  icon,
  style,
  title,
  gap = 8,
  children,
  marginTop,
  helperText,
  marginBottom,
  containerStyle,
  marginVertical = 10,
}) => {
  return (
    <Column
      gap={gap}
      style={[
        {
          marginVertical,
          marginBottom,
          marginTop,
        },
        style,
      ]}
    >
      <Column gap={0}>
        {title && (
          <Row gap={icon ? 5 : 0}>
            {icon && icon}
            <Typography fontWeight={styleOS("500")}>{title}</Typography>
          </Row>
        )}
        {helperText && (
          <Typography fontSize={12} fontWeight={styleOS("400")}>
            {helperText}
          </Typography>
        )}
      </Column>
      <Container style={[STYLES["section"], containerStyle]}>
        {children}
      </Container>
    </Column>
  );
};
