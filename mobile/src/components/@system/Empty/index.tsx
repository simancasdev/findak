import React from "react";
import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {Image} from "react-native";
import {EmptyManager} from "src/interfaces";
import {Column, Typography} from "../../@system";

interface EmptyProps {
  emptyUI?: EmptyManager;
  marginVertical?: number;
}

export const Empty: React.FC<EmptyProps> = ({emptyUI, marginVertical = 20}) => {
  const {t} = useLang();
  const iconIsJSXElement = React.isValidElement(emptyUI?.icon);

  return (
    <Column
      alignItems="center"
      style={STYLES["empty"]}
      marginVertical={marginVertical}
    >
      {typeof emptyUI !== "undefined" ? (
        <Column style={{width: "85%"}} gap={0} alignItems="center">
          {emptyUI["icon"] ? (
            iconIsJSXElement ? (
              emptyUI["icon"]
            ) : (
              <Image source={emptyUI["icon"] as any} style={STYLES["image"]} />
            )
          ) : null}
          {emptyUI["title"] && (
            <Typography marginTop={10} style={STYLES["title"]}>
              {emptyUI["title"]}
            </Typography>
          )}
          {emptyUI["helperText"] && (
            <Typography style={STYLES["helperText"]}>
              {emptyUI["helperText"]}
            </Typography>
          )}

          {emptyUI["body"]}
        </Column>
      ) : (
        <Typography>{t("theres_nothing_to_show")}</Typography>
      )}
    </Column>
  );
};
