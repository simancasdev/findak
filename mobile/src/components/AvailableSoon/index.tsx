import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {styleOS} from "src/styles";
import {Image} from "react-native";
import {Column, Typography} from "../@system";

interface AvailableSoonProps {}

export const AvailableSoon: React.FC<AvailableSoonProps> = () => {
  const {t} = useLang();
  return (
    <Column alignItems="center" style={STYLES["available_soon"]}>
      <Image
        style={{resizeMode: "contain"}}
        source={require("src/images/png/working.png")}
      />
      <Typography
        style={{textAlign: "center", fontWeight: styleOS("600"), fontSize: 16}}
      >
        {t("available_soon")}
      </Typography>
      <Typography style={{textAlign: "center"}}>
        {t("we_are_working_to_improve_your_experience")}
      </Typography>
      <Typography style={{textAlign: "center"}}>{t("findak_team")}</Typography>
    </Column>
  );
};
