import React from "react";
import {Stop} from "src/svg";
import {STYLES} from "./styles";
import {View} from "react-native";
import {useLang} from "src/hooks";
import {ErrorManager} from "src/interfaces";
import {PALETTE, styleOS} from "src/styles";
import {Button, Column, Typography} from "../../@system";

interface ErrorProps extends ErrorManager {}

export const Error: React.FC<ErrorProps> = ({tryAgain}) => {
  const {t} = useLang();

  return (
    <View style={STYLES["error_container"]}>
      <Column alignItems="center">
        <Stop size={50} color={PALETTE["ERROR"]} />
        <Typography fontWeight={styleOS("500")} fontSize={18}>
          {t("something_went_wrong")}
        </Typography>
      </Column>
      <Button
        onPress={tryAgain}
        variant="text_only"
        label={t("try_again")}
        labelStyle={{fontSize: 15}}
      />
    </View>
  );
};
