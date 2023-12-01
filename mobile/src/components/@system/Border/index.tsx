import React from "react";
import {View} from "react-native";
import {useTheme} from "src/hooks";
import {Margins} from "src/interfaces";

export interface BorderProps extends Margins {
  show?: boolean;
}

export const Border: React.FC<BorderProps> = ({
  show = true,
  marginTop,
  marginBottom,
  marginVertical = 5,
}) => {
  const {colors} = useTheme();

  return show ? (
    <View
      style={{
        marginTop,
        height: 0.35,
        marginBottom,
        width: "100%",
        marginVertical,
        backgroundColor: colors["BORDER"],
      }}
    />
  ) : null;
};
