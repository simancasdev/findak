import {Fragment} from "react";
import {FlexAlignType, View} from "react-native";
import {Children, JustifyContent, Margins, Style} from "src/interfaces";

interface RowProps extends Children<JSX.Element | any[]>, Style, Margins {
  gap?: number;
  fullWidth?: boolean;
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContent;
}

export const Row: React.FC<RowProps> = ({
  style,
  children,
  gap = 5,
  marginTop,
  marginBottom,
  marginVertical,
  marginLeft,
  marginRight,
  fullWidth = false,
  alignItems = "center",
  justifyContent = "flex-start",
}) => {
  return (
    <View
      style={[
        {
          marginTop,
          marginLeft,
          alignItems,
          marginRight,
          marginBottom,
          marginVertical,
          justifyContent,
          flexDirection: "row",
          width: fullWidth ? "100%" : "auto",
        },
        style,
      ]}
    >
      {"length" in children
        ? children.map((child, key) => {
            return (
              <Fragment key={key}>
                {child}
                {children.length !== key + 1 && <View style={{width: gap}} />}
              </Fragment>
            );
          })
        : children}
    </View>
  );
};
