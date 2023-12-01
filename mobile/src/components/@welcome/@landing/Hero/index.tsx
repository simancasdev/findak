import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {Image} from "react-native";
import {Column, Typography} from "src/components/@system";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const {t} = useLang();
  return (
    <Column marginVertical={20} alignItems="center">
      <Image
        style={STYLES["image"]}
        source={require("src/images/png/earth.png")}
      />
    </Column>
  );
};
