import React from "react";
import {STYLES} from "./styles";
import {Image} from "react-native";
import {Column, Row, Typography} from "../../@system";

interface ConfirmProps {
  title: string;
  icon?: JSX.Element | NodeRequire;
}

export const Confirm: React.FC<ConfirmProps> = ({title, icon}) => {
  const iconIsJSXElement = React.isValidElement(icon);
  return (
    <Column gap={15} style={[STYLES["confirm"]]} alignItems="center">
      {icon && (
        <Row justifyContent="center" fullWidth>
          {iconIsJSXElement ? (
            icon
          ) : (
            <Image source={icon as any} style={STYLES["image"]} />
          )}
        </Row>
      )}
      <Typography style={STYLES["title"]}>{title}</Typography>
    </Column>
  );
};
