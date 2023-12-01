import {Fragment} from "react";
import {FlexAlignType, View} from "react-native";
import {Children, JustifyContent, Margins, Style} from "src/interfaces";

interface ColumnProps extends Children<JSX.Element | any[]>, Style, Margins {
  gap?: number;
  alignItems?: FlexAlignType;
  justifyContent?: JustifyContent;
}

export const Column: React.FC<ColumnProps> = ({
  style,
  children,
  gap = 5,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  justifyContent,
  marginVertical = 0,
  alignItems = "flex-start",
}) => {
  if (typeof children === "undefined") return <View />;

  return (
    <View
      style={[
        {
          marginTop,
          alignItems,
          marginLeft,
          marginRight,
          marginBottom,
          justifyContent,
          marginVertical,
          flexDirection: "column",
        },
        style,
      ]}
    >
      {"length" in children
        ? children.map((child, key) => {
            return (
              <Fragment key={key}>
                {child}
                {children.length !== key + 1 && (
                  <View style={{height: gap}}></View>
                )}
              </Fragment>
            );
          })
        : children}
    </View>
  );
};
